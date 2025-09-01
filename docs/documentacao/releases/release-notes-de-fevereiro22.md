---
sidebar_label: "Release notes de fevereiro/22"
sidebar_position: 1
slug: release-notes-de-fevereiro-22
date: 2022-05-06
last_update:
  date: 2022-05-20
title: "Release notes de fevereiro/22 - NFE.io | Docs"
description: "Release Notes de fevereiro/2022Plataforma NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de Dados Release Notes de fevereiro/2022 Novas funcionalidades, mudanças e correções de&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2022/05/MvXwkC2cXL.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2855
---

* [Release Notes de fevereiro/2022][1]  
   * [Plataforma NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Consulta de Dados][5]

# Release Notes de fevereiro/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de fevereiro pelo time de produto da NFE.io.

## Plataforma NFE.io

Atividades relacionadas a plataforma da NFE.io.  

nova funcionalidade

Tela de Resumo de Utilização

Disponibilizamos mais detalhes sobre a utilização dos produtos do DFeDistribuição na tela do Resumo de Utilização.

nova funcionalidade

Listagem de Notas (nota de serviço e nota de produto)

Disponibilizamos para nossos clientes uma nova funcionalidade no processo de exportação de notas fiscais. Agora elas podem receber um notificação via e-mail após término da exportação. Na imagem abaixo, após a escolha da exportação de notas fiscais, é possível observar a tela na qual você é direcionado para indicar qual email a notificação será encaminhada.

[![Notificação email nota fiscal](https://nfe.io/docs/app/uploads/2022/05/MvXwkC2cXL.png "Notificação email nota fiscal")][6]

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Brasília/DF

Adicionamos o campo "paymentMethod" no layout de integração para ser utilizado exclusivamente na nota fiscal de Brasília a fim de informar o método de pagamento utilizado na tag "tPag".

nova funcionalidade

Emissão em lote via planilha

Alteramos o processo de emissão de notas em lote via planilha para permitir valores nulos nos campos de endereço do tomador.

## Nota Fiscal de Produto

Atividades relacionadas a nota fiscal de produto.  

nova funcionalidade

Carta de correção

Adicionalmente ao XML, agora temos também disponível o PDF da carta de correção! Essa nova função está disponível tanto via API quanto via plataforma da NFE.io. Via API, você encontra essa informação nesse [link][7].

correção

Processamento de notas fiscais  
Notas fiscais de algumas empresas ficaram paradas na fila de processamento e não seguiram o fluxo de emissão. Para solução, foi realizado um ajuste no fluxo de processamento para evitar que essa situação ocorra novamente.

## Consulta de Dados

Atividades relacionadas às diferentes consultas de dados.  

mudança

Consulta de Inscrição Estadual

Por conta de alterações na fonte de dados no Estado do Paraná, foi necessário um ajuste na leitura dos dados para compatibilização com o padrão NFE.io.


[1]: #Release%5FNotes%5Fde%5Ffevereiro2022
[2]: #Plataforma%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Consulta%5Fde%5FDados
[6]: http://https://nfe.io/docs/app/uploads/2022/05/MvXwkC2cXL.png
[7]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/V2CompaniesByCompany%5FidProductinvoicesByProduct%5Finvoice%5FidCorrectionletterPdfGet