# Guia de Contribuição — NFe.io Docs

Obrigado por contribuir com a documentação da NFe.io! Este guia descreve como propor mudanças, o fluxo de trabalho recomendado, convenções e boas práticas específicas deste projeto (Docusaurus + OpenAPI + Decap CMS).

Resumo do stack:
- Docusaurus 3 (TypeScript)
- docusaurus-plugin-openapi-docs + docusaurus-theme-openapi-docs
- Tailwind CSS 4
- Decap CMS para edição de conteúdo (backend GitHub)


## Como posso contribuir?
- Conteúdo (Markdown/MDX) em `docs/` (documentação, integrações, prefeituras)
- Referência de API (OpenAPI) via arquivos em `static/api/`
- Componentes de UI (React) e estilos (`src/components`, `src/css`)
- Correções de erros de digitação, melhorias de clareza e exemplos de código


## Pré-requisitos
- Node.js 20.18 (recomendado) — `nvm use` para alinhar à `.nvmrc`
- npm 9+
- Conseguir rodar localmente:

```bash
npm ci
npm run start
# Em outra janela (para usar o CMS):
npm run decap-server
```

- Acesse o site em http://localhost:3000 e o CMS em http://localhost:3000/admin


## Fluxo de trabalho recomendado
1) Abra ou associe sua alteração a uma issue (bug/feature/docs). Se não existir, crie uma com contexto.
2) Crie um branch a partir do branch de integração (padrão: `develop`).
   - Ex.: `feat/nova-secao-docs`, `fix/typo-webhooks`, `docs/atualiza-nf-servico`.
3) Faça suas mudanças localmente e valide (veja “Checklist de qualidade”).
4) Envie um Pull Request para `develop` com descrição clara do que mudou e por quê.
5) Aguarde revisão. Use PR como rascunho (Draft) quando ainda estiver em andamento.

Observação: se o repositório usar outra estratégia (ex.: trunk-based), ajuste o branch-alvo conforme orientação do time.


## Convenções
### Commits (recomendado: Conventional Commits)
Use um destes tipos no início do título:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças em documentação
- `style:` formatação/estilo (sem alteração lógica)
- `refactor:` refatoração sem mudança de comportamento
- `perf:` melhoria de performance
- `build:` mudanças de build/deps
- `ci:` mudanças de pipelines
- `chore:` tarefas auxiliares

Exemplos:
- `docs: adiciona guia de webhooks`
- `feat: integra nova API de consulta de CT-e`
- `fix: corrige link quebrado em nota-fiscal-servico`

### Nome de branches
- `feat/...`, `fix/...`, `docs/...`, `chore/...`


## Diretrizes para conteúdo (Markdown/MDX)
- Idioma padrão: pt-BR. Mantenha tom claro, direto e consistente com a marca NFe.io.
- Estrutura de pastas:
  - `docs/documentacao/` — conteúdo institucional/guia
  - `docs/integracoes/` — integrações
  - `docs/prefeituras/` — prefeituras
  - `docs/rest-api/` — gerado a partir de OpenAPI (não edite manualmente)
- Frontmatter suportado (via CMS e manualmente):
  - `title` (obrigatório)
  - `slug` (opcional; se vazio, será gerado a partir do título)
  - `tags` (lista)
  - `sidebar_position` (número; ordena no menu lateral)
  - `description` (meta descrição)
  - `image` (OG image)
- Títulos: use uma hierarquia coerente começando em `#` por página.
- Links: prefira relativos quando for dentro do site. Verifique links.
- Código: identifique a linguagem nos blocos para realce (ex.: ` ```bash`, ` ```javascript`).
- Acessibilidade: inclua `alt` descritivo em imagens.
- SEO: preencha `description` curta e clara quando pertinente.

Imagens e mídias:
- Para docs gerenciados pelo CMS, algumas coleções usam `media_folder: /static/static/docs` e `public_folder: /static/docs`.
- Para assets globais, use `static/img` e referencie como `/img/...`.


