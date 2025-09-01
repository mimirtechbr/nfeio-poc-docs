---
sidebar_label: "Release notes de julho/22"
sidebar_position: 1
slug: release-notes-de-julho-22
date: 2022-08-26
last_update:
  date: 2022-08-26
title: "Release notes de julho/22 - NFE.io | Docs"
description: "Release Notes de julho/2022Plataforma NFE.ioNota Fiscal de ServiçoNota Fiscal de Produto Release Notes de julho/2022 Novas funcionalidades, mudanças e correções de bugs feitas&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 3048
---

* [Release Notes de julho/2022][1]  
   * [Plataforma NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]

# Release Notes de julho/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de julho pelo time de produto da NFE.io.

## Plataforma NFE.io

Atividades relacionadas a plataforma da NFE.io  

mudança

Dados cadastrais empresas NFSe

Atualizamos a lista de opções de Natureza Jurídica para ser utilizada no cadastro da empresa com a última listagem disponibilizada pelo governo.

correção

Swagger NFSe

Fizemos uma correção para habilitar a utilização da listagem pelo Swagger de pessoas jurídica e física.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.  

nova funcionalidade

Matias Barbosa/MG

Agora está disponível para emissões fiscais a prefeitura de Matias Barbosa/MG!

nova funcionalidade

Itapema/SC

Está disponível para emissões fiscais a prefeitura de Itapema/SC!

nova funcionalidade

João Pessoa/PB

Agora na NFE.io é possível emitir notas fiscais em João Pessoa/PB!

mudança

Balneário Camboriú/SC

Fizemos a alteração de provedor e agora está disponível para emissões fiscais na prefeitura.

mudança

São Luis/MA

Em virtude de uma instabilidade no sistema da prefeitura, incluímos um tratamento para que sejam realizadas novas tentativas de emissão quando o sistema da prefeitura retornar o erro "ORA-01403: no data found".

mudança

São Paulo/SP

Incluímos um tratamento no sistema para evitar duplicidade de notas quando o sistema da prefeitura retornar o código de erro 224 informando que o RPS já foi utilizado anteriomente.

mudança

Juiz de Fora/MG

Nós atualizamos o provedor de emissões fiscais de Juiz de Fora e ele está disponível na NFE.io!

mudança

Barueri/SP

Incluímos uma validação para os campos do tipo texto na recepção da nota via API para identificar campos com mais caracteres do que o permitido.

correção

Itapema/SC

Alteração na formação do layout do arquivo json para evitar erros relacionados ao case da primeira letra do nome do parâmetro da nota.

correção

Presidente Prudente/SP

Alteamos o sistema para enviar 4 casas decimais no campo AliquotaISS do layout (arquivo xml).

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.  

nova funcionalidade

Processamento de nota

Já está disponível o campo tpAto no layout de integração da nota para atender a NT2021.004 V.1.00.

correção

Processamento de nota

Alteração na regra para definição do destinatário como pessoa estrangeira.

* Será considerado como pessoa estrangeira se o valor enviado no campo "federalTaxNumber" não passar nas validações de CNPJ e CPF e também se o campo "buyer.type" estiver nulo.

correção

Processamento de nota

Correção na leitura do campo "infProt" para notas rejeitadas pela SEFAZ.


[1]: #Release%5FNotes%5Fde%5Fjulho2022
[2]: #Plataforma%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto