/**
 * Script para migrar posts de WordPress com githuber-md para Docusaurus
 * incluindo metadados do Yoast SEO
 *
 * Uso: node wp-to-docusaurus-api.js --category=nome_da_categoria --url=https://seu-wordpress.com
 */
const { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } = require('node-html-markdown');
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const {parseArgs} = require('util');
const slugify = require('slugify');
const readline = require('readline');
const nhm = new NodeHtmlMarkdown({
    useInlineLinks: false,
    useLinkReferenceDefinitions: true,
    textReplace: [
        [/(?<!\\){/g, "\\{"],
        [/(?<!\\)}/g, "\\}"]
    ]
});

// Configurações
const config = {
    // Caminho de saída para os arquivos do Docusaurus
    outputPath: './docs/prefeituras',
    // Pasta para os arquivos de mídia dentro da estrutura Docusaurus
    mediaFolder: '../../static/static/docs',
    // Prefixo para URLs de mídia no Docusaurus
    mediaUrlPrefix: '/static/docs/',
    // Número de posts a serem obtidos por página (máximo é geralmente 100)
    postsPerPage: 10,
    // Data e hora atuais para registro
    currentDateTime: '2025-08-18 03:18:51',
    // Usuário atual para registro
    currentUser: 'andrekutianski'
};

// Analisar argumentos da linha de comando
const {values} = parseArgs({
    options: {
        category: {
            type: 'string',
            short: 'c',
        },
        url: {
            type: 'string',
            short: 'u',
            default: 'https://nfe.io/docs'
        }
    }
});

const targetCategory = values.category;
const wpUrl = values.url ? values.url.replace(/\/$/, '') : 'https://nfe.io/docs';

if (!targetCategory) {
    console.error('Erro: É necessário especificar uma categoria.');
    console.error('Uso: node wp-to-docusaurus-api.js --category=nome_da_categoria --url=https://seu-wordpress.com');
    process.exit(1);
}

// Criar interface para leitura de input do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Solicitar credenciais ao usuário
 */
function promptCredentials() {
    return new Promise((resolve) => {
        rl.question('Nome de usuário WordPress: ', (username) => {
            rl.question('Senha: ', (password) => {
                resolve({username, password});
                rl.close();
            });
        });
    });
}

/**
 * Autenticar com a API WordPress e obter token
 */
