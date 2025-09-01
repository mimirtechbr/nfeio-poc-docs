---
sidebar_label: "Tipos de apuração de impostos federais e municipal"
sidebar_position: 5
slug: tipos-de-apuracao-de-impostos-federais-e-municipal
date: 2024-11-06
last_update:
  date: 2024-11-11
title: "Tipos de apuração de impostos federais e municipal"
description: "Definição na forma de Apuração dos Impostos Federais e MunicipaisContextoComo definir os campos de incidência dos impostos federais e municipalComo definir os campos&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2024/11/Alterar-empresa.jpg"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7922
---

# Definição na forma de Apuração dos Impostos Federais e Municipais

**Requisito**

* Caso queira definir a forma de apuração pela plataforma, é necessário [cadastrar uma empresa][7]

### Contexto

Na composição da nota fiscal de serviço, há a incidência de impostos federais (IRRF, COFINS, PIS e CSLL) e de um imposto municipal (ISS).

A forma de incidência dos impostos, tanto federais quanto municipal, pode variar conforme o regime tributário da empresa. Em termos gerais, o regime Simples Nacional simplifica e unifica a apuração dos tributos, o que impacta a forma de cálculo e pagamento tanto dos impostos federais quanto do ISS municipal. Dependendo do enquadramento da empresa, o Simples Nacional pode influenciar apenas os impostos federais, apenas o ISS, ambos os grupos de impostos ou, em alguns casos, nenhum deles.

Dentro do cenário onde pode haver algum tipo de influência nos impostos federais e/ou municipal, na NFE.io foram criados dois campos para que se defina qual o tipo de influência em cada um desses tipos de impostos.

### Como definir os campos de incidência dos impostos federais e municipal

Existem duas formas de definir os campos que irão definir o tipo de influência nos impostos federais e municipal.

Pela plataforma, os campos são descritos como "**_Determinação dos impostos pelo município_**" e "**_Determinação dos impostos pela federação_**". Para ambos os casos, as opções são: "**_Definido pelo Simples Nacional_**", "**_Padrão_**" e "**_Não informado_**".

* Definido pelo Simples Nacional: Os impostos serão calculados de acordo com as regras específicas do regime Simples Nacional.
* Padrão: Os impostos são calculados sem qualquer influência diferenciada, utilizando a forma de apuração padrão.
* Não informado: Nenhuma configuração foi especificada para o cálculo dos impostos.

Pela API, os campos para definição da forma de apuração dos impostos federais e municipal são "**_FederalTaxDetermination_**" e "**_MunicipalTaxDetermination_**". Para ambos os campos, a definição é a partir de uma propriedade do tipo _enum_ com as seguintes opções: **_NotInformed_**, **_Default_** e **_SimplesNacional_**.

#### Como definir os campos pela plataforma

1. Antes de conseguir definir a forma de apuração, é necessário [cadastrar uma empresa][7], como informado no requisito.
2. Após o cadastro, a primeira ação é alterar a empresa.

![](/static/docs/nota-fiscal-servico-e/Alterar-empresa.jpg)

1. Depois, selecione a opção do box "Dados Fiscais".

![](/static/docs/nota-fiscal-servico-e/Selecao-dados-fiscais-2.jpg)

1. Dentro do box de "Dados Fiscais", as opções para definir a forma do regime de apuração estão descritas no box "Dados de Impostos".

![](/static/docs/nota-fiscal-servico-e/Dados-de-impostos.jpg)

Nesse box, as opções "Determinação dos impostos pelo município" e "Determinação dos impostos pela federação" são as formas para definir como o regime de apuração da empresa irá influenciar na definição dos impostos federais e municipal.

1. Em ambos os boxes, as opções são as demonstradas abaixo.

![](/static/docs/nota-fiscal-servico-e/TIpos-de-preenchimento.jpg)

Como demonstrado, as três opções são "Não informado", "Padrão" e "Definido pelo Simples Nacional".

#### Como definir os campos pela API

Na API, ambos os campos estão dentro do objeto "**_Company_**"

```
{
  "companies": {
    "id": "xxx",
    "name": "XXX S.A.",
    "tradeName": "asdas",
    "federalTaxNumber": 11111111111111,
    "address": {
      "country": "",
      "postalCode": "11111-111",
      "street": "Avenida XXX",
      "number": "111",
      "district": "Barra XXX",
      "city": {
        "code": "4314902",
        "name": "Porto Alegre"
      },
      "state": "RS"
    },
    "taxRegime": "LucroReal",
    "specialTaxRegime": "Nenhum",
    "legalNature": "SociedadeAnonimaFechada",
    "economicActivities": [],
    "regionalTaxNumber": 11111111,
    "municipalTaxNumber": "11111111",
    "rpsSerialNumber": "IO",
    "rpsNumber": 10,
    "issRate": 0.0439,
    "environment": "Development",
    "fiscalStatus": "Active",
    "federalTaxDetermination": "NotInformed",
    "municipalTaxDetermination": "NotInformed",
    "certificate": {
      "thumbprint": "1111",
      "modifiedOn": "2022-04-20T17:11:31.940047+00:00",
      "expiresOn": "2022-12-03T13:05:23+00:00",
      "status": "Overdue"
    },
    "createdOn": "2019-03-01T14:14:41.5031368+00:00",
    "modifiedOn": "2024-06-27T14:52:04.4986016-03:00"
  }
}
```

Para alterar qualquer um dos campos, basta [criar uma empresa][8] ou [alterar uma empresa][9] como demonstrado no swagger utilizando o modelo do json descrito acima.

### Informações adicionais

Esses campos são definidos para atender, principalmente, o Emissor de NFSe Nacional. Caso sua prefeitura não exija a definição diferenciada dos impostos federais e municipal, não é preciso considerar o uso desses campos.

Caso tenha alguma dúvida, entre em contato por suporte@nfe.io.


[1]: #Definicao%5Fna%5Fforma%5Fde%5FApuracao%5Fdos%5FImpostos%5FFederais%5Fe%5FMunicipais
[2]: #Contexto
[3]: #Como%5Fdefinir%5Fos%5Fcampos%5Fde%5Fincidencia%5Fdos%5Fimpostos%5Ffederais%5Fe%5Fmunicipal
[4]: #Como%5Fdefinir%5Fos%5Fcampos%5Fpela%5Fplataforma
[5]: #Como%5Fdefinir%5Fos%5Fcampos%5Fpela%5FAPI
[6]: #Informacoes%5Fadicionais
[7]: https://nfe.io/docs/documentacao/nossa-plataforma/criar-empresa/
[8]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-servico-v1/#/Companies/Companies%5FPost
[9]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-servico-v1/#/Companies/Companies%5FPut