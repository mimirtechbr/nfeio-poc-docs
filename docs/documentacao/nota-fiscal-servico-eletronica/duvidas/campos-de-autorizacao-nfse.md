---
sidebar_label: "Campos de autorização NFSe"
sidebar_position: 3
slug: campos-de-autorizacao-nfse
date: 2024-11-06
last_update:
  date: 2024-11-11
title: "Campos de autorização NFSe - NFE.io | Docs"
description: "Campos de Autenticação para Empresas que Emitem Nota Fiscal de ServiçoTipos de Autenticação para Emissão de Nota FiscalComo Preencher os Campos de Autenticação&#8230;"
author: "João Kita"
image: "https://nfepub.blob.core.windows.net/kita/msedge_qq1NC0uv4D.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7920
---

# Campos de Autenticação para Empresas que Emitem Nota Fiscal de Serviço

Para algumas prefeituras, pode ser necessário informar campos extras de autenticação para que a emissão seja possível. Abaixo segue uma descrição desses campos e como eles devem ser preenchidos.

**Requisitos**

* Ter uma empresa cadastrada (acesse [Cadastrar uma empresa][4])
* Prefeituras que exijam algum tipo de informação além do certificado para autenticação no webservice de emissão de nota (acesse [lista de prefeituras][5] para averiguar se sua prefeitura não é atendida por certificado digital)

## Tipos de Autenticação para Emissão de Nota Fiscal

Normalmente, quando uma empresa emite uma nota fiscal, a autenticação é feita por meio de um certificado digital válido. Para atender esse cenário, por padrão, é definida na NFE.io essa opção de autenticação, descrita em [Upload do Certificado Digital][6].

Contudo, algumas prefeituras exigem informações adicionais além do certificado digital para a emissão de notas via Webservice. Isso pode incluir:

* Uma senha
* Uma combinação de usuário e senha
* Uma chave de autorização

Para atender cenários onde esse tipo de autenticação é necessária, a NFE.io disponibiliza alguns campos para que a emissão consiga ser feita. Eles são as seguintes opções:

* "Usuário de acesso ao Webservice"
* "Senha de acesso ao Webservice"
* "Identificação de autorização fiscal"

Pela definição do nome, a descrição desses campos é autoexplicativa na forma como devem ser preenchidos. Contudo, para algumas particularidades de prefeituras, esses campos podem possuir outros significados.

Por fim, como ressaltado nos Requisitos no início do documento, essa opção só estará disponível para preenchimento quando a sua prefeitura requer esse tipo de dado. Caso a autenticação seja feita por meio de certificado, não é preciso se preocupar com esse tipo de informação.

No [link][5] já disponibilizado, é possível visualizar todas as prefeituras que estão integradas com a NFE.io e os tipos de autenticação necessários para cada prefeitura. Para aquelas em que esse tipo de informação é necessária, verifique todas aquelas prefeituras cuja coluna **_Column1.webService.authenticationMethod_** está preenchida com a informação **_UserAndPassword_**.

## Como Preencher os Campos de Autenticação

Nos casos em que a prefeitura exija os campos extras de autenticação, na plataforma da NFE.io essas opções estarão disponíveis para preenchimento na opção de **_Dados Fiscais_**, como mostrado abaixo:

![Campos de autenticação](https://nfepub.blob.core.windows.net/kita/msedge_qq1NC0uv4D.png "Campos de autenticação")

Essas opções estarão disponíveis após serem preenchidas as opções descritas como **_Dados básicos da empresa_** no cadastro de uma nova empresa para emissão.

No caso do uso da API, abaixo segue o trecho de JSON de como esses campos estão disponíveis:

```json
{ 
  "fiscalStatus": "Active",
  "loginName": "string", // Usuário de acesso ao Webservice
  "loginPassword": "string", // Senha de acesso ao Webservice
  "authIssueValue": "string", // Identificação de autorização fiscal
  "certificate": { ... }
}```

No json comples eles estão disponíveis da seguinte forma:

```json
{
  "companies": {
    "id": "string",
    "name": "string",
    "tradeName": "string",
    "federalTaxNumber": 0,
    "email": "string",
    "address": {
      "country": "string",
      "postalCode": "string",
      "street": "string",
      "number": "string",
      "additionalInformation": "string",
      "district": "string",
      "city": {
        "code": "string",
        "name": "string"
      },
      "state": "string"
    },
    "openningDate": "2024-10-28T16:31:41.583Z",
    "taxRegime": "Isento",
    "specialTaxRegime": "Automatico",
    "legalNature": "EmpresaPublica",
    "economicActivities": [
      {
        "type": "Main",
        "code": 0
      }
    ],
    "companyRegistryNumber": 0,
    "regionalTaxNumber": 0,
    "municipalTaxNumber": "string",
    "rpsSerialNumber": "string",
    "rpsNumber": 0,
    "issRate": 0,
    "environment": "Development",
    "fiscalStatus": "CityNotSupported",
    "federalTaxDetermination": "NotInformed",
    "municipalTaxDetermination": "NotInformed",
    "loginName": "string",
    "loginPassword": "string",
    "authIssueValue": "string",
    "certificate": {
      "thumbprint": "string",
      "modifiedOn": "2024-10-28T16:31:41.583Z",
      "expiresOn": "2024-10-28T16:31:41.583Z",
      "status": "Overdue"
    },
    "createdOn": "2024-10-28T16:31:41.583Z",
    "modifiedOn": "2024-10-28T16:31:41.583Z"
  }
}
```

Caso tenha alguma dúvida, entre em contato consco em suporte@nfe.io.


[1]: #Campos%5Fde%5FAutenticacao%5Fpara%5FEmpresas%5Fque%5FEmitem%5FNota%5FFiscal%5Fde%5FServico
[2]: #Tipos%5Fde%5FAutenticacao%5Fpara%5FEmissao%5Fde%5FNota%5FFiscal
[3]: #Como%5FPreencher%5Fos%5FCampos%5Fde%5FAutenticacao
[4]: https://nfe.io/docs/documentacao/nossa-plataforma/criar-empresa/
[5]: https://nfeio-my.sharepoint.com/:x:/g/personal/gabriel%5Fnfe%5Fio/EfHrnj4ygVRKhPdsY1n%5FlGcBe0-dfbTe8pwq0ctp7G4BhQ?rtime=AZHuIK3z3Eg&isSPOFile=1&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA5MTIyMTMxOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D
[6]: https://nfe.io/docs/documentacao/nossa-plataforma/upload-do-certificado-digital/