async function authenticate(username, password) {
    try {
        // Tentar primeiro com JWT Auth (plugin comum para WordPress)
        try {
            const response = await axios.post(`${wpUrl}/wp-json/jwt-auth/v1/token`, {
                username,
                password
            });
            return response.data.token;
        } catch (jwtError) {
            // Se o endpoint JWT falhar, tentar autenticação básica
            console.log('JWT Auth falhou ou não está disponível. Usando autenticação básica...');
            return `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
        }
    } catch (error) {
        console.error('Falha na autenticação:', error.message);
        throw new Error('Não foi possível autenticar. Verifique suas credenciais.');
    }
}

/**
 * Configurar cliente axios com autenticação
 */
function setupApiClient() {
    // const isJWT = !auth.startsWith('Basic');

    return axios.create({
        baseURL: `${wpUrl}/wp-json/wp/v2`,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': isJWT ? `Bearer ${auth}` : auth
        }
    });
}

/**
 * Obter categoria pelo nome ou slug
 */
async function getCategoryByName(api, categoryName) {
    try {
        // Tentar primeiro pelo nome exato
        const response = await api.get('/categories', {
            params: {
                search: categoryName,
                per_page: 10
            }
        });

        if (response.data.length === 0) {
            throw new Error(`Categoria '${categoryName}' não encontrada.`);
        }

        // Encontrar a categoria que corresponde exatamente
        const category = response.data.find(cat =>
            cat.name.toLowerCase() === categoryName.toLowerCase() ||
            cat.slug.toLowerCase() === slugify(categoryName, {lower: true})
        );

        if (!category) {
            throw new Error(`Categoria exata '${categoryName}' não encontrada.`);
        }

        return category;

    } catch (error) {
        console.error('Erro ao obter categoria:', error.message);
        throw error;
    }
}

/**
 * Obter posts de uma categoria específica
 */
async function getPostsByCategory(api, categoryId) {
    try {
        let page = 1;
        let allPosts = [];
        let hasMorePosts = true;

        while (hasMorePosts) {
            console.log(`Obtendo página ${page} de posts...`);
            const response = await api.get('/posts', {
                params: {
                    categories: categoryId,
                    per_page: config.postsPerPage,
                    page: page,
                    status: 'publish',
                    _embed: 'wp:featuredmedia', // Incluir mídia destacada
                    // context: 'edit' // Importante para obter campos adicionais
                }
            });

            const posts = response.data;

            if (posts.length === 0) {
                hasMorePosts = false;
            } else {
                allPosts = allPosts.concat(posts);
                page++;

                // Verificar se há mais páginas pelo cabeçalho X-WP-TotalPages
                const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1');
                if (page > totalPages) {
                    hasMorePosts = false;
                }
            }
        }

        return allPosts;

    } catch (error) {
        if (error.response && error.response.status === 400) {
            // Chegou ao fim das páginas
            return [];
        }
        console.error('Erro ao obter posts:', error.message);
        throw error;
    }
}

/**
 * Obter conteúdo markdown original de um post
 */
async function getPostMarkdownContent(api, postId) {
    try {
        // Primeiro, tentar obter o conteúdo Markdown dos meta fields
        const metaResponse = await api.get(`/posts/${postId}/meta`);

        // Procurar pelos campos onde o githuber-md pode armazenar o markdown
        const possibleFields = [
            'markdown_content',
            'post_content_filtered',
            'githuber_markdown',
            '_githuber_markdown'
        ];

        for (const field of possibleFields) {
            const metaField = metaResponse.data.find(meta => meta.key === field);
            if (metaField && metaField.value) {
                return metaField.value;
            }
        }

        // Se não encontrar nos meta fields, tentar obter diretamente da API
        const postResponse = await api.get(`/posts/${postId}`, {
            params: {
                // context: 'edit'  // Importante: precisamos do contexto 'edit' para obter todos os campos
            }
        });

        // O githuber-md normalmente armazena o conteúdo markdown no campo content_filtered
        if (postResponse.data.content_filtered && postResponse.data.content_filtered.raw) {
            return postResponse.data.content_filtered.raw;
        }

        // Último recurso: retornar o conteúdo normal, que estará em HTML
        // Isso requereria conversão HTML para Markdown
        console.warn(`Post ${postId} não tem conteúdo markdown identificável. Usando conteúdo HTML.`);
        return postResponse.data.content.raw || postResponse.data.content.rendered;

    } catch (error) {
        console.error(`Erro ao obter conteúdo markdown para post ${postId}:`, error.message);
        // Em caso de falha, retornar o conteúdo HTML padrão do post original
        return null;
    }
}

/**
 * Criar frontmatter para o documento Docusaurus incluindo dados do Yoast SEO
 * Agora usa diretamente post.yoast_head_json
 */
function createFrontmatter(post, yoastData) {
    const title = post.title.rendered.replace(/"/g, '\\"'); // Escapar aspas
    const date = new Date(post.date).toISOString().split('T')[0];
    const lastModified = new Date(post.modified).toISOString().split('T')[0];
    const slug = post.slug || slugify(title, {lower: true});

    // Obter tags e autores
    const tags = post.tags && Array.isArray(post.tags) ? post.tags : [];
    const authorId = post.author || 0;

    let frontmatter = `---
sidebar_label: "${slug}"
sidebar_position: 1
slug: ${slug}
date: ${date}
last_update:
  date: ${lastModified}
`;

    // if (authorId > 0) {
    //     frontmatter += `authors: [${authorId}]\n`;
    // }

    if (tags.length > 0) {
        frontmatter += `tags: [${tags.join(', ')}]\n`;
    }

    // Usar yoast_head_json do post se disponível
    const yoast = post.yoast_head_json || yoastData;

    if (yoast) {
        // Título SEO
        if (yoast.title) {
            frontmatter += `title: "${yoast.title.replace(/"/g, '\\"')}"\n`;
        }
        // Descrição
        if (yoast.description) {
            frontmatter += `description: "${yoast.description.replace(/"/g, '\\"')}"\n`;
        } else if (post.excerpt && post.excerpt.rendered) {
            frontmatter += `description: "${post.excerpt.rendered
                .replace(/<\/?[^>]+(>|$)/g, "")
                .trim()
                .replace(/"/g, '\\"')}"\n`;
        }

        // Canonical
        // if (yoast.canonical) {
        //     frontmatter += `canonical: "${yoast.canonical}"\n`;
        // }

        // Author
        if (yoast.author && yoast.author.length > 0) {
            frontmatter += `author: "${yoast.author}"\n`;
        }

        // OpenGraph
        if (yoast.og_image && yoast.og_image.length > 0 && yoast.og_image[0].url) {
            frontmatter += `image: "${yoast.og_image[0].url}"\n`;
        }

        // if (yoast.og_title || yoast.og_description) {
        //     frontmatter += `og:\n`;
        //     if (yoast.og_title) {
        //         frontmatter += `  title: "${yoast.og_title.replace(/"/g, '\\"')}"\n`;
        //     }
        //     if (yoast.og_description) {
        //         frontmatter += `  description: "${yoast.og_description.replace(/"/g, '\\"')}"\n`;
        //     }
        //     // if (yoast.og_image && yoast.og_image.length > 0 && yoast.og_image[0].url) {
        //     //     frontmatter += `  image: "${yoast.og_image[0].url}"\n`;
        //     // }
        // }

        // Twitter
        // if (yoast.twitter_title || yoast.twitter_description) {
        //     frontmatter += `twitter:\n`;
        //     if (yoast.twitter_title) {
        //         frontmatter += `  title: "${yoast.twitter_title.replace(/"/g, '\\"')}"\n`;
        //     }
        //     if (yoast.twitter_description) {
        //         frontmatter += `  description: "${yoast.twitter_description.replace(/"/g, '\\"')}"\n`;
        //     }
        //     // Não há campo direto para imagem do twitter, mas pode ser igual ao og_image
        //     if (yoast.og_image && yoast.og_image.length > 0 && yoast.og_image[0].url) {
        //         frontmatter += `  image: "${yoast.og_image[0].url}"\n`;
        //     }
        // }

        // Robots
        // if (yoast.robots) {
        //     frontmatter += `robots:\n`;
        //     Object.entries(yoast.robots).forEach(([k, v]) => {
        //         frontmatter += `  ${k}: "${v}"\n`;
        //     });
        // }

    } else if (post.excerpt && post.excerpt.rendered) {
        frontmatter += `description: "${post.excerpt.rendered
            .replace(/<\/?[^>]+(>|$)/g, "")
            .trim()
            .replace(/"/g, '\\"')}"\n`;
    }

    // Adicionar informações sobre a migração
    frontmatter += `migration_info:
  migrated_on: "${config.currentDateTime}"
  migrated_by: "${config.currentUser}"
  source: "WordPress"
  source_id: ${post.id}
`;

    // Adicionar campos do ACF, se existirem
    if (post.acf && typeof post.acf === 'object') {
        Object.entries(post.acf).forEach(([key, value]) => {
            // Serializar booleanos e strings corretamente
            if (typeof value === 'boolean' || typeof value === 'number') {
                frontmatter += `${key}: ${value}\n`;
            } else if (typeof value === 'string') {
                frontmatter += `${key}: "${value.replace(/"/g, '\\"')}"\n`;
            } else if (value === null) {
                frontmatter += `${key}: null\n`;
            }
            // Ignorar arrays/objetos aninhados para manter simples
        });
    }

    frontmatter += `---`;

    return frontmatter;
}

