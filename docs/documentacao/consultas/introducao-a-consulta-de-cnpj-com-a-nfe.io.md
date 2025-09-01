---
sidebar_label: "Introdução à consulta de CNPJ com a NFE.io"
sidebar_position: 3
slug: introducao-a-consulta-de-cnpj-com-anfe-io
date: 2021-05-07
last_update:
  date: 2021-05-07
title: "Introdução à consulta de CNPJ com a NFE.io - NFE.io | Docs"
description: "Introdução à consulta de CNPJ com a NFE.io1. Base para a consulta de CNPJ2. Parâmetros retornadosDados de retorno Introdução à consulta de CNPJ&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2021/02/consulta-cnpj.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 1808
---

# Introdução à consulta de CNPJ com a NFE.io

> Nesse artigo vamos introduzir como é feita a consulta de CPF via API da NFE.io

A consulta de CNPJ tem como base a busca dos dados do cartão CNPJ de empresas que estão disponíveis no site da Receita Federal. Os dados que a API retorna são as informações encontradas a partir da consulta feita na seguinte url: 

[][5][https://servicos.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva\_solicitacao.asp][5] 

Ao acessar a url acima, você é direcionado para a página mostrada abaixo. Nessa imagem, é possível observar que, a partir da informação de um CNPJ, são retornados os dados cadastrais da informação usada na consulta.

> ![](/static/docs/consultas/consulta-cnpj.png)**Figura 1\. Imagem de exemplo da página de consulta do cartão CNPJ**

Abaixo segue um exemplo do cartão CNPJ de uma consulta feita.

> ![](/static/docs/consultas/Cartao-CNPJ.png)**Figura 2\. Cartão CNPJ econtrado na busca**

### **1\. Base para a consulta de CNPJ**

Para poder se consultar os dados cadastrais do cartão CNPJ a partir da API da NFE.io é necessário informar o CNPJ da empresa a ser consultada. É possível encontrar mais informações sobre a API na documentação da NFE.io na seguinte url:

[][6][https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-cnpj-v1/][6] 

Nela é possível observar a existência de duas versões para a consulta de CNPJ. Ambas as url's estão abaixo.

| Método | URL                                                                                 |
| ------ | ----------------------------------------------------------------------------------- |
| GET    | [https://legalentity.api.nfe.io/v1/legalentities/basicInfo/\{federalTaxNumber][7]\} |

| Método | URL                                                                                 |
| ------ | ----------------------------------------------------------------------------------- |
| GET    | [https://legalentity.api.nfe.io/v2/legalentities/basicInfo/\{federalTaxNumber][8]\} |

O CNPJ a ser informado deve estar no mesmo campo da informação _federalTaxNumber_. O número deve ser informado sem barras traços e pontos.

Ambas as versões trazem os mesmos dados. A diferença entre a V1 e a V2 é que na V1 a situação cadastral retorna o dado como é disposto pela RFB. Na V2 esse dado é parametrizado de acordo com uma lista de status pré determinada com os parâmetros em inglês.

O parâmametro necessário para conseguir autenticar a chamada na API é a informação da api key. Ela está disponível na plataforma da NFE.io, e é necessário que seja utilizada a autenticação referente a consulta de dados.

Abaixo segue o exemplo de uma chamada feita. Nela o número 191 representa o número do CNPJ a ser consultado e dado 5th... é início de uma api key de autenticação.

_url:_ [][9][https://legalentity.api.nfe.io/v2/legalentities/basicInfo/191?apiKey=5th][9]...

## **2\. Parâmetros retornados**

A consulta da API pode retornar os seguintes status:

| **Tabela 1\. Tipos de status que a API retorna** | **Status**                                                |
| ------------------------------------------------ | --------------------------------------------------------- |
| 200                                              | Dados consultados da RFB                                  |
| 400                                              | Parâmetro informado de forma incorreta                    |
| 401                                              | Não autorizado. Autenticação informada da forma incorreta |
| 403                                              | Acesso proibido                                           |
| 404                                              | Empresa não encontrada na consulta                        |
| 500                                              | Erro no processamento da API                              |

Abaixo segue o formato no qual os dados serão retornados no json de retorno da consulta. Nesse json é possível constatar a chave de cada um dos campos bem como o valor retornado e na forma que ele retorna. Também é possível observar como é feito o encadeamento das informações na consulta.

```
{
  "legalEntity": {
    "tradeName": "string",
    "name": "string",
    "federalTaxNumber": 0,
    "createdOn": "2021-05-04T01:26:00.526Z",
    "taxRegime": "Unknown",
    "legalNature": "EmpresaPublica",
    "fiscalUnit": "string",
    "createdUnit": "string",
    "checkCode": "string",
    "stateTaxes": [
      {
        "status": "Abled",
        "taxNumber": "string",
        "statusOn": "2021-05-04T01:26:00.526Z",
        "openedOn": "2021-05-04T01:26:00.526Z",
        "closedOn": "2021-05-04T01:26:00.526Z",
        "additionalInformation": "string",
        "code": "AC",
        "address": {
          "state": "string",
          "city": {
            "code": "string",
            "name": "string"
          },
          "district": "string",
          "additionalInformation": "string",
          "streetSuffix": "string",
          "street": "string",
          "number": "string",
          "numberMin": "string",
          "numberMax": "string",
          "postalCode": "string",
          "country": "string"
        },
        "economicActivities": [
          {
            "type": "Main",
            "code": 0,
            "description": "string"
          }
        ],
        "nfe": {
          "status": "Abled",
          "description": "string"
        },
        "nfse": {
          "status": "Abled",
          "description": "string"
        },
        "cte": {
          "status": "Abled",
          "description": "string"
        },
        "nfce": {
          "status": "Abled",
          "description": "string"
        }
      }
    ]
  }
}
```

Na Tabela abaixo é possível observar o significado de cada um dos campos consultados pela API, bem como os parâmetros retornados em todos eles.

## **Dados de retorno**

---

**tradeName** _string_  
Nome fantasia

---

**name** _string_  
Razão social

---

**federalTaxNumber** _integer($int64)_  
Número da inscrição na Receita Federal (CNPJ)

---

**size** _string(enum)_  
Porte

| Texto do retorno | Significado              |
| ---------------- | ------------------------ |
| **_Unknown_**    | Desconhecido (mapear)    |
| **_ME_**         | Micro Empresa            |
| **_EPP_**        | Empresa de Pequeno Porte |
| **_DEMAIS_**     | Demais tipos             |

---

**openedOn** _string($date-time)_  
Data da abertura

---

**address**

> **state** _string_  
> Estado
> 
> ---
> 
> **city**
> 
>> **code** _string_  
>> Código do município (cMun)
>> 
>> **name** _string_  
>> Nome do município (xMun)
> 
> ---
> 
> **district** _string_  
> Bairro
> 
> ---
> 
> **additionalInformation** _string_  
> Informações adicionais
> 
> ---
> 
> **streetSuffix** _string_  
> Sufixo da rua
> 
> ---
> 
> **street** _string_  
> Nome da rua
> 
> ---
> 
> **number** _string_  
> Número
> 
> ---
> 
> **numberMin** _string_
> 
> ---
> 
> **numberMax** _string_
> 
> ---
> 
> **postalCode** _string_  
> CEP
> 
> ---
> 
> **country** _string_
> 
> País
> 
> ---

**phones**

> **ddd** _string_  
> Prefixo
> 
> ---
> 
> **number** _string_  
> Origem da Informação
> 
> ---
> 
> | _string(enum)_ \- Origem da Informação | significado campo         |
> | -------------------------------------- | ------------------------- |
> | **RFB**                                | Receita Federal do Brasil |

---

**statusOn** _string($date-time)_  
Data da situação cadastral

---

**status** _string(enum)_

| Texto do retorno | significado campo |
| ---------------- | ----------------- |
| **Unknown**      | Desconhecido      |
| **Active**       | Ativa             |
| **Unknown**      | Desconhecido      |
| **Suspended**    | Suspensa          |
| **Cancelled**    | Cancelada         |
| **Unabled**      | Desabilitada      |
| **Null**         | Nula              |

---

**email** _string_  
Correio eletrônico

---

**responsableEntity** _string_  
Ente Federativo Responsável (EFR)

---

**specialStatus** _string_  
Situação Especial

---

**specialStatusOn** _string($date-time)_  
Data da Situação Especial

---

**issuedOn** _string($date-time)_  
Data de Consulta do usuário

---

**statusReason** _string_  
Motivo da Situação Cadastral

---

**shareCapital** _number($double)_  
Capital sócial (em reais)

---

**economicActivities**

> **description**  
> Objeto com Código e descrição das atividades econômicas principal e secundárias
> 
>> **type** _string(enum)_  
>> Classificação da atividade
>> 
>> | Texto do retorno | significado campo |
>> | ---------------- | ----------------- |
>> | **Main**         | Principal         |
>> | **Secondary**    | Secundária        |
>> 
>> ---
>> 
>> **code** _string_  
>> Código da atividade (CNAE)
>> 
>> ---
>> 
>> **description** _string_  
>> Descrição da atividade (CNAE)

---

**legalNature**

> **code** _string_  
> Código da Natureza Legal
> 
> ---
> 
> **description** _string_  
> Descrição da Natureza Legal

---

**partners**

> Objeto com nome e qualificação dos sócios e administradores
> 
> **name** _string_  
> Nome/Nome Empresarial
> 
> ---
> 
> **qualification**
> 
>> **code** _string_  
>> Código Qualificação do Quadro de Sócios e Administradores
>> 
>> ---
>> 
>> **description** _string_  
>> Descrição da Qualificação do Quadro de Sócios e Administradores

---

**registrationUnit** _string_  
Objeto com a cidade/unidade registradora do certificado de baixa

---

**unit** _string(enum)_  
Objeto que define se é matriz, filial ou sucursal

| Texto do retorno | significado campo |
| ---------------- | ----------------- |
| **Headoffice**   | Matriz            |
| **Subsidiary**   | Filial            |

---


[1]: #Introducao%5Fa%5Fconsulta%5Fde%5FCNPJ%5Fcom%5Fa%5FNFEio
[2]: #1%5FBase%5Fpara%5Fa%5Fconsulta%5Fde%5FCNPJ
[3]: #2%5FParametros%5Fretornados
[4]: #Dados%5Fde%5Fretorno
[5]: https://servicos.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva%5Fsolicitacao.asp
[6]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-cnpj-v1/
[7]: https://legalentity.api.nfe.io/v1/legalentities/basicInfo/%7BfederalTaxNumber
[8]: https://legalentity.api.nfe.io/v2/legalentities/basicInfo/%7BfederalTaxNumber
[9]: https://legalentity.api.nfe.io/v2/legalentities/basicInfo/191?apiKey=5th