---
sidebar_label: "Emitir uma nota fiscal de Produto"
sidebar_position: 3
slug: /nota-fiscal-eletronica/emitir-uma-nota-fiscal-de-produto
date: 2025-02-10
last_update:
  date: 2025-02-14
title: "Emitir uma nota fiscal de Produto"
description: "Integração da Nota Fiscal Eletronica (NF-e / NFC-e)Ao final desse tutorial, você será capaz de:Próximos passosRequisitosTutorialPrimeiros passos1. Emitir primeira nota fiscalImportação da url&#8230;"
author: "Rogerio Franzoni"
image: "https://nfe.io/docs/app/uploads/2020/09/create-invoice-modified.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 8011
---

# Integração da Nota Fiscal Eletronica (NF-e / NFC-e)

A Nota fiscal eletrônica é o documento digital fiscal usada para a documentação de operaçóes de circulação de mercadorias ou prestação de serviço, seja transporte no mesmo estado, quanto entre estados.

**Saiba mais:** [O que é nota fiscal eletrônica?][11]

## Ao final desse tutorial, você será capaz de:

[1\. Emitir uma nota fiscal de produto][12]

## Próximos passos

1. [Emitir uma nota fiscal eletrônica (NF-e/NFC-e) utilizando Motor de Cálculo de Tributos][13]
2. [Consultar uma nota fiscal][14]
3. [Consultar o XML de uma nota fiscal emitida][15]
4. [Consultar o PDF (danfe) de uma nota fiscal emitida][16]

## Requisitos

* [Qual tipo de nota fiscal devo emitir?][17]
* [Como fazer o **credenciamento** da minha empresa para emissão de nota?][18]
* [Quer saber mais sobre certificado digital?][19]
* [Desconto para adquirir seu certificado digital **A1?**][20]

## Tutorial

A partir desse momento faremos uma breve explicação de como realizar a integração de Nota fiscal de Produto com a API oferecida pela NFE.io.

**Veja mais sobre a** [Documentação da API][21]

> Você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

Tutorial de como importar a url no postman [Clique aqui][22]

## Primeiros passos

## 1\. Emitir primeira nota fiscal

Pronto, todos os passos antecessores de emissão de suas notas fiscais eletrônicas estão concluídos.

Colocamos um exemplo do mínimo de dados para serem informados à nossa API, caso precise ou queira verificar o restante da documentação, estará disponível em: [Documentação completa.][23]

Os campos mínimos para serem enviados são os dados do comprador (buyer) e os produtos (items).

> **Observação:** Neste momento, caso você não tenha os dados de impostos:
> 
> * NCM
> * CST/CSOSN - ICMS/PIS/COFINS
> * CFOP
> * CEST
> * GTIN  
> Sugerimos que você avalie com seu contador como deverão ser preenchidos no contexto da sua empresa.  
> Outra opção seria utilizar o motor de cálculo de imposto da NFE.io que preenche automaticamente o grupo "tax".
> 
> Caso você já tenha as informaçôes, preenchê-las corretamente e realizar a requisição de emissão de nota.
> 
> **Atenção: Nosso processamento é realizado de forma assíncrona, portanto, o sucesso da requisição não significa que a nota fiscal já foi emitida. Realizamos uma breve validação no momento do envio e outras verificações no decorrer do processamento.**

Abaixo, a url e um json de exemplo contendo os dados mínimos para a emissão de uma nota fiscal **sem** a utilização do motor de cálculo de imposto.

> **Observação:** Substitua \{companyId\} pela ID gerada no passo de criação da empresa.
> 
> **O método HTTP utilizada no envio da nota fiscal é o "POST", então verifique no seu postman se está preenchido corretamente.**

`POST: https://api.nfse.io/v2/companies/{companyId}/productinvoices`

```json
{
    "buyer": {
        "name": "teste",
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
        "description": "FEIJAO BOLINHA CAMIL 500G NF ENTRADA 1030099 14\/05\/2018"
    }]
}
```

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua nota fiscal e clicar no botão "Send" (Enviar).

![](/static/docs/nota-fiscal-eletronica/create-invoice-modified.png)

1. Ao sucesso da requisição, será fornecido uma ID da nota fiscal utilizada no processamento da emissão.

![](/static/docs/nota-fiscal-eletronica/invoice-created-modified.png)

## Importação da url do postman

Novamente, fornecemos uma URL de importação no POSTMAN com todas essas requisiçôes já inclusas. Basta inserir sua Autorização em cada requisição e alterar os dados fornecidos.

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

## Próximos passos

1. [Emitir uma nota fiscal de produto utilizando o Motor de Cálculo de Triutos][13]
2. [Consultar o XML de uma nota fiscal emitida][15]
3. [Consultar o PDF (danfe) de uma nota fiscal emitida][16]

## Veja também:

* [Nossos segmentos][24]
* [Sobre a NFE.io][25]
* [Junte-se ao nosso time][26]

[1]: #Integracao%5Fda%5FNota%5FFiscal%5FEletronica%5FNF-e%5FNFC-e
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Proximos%5Fpassos
[4]: #Requisitos
[5]: #Tutorial
[6]: #Primeiros%5Fpassos
[7]: #1%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[8]: #Importacao%5Fda%5Furl%5Fdo%5Fpostman
[9]: #Proximos%5Fpassos-2
[10]: #Veja%5Ftambem
[11]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/
[12]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#4%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[13]: https://nfe.io/docs/documentacao/emitir-uma-nota-fiscal-de-produto-utilizando-o-motor-de-calculo-de-tributos/
[14]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#1%5FConsultar%5Fnota%5Ffiscal
[15]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#2%5FConsultar%5FXML
[16]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#3%5FConsultar%5FPDF%5FDanfe
[17]: https://nfe.io/docs/conceitos/notas-fiscais/
[18]: https://nfe.io/docs/nota-fiscal-eletronica/credenciamento-nf-e/
[19]: https://nfe.io/docs/certificado-digital/conceitos/
[20]: https://p.nfe.io/pt-br/certificado-digital-20off
[21]: https://nfe.io/doc/rest-api/nfe-v2/
[22]: https://nfe.io/docs/comum/postman/
[23]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/
[24]: https://nfe.io/segmentos/
[25]: https://nfe.io/sobre/
[26]: https://nfe.io/carreira/