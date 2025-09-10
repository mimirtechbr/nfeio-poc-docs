import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'NFE.io Documentação',
    tagline: 'Explore a extensa documentação do NFE. Você vai encontrar aqui documentação sobre a plataforma, referência para as APIs e bibliotecas para desenvolvimento.',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true,
    },

    // Set the production url of your site here
    url: 'https://nfeiodocspoc-docusaurus-rwqd4c.ctb-1-eu-east-1.cloudainer.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'NFE.io', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',


    i18n: {
        defaultLocale: 'pt-BR',
        locales: ['pt-BR', 'en'],
    },

    plugins: [
        "./src/plugins/tailwind-config.js",
        "docusaurus-plugin-sass",
        [
            "docusaurus-plugin-openapi-docs",
            {
                id: "openApi",
                docsPluginId: "classic",
                docsPlugin: '@docusaurus/plugin-content-docs',
                config: {
                    cpfApi: {
                        specPath: "static/api/cpf-api.yaml",
                        outputDir: "docs/rest-api/consulta-de-cpf-v1",
                        showSchemas: true,
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaNf: {
                        specPath: "static/api/consulta-nf.yaml",
                        outputDir: "docs/rest-api/consulta-de-nota-fiscal-v2",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaNfConsumidor: {
                        specPath: "static/api/consulta-nf-consumidor.yaml",
                        outputDir: "docs/rest-api/consulta-de-nota-fiscal-consumidor-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaCnpj: {
                        specPath: "static/api/consulta-cnpj.yaml",
                        outputDir: "docs/rest-api/consulta-de-cnpj-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaEndereco: {
                        specPath: "static/api/consulta-endereco.yaml",
                        outputDir: "docs/rest-api/consulta-de-enderecos-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    nfConsumidor: {
                        specPath: "static/api/nf-consumidor-v2.yaml",
                        outputDir: "docs/rest-api/nota-fiscal-de-consumidor-v2",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    nfProduto: {
                        specPath: "static/api/nf-produto-v2.yaml",
                        outputDir: "docs/rest-api/nota-fiscal-de-produto-v2",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    calculoImpostos: {
                        specPath: "static/api/calculo-impostos-v1.yaml",
                        outputDir: "docs/rest-api/calculo-de-impostos-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    nfServico: {
                        specPath: "static/api/nf-servico-v1.yaml",
                        outputDir: "docs/rest-api/nota-fiscal-de-servico-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaCte: {
                        specPath: "static/api/consulta-cte-v2.yaml",
                        outputDir: "docs/rest-api/consulta-de-ct-e-v2",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                    consultaNfeDistribuicao: {
                        specPath: "static/api/consulta-nfe-distribuicao-v1.yaml",
                        outputDir: "docs/rest-api/consulta-nf-e-distribuicao-v1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    } satisfies OpenApiPlugin.Options,
                } satisfies Plugin.PluginOptions,
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: 'default',
                routeBasePath: "/",
                // path: 'docs/documentacao',
                sidebarPath: './sidebars.ts',
                include: ["**/*.{md,mdx}"],
                docItemComponent: "@theme/ApiItem",
            }
        ]
    ],

    themes: ["docusaurus-theme-openapi-docs"],
    presets: [
        [
            'classic',
            {
                docs: false,
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/tailwind.css'),
                        require.resolve('./src/css/custom.scss')
                    ],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        image: 'img/social-card.jpg',
        navbar: {
            title: '',
            logo: {
                alt: 'NFe.io Documentação',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: '/',
                    position: 'left',
                    label: 'Início',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'documentationSideBar',
                    docId: 'documentacao/intro',
                    position: 'left',
                    label: 'Documentação',
                },
                {
                    label: "Rest API",
                    position: "left",
                    type: 'docSidebar',
                    sidebarId: 'openApiSidebar',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'integrationsSideBar',
                    docId: 'integracoes/integracoes-intro',
                    position: 'left',
                    label: 'Integrações',

                },
                {
                    label: "Prefeituras Integradas",
                    position: "left",
                    type: 'docSidebar',
                    sidebarId: 'cityHallsSidebar',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/nfe',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            logo: {
                alt: 'NFe.io Documentação',
                src: 'img/logo-branco.png',
                href: 'https://nfe.io',
            },
            style: 'dark',
            copyright: `NFE.io © ${new Date().getFullYear()}. Todos os Direitos Reservados.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: [
                "ruby",
                "csharp",
                "php",
                "powershell",
                "json",
                "bash",
            ],
        },
        languageTabs: [
            {
                highlight: "python",
                language: "python",
                logoClass: "python",
            },
            {
                highlight: "bash",
                language: "curl",
                logoClass: "curl",
            },
            {
                highlight: "php",
                language: "php",
                logoClass: "php",
            },
            {
                highlight: "javascript",
                language: "nodejs",
                logoClass: "nodejs",
            },
        ],
    } satisfies Preset.ThemeConfig,
};

export default config;