## Diretrizes para referência de API (OpenAPI)
Arquivos fonte ficam em `static/api/` (YAML/JSON). A documentação é gerada para `docs/rest-api/<api>/`.

Adicionar uma nova API:
1) Adicione o arquivo em `static/api/`, ex.: `minha-api.yaml`.
2) Em `docusaurus.config.ts`, dentro do plugin `docusaurus-plugin-openapi-docs` (id `openApi`), adicione uma nova entrada com:
   - `specPath`: `static/api/minha-api.yaml`
   - `outputDir`: `docs/rest-api/minha-api`
   - `sidebarOptions`: mantenha o padrão (`groupPathsBy: "tag"`, `categoryLinkSource: "tag"`)
3) Em `sidebars.ts`, crie uma categoria em `openApiSidebar` apontando para `items: require("./docs/rest-api/minha-api/sidebar.js")` e defina título/descrição.
4) Gere e verifique:
```bash
npm run gen-all
npm run start
```

Importante:
- Não edite diretamente o conteúdo gerado em `docs/rest-api/...` — altere a especificação OpenAPI e regenere.
- Inclua os arquivos gerados no commit do PR (se o fluxo requer versionamento dos gerados).


## Usando o Decap CMS
- Desenvolvendo localmente:
  - Rode o proxy: `npm run decap-server`
  - Rode o site: `npm run start`
  - Acesse http://localhost:3000/admin/
- `local_backend: true` permite salvar mudanças localmente via Git sem integração remota.
- Em produção, o backend é GitHub; a publicação depende de permissões/CI.


## Internacionalização (i18n)
- `pt-BR` é o padrão; `en` está habilitado.
- Se for adicionar conteúdo em EN, alinhe com as práticas do Docusaurus i18n e mantenha equivalência entre idiomas quando aplicável.


## Checklist de qualidade (antes do PR)
- Conteúdo
  - [ ] Ortografia e clareza revisadas (pt-BR)
  - [ ] Links e imagens testados localmente
  - [ ] Frontmatter preenchido (title, description, sidebar_position quando necessário)
  - [ ] Acessibilidade: `alt` em todas as imagens
- OpenAPI (se aplicável)
  - [ ] Arquivo em `static/api/` válido (sem erros de sintaxe)
  - [ ] Atualizações em `docusaurus.config.ts` e `sidebars.ts` (se necessário)
  - [ ] `npm run clean-all && npm run gen-all` executado
  - [ ] Conteúdo gerado revisado em `docs/rest-api/...`
- Build & tipos
  - [ ] `npm run typecheck` sem erros
  - [ ] `npm run build` concluído
  - [ ] (Opcional) `npm run serve` para smoke test
- Git
  - [ ] Commits claros (ideal: Conventional Commits)
  - [ ] Branch nomeado conforme convenções
  - [ ] Sem arquivos temporários/caches no commit

Comandos úteis:
```bash
npm run clean-all && npm run gen-all
npm run typecheck
npm run build
npm run serve
```


## Processo de revisão de PR
- Um ou mais revisores validarão conteúdo, geração de APIs, build e aderência às convenções.
- Feedbacks podem solicitar ajustes. Sinta-se à vontade para marcar como Draft enquanto trabalha.
- Após aprovação, o PR será mesclado pelo time responsável (em geral, no branch `develop`).


## Segurança e privacidade
- Nunca inclua credenciais, tokens, segredos ou dados sensíveis nos arquivos ou exemplos.
- Para reportar vulnerabilidades, use os canais privados da organização (ex.: Security Advisories do GitHub). Se não disponível, entre em contato com os mantenedores do repositório por canais internos.


## Código de Conduta (resumo)
- Seja respeitoso, colaborativo e gentil.
- Assuma boa fé e forneça feedbacks construtivos.
- Zero tolerância a assédio ou discurso de ódio.

Dúvidas? Abra uma issue ou mencione os mantenedores no PR. Obrigado por ajudar a melhorar a documentação da NFe.io! 

