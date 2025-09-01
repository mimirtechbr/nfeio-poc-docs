---
sidebar_label: "Release notes de setembro/22"
sidebar_position: 1
slug: release-notes-de-setembro-22
date: 2022-11-04
last_update:
  date: 2022-11-04
title: "Release notes de setembro/22 - NFE.io | Docs"
description: "Release Notes de setembro/2022Plataformas NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de Dados Release Notes de setembro/2022 Novas funcionalidades, mudanças e correções de&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 3110
---

* [Release Notes de setembro/2022][1]  
   * [Plataformas NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Consulta de Dados][5]

# Release Notes de setembro/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de setembro pelo time de produto da NFE.io.

## Plataformas NFE.io

Atividades relacionadas às plataformas gerenciadas pela NFE.io  

nova funcionalidade

Exportador Notas Fiscais

Adicionado no arquivo CSV criado na exportação de nota o campo da descrição dos serviços das notas exportadas.

nova funcionalidade

NFSe/Cadastro de empresa

A partir de agora você poderá utilizar caracteres especiais ao informar a senha da prefeitura no cadastro da empresa, além disso aumentamos a quantidade de caracteres para definição da série do RPS para atender algumas prefeituras que permitem utilizar mais do que 3 caracteres.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.  

mudança

Presidente Prudente/SP

Foi feita uma alteração no fluxo de emissão de nota para casos onde havia indisponibilidade na consulta do status de uma nota em processamento.

mudança

Itapema/SC

Quando era enviado para emissão uma nota com um RPS já utilizado, havia a impressão de que uma nova nota era criada com o mesmo RPS. Contudo, a prefeitura retorna a nota que já estava emitida. Houve um tratamento no processamento para que não haja a confusão de que uma nova nota foi emitida.

mudança

São José/SC

Feita a alteração do provedor Betha para IPM Fiscal.

correção

Provedor ISSNET

Foram feitos ajustes para corrigir a falha no cancelamento da nota.

correção

Provedor Simpliss

Feita uma correção para que a consuta do status da nota ocorresse da forma correta para assim normalizar o fluxo de emissão completo de uma nota.

correção

Provedor GINFES

Feita correção para que quando a consulta da nota retorna o erro "E45" seja interpretado que efetivamente houve erro na tentativa de emissão.

correção

Extrema/MG

Correções feitas no fluxo de processamento da nota fiscal.

correção

Vila Velha/ES

Efetuamos uma correção na consulta do status de uma nota enviada para emissão. Na forma anterior, não era possível confirmar se a nota estava emitida ou não.

correção

Maringá/PR

Foi efetuada a atualização das informações necessárias para executar o download do PDF da nota emitida.

correção

Praia Grande/SP

Efetuada correção para habilitar o cancelamento da nota fiscal.

correção

Brasília/DF

Feita correção na formatação do campo CNPJ da nota quando o mesmo possuía menos de 14 caracteres significativos. Havia falha na emissão da nota por conta da forma como essa informação estava sendo preenchida.

correção

Presidente Prudente/SP

Feita correção para que todas as mensagens de erro no processamento da nota retornem na visualização da mesma.

correção

Campo Grande/MS

Feita correção na assinatura do XML para corrigir as emissões fiscais.

correção

São José/SC

Feito tratamento para o campo "situação tributária" na emissão no novo provedor.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.  

correção

Processamento de nota

Corrigimos a visualização do XML da nota caso ela tenha uma carta de correção vinculada.

## Consulta de Dados

Atividades relacionadas às consultas de dados.  

mudança

Consulta de CNPJ

Fizemos um tratamento para preenchimento dos dados de endereço quando o mesmo não representa uma rua, mas uma cidade toda. Nesse formato retornamos os dados da cidade do endereço.


[1]: #Release%5FNotes%5Fde%5Fsetembro2022
[2]: #Plataformas%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Consulta%5Fde%5FDados