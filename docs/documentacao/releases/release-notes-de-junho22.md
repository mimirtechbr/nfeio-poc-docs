---
sidebar_label: "Release notes de junho/22"
sidebar_position: 1
slug: release-notes-de-junho-22
date: 2022-08-25
last_update:
  date: 2022-08-25
title: "Release notes de junho/22 - NFE.io | Docs"
description: "Release Notes de junho/2022Nota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de DadosIntegrações NFE.io Release Notes de junho/2022 Novas funcionalidades, mudanças e correções de&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 3045
---

* [Release Notes de junho/2022][1]  
   * [Nota Fiscal de Serviço][2]  
   * [Nota Fiscal de Produto][3]  
   * [Consulta de Dados][4]  
   * [Integrações NFE.io][5]

# Release Notes de junho/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de junho pelo time de produto da NFE.io.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.

nova funcionalidade

Itapema/SC

Mais uma prefeitura implementada! Agora é possível emitir notas fiscais na prefeitura de Itapema/SC pela NFE.io!

nova funcionalidade

Osasco/SP

Agora é possível emitir notas fiscais na prefeitura de Osasco/SP pela NFE.io!

correção

São Luiz/MA, Cascavel/PR, Salvador/BA, Maceió/AL e Presidente Prudente/SP

As prefeituras descritas acima não aceitam cancelamento de nota via webservice.

correção

Barueri/SP

Foi incluído um tratamento para os campos do tomador no caso de alguma informação estar com mais caracteres do que é permitido pela prefeitura.

correção

Cascavel/PR

Problema:

* Falha ao informar o local de prestação do serviço quando este era diferente do município do Prestador e do Tomador de serviço.

Solução:

* Considerar os dados informados no grupo "location" para definir o local da prestação do serviço.

correção

Cascavel/PR

Foi feita uma correção para que o PDF fosse gerado da forma correta.

correção

Processamento

Fizemos uma correção para que a nossa base de consulta de endereço retorne corretamente os dados da cidade de São Vicente/RN. A origem do problema é que existe uma cidade de nome São Vicente em São Paulo e no momento da consulta, ao invés de retornar os dados da cidade do Rio Grande do Norte, era retornado os dados da cidade paulista.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.

correção

Carta de Correção

Problema:

* Erro ao gerar o PDF da carta de correção.

Solução:

* Foi realizado um tratamento no campo "Descrição" para evitar um erro causado na leitura dessa informação retornada pela SEFAZ.

correção

Campos da nota

Problema

* Os campos vICMSOp, pDif e vICMSDif estavam sendo informados com valor zerado no xml para o CST 51 quando não eram informados pelo cliente na integração.

Solução

* Foi realizada uma alteração para que esses campos não sejam informados no xml quando o cliente não envia a informação para eles.

correção

Carta de Correção

A API não aceitava uma nova carta de correção mesmo quando a primeira havia sido enviada com erro na integração e rejeitada pela SEFAZ.  
Foi realizada uma alteração no sistema para considerar o novo texto enviado na integração da carta de correção quando a primeira foi rejeitada pela SEFAZ.

## Consulta de Dados

Atividades relacionadas às consultas realizadas pela NFE.io.

mudança

Consulta de CNPJ

Em alguns casos de CNPJs terminados com "-00", a API retornava que o CNPJ era inválido. Corrigimos a validação para incluir esse tipo de CNPJs.

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.

mudança

Integração WHMCS Versão 2.1.3

Ajustamos a reemissão de nota em caso de cancelamento ou rejeição da prefeitura.

correção

Integração WHMCS Versão 2.1.3

Corrigimos o problema de notas que ficam sempre "processando" e não mudam de status.


[1]: #Release%5FNotes%5Fde%5Fjunho2022
[2]: #Nota%5FFiscal%5Fde%5FServico
[3]: #Nota%5FFiscal%5Fde%5FProduto
[4]: #Consulta%5Fde%5FDados
[5]: #Integracoes%5FNFEio