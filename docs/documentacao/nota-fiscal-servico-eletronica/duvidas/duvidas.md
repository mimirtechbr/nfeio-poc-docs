---
sidebar_label: "Dúvidas"
sidebar_position: 1
date: 2020-09-22
last_update:
  date: 2020-11-11
title: "Dúvidas na Integração da Nota Fiscal de Serviço - NFE.io | Docs"
description: "Iremos responder algumas perguntas frequentes em relação às dúvidas no momento da integração com nossa API de Notas Fiscais de Serviço."
author: "Gabriel Marquez"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 584
---

# Dúvidas na Integração da Nota Fiscal de Serviço (NFS-e)

Nesta seção, iremos responder algumas perguntas frequentes em relação às **dúvidas** no momento da integração com nossa API de Notas Fiscais de Serviço. Caso não encontrar uma resposta para sua dúvida, fique à vontade para [entrar em contato][8] e enviar sua pergunta.

## Quais os campos obrigatórios para emissão das notas fiscais?

Essa é uma das dúvidas recorrente em nossa plataforma, pois existem alguns casos de uso no momento de realizar a emissão de uma Nota Fiscal de Serviço, que dependendo do cenário os campos a serem informados podem variar, abaixo estão listados alguns cenários mais comuns.

* [Cenário 1:][9] Com cálculo automático de impostos nesse caso nossa plataforma que será responsável por identificar os detalhes tributários e calcular os valores dos impostos a serem enviados para a prefeitura no processamento da nota fiscal.
* [Cenário 2:][10] Sem cálculo automático de impostos nesse caso você tem todo o controle sobre os detalhes tributários e valores dos impostos a serem enviados para a prefeitura no processamento da nota fiscal.
* [Cenário 3:][11] \- Com cliente domiciliado fora do Brasil esse caso ocorre quando a empresa que vai emitir a nota fiscal (prestador do serviço) está vendendo algum serviço/produto para um cliente que está domiciliado fora do Brasil.
* [Cenário 4:][12]\- Com cliente não identificado esse caso ocorre quando a empresa que vai emitir a nota fiscal (prestador do serviço) está vendendo algum serviço/produto para um cliente que não foi possível ser identificado no momento da venda.
* [Cenário 5:][13]\- Empresa com Tipo de tributação diferenciada esse caso ocorre quando a empresa que vai emitir a nota fiscal (prestador do serviço) e o tipo da tributação não segue o padrão "Dentro do Município".

## Cenário 1: Com Cálculo automático de impostos

Nossa API realiza o cálculo de impostos automaticamente com base no código de serviço informado, sem a necessidade de preencher os campos de impostos, como por exemplo, o valor da alíquota de ISS.

Segue abaixo um exemplo de JSON de envio para cálculo automático:

```json
{
"borrower": {
// Tipos de tomadores de Serviço, opções são 'Undefined', 'NaturalPerson', 'LegalEntity'
"type": "LegalEntity",
"name": "Banco do Brasil SA",
// CNPJ / CPF somente números sem ponto, traço, barra ou virgula
"federalTaxNumber": 191,
// Informar somente quando necessário na prefeitura da empresa que está emitindo
"municipalTaxNumber": null,
"email": "joao.silva@emaildobancodobrasil.com.br",
"address": {
    "country": "BRA",
    "postalCode": "01430-000",
    "street": "Avenida Brasil",
    "number": "418",
    "additionalInformation": "ANDAR 1",
    "district": "Jardins",
    "city": {
       "code": "3550308",
       "name": "São Paulo"
    },
    "state": "SP"
    }
},
"cityServiceCode": "0101",
"description": "descricao da nota fiscal",
"servicesAmount": 1.00,
}
```

## Cenário 2: Sem cálculo automático de impostos

Caso haja a necessidade de informar o valor de algum imposto, voce será obrigado a preencher todos os campos de aliquotas, alterando o valor da aliquota desejada e definindo o valor 0 (zero) para os demais campos de aliquotas.

Segue abaixo um exemplo de JSON de envio para preenchimento manual:

