---
sidebar_label: "Como consultar nota fiscal por parâmetro"
sidebar_position: 6
slug: como-consultar-nota-fiscal-por-parametro
date: 2020-09-23
last_update:
  date: 2020-10-29
title: "Como consultar nota fiscal por parâmetro"
description: "Como consultar nota fiscal por parâmetroAo final desse tutorial, você será capaz de:Outros passos1. Consultar notas fiscais de uma empresa2. Consultar notas fiscais&#8230;"
author: "Gabriel Marquez"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 611
---

# Como consultar nota fiscal por parâmetro

A consulta de notas fiscais por parâmetro é uma funcionalidade que permite buscar notas fiscais eletrônicas (NF-e) com base em critérios específicos, como CNPJ do destinatário, status da nota, entre outros. Isso facilita a localização de notas fiscais específicas sem a necessidade de consultar uma a uma.

## Outros passos

[1\. Pegar chave de autorização na plataforma.][12]  
[2\. Instalar e importar url no postman][13]  
[3\. Emitir nota fiscal de produto][14]

## 1\. Consultar notas fiscais de uma empresa

Para consultar as notas fiscais de uma empresa, utilizaremos a url abaixo.

`GET: http://api.nfse.io/v2/companies/{companyId}/productinvoices?environment=test`

> **Obs:** Substitua \{companyId\} pela ID de sua empresa. O parâmetro \{environment\} não pode ser nulo, preencha-o com production ou test. Nesse tutorial usaremos o ambiente de teste.
> 
> **Utilizaremos o método HTTP do tipo "GET"**, portanto, verifique no seu postman se está selecionado a opção corretamente.

1. Clicar no botão "Send" (Enviar) para completar a requisição.
2. Será retornado alguns dados e uma lista com as notas fiscais dessa empresa.

## 2\. Consultar notas fiscais via elasticsearch

O Elasticsearch é um mecanismo de busca e análise de dados distribuído e open source para todos os tipos de dados, incluindo textuais, numéricos, geoespaciais, estruturados e não estruturados. Através dele, conseguiremos fazer buscas de notas fiscais por diversos tipos de parâmetros e dados.

Veja abaixo um exemplo simples de uma busca por notas fiscais pelo CNPJ do destinatário.

`GET: http://api.nfse.io/v2/companies/{companyId}/productinvoices?environment=test&q=buyer.federalTaxNumber:8662968678`

O parâmetro `q`, é onde passaremos a query string do elasticsearch.

Nesse caso, a query `q=buyer.federalTaxNumber:8662968678` corresponde ao campo do JSON da nota fiscal que temos da API, como no exemplo abaixo.

```json
{
    "buyer": {
        "name": "João",
        "address": {
            "city": {
                "code": "3550308",
                "name": "jundiai"
            },
            "state": "SP",
            "district": "centro",
            "street": "rua petronilha antunes",
            "postalCode": "13207760",
            "number": "204",
            "country": "BRA"
        },
        "federalTaxNumber": 8662968678
    },
    "items": [{
        "code": "2617",
        "unitAmount": 9.98,
        "quantity": 5,
        "cfop": 5102,
        "ncm": "47079000",
        "codeGTIN": "SEM GTIN",
        "codeTaxGTIN": "SEM GTIN",
        "tax": {
            "totalTax": 6,
            "icms": {
                "amount": 6,
                "rate": 18,
                "baseTax": 33.25,
                "baseTaxSTReduction": "33.33",
                "baseTaxModality": "3",
                "cst": "20",
                "origin": "0"
            },
            "pis": {
                "amount": 0,
                "rate": 0,
                "baseTax": 0,
                "cst": "06"
            },
            "cofins": {
                "amount": 0,
                "rate": 0,
                "baseTax": 0,
                "cst": "06"
            }
        },
        "cest": "",
        "description": "FEIJAO CAMIL 500G NF ENTRADA 1030099 14\/05\/2018"
    }]
}
```

Se quiséssemos consultar as notas fiscais pelo nome do destinatário, faríamos a seguinte query:

`q=buyer.name:"João"`

Perceba que temos um leque bem amplo de possibilidades e com certeza você poderá implementar os filtros ideais para o seu negócio.

## 3\. Sintaxe da string de consulta

A string de consulta é analisada em uma série de termos e operadores. Um termo pode ser uma única palavra - `João` ou `Pedro `\- ou uma frase, entre aspas duplas - `"João Pedro"` \- que procura todas as palavras na frase, na mesma ordem.

Os operadores permitem que você personalize a pesquisa. Veja abaixo as opções disponíveis.

## Nomes dos campos

Você pode especificar campos para pesquisar na sintaxe da consulta:

* onde o campo `status` contém `Issued`

`q=status:Issued`

* onde o campo `buyer.name` contém `João` ou `Pedro`

`q=buyer.name:(João OR Pedro)`

* onde o campo `buyer.name` contém exatamente a frase `"João Pedro"`

`q=buyer.name:"João Pedro"`

## Intervalos

Intervalos podem ser especificados para compos do tipo date, numeric ou string.

* Todos os dias de 2019

`q=createdOn:[2019-01-01 TO 2019-12-31]`

* Números 1...5

`q=number:[1 TO 5]`

* Números de 10 em diante

`q=number:[10 TO *]`

## Combinações

Os operadores booleanos AND, OR e NOT (&&, || e !) também são suportados, mas cuidado, nesses casos os parênteses devem ser usados sempre que múltiplos operadores são usados juntos. Por exemplo:

`q=status:(Issued OR Cancelled) AND buyer.name:(João OR Pedro) AND createdOn:[2020-01-01 TO 2020-01-31]`

Esta consulta irá trazer todas as notas fiscais que foram emitidas ou canceladas, em que o campo do nome do destinatário contém o nome "João" ou "Pedro", no dia 01/01/2020 até 31/01/2020.

Para saber mais sobre "Query String", [acesse a documentação do elasticsearch.][15]


[1]: #Como%5Fconsultar%5Fnota%5Ffiscal%5Fpor%5Fparametro
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Outros%5Fpassos
[4]: #1%5FConsultar%5Fnotas%5Ffiscais%5Fde%5Fuma%5Fempresa
[5]: #2%5FConsultar%5Fnotas%5Ffiscais%5Fvia%5Felasticsearch
[6]: #3%5FSintaxe%5Fda%5Fstring%5Fde%5Fconsulta
[7]: #Nomes%5Fdos%5Fcampos
[8]: #Intervalos
[9]: #Combinacoes
[10]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-por-parametro/#1%5FConsultar%5Fnotas%5Ffiscais%5Fde%5Fuma%5Fempresa
[11]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-por-parametro/#2%5FConsultar%5Fnotas%5Ffiscais%5Fvia%5Felasticsearch
[12]: https://nfe.io/docs/documentacao/nossa-plataforma/chaves-de-autenticacao/
[13]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/importar-colecao-postman/
[14]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#4%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[15]: https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html