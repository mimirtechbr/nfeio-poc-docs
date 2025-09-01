---
sidebar_label: "Release notes de abril/22"
sidebar_position: 1
slug: release-notes-de-abril-22
date: 2022-05-09
last_update:
  date: 2022-06-22
title: "Release notes de abril/22 - NFE.io | Docs"
description: "Release Notes de abril/2022Nota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de DadosDF-e Distribuição e CT-e Distribuição Release Notes de abril/2022 Novas funcionalidades, mudanças&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2870
---


# Release Notes de abril/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de abril pelo time de produto da NFE.io.

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.

nova funcionalidade

 Validação dados da nota

Foi adicionada uma validação nos campos "código do município" e "UF", desta forma caso seja enviada uma informação não válida, o cliente receberá a mensagem de erro na resposta da chamada.

nova funcionalidade

 Cascavel/PR

Homologamos o município de Cascavél/PR e já está disponível no ambiente de produção.

mudança

Sorocaba/SP

A Prefeitura de Sorocaba atualizou a versão do sistema utilizado para emissão de notas fiscais de serviço o que gerou muita instabilidade durante o mês de abril. Após trocas de mensagens com o time técnico da prefeitura onde informamos algumas inconsistências, o sistema da prefeitura foi ajustado, consequentemente novas alterações foram realizadas no NFE.io e atualmente as notas estão sendo emitidas normalmente.

mudança

Provedor GIAP

Realizamos um tratamento no sistema para que o envio da nota seja realizado novamente utilizando o mesmo número de RPS quando a mensagem de erro da prefeitura for "ORA-00001:unique constraint violate".

mudança

Londrina/PR

Realizamos um tratamento no sistema para que a consulta seja realizada novamente quando a mensagem de erro da prefeitura for "\[E0201\] A NFS-e não foi encontrada".

mudança

Itabira/MG

A prefeitura de Itabira alterou o endereço do webservice de comunicação. Realizamos o ajuste necessário para reestabelecer a comunicação com a prefeitura através do novo endereço de webservice.

mudança

Londrina/PR

Constatamos que o sistema de emissão de notas da prefeitura fica instável durante a madrugada em função de uma rotina de backup realizada pelo provedor. Por conta dessa atividade frequente, no período informado, as emissões fiscais por meio da NFE.io se tornavam indisponíveis para essa cidade. Situação que acarretava em notas com falha no nosso serviço. Dispoinbilizamos um parâmetro para uso interno que define o período de processamento das notas, com isso podemos bloquear a comunicação com o sistema da prefeitura durante um período estipulado evitando assim duplicidade de notas em função dessa instabilidade da prefeitura.

correção

Cuiabá/MT

Foi constatada uma rejeição em virtude dos campos ISS e ISSRetido estarem sendo informados no xml. Ajuste no sistema para informar somente um dos campos.

correção

Provedor IPM Fiscal

Houve uma alteração na forma de validação da autenticação na comunicação com o provedor IPM Fiscal.Foi realizado o ajuste na autenticação com esse provedor para corrigir o erro.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.

mudança

 Validação dados da nota

Agora validação do certificado digital é realizada diretamente na entrada da nota. A mensagem sobre a situação do certificado será envida na resposta da chamada. Essa alteração foif feita pois antes, caso houvesse algum erro de certificado, você só saberia após o fim do processamento da nota.

correção

Processamento de nota

O erro "Duplicidade de NF-e com diferença na Chave de Acesso" ocorria por conta de uma falha no nosso processamento. Para correção, definimos um intervalo maior entre as consultas na SEFAZ para evitar a rejeição "Consumo Indevido" que é a causa raiz para o problema de duplicidade de NF-e.

correção

Processamento de nota

Foi corrigido o erro "Rejeicao: Erro na Chave de Acesso - Campo ID nao corresponde a concatenacao dos campos correspondentes". Para correção, foi realizado um ajuste de fuso horário para a geração da chave de acesso quando a mesma é enviada nas 3 horas finais do último dia do mês.

## Consulta de Dados

Atividades relacionadas às diferentes consultas de dados.  

mudança

Consulta de CNPJ

Em função de uma alteração no sistema do governo utilizado com fonte de dados, as consultas ficaram instáveis por algumas horas durante o dia 11/04\. Foram realizados os ajustes necessários para estabilizar o sistema e a operação voltou à normalidade em algumas horas.

correção

Consulta de Inscrição Estadual

Foi constadado um erro na atualização dos dados de um CNPJ quando ele é um produtor rural. Foi realizado um ajuste no sistema para buscar o CNPJ no cache considerando os 3 zeros no final da I.E. "000".

correção

Consulta de Inscrição Estadual

Foi constatada uma divergência nas informações retornadas se comparada com as informações fornecidas pela fonte de dados. Essa situação estava ocorrendo em função de uma atualização do cluster utilizado pelas soluções NFE.io. A falta de migração de um dos microserviços para o novo cluster gerou o problema fazendo com que o cache ficasse desatualizado. Foi realizada a migração do microserviço para o novo cluster solucionando o problema.

## DF-e Distribuição e CT-e Distribuição

Atividades relacionadas às consultas do DF-e e do CT-e.  

nova funcionalidade

Integrações

Disponibilizamos a integração com o serviço "SharePoint" para que as notas capturadas no serviço de distribuição da SEFAZ sejam encaminhadas via webhook. Para utilização desta funcionalidade, é necessário que o cliente possua uma conta no SharePoint e no Make.


[1]: #Release%5FNotes%5Fde%5Fabril2022
[2]: #Nota%5FFiscal%5Fde%5FServico
[3]: #Nota%5FFiscal%5Fde%5FProduto
[4]: #Consulta%5Fde%5FDados
[5]: #DF-e%5FDistribuicao%5Fe%5FCT-e%5FDistribuicao