```json
{
"borrower": {
// Tipos de tomadores de Serviço, opções são 'Undefined', 'NaturalPerson', 'LegalEntity'
"type": "LegalEntity",
"name": "Banco do Brasil SA",
// CNPJ / CPF somente números sem ponto, traço, barra ou virgula
"federalTaxNumber": 191,
// Informar somente quando necessário na prefeitura da empresa que está emitindo
"municipalTaxNumber": null,
"email": "joao.silva@emaildobancodobrasil.com.br",
"address": {
    "country": "BRA",
    "postalCode": "01430-000",
    "street": "Avenida Brasil",
    "number": "418",
    "additionalInformation": "ANDAR 1",
    "district": "Jardins",
    "city": {
       "code": "3550308",
       "name": "São Paulo"
    },
    "state": "SP"
    }
},
"cityServiceCode": "0101",
"description": "descricao da nota fiscal",
"servicesAmount": 1.00,
// Informar o valor em decimal, ou seja, 2% = 0,02 = 2 / 100
"issRate": 0.02,
"issTaxAmount": 0.02,
"deductionsAmount": 0.00,
"discountUnconditionedAmount": 0.00,
"discountConditionedAmount": 0.00,
"irAmountWithheld": 0.00,
"pisAmountWithheld": 0.00,
"cofinsAmountWithheld": 0.00,
"csllAmountWithheld": 0.00,
"inssAmountWithheld": 0.00,
"issAmountWithheld": 0.00,
"othersAmountWithheld": 0.00,
}
```

## Cenário 3: Com cliente domiciliado fora do Brasil

Com base nos dados da nota fiscal, nossa plataforma é capaz de identificar o que deve ser enviado para o sistema das prefeituras para emissão da nota fiscal. Um dos cenários muito comum é quando a empresa que precisa emitir a nota fiscal tem um cliente fora do Brasil, quando isso ocorre alguns campos do tomador não são obrigátorios.

Nossa plataforma vai identificar que um cliente é fora do Brasil utilizando o campo **address.country** como referência, os valores que podem ser informados seguem o padrão [ISO 3166-1][14].

Segue abaixo um exemplo de JSON com os campos básicos para emitir uma nota fiscal com um cliente/tomador fora do Brasil:

```json
{
  "borrower": {
    "type": "Undefined",
    "name": "Google LLC",
    "federalTaxNumber": 0,
    "email": "joao.silva@emaildogoogle.com.br",
    "address": {
      "country": "USA",
      "postalCode": "02142",
      "street": "Main Street",
      "number": "355",
      "additionalInformation": "",
      "district": "Downtown",
      "city": { 
        "name": "Cambridge"
      },
      "state": "MA"
    }
  },
  "cityServiceCode": "0101",
  "description": "descricao da nota fiscal",
  "servicesAmount": 1.00,
}
```

## Cenário 4: Com cliente não identificado

Com base nos dados da nota fiscal, nossa plataforma é capaz de identificar o que deve ser e não deve ser enviado para o sistema das prefeituras para emissão da nota fiscal.

Um dos cenários muito comum é quando a empresa que precisa emitir a nota fiscal e tem um cliente que não foi identificado, ou seja, não tem o CPF/CNPJ, Nome e Endereço do Cliente.

Em geral esse cenário é simples, porém muitas prefeituras exigem o envio de alguns campos, por isso temos uma sugestão de solução que funciona em todas as prefeituras e pró-fisco, recomendamos também que avalie com seu contador antes de utilizar essa solução.

Segue abaixo um exemplo de JSON com os campos básicos para emitir uma nota fiscal com um cliente/tomador que não foi identificado, repare que os campos **address.city.name, address.city.code, address.state** devem ser informados de forma fixa utilizando os dados da sua empresa como referencia. Estamos fazemos isso pois nesse caso estamos declarando ao fisco que a empresa deve os tributos para a cidade em que a empresa está registrada.

```json
{
"borrower": {
"type": "Undefined",
"name": "CLIENTE NAO IDENTIFICADO",
"federalTaxNumber": 0,
"email": null,
"address": {
"country": "BRA",
"postalCode": "00000-000",
"street": "RUA NAO IDENTIFICADO",
"number": "S/N",
"additionalInformation": "",
"district": "NAO IDENTIFICADO",
"city": {
"name": "{Cidade da Sua Empresa}"
"code": "{Cód. IBGE da Cidade da Sua Empresa}"
},
"state": "{Estado da sua Empresa}"
}
},
"cityServiceCode": "0101",
"description": "descricao da nota fiscal",
"servicesAmount": 1.00,
}
```

## Cenário 5: Empresa com tipo de tributação diferenciada

Em alguns cenários as empresas que emitem as notas fiscais de serviços e o tipo da tributação não segue o padrão "Dentro do Município", essa diferenciação aparece junto com a necessidade de informar para a prefeitura que ela possui alguma isenção, imunidade, seja por uma lei ou por um processo judicial.

Para qualquer um desses casos nossa plataforma, conta com o campo Tipo da tributação (taxationType) e com ele é possível informar qualquer uma das opções:

* None: Nenhum
* WithinCity: Dentro do município
* OutsideCity: Fora do município
* Export: Exportação
* Free: Livre
* Immune: Imune
* SuspendedCourtDecision: Suspenso por decisão judicial
* SuspendedAdministrativeProcedure: Suspenso por processo administrativo
* OutsideCityFree: Livre e Fora do município
* OutsideCityImmune: Imune e Fora do município
* OutsideCitySuspended: Suspenso por decisão judicial e Fora do município
* OutsideCitySuspendedAdministrativeProcedure: Suspenso por processo administrativo e Fora do município

Segue abaixo um exemplo de JSON para emissão com imunidade.

```json
{
"borrower": {
// Tipos de tomadores de Serviço, opções são 'Undefined', 'NaturalPerson', 'LegalEntity'
"type": "LegalEntity",
"name": "Banco do Brasil SA",
// CNPJ / CPF somente números sem ponto, traço, barra ou virgula
"federalTaxNumber": 191,
// Informar somente quando necessário na prefeitura da empresa que está emitindo
"municipalTaxNumber": null,
"email": "joao.silva@emaildobancodobrasil.com.br",
"address": {
    "country": "BRA",
    "postalCode": "01430-000",
    "street": "Avenida Brasil",
    "number": "418",
    "additionalInformation": "ANDAR 1",
    "district": "Jardins",
    "city": {
       "code": "3550308",
       "name": "São Paulo"
    },
    "state": "SP"
    }
},
"taxationType": "Immune",
"cityServiceCode": "0101",
"description": "descricao da nota fiscal",
"servicesAmount": 1.00,
}
```


[1]: #Duvidas%5Fna%5FIntegracao%5Fda%5FNota%5FFiscal%5Fde%5FServico%5FNFS-e
[2]: #Quais%5Fos%5Fcampos%5Fobrigatorios%5Fpara%5Femissao%5Fdas%5Fnotas%5Ffiscais
[3]: #Cenario%5F1%5FCom%5FCalculo%5Fautomatico%5Fde%5Fimpostos
[4]: #Cenario%5F2%5FSem%5Fcalculo%5Fautomatico%5Fde%5Fimpostos
[5]: #Cenario%5F3%5FCom%5Fcliente%5Fdomiciliado%5Ffora%5Fdo%5FBrasil
[6]: #Cenario%5F4%5FCom%5Fcliente%5Fnao%5Fidentificado
[7]: #Cenario%5F5%5FEmpresa%5Fcom%5Ftipo%5Fde%5Ftributacao%5Fdiferenciada
[8]: https://nfe.io/#contato
[9]: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/#Cenario%5F1%5FCom%5FCalculo%5Fautomatico%5Fde%5Fimpostos
[10]: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/#Cenario%5F2%5FSem%5Fcalculo%5Fautomatico%5Fde%5Fimpostos
[11]: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/#Cenario%5F3%5FCom%5Fcliente%5Fdomiciliado%5Ffora%5Fdo%5FBrasil
[12]: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/#Cenario%5F4%5FCom%5Fcliente%5Fnao%5Fidentificado
[13]: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/#Cenario%5F5%5FEmpresa%5Fcom%5Ftipo%5Fde%5Ftributacao%5Fdiferenciada
[14]: https://en.wikipedia.org/wiki/ISO%5F3166-1