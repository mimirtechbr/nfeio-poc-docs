---
sidebar_label: "Release notes de janeiro/22"
sidebar_position: 1
slug: release-notes-de-janeiro-22
date: 2022-02-08
last_update:
  date: 2022-02-08
title: "Release notes de janeiro/22 - NFE.io | Docs"
description: "Release Notes de janeiro/2022Nota Fiscal de ServiçoNota Fiscal de Produto Release Notes de janeiro/2022 Novas funcionalidades, mudanças e correções de bugs feitas no&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2799
---

* [Release Notes de janeiro/2022][1]  
   * [Nota Fiscal de Serviço][2]  
   * [Nota Fiscal de Produto][3]

# Release Notes de janeiro/2022

Novas funcionalidades, mudanças e correções de bugs feitas no mês de janeiro pelo time de produto da NFE.io.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Arapongas/PR

Disponibilizamos uma nova prefeitura na plataforma de emissão de notas de serviço.

nova funcionalidade

Volta Redonda/RJ

Estamos felizes em comunicar que homologamos mais uma prefeitura na nossa plataforma! Volta Redonda-RJ já está disponível para emissão de notas.

nova funcionalidade

Brotas/SP

Mais uma prefeitura implementada! Agora você também pode emitir notas fiscais em Brotas/SP.

nova funcionalidade

Conchal/SP

Conchal também possui integração ativa para emitirmos notas fiscais!

nova funcionalidade

São Paulo/SP

Disponibilizamos um novo campo no json de envio da nota por meio da API para atender a uma alteração realizada pela prefeitura de São Paulo.

Na API o novo campo se chama "_PaidAmount_" e na prefeitura ele é correspondente ao campo "_Valor Total Recebido_".

mudança

Rio de Janeiro/RJ

Conforme comunicado do provedor "Nota Carioca", fizemos o ajuste na url do ambiente de homologação do sistema de emissão de NFS-e.

correção

Prefeituras que usam RPS sequencial.

Nós implementamos uma correção no fluxo de emissão quando é usado um número de RPS que já foi utilizado na prefeitura. No modelo anterior, o sistema identificava que o RPS já havia sido utilizado, contudo ele não era capaz de corrigir a informação da nota e emitir a mesma. Nesse processo, por conta do RPS ser o errado, a nota constava com o status de falha na NFE.io. Mas as notas seguintes conseguiam ser emitidas com a informação correta.

Na nova implementação, mesmo que seja informado um RPS já usado, a informação icorreta da nota será corrigida e a nota será emitida normalmente.

correção

Salvador/BA

Incluímos no xml de envio para a prefeitura o campo "_ValorLiquidoNfse_". Esse campo não estava sendo enviado para as emissões e por isso fizemos a inclusão dessa informacão.

O valor enviado nesse campo é resultado do cálculo abaixo:

_ValorLiquidoNfse = Valor total dos serviços - Valor dos impostos retidos_

## Nota Fiscal de Produto

Atividades relacionadas a nota fiscal de produto.  

nova funcionalidade

Nova Funcionalidade.

Estamos felizes em comunicar que foi disponibilizado na nossa API de integração a possibilidade de envio do evento de Carta de Correção.

Acesse o link abaixo para obter os detalhes de como deve ser feito a integração:  
[https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/V2CompaniesByCompany\_idProductinvoicesByProduct\_invoice\_idCorrectionletterPut][4]

mudança

Sefaz/CE.

A SEFAZ/CE passou a utilizar a SEFAZ/RS Virtual para as emissões fiscais. Os ajustes necessários na nossa plataforma já foram concluídos e estão disponíveis no ambiente de produção.

mudança

Campos para emissão da nota.

No campo _Modalidade do frete (modFrete)_ adicionamos como opções de escolha desse campo as opções 3 e 4 para a modalidade do frete da nota fiscal de produto. Na nossa API, esse campo representa a opção _freightModality_.

Com essa nova adição, temos os seguintes campos disponíveis:

0=Contratação do Frete por conta do Remetente (CIF);  
1=Contratação do Frete por conta do Destinatário (FOB);  
2=Contratação do Frete por conta de Terceiros;  
3=Transporte Próprio por conta do Remetente;  
4=Transporte Próprio por conta do Destinatário;  
9=Sem Ocorrência de Transporte.


[1]: #Release%5FNotes%5Fde%5Fjaneiro2022
[2]: #Nota%5FFiscal%5Fde%5FServico
[3]: #Nota%5FFiscal%5Fde%5FProduto
[4]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/V2CompaniesByCompany%5FidProductinvoicesByProduct%5Finvoice%5FidCorrectionletterPut