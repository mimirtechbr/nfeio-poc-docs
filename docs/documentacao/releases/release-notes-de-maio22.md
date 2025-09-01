---
sidebar_label: "Release notes de maio/22"
sidebar_position: 1
slug: release-notes-de-maio-22
date: 2022-06-22
last_update:
  date: 2022-06-22
title: "Release notes de maio/22 - NFE.io | Docs"
description: "Release Notes de maio/2022Plataforma NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoNota Fiscal de ConsumidorConsulta de DadosDF-e Distribuição e CT-e Distribuição Release Notes de&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2919
---

* [Release Notes de maio/2022][1]  
   * [Plataforma NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Nota Fiscal de Consumidor][5]  
   * [Consulta de Dados][6]  
   * [DF-e Distribuição e CT-e Distribuição][7]

# Release Notes de maio/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de maio pelo time de produto da NFE.io.

## Plataforma NFE.io

Atividades relacionadas a plataforma da NFE.io.

mudança

Visualização de notas

Foi realizado um tratamento no fuso horário da data de emissão da nota para evitar que notas emitidas nas 3 últimas horas do último dia do mês sejam consideradas no mês seguinte.

correção

Exportação de dados de notas

Correção de bug na lógica de seleção dos registros para geração do arquivo CSV.

correção

Listagem de notas fiscais  
A paginação de grandes volumes de notas estava com lentidão. Melhoramos a performance do sistema tornando o processo mais eficiente independente da quantidade de notas a serem listadas.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.

nova funcionalidade

Viçosa/SP

Agora é possível emitir notas fiscais na prefeitura de Viçosa/MG pela NFE.io!

nova funcionalidade

Oscasco/SP

Mais uma prefeitura implementada! Agora é possível emitir notas fiscais na prefeitura de Osasco/SP pela NFE.io!

mudança

Provedor GIAP

Realizamos um tratamento no sistema para que o envio da nota seja realizado novamente utilizando o mesmo número de RPS quando a mensagem de erro da prefeitura for "**ORA-00001:unique constraint violate**".

mudança

Londrina/PR

Realizamos um tratamento no sistema para que a consulta seja realizada novamente quando a mensagem de erro da prefeitura for "**\[E0201\] A NFS-e não foi encontrada**".

mudança

Itabira/MG

A prefeitura de Itabira alterou o endereço do webservice de comunicação. Realizamos o ajuste necessário para reestabelecer a comunicação com a prefeitura através do novo endereço de webservice.

mudança

Londrina/PR

O sistema de emissão de notas da prefeitura de Londrina fica instável durante a madrugada em função de uma rotina de backup realizada pelo provedor. Dispoinbilizamos um parâmetro para uso interno que define o período de processamento das notas, com isso podemos bloquear a comunicação com o sistema da prefeitura durante um período estipulado evitando assim duplicidade de notas em função dessa instabilidade da prefeitura.

mudança

Provedor BHISS (Belo Horizonte/MG e Porto Alegre/RS)

Foi realizado um tratamento no sistema para que seja realizada novas tentativas de consulta da nota quando for retornado pela prefeitura o erro "\[E187\] Requisição não está acompanhada da autenticação via certificação digital.". Trata-se de uma instabilidade no sistema da prefeitura que é contornado realizando uma nova consulta no sistema.

correção

Provedor IPM Fiscal

Houve uma alteração na forma de validação da autenticação na comunicação com o provedor IPM Fiscal. Foi realizado o ajuste na autenticação com o provedor IPM Fiscal.

correção

São Paulo/SP

Quando o cliente envia uma nota para o nosso sistema utilizando um número de RPS já existente na prefeitura, o sistema seguia o fluxo de emissão capturando os dados (xml e PDF) da nota antiga. Foi realizada uma alteração no sistema para não obter as informações da nota antiga e alterar o status da nota atual para erro, informando que o RPS utilizado já existe na prefeitura.

correção

Cascavél/PR

Falha ao informar o local de prestação do serviço quando este era diferente do município do Prestador e do Tomador de serviço. Considerar os dados informados no grupo "location" para definir o local da prestação do serviço.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.

correção

Processamento de nota

Existe uma validação no nosso sistema para definir se o número informado é um CNPJ ou um CPF. Ela existe pois não obrigamos o cliente a informar qual o tipo do registro informado. Para alguns casos, o nosso algoritmo de definição classificava de forma incorreta qual o tipo do número informado. Para resolver essa situação, o cliente pode enviar essa informação na integração definindo se é um CNPJ ou um CPF, porém o sistema não estava considerando essa informação durante a validação. Foi realizada uma alteração no sistema para considerar a informação enviada na integração que define se é um CNPJ ou um CPF.

correção

Processamento de nota

O campo VBCFCP (Valor da Base de Cálculo do FCP) estava sendo preenchido pelo sistema independentemente do valor informado nos outros campos que o acompanham e com isso o xml não passava na validação da SEFAZ. Foi realizado um tratamento para que esse campo seja preenchido somente quando os demais campos relacionados ao Fundo de Combate à Pobreza também estiverem preenchidos.

correção

Carta de Correção

Erro ao gerar o PDF da carta de correção. Foi realizado um tratamento no campo "Descrição" para evitar um erro causado na leitura dessa informação retornada pela SEFAZ.

## Nota Fiscal de Consumidor

Atividades relacionadas à nota fiscal de consumidor.

correção

Processamento de nota

O status da nota não estava sendo atualizado para exibição no painel de listagem de notas. Foi corrido o processo que atualiza as informações utilizadas para exibição da nota no painel de listagem de notas.

correção

Processamento de notas

As notas emitidas nas três últimas horas do último dia do mês estavam sendo rejeitadas com erro na Chave de Acesso. Esse erro era gerado em virtude da chave de acesso utilizar o mês como uma das informações para compor a chave de acesso e como o sistema não estava considerando o fuso horário, o mês utilizado nessas três horas já era o mês seguinte causando a rejeição. Realizamos uma alteração no sistema para considerar o fuso horário em todas as etapas do processo.

## Consulta de Dados

Atividades relacionadas às consultas de dados.

correção

Consulta de Inscrição Estadual

Para alguns casos, as informações retornadas diferem da informação fornecida pela fonte de dados. Essa situação estava ocorrendo em função de uma atualização do cluster utilizado pelas soluções NFE.io. A falta de migração de um dos microserviços para o novo cluster gerou o problema fazendo com que o cache ficasse desatualizado.  
Foi realizada a migração do microserviço para o novo cluster solucionando o problema.

## DF-e Distribuição e CT-e Distribuição

Atividades relacionadas às consultas do DF-e e do CT-e.

nova funcionalidade

Integrações

Disponibilizamos a integração com o serviço "SharePoint" para que as notas capturadas no serviço de distribuição da SEFAZ sejam encaminhadas via webhook. Para utilização desta funcionalidade, é necessário que o cliente possua uma conta no **[SharePoint][8]** e no **[Make][8]**.


[1]: #Release%5FNotes%5Fde%5Fmaio2022
[2]: #Plataforma%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Nota%5FFiscal%5Fde%5FConsumidor
[6]: #Consulta%5Fde%5FDados
[7]: #DF-e%5FDistribuicao%5Fe%5FCT-e%5FDistribuicao
[8]: https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration