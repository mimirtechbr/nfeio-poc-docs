---
title: Automatize a emissão de notas fiscais de serviço NFS-e com WHMCS e NFE.io
sidebar_label: Introdução
slug: /integracoes/plugins/whmcs
sidebar_position: 1
---
# WHMCS

## Automatize a emissão de notas fiscais de serviço NFS-e com WHMCS e NFE.io!

A NFE.io é um sistema de emissão de notas fiscais que automatiza a comunicação com as prefeituras. Com a NFE.io você se livra de diversas tarefas chatas, melhorando o desempenho do seu negócio. E melhor, você economiza tempo e dinheiro.

Automatize a emissão de nota fiscal eletrônica de serviço diretamente em seu WHMCS através do **Módulo Nota Fiscal para WHMCS via NFE.io**. Com este módulo, é possível automatizar a rotina de geração e envio de NFSe para seus clientes quando eles realizam o pagamento de uma fatura referente a um pedido ou serviço recorrente, emitir notas a partir de faturas avulsas ou toda vez que um pagamento é recebido no WHMCS por exemplo.

![NFE.io WHMCS](https://nfe.io/docs/app/uploads/2020/08/nfeio-whmcs-notas-fiscais.png)

> Este módulo é para emissão de NFS-e, Nota Fiscal de Serviço Eletrônica, não sendo possível emissão de nota de produto.

### Principais Recursos
- Emissão automática de notas fiscais
- Emissão manual de notas fiscais
- Agendamento de emissão de notas fiscais
- Cancelamento de nota fiscal quando fatura é cancelada
- Configuração de código de serviço personalizado por produto
- Painel intuitivo de visualização de notas emitidas
- Botões de ação rápida para emissão, cancelamento e envio
- Acompanhamento do status da emissão
- Envio de nota fiscal por e-mail
- Download de nota em PDF e XML

#### Demais Recursos
- Emite notas fiscais de forma sequencial, evitando sobrecargas nos sites das prefeituras.
- Salva o debug das chamadas à API NFE.io no log de Módulo do WHMCS para diagnóstico
- Seleciona nas configurações do módulo a opção de enviar o número inscrição municipal para a nota fiscal.
- Seleciona nas configurações do módulo a opção de enviar a nota fiscal por e-mail automaticamente.
- Valida CPF/CNPJ do cliente e não emite a nota fiscal caso inválido

### Como usar este Módulo

#### Requisitos
- WHMCS versão 7.2 ou superior
- PHP 5.6 ou superior
- Tarefas cron do WHMCS devem estar funcionando a cada 5 minutos, conforme descrito na documentação oficial ([https://docs.whmcs.com/Crons](https://docs.whmcs.com/Crons "https://docs.whmcs.com/Crons"));
- É necessário um portal de pagamento ativado e que a criação de faturas do WHMCS esteja funcional, sendo que as notas fiscais são emitidas no momento da criação ou após o pagamento das faturas geradas manual ou automaticamente pelo WHMCS.

### Documentação

O módulo de emissão de notas fiscais para WHMCS via NFE.io é simples de instalar como qualquer módulo adicional e possui uma documentação bem organizada para auxiliar o processo de instalação e configuração para você começar a emitir notas fiscais automaticamente em seu WHMCS!

- [Instalação](https://nfe.io/docs/integracoes/plugins/whmcs/instalacao/ "Instalação")
- [Configuração](https://nfe.io/docs/integracoes/plugins/whmcs/configuracao/ "Configuração")
- [Atualização](https://nfe.io/docs/integracoes/plugins/whmcs/atualizacao/ "Atualização") **(v1.4 para 2.0)**

### CHANGELOG
> **IMPORTANTE:** Ao atualizar, após substituir os arquivos pelos mais recentes, acesse as configurações do módulo no menu `Opções > Módulos Addon > Gofas NFE.io` do painel administrativo do WHMCS e clique em "Salvar Alterações". Isso garente que os novos parâmetros serão gravados corretamente no banco de dados.

### v2.0
- **Grande atualização**: Confira no link Atualização

### v1.4.0
- Migração da tratativa do RPS para a NFe realizada
- Funcionalidade de emissão personalizada automatizada

### v1.3.3
- Ajuste na descrição da nota fiscal.

### v1.3.2
- Ajuste para correção da emissão automática de notas quando pagas.

### v1.3.1
- ajuste para correção de retorno de callback.

### v1.3.0
- link para relatório do sistema legado
- botão para cancelar nota fiscal
- log, data e hora da emissão do log
- verificação de conexão com nfe
- verificação automática de campo RPS
- verificação de campo personalizado
- campo personalizado no cliente para emissão da nota

### v1.2.10
- correção enviar endereço de e-mail na nota

### v1.2.9
- criação de arquivo de debug
- verificação do retorno CEP
- validação de versão do modulo via github
- impedir emissão duplicada de nota fiscal de fatura

### v1.2.7
- envio do nome da empresa ao invés do nome pessoa física quando o CNPJ estiver definido
- criar nota fiscal de acordo com o código de serviço de cada serviço
- corrigido erro de caracteres especiais
- opção de criar nota individualmente por tipo de serviço
- emissão de nota fiscal a partir da data de instalação do módulo
- opção de descrição do serviço na nota: referente a fatura ou nome do serviço.
- ajuste de link das notas fiscais na fatura para abrir todas as notas.
- ajuste de instalação do módulo

### v1.2.6
- opção manual para criação de notas fiscais.

### v1.2.5
- criação de link na fatura para o XML da nota fiscal.

### v1.2.4
- Nova opção de configuração no disparo de nota fiscal automatica por e-mail.
- Ajustes com informações e links de suporte.

### v1.2.3
- Ajustes Garante que a nota não sera duplicada, criação de link da nota fiscal, opção de inscrição municipal

### v1.2.2
- Garante que o rpsSeraiNumber não seja alterado quando já configurado manualmente.

### v1.2.1
- Corrigido erro que alterava a série do RPS nas configurações de acordo com a série RPS das NFEs já geradas.

### v1.2.0
- Novo campo nas configurações para informar a Série do RPS (RPS Serial Number). Será preenchido automaticamente na próxima emissão, caso não preenchido;
- Novo campo nas configurações para informar o número RPS (RPS Number). Caso não preenchido, será preenchido automaticamente na próxima emissão, após consultar a NFE mais recente gerada. Não sendo gerado ou configurado nenhum número RPS, o módulo irá configurar automaticamente com "1" o valor desse campo;

### v1.1.3
- Agora o número RPS é obtido consultando a NFE mais recente gerada;

### v1.1.2
- Melhoria na verificação de atualizações;

### v1.1.1
- Obtém via API o rpsSerialNumber e rpsNumber da empresa antes de gerar cada nota fiscal;
- O rpsNumber da nova NFE a ser gerada sempre é "último rpsNumber + 1".

### v1.0.1
- Corrigido bug ao salvar NFE no banco de dados na criação da fatura.

### v1.0.0
- Lançamento.