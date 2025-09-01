---
sidebar_label: "Release notes de março/22"
sidebar_position: 1
slug: release-notes-de-marco-22
date: 2022-05-06
last_update:
  date: 2022-05-06
title: "Release notes de março/22 - NFE.io | Docs"
description: "Release Notes de março/2022Plataforma NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de Dados Release Notes de março/2022 Novas funcionalidades, mudanças e correções de&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2867
---

* [Release Notes de março/2022][1]  
   * [Plataforma NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Consulta de Dados][5]

# Release Notes de março/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de março pelo time de produto da NFE.io.

## Plataforma NFE.io

Atividades relacionadas a plataforma da NFE.io.  

nova funcionalidade

Listagem de Notas (nota de serviço e nota de produto)

Implementamos uma funcionalidade para que o sistema envie uma notificação via e-mail quando ocorrer um erro no processo de exportação de notas listadas.

mudança

Listagem de Notas (nota de serviço e nota de produto)

Implementamos melhorias de performance no processo de exportação para grande quantidade de notas listadas.

mudança

Painel resumo de NFSe's emitidas por mês

Realizamos um ajuste na exibição do total de notas emitidas por mês para ser considerado na contabilização das notas o fuso horário (GMT -03:00). Essa alteração evita que notas emitidas no último dia do mês após as 21hrs, sejam totalizadas no mês seguinte.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Porto Belo/SC

Homologamos a integração com a prefeitura de Porto Belo/SC!

nova funcionalidade

API's

Disponibilizamos uma nova API para que o cliente possa realizar o reprocessamento de consulta da nota na prefeitura. Nesse link você consegue acessar com mais detalhes essa nova chamada.

correção

Swagger

Correção no Swagger da NFS-e para o download do PDF da nota ao usar a chave de API no cabeçalho.

correção

RPS Sequencial

Foi realizado um ajuste no sistema para evitar o travamento no fluxo de emissão de notas que utilizam RPS sequencial.

## Nota Fiscal de Produto

Atividades relacionadas a nota fiscal de produto.  

correção

Carta de Correção

Constatamos falha na geração da Carta de Correção. Foi ajustada a versão do evento que é informado no xml de envio da Carta de Correção para evitar a rejeição na SEFAZ. 

correção

Listagem de notas fiscais

As informações da nota, como o status por exemplo, não estavam sendo exibidas corretamente na tela de listagem de notas ou apresentavam um delay muito alto na exibição das informações na tela. Foi corrigido o fluxo de envio das informações da nota para o painel.

## Consulta de Dados

Atividades relacionadas às diferentes consultas de dados.  

correção

Consulta de Inscrição Estadual

A fonte de consulta de nota fiscal do estado do PR teve mudanças e por ora deixamos de utilizá-la. As notas do estado do PR continuam sendo consultadas normalmente através de outras fontes de dados.

correção

Consulta de Inscrição Estadual

No dia 11 de março todas as consultas realizadas de inscrições estaduais estavam retornando o mesmo resultado. O problema foi identificado na validação interna do sistema e a correção foi realizada em poucas horas após o ocorrido.


[1]: #Release%5FNotes%5Fde%5Fmarco2022
[2]: #Plataforma%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Consulta%5Fde%5FDados