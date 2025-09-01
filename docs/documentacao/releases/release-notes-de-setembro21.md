---
sidebar_label: "Release notes de setembro/21"
sidebar_position: 1
slug: release-notes-de-setembro-21
date: 2021-10-15
last_update:
  date: 2021-11-19
title: "Release notes de setembro/21 - NFE.io | Docs"
description: "Release Notes de setembro/2021Plataforma da NFE.ioNota Fiscal de ServiçoNota Fiscal de ConsumidorConsulta de dadosDF-e Distribuição e CT-e DistribuiçãoIntegrações NFE.io Release Notes de setembro/2021&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2021/10/lista-de-lote-de-notas-consutladas.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2635
---

* [Release Notes de setembro/2021][1]  
   * [Plataforma da NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Consumidor][4]  
   * [Consulta de dados][5]  
   * [DF-e Distribuição e CT-e Distribuição][6]  
   * [Integrações NFE.io][7]

# Release Notes de setembro/2021

Novas funcionalidades, mudanças e correções de bugs feitas no mês de setembro pelo time da NFE.io.

## Plataforma da NFE.io

Atividades relacionadas a plataforma da [NFE.io][8]  

nova funcionalidade

Criação de faturas

Observamos que alguns de nossos clientes estavam com informações cadastrais incompletas. Por conta disso, implementamos um pop-up de aviso para esses clientes preencherem os seus dados.

nova funcionalidade

Lista dos lotes de notas consultadas

Adicionamos na lista de lotes de notas consultadas a visão de qual usuário realizou a consulta do lote.

![](/static/docs/releases/lista-de-lote-de-notas-consutladas.png)

Na imagem acima, o local indicado com o retângulo azul é onde agora consta a informação de qual usuário fez a consulta do lote de nota fiscal de produto.

nova funcionalidade

Emissão de notas fiscais via lote

Disponibilizamos a possibilidade de informar uma nova coluna com título "_ID\_Externo_" durante o preenchimento da planilha de Excel. Essa nova coluna disponibiliza na nota um campo de identificação customizada para a nota fiscal.

Nesse [link][9] você consegue baixar a planilha de Excel com o novo campo.

mudança

Abertura de ticket pela nossa plataforma

Impelementamos algumas melhorias no processo de abertura de ticket para o suporte pela nossa plataforma.

As melhorias foram na forma de usabilidade dessa nossa função.

correção

Lista de notas fiscais de produto

Reparamos que a listagem de notas fiscais de produto não possibilitava vocês mudarem de página de visualização de notas. Ou seja, caso tivessem mais de uma página com notas emitidas, vocês não conseguiriam visualizar as outras páginas além da primeira. Efetuamos a correção para que consigam visualizar todas as suas notas.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Prefeitura de Serra/ES

Agora temos disponível emissões fiscais na prefeitura de Serra/ES!

nova funcionalidade

Prefeitura de Fernandópolis/SP

Nesse mês também tornamos disponível as emissões fiscais na prefeitura de Fernandópolis/SP!

mudança

Brasília/DF

Fizemos uma modificação no fluxo de emissão da nota fiscal em Brasília/DF de forma que a série do RPS a partir de agora só pode ser informada no formato numérico.

## Nota Fiscal de Consumidor

Atividades relacionadas a nota fiscal de consumidor.  

mudança

Fluxo de emissão

Modificamos a forma de emissão fiscal. A partir de agora ela será feita de forma síncrona para atendermos a nota técnica NT2020.005.

Você não precisa se preocupar com isso. Essa mudança não irá afetar a sua integração conosco.

## Consulta de dados

Atividades relacionadas a consulta de dados.

nova funcionalidade

Consulta de Inscrição Estadual

Disponibilizamos em produção uma nova API específica para busca de dados de destinatários relativos à Inscrição Estadual para emissão de nota fiscal eletrônica. Nessa nova API desenvolvemos uma lógica onde indicamos para quem consulta a Inscrição Estadual válida para a emissão da nota a partir das fontes que utilizamos.

Disponibilizamos duas nova url's. Na primeira indicamos uma única Inscrição Estadual. Ela, a partir da nossa análise, é a que possui a maior chance de estar correta. Na segunda indicamos todas as Inscricões Estaduais habilitadas para a empresa consultada.

Consulta de IE para emitir nota fiscal:  
[https://legalentity.api.nfe.io/v2/legalentities/stateTaxForInvoice/\{StateCode\}/\{FederalTaxNumber][10]\}

Consulta de IE com o filtro de todas as Inscrições Estaduais habilitadas:  
[https://legalentity.api.nfe.io/v2/legalentities/stateTaxSuggestedForInvoice/\{StateCode\}/\{FederalTaxNumber][11]\}

Vale ressaltar que essa análise possui as limitações inerentes as fontes que consultamos.

correção

Consulta de Inscrição Estadual

Constatamos alguns problemas na consulta de Inscrição Estadual na fonte do Rio de Janeiro onde o nosso time de produto atuou para contornar esse contexto!

## DF-e Distribuição e CT-e Distribuição

Atividades relacionadas a nota fiscal de serviço.

mudança

Documentação

Fizemos algumas modificações na documentação do swagger do DF-e Distribuição. Estamos abertos a sugestões de melhorias! A documentação do NF-e Distribuição você pode acessar [aqui][12]. E para acesso a documentação do CT-e Distribuição, você pode acessar [aqui][13].

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.  

nova funcionalidade

Woocommerce

Lançamos uma nova versão do addon que emite notas fiscais no Woocommerce! A nova solução está em beta e estamos ansiosos para que vocês utilizem essa nossa nova integração!


[1]: #Release%5FNotes%5Fde%5Fsetembro2021
[2]: #Plataforma%5Fda%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FConsumidor
[5]: #Consulta%5Fde%5Fdados
[6]: #DF-e%5FDistribuicao%5Fe%5FCT-e%5FDistribuicao
[7]: #Integracoes%5FNFEio
[8]: https://app.nfe.io
[9]: https://nfe.io/docs/app/uploads/2021/10/exemplo%5Femissao.xlsx
[10]: https://legalentity.api.nfe.io/v2/legalentities/stateTaxForInvoice/{StateCode}/{FederalTaxNumber
[11]: https://legalentity.api.nfe.io/v2/legalentities/stateTaxSuggestedForInvoice/{StateCode}/{FederalTaxNumber
[12]: https://nfe.io/docs/desenvolvedores/consulta-nf-e-distribuicao/#/
[13]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-ct-e-v2/