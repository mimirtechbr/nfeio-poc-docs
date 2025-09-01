---
sidebar_label: "Release notes de agosto/22"
sidebar_position: 1
slug: release-notes-de-agosto-22
date: 2022-09-28
last_update:
  date: 2022-11-04
title: "Release notes de agosto/22 - NFE.io | Docs"
description: "Release Notes de agosto/2022Plataformas NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoIntegrações NFE.ioDF-e Distribuição e CT-e DistribuiçãoConsulta de Dados Release Notes de agosto/2022 Novas&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 3087
---

* [Release Notes de agosto/2022][1]  
   * [Plataformas NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Integrações NFE.io][5]  
   * [DF-e Distribuição e CT-e Distribuição][6]  
   * [Consulta de Dados][7]

# Release Notes de agosto/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de agosto pelo time de produto da NFE.io.

## Plataformas NFE.io

Atividades relacionadas às plataformas gerenciadas pela NFE.io  

mudança

Consulta Guru  
Realizamos um ajuste no sistema para corrigir o controle de número de tentativas por IP: "Limite máximo de tentativas excedido".

## Nota Fiscal de Serviço

Atividades relacionadas à nota fiscal de serviço.  

nova funcionalidade

São Luiz/MA, Cascavel/PR, Salvador/BA, Maceió/AL

Algumas prefeituras não possuem o serviço para cancelamento de notas disponível via webservice, sendo assim, realizamos um tratamento no sistema para retornar essa informação via webhook para o cliente.

mudança

Vila Velha/ES

Realizamos um tratamento no sistema para realizar novas tentativas de consulta da nota quando a prefeitura retornar a mensagem "Erro, já existe um processo de envio de lote, aguarde o processo terminar."

mudança

Feira de Santana/BA

Atualizamos o sistema para utilizar a nova versão do provedor WebISS (ABRASF 2.02)

correção

Canoas/RS

Problema:

* A prefeitura de Canoas mudou a forma de disponibilização do pdf da nota fiscal e com isso o nosso sistema parou de obter o pdf e encaminhar para o tomador de serviço.

Solução:

* Fizemos os ajustes necessários para que o processo de captura do PDF no site da prefeitura voltasse a funcionar normalmente e com isso o pdf da nota passou a ser encaminhada para o tomador de serviço.

correção

Manaus/AM

Problema:

* O sistema estava calculando de forma errada o fuso horário quando o mesmo era diferente de -3.

Solução:

* Foi realizado o ajuste para considerar o fuso horário do local da empresa cadastrada no sistema.

## Nota Fiscal de Produto

Atividades relacionadas à nota fiscal de produto.  

nova funcionalidade

Email

A partir de agora, enviaremos de forma automática o email para o destinatário com o xml e o DANFE anexados.  
Para permitir o envio desse email de forma automática, faça uma solicitação para o nosso time de suporte (suporte@nfe.io).

nova funcionalidade

Campos da nota

Adicionamos a opção "Simples Nacional, excesso de sublimite da receita bruta" na lista de tipo de Regime Tributário para empresas que ainda se encontram no regime Simples Nacional, porém tem a necessidade de enviar o código CST em vez de CSOSN.

correção

Processamento de nota

Problema:

* Erro ao enviar um cancelamento quando já existe uma tentativa que foi rejeitada pela SEFAZ.

Solução:

* Permitir a geração de um novo xml para que seja enviado e autorizado pela SEFAZ.

correção

PDF

Problema:

* Falha na geração do PDF quando a nota possuí Carta de Correção vinculada.

Solução:

* Correção para permitir a geração do PDF quando existe Carta de Correção vinculada à nota fiscal.

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.  

nova funcionalidade

Woocommerce

Solicitação para exibição do plugin na loja do WordPress - está sendo disponibilizado gradualmente por eles.

correção

WHMCS

Problema:

* Problema na rotina periódica do envio de notas para a plataforma NFE.io

Solução:

* Foi realizado um ajuste no banco de dados para evitar que as notas fiquem paradas aguardando a integração com a plataforma NFE.io.

correção

WHMCS

Problema:

* Cliente emitiu uma nota e na sequência a mesma foi cancelada.
* Ao reenviar a nota para emissão novamente, o WHMCS está utilizando o mesmo valor da nota cancelada para o campo "ExternalId" e existe uma validação neste campo para não permitir que o valor seja repetido.

Solução:

* Alterar o WHMCS para que ele gere outra chave no campo "ExternalId" quando ocorreu uma nova emissão de notas, mesmo que seja referenciando uma nota anterior que foi cancelada.

## DF-e Distribuição e CT-e Distribuição

Atividades relacionadas às consultas do DF-e e do CT-e.  

correção

CTe Distribuição

Problema:

* Falha na captura de lotes disponbilizados pelo serviço de distribuição da SEFAZ Nacional

Solução:

* Realizamos os ajustes necessários para obter os lotes de CTe e disponibilizar os documentos capturados via webhook para o cliente.

## Consulta de Dados

Atividades relacionadas às consultas de dados.  

correção

Consulta de NFe  
Problema:

* O campo "statusCode" (cStat) é preenchido com o valor "0" independente da situação da nota.

Solução:

* Realizamos uma alteração no sistema para que o campo "statusCode" (cStat) seja preenchido com o valor "100" quando a nota estiver autorizada.

[1]: #Release%5FNotes%5Fde%5Fagosto2022
[2]: #Plataformas%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Integracoes%5FNFEio
[6]: #DF-e%5FDistribuicao%5Fe%5FCT-e%5FDistribuicao
[7]: #Consulta%5Fde%5FDados