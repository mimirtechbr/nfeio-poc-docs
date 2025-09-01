---
sidebar_label: "Release notes de outubro/22"
sidebar_position: 1
slug: release-notes-de-outubro-22
date: 2022-11-04
last_update:
  date: 2022-11-04
title: "Release notes de outubro/22 - NFE.io | Docs"
description: "Release Notes de outubro/2022Plataformas NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoNota Fiscal de ConsumidorConsulta de Dados Release Notes de outubro/2022 Novas funcionalidades, mudanças&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 3114
---

* [Release Notes de outubro/2022][1]  
   * [Plataformas NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Nota Fiscal de Consumidor][5]  
   * [Consulta de Dados][6]

# Release Notes de outubro/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de outubro pelo time de produto da NFE.io.

## Plataformas NFE.io

Atividades relacionadas às plataformas gerenciadas pela NFE.io  

nova funcionalidade

Plataforma

Disponibilizado o botão para contato com suporte na tela de contrato.

correção

Plataforma NFE.io

Correção dos pop-ups que não se fecham durante o uso da plataforma.

correção

Exportação de Notas

Melhoramos a visualização de quais dados serão necessários para efetuar a exportação de informações.

correção

Tela de Pagamentos

Correção no momento de se escolher a forma de pagamento.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.  

nova funcionalidade

Caxias do Sul/RS

As emissões fiscais em Caxias do Sul estão liberadas na NFE.io!

nova funcionalidade

Sobral/CE

Também disponibilizamos em Sobral as emissões fiscais!

nova funcionalidade

Iguatu/CE

Iguatu é mais uma prefeitura homologada para emissões na NFE.io!

nova funcionalidade

São José dos Pinhais/PR

São José dos Pinhais é mais uma prefeitura disponível para emissões fiscais pela NFE.io!

nova funcionalidade

Caxias do Sul/RS

Caxias do Sul está disponível para emissões!

correção

Guarulhos/SP

Foram feitas adequações nas emissões fiscais em Guarulhos para prestadores do regime do Simples Nacional.

correção

Recife/PE

Correção na emissão caso os dados de endereço do tomador estão nulos.

correção

Santos/SP

Correção na emissão quando há nos dados da nota o caracter especial "&".

correção

Vila Velha/ES

Modificações na assinatura do XML enviado para emissão.

correção

Itapema/SC

Feita validação de que o dado do CNPJ tenha a quantidade de caracteres válidos aceitos na prefeitura.

correção

Presidente Prudente/SP

Feita correção para que durante a consulta do status da nota seja constatado corretamente que a nota foi emitida.

correção

Blumenau/SC

Impelementado o tratamento do retorno da consulta de nota quando há o retorno "E900". No caso desse retorno, a nota não deve retornar erro, mas que é necessário reconsultar o status da mesma.

correção

Brasília/DF

Feitas correções nos campos de endereço do tomador para emissão.

correção

Porto Alegre/RS

Feita correção para tratamento de retorno inconsistente para a nota quando o campo do número do endereço está divergente do padrão especificado pela prefeitura.

correção

Piracicaba/SP

Correção na geração do dado enviado para emissão na prefeitura. Foi corrigida a inserção da senha para autenticação nas emissões fiscais.

correção

Itapema/SC

Correção no preenchimento do campo de natureza de operação no envio da nota.

correção

Serra/SC

Correções no momento da consulta de uma nota em processamento.

correção

Caxias do Sul/RS

Correção na formatação de como o código federal de serviço é enviado para emissão.

correção

Bady Bassit/SP

Correção na forma de autenticar a comunicação com a prefeitura para emissão da nota.

correção

Campinas/SP

Correções no dado enviado para emissão da nota de forma a ser aceito para emissão.

correção

São José/SC

Correção na forma de autenticar a comunicação com a prefeitura para emissão.

correção

Sorocaba/SP

Correção da parametrização dos dados que são consultados no momento do processamento da nota.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.  

nova funcionalidade

Campos da Nota

Feita inclusão do dado de ICMS "CSOSN201" na lista de códigos disponíveis.

correção

Campos da nota

Feita validação para garantia de que o dado e-mail do comprador é valido para envio da nota.

## Nota Fiscal de Consumidor

Atividades relacionadas à nota fiscal de produto.  

correção

Cancelamento

Feita a correção redisponibilizar o cancelamento de nota.

## Consulta de Dados

Atividades relacionadas às consultas de dados.  

mudança

Consulta de Inscrição Estadual

Feitos ajustes para disponibilizar o retorno correto na consulta "onlyOne" quando a situação da IE se encontra como "Cancelled" e não "NotFound".

correção

Consulta de CNPJ

Feitas correções para cessar indisponibilidade das consultas. Foi corrigida a url na qual é feita a consulta, bem como o aumento da quantidade de instâncias disponíveis.


[1]: #Release%5FNotes%5Fde%5Foutubro2022
[2]: #Plataformas%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Nota%5FFiscal%5Fde%5FConsumidor
[6]: #Consulta%5Fde%5FDados