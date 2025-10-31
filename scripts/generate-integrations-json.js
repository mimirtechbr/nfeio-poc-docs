const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const integrationsDir = path.join(__dirname, '../docs/integracoes');
const outputFile = path.join(__dirname, '../src/integrations.json');

const integrations = {
  plataformas: [],
  pluga: [],
  plugins: []
};

function extractFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);
  return data;
}

function getCategory(relativePath) {
  if (relativePath.includes('/pluga/')) return 'pluga';
  if (relativePath.includes('/plugins/')) return 'plugins';
  if (relativePath.includes('/plataformas/') && !relativePath.includes('/pluga/')) return 'plataformas';
  return null;
}

function buildLink(relativePath, slug) {
  if (slug) return slug;
  
  // Remove docs/ e a extensão do arquivo
  let link = relativePath
    .replace(/^docs\//, '/')
    .replace(/\.(mdx?|md)$/, '');
  
  // Se terminar com o nome do arquivo igual ao diretório, remover
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  const secondLastPart = parts[parts.length - 2];
  
  if (lastPart === secondLastPart || lastPart === 'intro' || lastPart === 'index') {
    parts.pop();
    link = parts.join('/');
  }
  
  return link;
}

function processFile(filePath, relativePath) {
  // Ignorar arquivos intro.mdx na raiz de integracoes
  if (relativePath === 'docs/integracoes/intro.mdx') return;
  
  // Para WHMCS, processar apenas a intro
  if (relativePath.includes('whmcs/docs/')) return;
  
  const frontmatter = extractFrontmatter(filePath);
  const category = getCategory(relativePath);
  
  if (!category) return;
  
  const integration = {
    name: frontmatter.sidebar_label || frontmatter.provider || frontmatter.title,
    provider: frontmatter.provider || frontmatter.sidebar_label || frontmatter.title,
    title: frontmatter.title,
    description: frontmatter.description || frontmatter.heroDescription || '',
    icon: frontmatter.heroImage || '',
    link: buildLink(relativePath, frontmatter.slug)
  };
  
  integrations[category].push(integration);
}

function walkDir(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, baseDir);
    } else if (file.match(/\.(md|mdx)$/)) {
      const relativePath = path.relative(path.join(__dirname, '..'), filePath);
      processFile(filePath, relativePath);
    }
  });
}

// Processar todos os arquivos
walkDir(integrationsDir);

// Ordenar por nome
Object.keys(integrations).forEach(category => {
  integrations[category].sort((a, b) => 
    a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })
  );
});

// Salvar arquivo JSON
fs.writeFileSync(outputFile, JSON.stringify(integrations, null, 2), 'utf8');

console.log('✅ integrations.json gerado com sucesso!');
console.log(`📊 Total: ${integrations.plataformas.length} plataformas, ${integrations.pluga.length} pluga, ${integrations.plugins.length} plugins`);

