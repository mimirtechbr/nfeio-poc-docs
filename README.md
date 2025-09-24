# NFe.io — Documentação

Portal de documentação da NFe.io construído com Docusaurus 3, tema e plugins de OpenAPI, Tailwind CSS e Decap CMS (ex‑Netlify CMS) para edição via interface.

> Para padrões, fluxo de PR e checklist de qualidade, consulte o guia: CONTRIBUTING.md

## Visão geral

- Framework: Docusaurus 3 (TypeScript)
- Tema/API: docusaurus-theme-openapi-docs + docusaurus-plugin-openapi-docs
- CMS: Decap CMS com backend GitHub
- Estilos: Tailwind CSS 4 + CSS customizado
- i18n: pt-BR (padrão) e en habilitados

URL de referência (Poc): https://nfeiodocspoc-docusaurus-rwqd4c.ctb-1-eu-east-1.cloudainer.com

## Requisitos

- Node.js 18+ (recomendado: 20.18 conforme `.nvmrc`)
- npm 9+ (o repositório usa `package-lock.json`) ou Yarn caso prefira

Dica: para alinhar a versão do Node:

```bash
nvm use
# ou
nvm install 20.18 && nvm use 20.18
```

## Instalação

```bash
npm ci
# se preferir:
# npm install
```

## Desenvolvimento local

Gera a documentação de APIs (OpenAPI) e inicia o servidor de desenvolvimento com HMR:

```bash
npm run start
```

- Endereço padrão: http://localhost:3000
- A geração de docs de API roda automaticamente antes do start (script `gen-all`).

## Edição via CMS (Decap)

O CMS permite criar/editar docs pelo navegador em `/admin`.

1) Inicie o proxy local do Decap em um terminal:
```bash
npm run decap-server
```
2) Em outro terminal, rode o site:
```bash
npm run start
```
3) Acesse: http://localhost:3000/admin/

Observações importantes:
- `local_backend: true` está habilitado em `static/admin/config.yml`, então o CMS usa um proxy local durante o desenvolvimento.
- Em produção, o backend usa GitHub (repo: `mimirtechbr/nfeio-poc-docs`, branch `develop`). Os fluxos de autenticação e publicação dependem das permissões do GitHub.

## Estrutura de pastas (essencial)

- `docs/`
  - `documentacao/` — conteúdo institucional/guia (gerado automaticamente na sidebar)
  - `integracoes/` — docs sobre integrações
  - `prefeituras/` — docs específicos de prefeituras
  - `rest-api/` — saída gerada a partir dos arquivos OpenAPI da pasta `static/api`
- `static/api/` — arquivos OpenAPI (YAML/JSON) de entrada para geração das referências
- `src/`
  - `components/` — componentes React do site
  - `css/` — estilos customizados
  - `pages/` — páginas especiais do Docusaurus
  - `plugins/tailwind-config.js` — integração do Tailwind CSS
  - `snippets/` — blocos HTML usados no menu (Resources)
  - `theme/` — overrides de tema (inclui `@theme/ApiItem`)
- `sidebars.ts` — sidebars das seções (documentação, integrações, prefeituras e REST API)
- `docusaurus.config.ts` — configuração do site e do plugin de OpenAPI

## Referência de API (OpenAPI)

O projeto usa `docusaurus-plugin-openapi-docs` para gerar a referência a partir de arquivos em `static/api/` (ex.: `nf-produto-v2.yaml`, `cpf-api.yaml`, etc.).

- A configuração vive em `docusaurus.config.ts` (plugin `docusaurus-plugin-openapi-docs`, id `openApi`).
- O script `gen-all` (mapeado para `docusaurus gen-api-docs all`) gera as páginas em `docs/rest-api/<nome-da-api>/`.
- O `npm run start` e o `npm run build` já executam `gen-all` automaticamente.

Comandos úteis:

```bash
# gerar (ou regerar) as páginas de referência
npm run gen-all

# limpar os diretórios gerados da referência de API
npm run clean-all
```

