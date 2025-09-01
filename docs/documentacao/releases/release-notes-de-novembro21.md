---
sidebar_label: "Release notes de novembro/21"
sidebar_position: 1
slug: release-notes-de-novembro-21
date: 2021-12-07
last_update:
  date: 2021-12-20
title: "Release notes de novembro/21 - NFE.io | Docs"
description: "Release Notes de novembro/2021Plataforma da NFE.ioNota Fiscal de ServiçoNota Fiscal de ConsumidorConsulta de dadosDF-e Distribuição e CT-e DistribuiçãoIntegrações NFE.io Release Notes de novembro/2021&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2767
---

* [Release Notes de novembro/2021][1]  
   * [Plataforma da NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Consumidor][4]  
   * [Consulta de dados][5]  
   * [DF-e Distribuição e CT-e Distribuição][6]  
   * [Integrações NFE.io][7]

# Release Notes de novembro/2021

Novas funcionalidades, mudanças e correções de bugs feitas no mês de novembro pelo time da NFE.io.

## Plataforma da NFE.io

Atividades relacionadas a plataforma da [NFE.io][8]  

nova funcionalidade

Consulta de nota fiscal em lote

Agora, além de já poder consultar notas fiscais de produto pelo ambiente da SEFAZ, temos disponível também a opção de usar a SERPRO! Para essa nova fonte de consulta, há uma diferenciação no valor de cobrança. Por isso, caso queira usar essa nova fonte, pedimos que entre em contato com o nosso time comercial para que você receba as informações das novas tarifas.

mudança

Relatório no formato csv das notas emitidas

Temos disponível a geração do relatório no formato csv de até 1.000.000 notas emitidas por período. Antes estava disponível a geração de relatórios com uma quantidade menor de notas.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Goiânia/GO

Já é possível emitir notas em Goânia/GO!

## Nota Fiscal de Consumidor

Atividades relacionadas a nota fiscal de consumidor.  

mudança

Dados enviados para emissão da nota

Fizemos uma inclusão de parâmetros na emissão da nota para que seja possível a indicação de que a mesma foi emitida de forma "offline". Ao informar os campos "**_contingencyOn_**" e "**_contingencyJustification_**" na emissão da nota, o campo "**_tpEmis_**" do xml da nota fiscal será alterado de "**_Normal_**" (campo equivalente ao número 1 da relação de opções) para "**_Contingência Offline_**"(campo equivalente ao número 9 da relação de opções). Dessa forma, agora é possível emitir notas em contingêcia!

Na documentação do swagger, na parte da emissão, é possível identificar esses novos campos ([https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-consumidor-v2/#/Consumer%20Invoices/V2CompaniesByCompany\_idConsumerinvoicesPost][9]).

## Consulta de dados

Atividades relacionadas a consulta de dados.  

nova funcionalidade

 Consulta de dados pelo ambiente SERPRO

Agor temos disponível a forma de consulta da nota fiscal por meio da fonte da SERPRO. Dessa forma, temos uma alternativa a essa consulta que não somente o ambiente da SEFAZ que temos hoje implementado.

Essa opção está disposta explicitamente somente nas consultas por meio da nossa plataforma, mas caso queira executar a consulta por meio da sua API, pedimos que entre em contato para podermos disponibilizar essa opção também.

## DF-e Distribuição e CT-e Distribuição

Atividades relacionadas às consultas do DF-e e do CT-e.  

mudança

XML gerado para o DF-e Distribuição  
Realizamos um ajuste no sistema para evitar que o xml da nota completa seja encaminhada na consulta do nsu de um resumo de nota.

correção

PDF gerado para o DF-e Distribuição  
Efetuamos uma correção para que o PDF fosse gerado da forma correta quando estiver no formato de paisagem.

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.  
  
mudança

 Plugin WHMCS de emissões de NFSe

Lançamos a versão 2.0 do nosso plugin! Implementamos algumas melhorias e em breve iremos disponibilizar ele também no marketplace do WHMCS.


[1]: #Release%5FNotes%5Fde%5Fnovembro2021
[2]: #Plataforma%5Fda%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FConsumidor
[5]: #Consulta%5Fde%5Fdados
[6]: #DF-e%5FDistribuicao%5Fe%5FCT-e%5FDistribuicao
[7]: #Integracoes%5FNFEio
[8]: https://app.nfe.io
[9]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-consumidor-v2/#/Consumer%20Invoices/V2CompaniesByCompany%5FidConsumerinvoicesPost