/**
 * Extrair URLs de imagens do conteúdo markdown
 */
function extractImagesFromMarkdown(markdownContent) {
    const imageUrls = [];

    if (!markdownContent) return imageUrls;

    // Capturar imagens no formato ![alt](url)
    const markdownImageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;

    while ((match = markdownImageRegex.exec(markdownContent)) !== null) {
        if (match[1] && !match[1].startsWith('data:')) {
            imageUrls.push(match[1]);
        }
    }

    // Capturar imagens em HTML <img src="...">
    const htmlImageRegex = /<img[^>]+src="([^">]+)"/g;

    while ((match = htmlImageRegex.exec(markdownContent)) !== null) {
        if (match[1] && !match[1].startsWith('data:')) {
            imageUrls.push(match[1]);
        }
    }

    return [...new Set(imageUrls)]; // Remover duplicatas
}

/**
 * Processar imagens: baixar e mover para a estrutura Docusaurus
 */
async function processImages(imageUrls, categorySlug, mediaOutputPath) {
    const processedImages = {};

    for (const imageUrl of imageUrls) {
        try {
            // Resolver URL completa se for relativa
            const fullImageUrl = imageUrl.startsWith('http')
                ? imageUrl
                : `${wpUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;

            // Extrair nome do arquivo da URL
            let imageName;
            try {
                imageName = path.basename(new URL(fullImageUrl).pathname);
                // Remover parâmetros de consulta do nome do arquivo
                imageName = imageName.split('?')[0];
            } catch (e) {
                // Caso a URL não seja válida, usar um nome baseado no hash da URL
                imageName = `image_${Math.floor(Math.random() * 10000)}.jpg`;
            }

            // Caminho de destino da imagem
            const imageOutputPath = path.join(mediaOutputPath, imageName);

            // Baixar a imagem
            console.log(`Baixando imagem: ${fullImageUrl}`);
            const response = await axios({
                method: 'GET',
                url: fullImageUrl,
                responseType: 'arraybuffer'
            });

            // Salvar a imagem
            await fs.writeFile(imageOutputPath, response.data);
            console.log(`Imagem salva: ${imageOutputPath}`);

            // Nova URL para a imagem no Docusaurus
            const newImageUrl = `${config.mediaUrlPrefix}/${imageName}`;

            // Armazenar mapeamento de URLs
            processedImages[imageUrl] = newImageUrl;

        } catch (error) {
            console.error(`Erro ao processar imagem ${imageUrl}:`, error.message);
        }
    }

    return processedImages;
}

/**
 * Converter HTML para Markdown
 * Nota: Esta é uma implementação simplificada, pode ser necessário usar uma biblioteca
 * como turndown para uma conversão mais completa
 */
function htmlToMarkdown(html) {
    if (!html) return '';

    // Remover comentários HTML
    html = html.replace(/<!--[\s\S]*?-->/g, '');

    // Converter títulos
    html = html.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
    html = html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
    html = html.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
    html = html.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
    html = html.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1\n\n');
    html = html.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1\n\n');

    // Converter parágrafos
    html = html.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');

    // Converter quebras de linha
    html = html.replace(/<br\s*\/?>/gi, '\n');

    // Converter links
    html = html.replace(/<a[^>]*href="(.*?)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

    // Converter imagens
    html = html.replace(/<img[^>]*src="(.*?)"[^>]*alt="(.*?)"[^>]*\/?>(?:<\/img>)?/gi, '![$2]($1)');
    html = html.replace(/<img[^>]*alt="(.*?)"[^>]*src="(.*?)"[^>]*\/?>(?:<\/img>)?/gi, '![$1]($2)');
    html = html.replace(/<img[^>]*src="(.*?)"[^>]*\/?>(?:<\/img>)?/gi, '![]($1)');

    // Converter negrito
    html = html.replace(/<(?:b|strong)[^>]*>(.*?)<\/(?:b|strong)>/gi, '**$1**');

    // Converter itálico
    html = html.replace(/<(?:i|em)[^>]*>(.*?)<\/(?:i|em)>/gi, '*$1*');

    // Converter listas não ordenadas
    html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, function (match, content) {
        return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
    });

    // Converter listas ordenadas
    html = html.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, function (match, content) {
        let index = 1;
        return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, function (match, item) {
            return `${index++}. ${item}\n`;
        });
    });

    // Converter blocos de código
    html = html.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n');

    // Converter blocos de código inline
    html = html.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');

    // Remover tags restantes
    html = html.replace(/<[^>]+>/g, '');

    // Decodificar entidades HTML
    html = html.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

    return html.trim();
}

/**
 * Criar arquivo de categoria para a sidebar do Docusaurus
 */
async function createCategoryFile(categorySlug, categoryName) {
    const categoryContent = `{
  "label": "${categoryName}",
  "position": 1
}`;

    const filePath = path.join(config.outputPath, categorySlug, '_category_.json');
    await fs.writeFile(filePath, categoryContent, 'utf8');
    console.log(`Arquivo de categoria criado: ${filePath}`);
}

/**
 * Escapa caracteres especiais para uso em expressões regulares
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Processar um único post
 */
async function processPost(api, post, categorySlug, mediaOutputPath) {
    console.log(`Processando post: ${post.title.rendered} (ID: ${post.id})`);

    // Obter conteúdo markdown do post
    let markdownContent = await getPostMarkdownContent(api, post.id);

    // Se não houver conteúdo markdown, converter HTML para markdown
    if (!markdownContent || markdownContent.trim() === '') {
        console.warn(`Post ${post.id} não tem conteúdo markdown. Convertendo HTML para Markdown...`);
        markdownContent = nhm.translate(post.content.rendered);
    }

    // Usar dados do Yoast diretamente do post
    const yoastData = post.yoast_head_json || null;
    if (yoastData) {
        console.log(`Dados do Yoast SEO encontrados para o post ${post.id}`);
    } else {
        console.log(`Nenhum dado do Yoast SEO encontrado para o post ${post.id}`);
    }

    // Extrair e processar imagens
    const imageUrls = extractImagesFromMarkdown(markdownContent);
    const processedImages = await processImages(imageUrls, categorySlug, mediaOutputPath);

    // Substituir URLs de imagens no markdown
    for (const [originalUrl, newUrl] of Object.entries(processedImages)) {
        markdownContent = markdownContent.replace(
            new RegExp(escapeRegExp(originalUrl), 'g'),
            newUrl
        );
    }

    // Criar frontmatter com dados do Yoast SEO
    const frontmatter = createFrontmatter(post, yoastData);

    // Combinar frontmatter com conteúdo
    const docusaurusContent = `${frontmatter}\n\n${markdownContent}`;

    // Determinar nome do arquivo
    const slug = slugify(post.title.rendered, {lower: true});
    const wpSlug = post.slug || slug;
    const fileName = `${wpSlug}.md`;
    const filePath = path.join(
        config.outputPath,
        categorySlug,
        fileName
    );

    // Salvar arquivo
    await fs.writeFile(filePath, docusaurusContent, 'utf8');
    console.log(`Post salvo: ${filePath}`);
}

/**
 * Função principal para executar a migração
 */
async function migrate() {
    console.log(`Iniciando migração da categoria: ${targetCategory} do WordPress ${wpUrl}`);
    console.log(`Data e hora: ${config.currentDateTime}, Usuário: ${config.currentUser}`);

    try {
        // Solicitar credenciais
        // const { username, password } = await promptCredentials();

        // Autenticar na API do WordPress
        // const authToken = await authenticate(username, password);
        // console.log('Autenticação bem-sucedida!');

        // Configurar cliente API
        const api = setupApiClient();

        // Obter categoria
        const category = await getCategoryByName(api, targetCategory);
        console.log(`Categoria '${category.name}' encontrada com ID: ${category.id}`);

        // Obter posts da categoria
        const posts = await getPostsByCategory(api, category.id);
        console.log(`Encontrados ${posts.length} posts na categoria '${category.name}'`);

        if (posts.length === 0) {
            console.log('Nenhum post encontrado. Finalizando...');
            return;
        }

        // Criar diretório de saída para a categoria
        const categorySlug = category.slug || slugify(category.name, {lower: true});
        // const categoryOutputPath = path.join(config.outputPath, 'docs', categorySlug);
        const categoryOutputPath = path.join(config.outputPath, categorySlug);
        await fs.mkdir(categoryOutputPath, {recursive: true});

        // Criar diretório para mídia
        const mediaOutputPath = path.join(config.outputPath, config.mediaFolder);
        await fs.mkdir(mediaOutputPath, {recursive: true});

        console.log(`Diretórios criados em: ${categoryOutputPath} e ${mediaOutputPath}`);

        // Criar arquivo de categoria (para sidebar)
        await createCategoryFile(categorySlug, category.name);

        // Processar cada post
        for (const post of posts) {
            await processPost(api, post, categorySlug, mediaOutputPath);
        }

        console.log('Migração concluída com sucesso!');
        console.log(`Todos os posts foram migrados para: ${categoryOutputPath}`);
        console.log(`Mídias foram salvas em: ${mediaOutputPath}`);
        console.log(`Verifique os arquivos em: ${config.outputPath}`);
        // Fechar a interface de leitura
        rl.close();

    } catch (error) {
        console.error('Erro durante a migração:', error);
    }
}

// Executar a função principal
migrate().catch(console.error);