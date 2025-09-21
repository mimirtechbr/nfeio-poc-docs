# Política de Segurança — NFe.io Docs

Este repositório é um portal de documentação. Ainda assim, tratamos segurança com prioridade.

## Relato responsável de vulnerabilidades
Se você identificou uma vulnerabilidade de segurança relacionada a este repositório (site, build, dependências ou processos):

1. NÃO abra uma issue pública descrevendo detalhes técnicos.
2. Envie um reporte privado por canais internos da organização (ex.: e-mail de segurança `security@nfe.io`, se aplicável) ou via GitHub Security Advisories (se habilitado neste repositório).
3. Inclua informações suficientes para reproduzir o problema de forma segura (passos, ambiente, evidências). Não compartilhe dados sensíveis.

A equipe irá acusar recebimento, avaliar o impacto, definir prioridade e coordenar a correção/divulgação conforme a política interna.

## Escopo
- Código e configurações deste repositório (Docusaurus, plugins, configuração do CMS, pipelines de build/deploy quando versionados aqui).
- Conteúdo de documentação quando sua forma de publicação possa expor risco (ex.: injeção de conteúdo não sanitizado via MDX/componentes personalizados).

Fora de escopo
- Infraestruturas/agentes externos que não são geridos por este repositório (a menos que explicitamente documentados como parte do deploy deste projeto).
- Serviços de terceiros não integrados diretamente, ou que não tenham sua configuração versionada aqui.

## Boas práticas para contribuidores
- Nunca inclua tokens, senhas, chaves privadas, endpoints internos sensíveis ou credenciais nos arquivos.
- Redija exemplos com dados fictícios (nunca dados reais de clientes/empresas/pessoas).
- Revise dependências e atualize versões com atenção a advisories (Dependabot/Advisories).
- Prefira referências a variáveis de ambiente e processos seguros nos exemplos de deploy.

## Contatos
- Em caso de dúvidas sobre este documento, contate os mantenedores do repositório pelos canais internos da NFe.io.

