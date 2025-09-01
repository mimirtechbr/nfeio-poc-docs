---
sidebar_label: "Introdução à consulta de CPF com a NFE.io"
sidebar_position: 4
slug: documentacao-introducao-a-consulta-de-cpf
date: 2021-05-07
last_update:
  date: 2021-05-07
title: "Introdução à consulta de CPF com a NFE.io - NFE.io | Docs"
description: "Veja como é fácil e simples de fazer a integração de consulta de CPF com a NFE.io. Confira as informações retornadas para essa consulta."
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2021/05/image_2021-05-06_101847.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 1796
---

# Introdução à consulta de CPF com a NFE.io

> Nesse artigo vamos introduzir como é feita a consulta de CPF via API da NFE.io

A consulta de CPF tem como base a busca dos dados do Comprovante de Situação Cadastral de pessoa física que estão disponíveis no site da Receita Federal. Os dados que a API retorna são as informações encontradas a partir da consulta feita na seguinte url:

[https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp][5]

Ao acessar a url acima, você é direcionado para a página mostrada abaixo. Nessa imagem, é possível observar que, a partir da informação de um CPF e a data de nascimento do seu portador, são retornados os dados cadastrais da informação usada na consulta.

> ![](/static/docs/consultas/image_2021-05-06_101847.png)  
> **Figura 1\. Imagem de exemplo da página de consulta do de Situação Cadastral no CPF**

Abaixo segue um exemplo de uma Situação Cadastral do CPF de uma consulta feita.

> ![](/static/docs/consultas/image_2021-05-06_103732.png)  
> **Figura 2\. Imagem de exemplo do retorno da consulta do de Situação Cadastral no CPF**

### **1\. Base para a consulta de CPF**

Para poder se consultar os dados cadastrais do cartão CPF a partir da API da NFE.io é necessário informar o CPF e a data de nascimento da pessoa a ser consultada. É possível encontrar mais informações sobre a API na documentação da NFE.io na seguinte url:

[https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-cpf-v1/][6]

Nela é possível observar a existência da versão para a consulta de CPF. Essa url de consulta está abaixo.

| Método | URL                                                                                              |
| ------ | ------------------------------------------------------------------------------------------------ |
| GET    | [https://naturalperson.api.nfe.io/v1/naturalperson/status/\{federalTaxNumber\}/\{birthDate][7]\} |

O CPF a ser informado deve estar no mesmo campo da informação _federalTaxNumber_. O número deve ser informado sem barras traços e pontos. A data de nascimento deve estar no campo _birthDate_ no formato _aaaa-mm-dd_.

O parâmametro necessário para conseguir autenticar a chamada na API é a informação da api key. Ela está disponível na plataforma da NFE.io, e é necessário que seja utilizada a autenticação referente a consulta de dados.

Abaixo segue o exemplo de uma chamada feita. Nela o número "72946154\*" representa o número do CPF a ser consultado, o parâmetro "\*\*\*\*-" a data de nascimento no formato _aaaa-mm-dd_ e dado 5th... é início de uma api key de autenticação.

```json
https://naturalperson.api.nfe.io/v1/naturalperson/status/72946154***/****-**-**?apiKey=5th...
```

### **2\. Dados de retorno da API**

A consulta da API pode retornar os seguintes status:  

**Tabela 1\. Tipos de status que a API retorna**

| Status | Dado de retorno                                           |
| ------ | --------------------------------------------------------- |
| 200    | Dados consultados da RFB                                  |
| 400    | Parâmetro informado de forma incorreta                    |
| 401    | Não autorizado. Autenticação informada da forma incorreta |
| 403    | Acesso proibido                                           |
| 404    | Empresa não encontrada na consulta                        |
| 500    | Erro no processamento da API                              |
| 503    | Serviço indisponível                                      |

Abaixo segue o formato no qual os dados serão retornados no json de retorno da consulta. Nesse json é possível constatar a chave de cada um dos campos bem como o valor retornado e na forma que ele retorna. Também é possível observar como é feito o encadeamento das informações na consulta.

```json
{
  "createdOn": "2021-05-05T13:09:16.346Z",
  "name": "string",
  "federalTaxNumber": "string",
  "birthOn": "2021-05-05T13:09:16.346Z",
  "status": "string"
}
```

Na Tabela abaixo é possível observar o significado de cada um dos campos consultados pela API, bem como os parâmetros retornados em todos eles.

### **Dados de retorno**

---

**createdOn** _string($date-time)_  
Data da consulta

---

**name** _string_  
Nome da pessoa consultada

---

**federalTaxNumber** _string_  
CPF consultado

---

**birthOn** _string($date-time)_  
Data de nascimento da pessoa consultada

---

**status** _string_  
Status da situação cadastral

---


[1]: #Introducao%5Fa%5Fconsulta%5Fde%5FCPF%5Fcom%5Fa%5FNFEio
[2]: #1%5FBase%5Fpara%5Fa%5Fconsulta%5Fde%5FCPF
[3]: #2%5FDados%5Fde%5Fretorno%5Fda%5FAPI
[4]: #Dados%5Fde%5Fretorno
[5]: https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp
[6]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-cpf-v1/
[7]: https://naturalperson.api.nfe.io/v1/naturalperson/status/{federalTaxNumber}/{birthDate