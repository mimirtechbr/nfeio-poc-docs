---
sidebar_label: "API Prefeituras"
sidebar_position: 5
slug: api-prefeituras
date: 2024-11-06
last_update:
  date: 2024-11-11
title: "API Prefeituras"
description: "Informações sobre Prefeituras na NFE.ioDados disponíveis na APICampos do objeto &quot;Prefecture&quot;Campos do objeto &quot;ServiceStatus&quot;Campos do objeto &quot;PrefectureWebService&quot;Campos do objeto &quot;ClientSettings&quot;Campos do objeto &quot;FirstParameter&quot;Forma&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7918
---

# Informações sobre Prefeituras na NFE.io

Durante o processo de emissão de uma nota fiscal de serviço, há a necessidade de se comunicar com o prefeituras para a autortização da nota. Por conta disso, a NFE.io possui uma interface com dados sobre prefeituras que auxilia nesse processo de comunicação.

Essa interface é necessária pois nela constam informações pertinentes a comunicação com as prefeituras. E ela é disponibilizada em uma API, descrita nesse documento com maiores detalhes

## Dados disponíveis na API

Segue a tabela com os campos disponíveis na busca da API, com uma breve descrição do significado desses dados.

### Campos do objeto "Prefecture"

| Campo na API  | Tipo do Campo        | Resumo                                                                 | Descrição                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | -------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CreatedOn     | DateTime             | Data de Criação                                                        | Data que registro foi criado no banco de dados.                                                                                                                                                                                                                                                                                                                                        |
| ModifiedOn    | DateTime             | Data de Modificação                                                    | Data de ultima tualização do registro.                                                                                                                                                                                                                                                                                                                                                 |
| Id            | string               | Código IBGE da cidade                                                  | Código definido pelo IBGE para identificar todas as cidades brasileiras. Como se trata de um código único por cidade, utilizamos ele como informação idepotente buscas na sua base de dados. Na url [https://www.ibge.gov.br/explica/codigos-dos-municipios.php][15] você pode consultar o município e assim descobrir o respectivo Código IBGE.                                       |
| Name          | string               | Nome da cidade                                                         | Nome da cidade associada ao código IBGE definido em "Id".                                                                                                                                                                                                                                                                                                                              |
| State         | string               | Estado da cidade                                                       | Estado da cidade em questão. Esse campo é apresentado com a abreviação do estado. Exemplo: SP, RJ, BA, etc.                                                                                                                                                                                                                                                                            |
| ProviderId    | string               | Id Único Empresa de software de nota fiscal fornecedora do Web Service | Identificação única da empresa de software que fornece o Web Service de emissão de nota fiscal.                                                                                                                                                                                                                                                                                        |
| Email         | string               | Email para suporte                                                     | Email utilizado para suporte técnico da prefeitura e/ou provedor de software.                                                                                                                                                                                                                                                                                                          |
| PhoneNumber   | string               | Número de telefone para suporte                                        | Telefone de contato para suporte com a empresa fornecedora de software.                                                                                                                                                                                                                                                                                                                |
| WebSite       | string               | Endereço do website                                                    | Endereço de site de referência para mais informações sobre a prefeitura e emissões fiscais.                                                                                                                                                                                                                                                                                            |
| Alias         | string               | Nome do sistema da prefeitura (ex: nota carioca, notablu)              | Nome que as prefeituras adotam para o setor responsável pro gerenciar notas fiscais. Em determinados casos, esse setor pode ser a Secretaria de Finanças. A depender do tamanho da prefeitura, um setor prórpio para gerenciamento de notas fiscais existe. Alguns exemplos são: "Nota Carioca" (Rio de Janeiro), "Nota Fiscal Paulistana" (São Paulo), "BHISS" (Belo Horizonte), etc. |
| MapCanvas     | string               | IBGE Map Canvas                                                        | Map Canvas do município.                                                                                                                                                                                                                                                                                                                                                               |
| WebService    | PrefectureWebService | Detalhes para Web Service                                              | Propriedade com maiores detalhes sobre o Web Service que a prefeitura disponibiliza.                                                                                                                                                                                                                                                                                                   |
| ServiceStatus | ServiceStatus        | Status do Web Service da prefeitura                                    | Status de funcionamento do Web Service. As opções de retorno são: "None" (Sem status), "Normal" (Em fucionamento), "Disruption" (Indisponível sem prazo de retorno), "Outage" (Indisponível com prazo de retorno).                                                                                                                                                                     |
| Status        | enum                 | Status da prefeitura                                                   | Status da prefeitura. Campo que define se ela está integrada para emissões fiscais em nosso serviço. As opções são "none" para prefeitura não disponível e "active". para prefeitura integrada no sistema de emissões.                                                                                                                                                                 |

| PrefectureStatus |
| ---------------- |
| None             |
| Active           |

### Campos do objeto "ServiceStatus"

| Campo na API | Tipo do Campo | Resumo              | Descrição                                                      |
| ------------ | ------------- | ------------------- | -------------------------------------------------------------- |
| Code         | enum          | Status do Serviço   | Código que retorna o status do serviço no momento da consulta. |
| CreatedOn    | DateTieme     | Data de criação     | Data em que o registro começou a ser monitorado.               |
| CreatedOn    | DateTime      | Data de modificação | Data de atualização do status do serviço.                      |

| ServiceStatusCode (Code) |
| ------------------------ |
| None                     |
| Normal                   |
| Disruption               |
| Outage                   |

### Campos do objeto "PrefectureWebService"

| Campo na API         | Tipo do Campo  | Resumo                              | Descrição                                                                                                                                                         |
| -------------------- | -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DescriptionUrl       | string         | Endereço para o WSDL do Web Service | Url de acesso aos métodos do Web Service. Nesse campo é possível acessar os métodos de emissão de nota fiscal, consulta de status do serviço, entre outros.       |
| AuthenticationMethod | enum           | Método de autenticação              | Forma de autenticação necessária para acessar os métodos do Web Service. Pode ser por meio de chave de acesso, certificado digital, entre outros.                 |
| ClientSettings       | ClientSettings | Configuções internas                | Configurações do client para acesso ao Web Service. Nesse campo é possível definir o nome do serviço, uso de proxy, tipo de protocolo de segurança, entre outros. |

| AuthenticationMethod |
| -------------------- |
| Unknown              |
| Certificate          |
| UserAndPassword      |

### Campos do objeto "ClientSettings"

| Campo na API         | Tipo do Campo  | Resumo                               | Descrição                                                                                     |
| -------------------- | -------------- | ------------------------------------ | --------------------------------------------------------------------------------------------- |
| Name                 | string         | Nome do serviço do Client            | Nome identificador do serviço que o cliente irá utilizar para se comunicar com o Web Service. |
| UseProxy             | boolean        | Uso de proxy na comunicação          | Definição se a comunicação entre o Web Service e o cliente será feita por meio de um proxy.   |
| SecurityProtocolType | enum           | Tipo de protocolo de segurança       | Tipos de protocolo de segurança disponíveis para a comunicação pelo Web Service.              |
| FirstParameter       | FirstParameter | Parâmetros auxiliares de comunicação | Parametros de comunicação customizáveis                                                       |

| SecurityProtocolType |
| -------------------- |
| All                  |
| Ssl3                 |
| Tls                  |
| Tls11                |
| Tls12                |

### Campos do objeto "FirstParameter"

| Campo na API | Tipo do Campo | Resumo                                           |
| ------------ | ------------- | ------------------------------------------------ |
| Type         | string        | Chave de identificação do parâmetro customizável |
| Value        | string        | Valor do parâmetro customizável                  |

## Forma de uso da API

A API é acessada por meio de requisições HTTP, permitindo que os usuários interajam e enviem dados de forma segura e eficiente. As requisições HTTP seguem o padrão REST, podendo ser realizadas no método GET que possui duas opções. Na primeira, são retornadas todas as prefeituras. Na segunda, retorna uma prefeitura em específico a partir do seu código IBGE.

Para utilizar a API, é necessário incluir uma chave de API (API Key) em cada requisição. Essa chave é fornecida ao usuário ao se registrar na plataforma da NFE.io e ela autentica o acesso aos endpoints da API, garantindo que apenas usuários autorizados possam realizar operações. A chave deve ser incluída no cabeçalho da requisição (por exemplo, Authorization: \{sua\_chave\_de\_API\}) para que o servidor possa validar e processar o pedido.

Segue abaixo mais detalhes sobre ambas as requisições disponíveis

### Buscar Todas as Prefeituras

Endpoint: [https://prefectures-dev.api.nfe.io/v1/prefectures][16]

Método: **GET**

**Descrição**:  
Essa requisição retorna todas as prefeituras cadastradas na nossa base de dados

Exemplo de requisição:

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures
```

Retorno exemplo:

```
{
  "value": [
    {
      "createdOn": "<date-time>",
      "modifiedOn": "<date-time>",
      "id": "<string>",
      "name": "<string>",
      "state": "<string>",
      "providerId": "<string>",
      "email": "<string>",
      "phoneNumber": "<string>",
      "webSite": "<string>",
      "alias": "<string>",
      "mapCanvas": "<string>",
      "status": "None",
      "webService": {
        "descriptionUrl": "<string>",
        "authenticationMethod": "Unknown",
        "clientSettings": {
          "name": "<string>",
          "useProxy": "<boolean>",
          "securityProtocolType": "Tls12",
          "firstParameter": {
            "type": "<string>",
            "value": "<string>"
          }
        }
      },
      "serviceStatus": {
        "code": "Outage",
        "createdOn": "<date-time>",
        "modifiedOn": "<date-time>"
      }
    },
    {
      "createdOn": "<date-time>",
      "modifiedOn": "<date-time>",
      "id": "<string>",
      "name": "<string>",
      "state": "<string>",
      "providerId": "<string>",
      "email": "<string>",
      "phoneNumber": "<string>",
      "webSite": "<string>",
      "alias": "<string>",
      "mapCanvas": "<string>",
      "status": "None",
      "webService": {
        "descriptionUrl": "<string>",
        "authenticationMethod": "Certificate",
        "clientSettings": {
          "name": "<string>",
          "useProxy": "<boolean>",
          "securityProtocolType": "Tls11",
          "firstParameter": {
            "type": "<string>",
            "value": "<string>"
          }
        }
      },
      "serviceStatus": {
        "code": "Normal",
        "createdOn": "<date-time>",
        "modifiedOn": "<date-time>"
      }
    }
  ]
}
```

#### Parâmetros de consulta disponíveis :

* **filter**: (opcional) Filtro adicional para refinar a partir da propriedade selecionada.

Exemplo: 

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures?filter=Name eq 'São Paulo'
```

Retorno:

```
{
    "value": [
        {
            "createdOn": "2017-04-12T14:27:52.2851177Z",
            "modifiedOn": "2020-06-15T00:00:27.6184613Z",
            "id": "3550308",
            "name": "São Paulo",
            "state": "SP",
            "providerId": "eovchw72",
            "email": "",
            "phoneNumber": "",
            "webSite": "https://nfe.prefeitura.sp.gov.br",
            "alias": "Nota do Milhão (Paulistana)",
            "mapCanvas": "x0.001A.001i6.826E4.008]v[55J49cAcAcEaCeEaCcAcAcAcAcAaBcAaCcAaCcAcAeAaBgDcAaBcBeEeAaCcCaCbCcCaCaCeAcCcBbBaBcBcBcBeDaBcAaDaBaBaBaBaBcBcBcBaDaBaBaBaBcBbFcBeAaBaDaBaBcAaBcAcBcBaBaBaBcAeBcAaBcBeDaBaDbBdBaBaBaBaBaBcAcBaBaBcAeBaBcBaBbBbBcBcBbAaBbAbBaBbAbCaBbAaBbAbAbBbCbAbAbAaBbAbAbCdAaBaBbAbBbAdAaBcAaBbAbAbCaCdCaCaCcCcAaCbAbCaBbAaCbAaBbBbBbAbAbCbCcAbCbBbAaCaCbAbCbAbBbAbAaBaBcBaBaBbAbAbBbAdCbAbAcBbBbAbAbAbAbCaBaDbDcAaBbAaBaDaBbAbCaBaBbAbAaBbBbAaCbAbCbAbBaCbBdCbAdCbCbCbAbBbCbBbCaBbCbBbAbAbCbBbAfAdBaCbCaCdEbAbCbAbAbCbAbAbAbCbAbCbCaCaGaEbAbEbCbAdAdAbBaCbAaEbCaCaCaEaCbCbAdCfCbBbAaCaCaEaCaCaCbAbAbAbAbAbAbBbAbCbCbCbCbAbBbBaBaBaBaDaBbAdBdBdBbBbCdEdCdAbAdEdEbCbCbAbAbCbCaCbCbCbCbAdBdBdAbAbAbBdAbAbAbAdBdCbAbAaCbAbAdBaBaBdAbDbBbAfAbAbBaBcDcBaBbAbAbAaCbAfAdAbAaBbAcBcBaDaBaBbAbAbBcDaBaBbBbDbBaBbBbBbBbBfBbAbBbAaBaBaBeBaBaBaBbAfBaBbAbBbAbAdBbBbDbAdAaBdBbDdAaBaBbBdAbAbAbAbCbAfCbAbBaBbAbDbBbBbBfAaBbDbBbAdBaBdDbDaBbBbBbAaCdCbAbAaBbAbCbAaCbCaCbAbAaCbAbAbCbAcCcAaCcCaCbCaCcCcCgGcCcAcCaCaEaCaCaEaCaCcCaCcCeEcCeCcEcCcCcCaCaCaCbCaCcCaCcCaEbCaCaCcAcCcAcAcCcCcAcCcAaCcAcAaCbCaCbAcCaCaCcCbCcAbCaCaCaCaEcAaCcCaCaCbAaCaCdCaCaCaCaCaEcAcAaCaCaCaCaCcCcCaCbCaCeCaCaEcCbEaCbCaCaCbCaCbCbAaEbCdEbEaCaCbCaCaCaCaGaCaCaCaEaCbCaCaIcEaCcEaCaCbCdEaCaCaCbCfEaBbBbAbBbAfAbBbAdBaBdFbBbBhFbBbDdBfBdBbBfHbBdAbDbAdBfBdBdAbBhAbBdAdAbAdBdAbAbCfCbAdBfAfAdCdAbAhEfCdCbCdAdAbAbAdAbAdBbAdAdBdAdBfAaBbCbAdAdBbAaBcBaBbAbAbCbCbAaBcAbBbAaDaBbAbBbAbAbCdAbAbCbAbAbBbBbCaCbAbAaBcAbDdBbAbCaCdAaCeCaCdAaCaCbCbAaDbAaCbCcCcAdEcAcAaCaCcAaCaCbCbAbBbAbCaCbAaBbDaBbAbCbAbBbAbBbBbAbAdCbAbAaDbAaBcBaBaBbAcBbAbAbCbBcAaBaBbAbBaCaCbEbCaCbCbAcEbCbGbCbEbEbCbCbCaCbCaCaCbCbCbCaCaCbCbCaCcEaCaCaCaCaCgAeBcAcAeEbCaCcCeAeAcAcCcCcCaCcCcAcCcAbCbAbCeCcCcCcAcCcCaCcCcBcAcAcCbCbAaCaCaCaEbCaCbCdCaCbCbGaCcCgCgAaEdCaCaCbAcCaCbCaCaCbAaCbAbCbAbCbAbAbCdAbAbBaCaCaCeCcCbCcCcAbCcCbCbAbCaCbAbAbAaCaCeCeAeCaCbCbCbCbEaCbEbAaCaCcAcBcCaCcCcCaCaCcEaCbCaCaCcCcAcAcAcAcAcCcCcAcBcAcAeEeEaCaCbAbCbAaCbEaCaCcCcCcAaGeCcEeCeAcAcAaCcCaCaCbCaCaEaCcCcAcAcCcCcAcAaCaCcCaCcCcAaCeAcAcCaCaCcAcAcAaBaDcBcBaBeBcAcBeCaCaCbCcCcCcAcAcBeCeAcAcCcCcAcAeAeBeAaBcAeBeAcCcAcBcAcBcBcAeAcBaCcBaCcAcAeAcAcBcBaBaBcAaBaBcAbBcBbAcBcDaBaBcAcBcAeBcAcAcBcAcAcCcAcCcAcBcCcAcAcBcCcAcBcAcAcCcAcCcAcAcBeBcAcBcBaBcDcAcBcAcAcBaBeBcAaBeAcAgAeAeCcBeAcAcBcAcBeBkFcBaBcAcAcAcAcAeEaCcCaCgCcAoJcAeDoHcAcAaBeAaCaCaCaCaEcAaKcEcOaCcKaCbCbCaCcEaCeAcCaCbEbIcEaCcCeEgEcCcAcCcAcCcAcCcAcAcAcCcAcCaCcAcAeAcCcCcAaCcAcAcCcAcAaBcBcBgCaCcCcAaCcAcBcBcAaCaCcEaEaCaGcCaCcAcAcCaCaCaCaEbAaEcCcAcCaCcAbEaCaCcCaCcCcCbCdAaCaCbCaCaCaCbAbAbCaCaCbCbAbEbBbAaEaCaCbBbCbCfAbCbEaCcAaCcAcEeCcAeCcAcAcAcCeEeEeEeEcCeAcCgCeCcAgCcAcCcAbKbEbGdSaIbEbCbErC1jMjMbCbCaCaCaGaC3aEaMaCaEcEaEaEcCcCeCcEgGeEaCaCaCaEcEaGbKbObEbCdCdAdEdCdCdEdCaCaEaEaCaCaCbGaCaCaCaCcCaCaCaCaCcEaCaCaCaCaCbEbCcCbEbCcCbCaCaCaCbAaCaCaCbCaChBeEcCcAaCaCbAaCaCaCaCdAaCbAaCaCcCaCbCaCaCaCaCeAaCbCbEcAcAcAaCaCcAaCcCaBeAcAaCaEbCaCbCbAbCdAbBdAaCbCcCaCcAbEbEcCbCcCaCcAcAaCcAaCdEbCbAaCaCaCaCcAcCbAaCcAcAbCbAcCbEcCeAbCcAcCaCaEcAaBaBcAcBcAaCcAcAcCaCcAaCcAcAcAcAcCeAcCcCuv197F4aBcAbCuv197F4cAcCcAaCeAcCcAaCbAaCaCaCbCaCbCaEaCaCbAbCbCbAaCcAcCeAcCaCcCcAcBcAcCcEaCcAcAcAcCeAeCcCcCcBcDcDaBeAaBeDeBcBaBeDcAeAgAcCcAeAcAcAcAeAeBcBcAcDaDcAaBeAcCcCcCeBcAcAcCcCaCgCcEcAeCeCeBcAcAcAcCcCcCcAcAcCaCcAcAeAeBaDcAeCcAeAcAcCcAcAcAcAeAaBcAcBeBcAcAgAcAaCaCcAeAeAcCbAcCcAcAeAcCcCcCaCcCcCcCcAcCaCcCcAcAcBcAcCcEcAcAcAaBaBcAcAaBcBaBbBbAbBbAdBaBbAaBaBaBbBbDcBbAaBbBaBbAbBbAaBbBaBbAaBaBaBbBbAaBcAaBaBdAbDbAaBaBaBaBeAaCcBcBeDeBcDbBaBaBeBcBeCcAaBcAcAcAaBeDcBaBaBbBcBaBbBaBcAcAcAcAcBcAcAcDeAaBbBcBcAcDeBcAcAaCcCcAcAcAcBcDcAcBeBcAeAeCcAcBaDaBaBcBaBaBaDaBcBcHaBcDaBbBcBcAbBaBaBcBaBbAaBcAbBcBbBcAbBaBbBbBbBaBbAaBaBbBaBbBaBaBbAcBaBbAcDcCaBcBaBaBaBdCbAbAbAbCaCaGbCbAbAbBbAbCbAlCdBrBbB9aB9cAaBcBcBaBcAbBaBcAbFaBaBcAaDbAbAbAbAbCbCbAdAdBdCaBdAbAaBaBbBaBaDaBaBcBcCcDdAaBbBaBaDaBeDcAaBcAcBcDcAaBeAaBcBcAcAcBcAaBeBcBeAaBgAcAgBcBeAcAcAcAcAcAcBcAcAcAaBcAaBaBaBbAaBaBbBcAbBbBbAaBbAbBaBaBbDbAaBdBaBaBbAbAbBaBcAaBbAbBaBeAaBbAcBaBaBcDaBaBbDbBbBdBdAbBdAbDdDbBdBdAaBbBbAbFaBbDaDaBcDeBcAcCeAcBaBcAcBcBcEcAaBcBeBcAaBcAcBcBcBcBbBaBeAcBcAcBcAaDaBaBcBcDaBcBaBbAaBfBaBbBbDbDcBbBaBcDbAaDcAaBaBaBaBaBbBaBaBaBbAaBaBcAbBcBcBeAcAcBcAeBcAbBdAaBbAaBaBcAcFaBgFaDbDbAaBaBaDaBbBbDbBaBbBbDaBaBaBaDaBbAaBcBbDaBbBaBaBbHaDcAbBcBaBbAdDbBaBaBbBbBdAaBaBbAbAdAaBfDaBbDbBbBbBbAbBbAbAaBbAaBbDbAbDbAaBbBbBbBbBaBbBbBbBdBbBaCbAdBaBaBaBaBbBbAaBbBcAcBaBcAcBcAcAeBcBcBaBcBcBcCcEcCcAeAeCcAeAcAcCcCaCcAcAeBcCcCeAcAeAeCcCcAcBcAcCcAcAcBeAcAaEcCeAgCcAeAbBcBaBaBaBcBbBaBcBaDbAaDbBaBaDbBaBbBcDcBaBbBbAdAbBaBbCbAbAbAaCbBdAaBaBdAaBbBbBbBbCbBbAaDbAbBdCbAaBbBbBaBbAdAdBbAbAaBbDaDbAbAbDbBbCaCbAbBaBbBaBbBbBaBbBbBaBbBaBaBcBaBbAaBeDaBaBaBbHaBaBcBbDaBaBaDaBfFbBbAdAdAbAbBbAbHeCcAcAcAcBaFeAeBcAaBbBcAaBcAcAaBaBcBcAbBcAcBcDbBbDaBdBaBbAbAbAaDbBaBbAcBcBcAcAaBcAeAcAcAcBcAaBcFcBaBeDaBaDaBaDaBaBcBcBcBcBcAaBcDaDbAaBaBaBbAbBbBaBbBaBuv55J49bAbAcBcCu]v355030v3550308v0BDFuu]i6.826E4.008I6.365E3.355999999999998u",
            "status": "Active",
            "webService": {
                "descriptionUrl": "https://nfeprodprefectures.blob.core.windows.net/wsdl/SP.SaoPaulo.wsdl",
                "authenticationMethod": "Certificate",
                "clientSettings": {
                    "name": "Paulistana",
                    "useProxy": false,
                    "securityProtocolType": "Tls12",
                    "firstParameter": {
                        "type": "int",
                        "value": "1"
                    }
                }
            },
            "serviceStatus": {
                "code": "Outage",
                "createdOn": "2020-11-17T12:25:00Z",
                "modifiedOn": "2021-04-21T23:40:00Z"
            }
        }
    ]
}
```

* **select**: (opcional) Filtro adicional para selecionar propriedades específicas para serem retornadas.

Exemplo:

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures?select=Name
```

Retorno:

```
{
    "value": [
        {
            "name": "Pimenta Bueno"
        },
        {
            "name": "Acrelândia"
        },
        {
            "name": "Rio Branco"
        },
        {
            "name": "Manaus"
        }
    ]
}
```

* **orderBy**: (opcional) Filtro adicional para ordernar a partir de propriedade definida.

Exemplos: 

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures?orderBy=Name asc
```

Retorno:

```
{
    "value": [
        {
            "createdOn": "2024-11-04T21:12:39.2884222Z",
            "modifiedOn": null,
            "id": "1200013",
            "name": "Acrelândia",
            "state": "AC",
            "providerId": "02062d4af29e4eab8935594f05ba6300",
            "email": "email@email.com",
            "phoneNumber": "(11) 9999-9999",
            "webSite": "https://www.acrelandia.com",
            "alias": "Alias",
            "mapCanvas": null,
            "status": "Active",
            "webService": {
                "descriptionUrl": "https://wsdl.com",
                "authenticationMethod": "Unknown",
                "clientSettings": {
                    "name": "Padrão",
                    "useProxy": false,
                    "securityProtocolType": "Ssl3",
                    "firstParameter": {
                        "type": "",
                        "value": ""
                    }
                }
            },
            "serviceStatus": null
        },
        {
            "createdOn": "2020-10-07T17:18:26.3689997Z",
            "modifiedOn": "2020-10-07T17:18:54.1656929Z",
            "id": "3500501",
            "name": "Águas de Lindóia",
            "state": "SP",
            "providerId": "eow9esfj",
            "email": "",
            "phoneNumber": "(19) 3924-9300",
            "webSite": "https://www.aguasdelindoia.sp.gov.br/",
            "alias": "Nota Aguas de Lindoia",
            "mapCanvas": "x0.001A.001i6.661E2.516]v[40N1hFbFhHlOfCdDnAdFnCnIhGcEdKjDfHfAnAlQgKdQkGiGcGiCeIfGeGiDeCmAeEsCfGcMdEbGfIaIiIc2BgAeFmGeBgHoGgCmHgHbHeDeBaFgFgAgFgGgAkLkHeJjNfAjHhFbHlArRdFdDfBu]v350050v3500501v0uu]i6.661E2.516I6.549E2.435u",
            "status": "Active",
            "webService": {
                "descriptionUrl": "https://nfeprodprefectures.blob.core.windows.net/wsdl/SP.Aguasdelindoia.wsdl",
                "authenticationMethod": "Certificate",
                "clientSettings": {
                    "name": "WebISS",
                    "useProxy": false,
                    "securityProtocolType": "All",
                    "firstParameter": {
                        "type": "string",
                        "value": "<cabecalho xmlns=\\\"http://www.abrasf.org.br/nfse.xsd\\\" versao='1.00'><versaoDados>1.00</versaoDados></cabecalho>"
                    }
                }
            },
            "serviceStatus": null
        }
    ]
}
```

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures?orderBy=Name desc
```

Retorno:

```
{
    "@odata.context": "http://prefectures-dev.api.nfe.io/v1/$metadata#Prefectures",
    "value": [
        {
            "createdOn": "2017-04-13T13:16:20.7087778Z",
            "modifiedOn": "2020-06-18T05:20:21.9825591Z",
            "id": "4219507",
            "name": "Xanxerê",
            "state": "SC",
            "providerId": "eov9e5c5",
            "email": "",
            "phoneNumber": "(49) 3441-8500",
            "webSite": "http://www.xanxere.sc.gov.br/",
            "alias": "Nota Xanxere",
            "mapCanvas": "x0.00008074984792316421A.00008374712113769015k2.53467193064701E7.013529869242895]v[2431P23e6D0q5G9i2D7m4Nb5K6f6Mf8I8g2O4l7E0o0M8c4K5i6No1E5e0H0c69I8d7I3b0O4i7Sm1N9e7K1c20O8f4C03k4G1k6N8k4C9m3M4q9E6c5K8c08Q6q5P7e6H0e2N2g2H5k0Rs3G2nN1i1J3b0J5g5B31i5H5eJ3h5H9g0N9m9H2g4H6g9R4b0F9i9F0oH6m3F7b9J8c1D27j3B03p8C5g4H07e7B3qP3s8H5e24F4q1D1e2F8o0D4m2Hm9J9k5Cc5H3b3H1e1B06k1L5h1F1l0B8b36P5l7B0h3D5cF7k2F4m6Rk3E4g5H8rB00f8D9p2C6h4O2f5C8h4K9j4B9c6N6g7F5d0J0p5B5b8F7k6B17f6D7f8M0h0C8b10H5r1C5b1I3j5Kc4H6b6F5h7B0hL9j9E8l8Ap4J6h2Rb38I9k4S7j8M9aE3c05C5c4C5n6I9d9I6r1I8f9I6b4M9j0E9d7F5j7F0d6L6d33Ad31C14l8B03b09B0h1C9b5G9l5Rd9K1h1E1eM2f0C5b4M9p0C6j3K7e2M6d4S6h5Q5l4G3rG4n4M1f5SkK9k3O8e5C20d5G3d27E04q7K8i5M0g8E4g3C01bK5g9G1g6M5pO8d2G6c3K2g9G0fG0i8K9o6E7o3C2m0D4u]v421950v4219507v0uu]k2.53467193064701E7.013529869242895K2.293714384444286E6.748888966447794u",
            "status": "Active",
            "webService": {
                "descriptionUrl": "https://nfeprodprefectures.blob.core.windows.net/wsdl/BETHA.wsdl",
                "authenticationMethod": "Certificate",
                "clientSettings": {
                    "name": "betha",
                    "useProxy": false,
                    "securityProtocolType": "All",
                    "firstParameter": {
                        "type": "string",
                        "value": "<cabecalho xmlns=\\\"http://www.betha.com.br/e-nota-contribuinte-ws\\\" versao='2.02'><versaoDados>2.02</versaoDados></cabecalho>"
                    }
                }
            },
            "serviceStatus": {
                "code": "Normal",
                "createdOn": "2021-02-18T20:00:00Z",
                "modifiedOn": "2021-03-08T19:40:00Z"
            }
        },
        {
            "createdOn": "2021-08-20T12:47:40.1343264Z",
            "modifiedOn": null,
            "id": "3557006",
            "name": "Votorantim",
            "state": "SP",
            "providerId": "73e932598f4d4945afeafedb060a1d3c",
            "email": "siic@votorantim.sp.gov.br",
            "phoneNumber": "(15) 3353-8533",
            "webSite": "https://www.votorantim.sp.gov.br/",
            "alias": "Votorantim",
            "mapCanvas": "x0.001A.001i7.518E3.65]v[210P9aCcGcGeEaEcEaGbEcEbEbCbEaEaIbCcEaEbChBfCdAdGbCaCgIbIaEeEeCgGeEgCmEgBgCgAcBaDcFeBiDcBcDcAmGeEoEmEeGcCaGcCgGeEcAiBiAeAgBeBgCgCeAeBeBeJeBgDgDgBiCeAeAeBeCcEeCgAcDcAgCgAgAgDiAgEgCiEeCeEgCeEcIaEcCgAgDaEcCcEcAeAcAaEkCcEeAcCiCcCgAbFbBfBfDaDbDfDbBbDfFfFbDdAhDeDeDeFeBeBcDeBgFeCgDkBcAaDaFcDaDaDaDfBbBaHcFcDaFaBbHcBbHbBcFaDcDaFcBeCgDeAcBaHaDaBeFcEgDgFkBeCaBfBhBjBjHbCaEdCdCbAfBfCdEdGfEdBfEdCfBjDaBbHdJdFbFdAdAjEhFhLdAdCfCdAdBfAhBdCfBhCbClAfBdBjGdCdBbDaBbBdCdBbCjBdAhAbBhDaEdEdAfBdEcGbGdCaCeEcGeCdCdAbAbEcCcIbEhCaEcCaCfGbIbCfAdAhBbBbDbBdEdAfBfCfAbEfAfBdEdAdBdAdChAu]v355700v3557006v0uu]i7.518E3.65I7.297000000000004E3.519u",
            "status": "Active",
            "webService": {
                "descriptionUrl": "http://sql.sefvotorantim.sp.gov.br:8080/issonline/servlet/anfse?wsdl",
                "authenticationMethod": "UserAndPassword",
                "clientSettings": {
                    "name": "Votorantim",
                    "useProxy": false,
                    "securityProtocolType": "All",
                    "firstParameter": {
                        "type": "",
                        "value": ""
                    }
                }
            },
            "serviceStatus": null
        }
    ]
}
```

#### Retornos esperados

| Código | Detalhes                                     |
| ------ | -------------------------------------------- |
| 200    | Sucesso na requisição                        |
| 401    | Não autorizado. Necessário informar a APIKEY |

### Buscar Prefeitura pelo Código IBGE

Endpoint: [https://prefectures-dev.api.nfe.io/v1/prefectures('\{Cod\_IBGE][17]\}')

Método: **GET**

**Descrição**:  
Essa requisição retorna todas as prefeituras cadastradas na nossa base de dados

**Parâmetro Obrigatório**:

* Cod\_IBGE: Código IBGE da cidade  
Exemplo:

```
GET https://prefectures-dev.api.nfe.io/v1/prefectures('3550308')
```

Retorno exemplo:

```
{
    "createdOn": "2017-04-12T14:27:52.2851177Z",
    "modifiedOn": "2020-06-15T00:00:27.6184613Z",
    "id": "3550308",
    "name": "São Paulo",
    "state": "SP",
    "providerId": "eovchw72",
    "email": "",
    "phoneNumber": "",
    "webSite": "https://nfe.prefeitura.sp.gov.br",
    "alias": "Nota do Milhão (Paulistana)",
    "mapCanvas": "x0.001A.001i6.826E4.008]v[55J49cAcAcEaCeEaCcAcAcAcAcAaBcAaCcAaCcAcAeAaBgDcAaBcBeEeAaCcCaCbCcCaCaCeAcCcBbBaBcBcBcBeDaBcAaDaBaBaBaBaBcBcBcBaDaBaBaBaBcBbFcBeAaBaDaBaBcAaBcAcBcBaBaBaBcAeBcAaBcBeDaBaDbBdBaBaBaBaBaBcAcBaBaBcAeBaBcBaBbBbBcBcBbAaBbAbBaBbAbCaBbAaBbAbAbBbCbAbAbAaBbAbAbCdAaBaBbAbBbAdAaBcAaBbAbAbCaCdCaCaCcCcAaCbAbCaBbAaCbAaBbBbBbAbAbCbCcAbCbBbAaCaCbAbCbAbBbAbAaBaBcBaBaBbAbAbBbAdCbAbAcBbBbAbAbAbAbCaBaDbDcAaBbAaBaDaBbAbCaBaBbAbAaBbBbAaCbAbCbAbBaCbBdCbAdCbCbCbAbBbCbBbCaBbCbBbAbAbCbBbAfAdBaCbCaCdEbAbCbAbAbCbAbAbAbCbAbCbCaCaGaEbAbEbCbAdAdAbBaCbAaEbCaCaCaEaCbCbAdCfCbBbAaCaCaEaCaCaCbAbAbAbAbAbAbBbAbCbCbCbCbAbBbBaBaBaBaDaBbAdBdBdBbBbCdEdCdAbAdEdEbCbCbAbAbCbCaCbCbCbCbAdBdBdAbAbAbBdAbAbAbAdBdCbAbAaCbAbAdBaBaBdAbDbBbAfAbAbBaBcDcBaBbAbAbAaCbAfAdAbAaBbAcBcBaDaBaBbAbAbBcDaBaBbBbDbBaBbBbBbBbBfBbAbBbAaBaBaBeBaBaBaBbAfBaBbAbBbAbAdBbBbDbAdAaBdBbDdAaBaBbBdAbAbAbAbCbAfCbAbBaBbAbDbBbBbBfAaBbDbBbAdBaBdDbDaBbBbBbAaCdCbAbAaBbAbCbAaCbCaCbAbAaCbAbAbCbAcCcAaCcCaCbCaCcCcCgGcCcAcCaCaEaCaCaEaCaCcCaCcCeEcCeCcEcCcCcCaCaCaCbCaCcCaCcCaEbCaCaCcAcCcAcAcCcCcAcCcAaCcAcAaCbCaCbAcCaCaCcCbCcAbCaCaCaCaEcAaCcCaCaCbAaCaCdCaCaCaCaCaEcAcAaCaCaCaCaCcCcCaCbCaCeCaCaEcCbEaCbCaCaCbCaCbCbAaEbCdEbEaCaCbCaCaCaCaGaCaCaCaEaCbCaCaIcEaCcEaCaCbCdEaCaCaCbCfEaBbBbAbBbAfAbBbAdBaBdFbBbBhFbBbDdBfBdBbBfHbBdAbDbAdBfBdBdAbBhAbBdAdAbAdBdAbAbCfCbAdBfAfAdCdAbAhEfCdCbCdAdAbAbAdAbAdBbAdAdBdAdBfAaBbCbAdAdBbAaBcBaBbAbAbCbCbAaBcAbBbAaDaBbAbBbAbAbCdAbAbCbAbAbBbBbCaCbAbAaBcAbDdBbAbCaCdAaCeCaCdAaCaCbCbAaDbAaCbCcCcAdEcAcAaCaCcAaCaCbCbAbBbAbCaCbAaBbDaBbAbCbAbBbAbBbBbAbAdCbAbAaDbAaBcBaBaBbAcBbAbAbCbBcAaBaBbAbBaCaCbEbCaCbCbAcEbCbGbCbEbEbCbCbCaCbCaCaCbCbCbCaCaCbCbCaCcEaCaCaCaCaCgAeBcAcAeEbCaCcCeAeAcAcCcCcCaCcCcAcCcAbCbAbCeCcCcCcAcCcCaCcCcBcAcAcCbCbAaCaCaCaEbCaCbCdCaCbCbGaCcCgCgAaEdCaCaCbAcCaCbCaCaCbAaCbAbCbAbCbAbAbCdAbAbBaCaCaCeCcCbCcCcAbCcCbCbAbCaCbAbAbAaCaCeCeAeCaCbCbCbCbEaCbEbAaCaCcAcBcCaCcCcCaCaCcEaCbCaCaCcCcAcAcAcAcAcCcCcAcBcAcAeEeEaCaCbAbCbAaCbEaCaCcCcCcAaGeCcEeCeAcAcAaCcCaCaCbCaCaEaCcCcAcAcCcCcAcAaCaCcCaCcCcAaCeAcAcCaCaCcAcAcAaBaDcBcBaBeBcAcBeCaCaCbCcCcCcAcAcBeCeAcAcCcCcAcAeAeBeAaBcAeBeAcCcAcBcAcBcBcAeAcBaCcBaCcAcAeAcAcBcBaBaBcAaBaBcAbBcBbAcBcDaBaBcAcBcAeBcAcAcBcAcAcCcAcCcAcBcCcAcAcBcCcAcBcAcAcCcAcCcAcAcBeBcAcBcBaBcDcAcBcAcAcBaBeBcAaBeAcAgAeAeCcBeAcAcBcAcBeBkFcBaBcAcAcAcAcAeEaCcCaCgCcAoJcAeDoHcAcAaBeAaCaCaCaCaEcAaKcEcOaCcKaCbCbCaCcEaCeAcCaCbEbIcEaCcCeEgEcCcAcCcAcCcAcCcAcAcAcCcAcCaCcAcAeAcCcCcAaCcAcAcCcAcAaBcBcBgCaCcCcAaCcAcBcBcAaCaCcEaEaCaGcCaCcAcAcCaCaCaCaEbAaEcCcAcCaCcAbEaCaCcCaCcCcCbCdAaCaCbCaCaCaCbAbAbCaCaCbCbAbEbBbAaEaCaCbBbCbCfAbCbEaCcAaCcAcEeCcAeCcAcAcAcCeEeEeEeEcCeAcCgCeCcAgCcAcCcAbKbEbGdSaIbEbCbErC1jMjMbCbCaCaCaGaC3aEaMaCaEcEaEaEcCcCeCcEgGeEaCaCaCaEcEaGbKbObEbCdCdAdEdCdCdEdCaCaEaEaCaCaCbGaCaCaCaCcCaCaCaCaCcEaCaCaCaCaCbEbCcCbEbCcCbCaCaCaCbAaCaCaCbCaChBeEcCcAaCaCbAaCaCaCaCdAaCbAaCaCcCaCbCaCaCaCaCeAaCbCbEcAcAcAaCaCcAaCcCaBeAcAaCaEbCaCbCbAbCdAbBdAaCbCcCaCcAbEbEcCbCcCaCcAcAaCcAaCdEbCbAaCaCaCaCcAcCbAaCcAcAbCbAcCbEcCeAbCcAcCaCaEcAaBaBcAcBcAaCcAcAcCaCcAaCcAcAcAcAcCeAcCcCuv197F4aBcAbCuv197F4cAcCcAaCeAcCcAaCbAaCaCaCbCaCbCaEaCaCbAbCbCbAaCcAcCeAcCaCcCcAcBcAcCcEaCcAcAcAcCeAeCcCcCcBcDcDaBeAaBeDeBcBaBeDcAeAgAcCcAeAcAcAcAeAeBcBcAcDaDcAaBeAcCcCcCeBcAcAcCcCaCgCcEcAeCeCeBcAcAcAcCcCcCcAcAcCaCcAcAeAeBaDcAeCcAeAcAcCcAcAcAcAeAaBcAcBeBcAcAgAcAaCaCcAeAeAcCbAcCcAcAeAcCcCcCaCcCcCcCcAcCaCcCcAcAcBcAcCcEcAcAcAaBaBcAcAaBcBaBbBbAbBbAdBaBbAaBaBaBbBbDcBbAaBbBaBbAbBbAaBbBaBbAaBaBaBbBbAaBcAaBaBdAbDbAaBaBaBaBeAaCcBcBeDeBcDbBaBaBeBcBeCcAaBcAcAcAaBeDcBaBaBbBcBaBbBaBcAcAcAcAcBcAcAcDeAaBbBcBcAcDeBcAcAaCcCcAcAcAcBcDcAcBeBcAeAeCcAcBaDaBaBcBaBaBaDaBcBcHaBcDaBbBcBcAbBaBaBcBaBbAaBcAbBcBbBcAbBaBbBbBbBaBbAaBaBbBaBbBaBaBbAcBaBbAcDcCaBcBaBaBaBdCbAbAbAbCaCaGbCbAbAbBbAbCbAlCdBrBbB9aB9cAaBcBcBaBcAbBaBcAbFaBaBcAaDbAbAbAbAbCbCbAdAdBdCaBdAbAaBaBbBaBaDaBaBcBcCcDdAaBbBaBaDaBeDcAaBcAcBcDcAaBeAaBcBcAcAcBcAaBeBcBeAaBgAcAgBcBeAcAcAcAcAcAcBcAcAcAaBcAaBaBaBbAaBaBbBcAbBbBbAaBbAbBaBaBbDbAaBdBaBaBbAbAbBaBcAaBbAbBaBeAaBbAcBaBaBcDaBaBbDbBbBdBdAbBdAbDdDbBdBdAaBbBbAbFaBbDaDaBcDeBcAcCeAcBaBcAcBcBcEcAaBcBeBcAaBcAcBcBcBcBbBaBeAcBcAcBcAaDaBaBcBcDaBcBaBbAaBfBaBbBbDbDcBbBaBcDbAaDcAaBaBaBaBaBbBaBaBaBbAaBaBcAbBcBcBeAcAcBcAeBcAbBdAaBbAaBaBcAcFaBgFaDbDbAaBaBaDaBbBbDbBaBbBbDaBaBaBaDaBbAaBcBbDaBbBaBaBbHaDcAbBcBaBbAdDbBaBaBbBbBdAaBaBbAbAdAaBfDaBbDbBbBbBbAbBbAbAaBbAaBbDbAbDbAaBbBbBbBbBaBbBbBbBdBbBaCbAdBaBaBaBaBbBbAaBbBcAcBaBcAcBcAcAeBcBcBaBcBcBcCcEcCcAeAeCcAeAcAcCcCaCcAcAeBcCcCeAcAeAeCcCcAcBcAcCcAcAcBeAcAaEcCeAgCcAeAbBcBaBaBaBcBbBaBcBaDbAaDbBaBaDbBaBbBcDcBaBbBbAdAbBaBbCbAbAbAaCbBdAaBaBdAaBbBbBbBbCbBbAaDbAbBdCbAaBbBbBaBbAdAdBbAbAaBbDaDbAbAbDbBbCaCbAbBaBbBaBbBbBaBbBbBaBbBaBaBcBaBbAaBeDaBaBaBbHaBaBcBbDaBaBaDaBfFbBbAdAdAbAbBbAbHeCcAcAcAcBaFeAeBcAaBbBcAaBcAcAaBaBcBcAbBcAcBcDbBbDaBdBaBbAbAbAaDbBaBbAcBcBcAcAaBcAeAcAcAcBcAaBcFcBaBeDaBaDaBaDaBaBcBcBcBcBcAaBcDaDbAaBaBaBbAbBbBaBbBaBuv55J49bAbAcBcCu]v355030v3550308v0BDFuu]i6.826E4.008I6.365E3.355999999999998u",
    "status": "Active",
    "webService": {
        "descriptionUrl": "https://nfeprodprefectures.blob.core.windows.net/wsdl/SP.SaoPaulo.wsdl",
        "authenticationMethod": "Certificate",
        "clientSettings": {
            "name": "Paulistana",
            "useProxy": false,
            "securityProtocolType": "Tls12",
            "firstParameter": {
                "type": "int",
                "value": "1"
            }
        }
    },
    "serviceStatus": {
        "code": "Outage",
        "createdOn": "2020-11-17T12:25:00Z",
        "modifiedOn": "2021-04-21T23:40:00Z"
    }
}
```

#### Retornos esperados

| Código | Detalhes                                     |
| ------ | -------------------------------------------- |
| 200    | Sucesso na requisição                        |
| 401    | Não autorizado. Necessário informar a APIKEY |
| 401    | Prefeitura não encontrada                    |

## Dúvidas

Caso tenha alguma dúvida, entre em contato conosco através do email suporte@nfe.io


[1]: #Informacoes%5Fsobre%5FPrefeituras%5Fna%5FNFEio
[2]: #Dados%5Fdisponiveis%5Fna%5FAPI
[3]: #Campos%5Fdo%5Fobjeto%5FquotPrefecturequot
[4]: #Campos%5Fdo%5Fobjeto%5FquotServiceStatusquot
[5]: #Campos%5Fdo%5Fobjeto%5FquotPrefectureWebServicequot
[6]: #Campos%5Fdo%5Fobjeto%5FquotClientSettingsquot
[7]: #Campos%5Fdo%5Fobjeto%5FquotFirstParameterquot
[8]: #Forma%5Fde%5Fuso%5Fda%5FAPI
[9]: #Buscar%5FTodas%5Fas%5FPrefeituras
[10]: #Parametros%5Fde%5Fconsulta%5Fdisponiveis
[11]: #Retornos%5Fesperados
[12]: #Buscar%5FPrefeitura%5Fpelo%5FCodigo%5FIBGE
[13]: #Retornos%5Fesperados-2
[14]: #Duvidas
[15]: https://www.ibge.gov.br/explica/codigos-dos-municipios.php
[16]: https://prefectures-dev.api.nfe.io/v1/prefectures
[17]: https://prefectures-dev.api.nfe.io/v1/prefectures%28'{Cod%5FIBGE