### Como adicionar uma nova API

1) Adicione o arquivo OpenAPI (YAML/JSON) em `static/api/`, por exemplo: `minha-api.yaml`.
2) Edite `docusaurus.config.ts` e inclua uma nova entrada em `plugins[ docusaurus-plugin-openapi-docs ].config`, definindo:
   - `specPath`: caminho do arquivo em `static/api/`
   - `outputDir`: diretório de saída dentro de `docs/rest-api/`
   - `sidebarOptions`: normalmente `groupPathsBy: "tag"` e `categoryLinkSource: "tag"`
3) (Opcional, para aparecer organizado no menu REST API) Edite `sidebars.ts` e adicione uma nova categoria em `openApiSidebar`, apontando `items: require("./docs/rest-api/<sua-pasta>/sidebar.js")`.
4) Rode:
```bash
npm run gen-all
npm run start
```

## Build

Gera conteúdo estático em `build/`:
```bash
npm run build
```

Pré-requisitos do build:
- Os arquivos OpenAPI devem estar presentes em `static/api/`.
- `gen-all` é executado automaticamente durante o build.

## Deploy

O diretório `build/` pode ser servido por qualquer serviço de hospedagem de conteúdo estático (S3/CloudFront, Vercel, Netlify, Nginx, etc.).

- Para um teste local do build:
```bash
npm run serve
```
- Há também o comando padrão do Docusaurus para GitHub Pages:
```bash
npm run deploy
```
Observação: `organizationName` e `projectName` estão definidos no `docusaurus.config.ts`. Ajuste se for usar GitHub Pages; caso contrário, prefira pipelines que apenas publiquem a pasta `build/` no host desejado.

## Comandos disponíveis

- `npm run start` — gera referência de APIs e inicia o servidor de desenvolvimento
- `npm run build` — gera o site estático em `build/`
- `npm run serve` — serve a pasta `build/` localmente
- `npm run gen-all` — gera todas as referências de API (OpenAPI)
- `npm run clean-all` — remove as referências de API geradas
- `npm run decap-server` — inicia o proxy local do Decap CMS
- `npm run typecheck` — checagem de tipos (TypeScript)
- `npm run clear` — limpa caches do Docusaurus
- `npm run swizzle` — customizações do tema (use com cautela)

## Estilos e UI

- Tailwind CSS 4 está integrado via `src/plugins/tailwind-config.js`
- Estilos customizados em `src/css/custom.css` e `custom.css` na raiz
- Prism adicional: bash, php, nodejs, python, json, etc. (vide `prism.additionalLanguages`)

## Idiomas

- `pt-BR` é o idioma padrão; `en` está habilitado. Caso vá localizar conteúdo, siga as diretrizes do Docusaurus i18n. Para a maioria dos docs desta POC, o conteúdo está em pt-BR.

## Dicas e solução de problemas

- Versão do Node: use `nvm use` para igualar à `.nvmrc`. Problemas de build geralmente se resolvem ao alinhar a versão.
- Referência de API desatualizada? Rode `npm run clean-all && npm run gen-all`.
- Links quebrados durante o desenvolvimento não falham o build por padrão (`onBrokenLinks: 'log'`). Verifique os avisos e corrija antes de publicar.

## Contribuindo

- Crie um branch a partir do branch principal do repositório em uso.
- Para contribuições de conteúdo, você pode usar o CMS em `/admin` (com permissões) ou editar os arquivos Markdown diretamente em `docs/`.
- Abra um Pull Request descrevendo as mudanças. Para novas APIs, inclua o arquivo OpenAPI, a configuração no `docusaurus.config.ts` e a entrada da sidebar (se aplicável).
- Consulte o guia completo de contribuição: CONTRIBUTING.md

## Governança e políticas

- Código de Conduta: CODE_OF_CONDUCT.md
- Segurança (relato responsável): SECURITY.md
- Guia de Contribuição: CONTRIBUTING.md
