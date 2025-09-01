---
sidebar_label: "Release notes de outubro/21"
sidebar_position: 1
slug: release-notes-de-setembro-21-2
date: 2021-11-19
last_update:
  date: 2021-11-19
title: "Release notes de outubro/21 - NFE.io | Docs"
description: "Release Notes de outubro/2021Plataforma da NFE.ioNota Fiscal de ServiçoConsulta de dadosServiços compartilhados Release Notes de outubro/2021 Novas funcionalidades, mudanças e correções de bugs&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2021/11/image_2021-11-19_140825.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2713
---

* [Release Notes de outubro/2021][1]  
   * [Plataforma da NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Consulta de dados][4]  
   * [Serviços compartilhados][5]

# Release Notes de outubro/2021

Novas funcionalidades, mudanças e correções de bugs feitas no mês de outubro pelo time da NFE.io.

## Plataforma da NFE.io

Atividades relacionadas a plataforma da [NFE.io][6]  

nova funcionalidade

Visualização de empresas cadastradas para emissão de nota fiscal de produto

Caso você tenha mais de 50 empresas cadastradas na nossa plataforma, agora será possível você visualizar todas elas pela nossa plataforma!

nova funcionalidade

Página de listagem dos lotes de consulta de NFe

Agora é possível identificar na listagem de de consulta de NFe em lote quem realizou a consulta do lote. O retângulo em vermelho mostra como a informação está apresentada na nova implementação.

![](/static/docs/releases/image_2021-11-19_140825.png)

Para essa informação ser incluída, será necessário que seja adicionado, na segunda etapa da consulta em lote, a informação do "nome do lote", como mostrado na imagem abaixo.

![](/static/docs/releases/image_2021-11-19_141315.png)

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Taboão da Serra/SP

Implementamos a integração para emissões fiscais com mais uma prefeitura! Agora é possível emitir através da NFE.io também em Taboão da Serra!

nova funcionalidade

Iguatu/CE

Agora é possível emitir notas também na prefeitura de Iguatu/CE!

correção

Brasília/DF

Foi feita uma correção no fluxo de emissão da nota fiscal em Brasília para que a nota não seja duplicada em um cenário em específico.

## Consulta de dados

Atividades relacionadas a consulta de dados.  

nova funcionalidade

Consulta de Inscrição Estadual V2

Na consulta de Inscrição Estadual de empresas situadas no Distrito Federal/DF, houve a implementação de uma consulta em uma fonte secundária. Essa atividade foi realizada pois para alguns casos, a fonte principal retorna a seguinte mensagem de erro: "_An error has occurred_". Contudo, o dado consultado existe, apesar do retorno de erro.

## Serviços compartilhados

Atividades relacionadas aos serviços que são compartilhados por todas as nossas API's (envio de email, envio de webhook)  

mudança

Notificações via webhook e email

Melhoria na comunicação interna entre os nossos sistemas para garantir o envio dos webhooks e email em situações de instabilidade do ambiente.


[1]: #Release%5FNotes%5Fde%5Foutubro2021
[2]: #Plataforma%5Fda%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Consulta%5Fde%5Fdados
[5]: #Servicos%5Fcompartilhados
[6]: https://app.nfe.io