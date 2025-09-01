---
sidebar_label: "Como consultar nota fiscal eletrônica"
sidebar_position: 5
slug: como-consultar-nota-fiscal-eletronica
date: 2020-09-23
last_update:
  date: 2025-07-16
title: "Como consultar nota fiscal eletrônica"
description: "Como consultar a nota fiscal eletrônica emitidaAo final desse tutorial, você será capaz de:Outros passos1. Consultar nota fiscal2. Consultar XML3. Consultar PDF (Danfe)Outros&#8230;"
author: "Gabriel Marquez"
image: "https://nfe.io/docs/app/uploads/2020/09/get-product-invoice-modified.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 608
---

# Como consultar a nota fiscal eletrônica emitida

A consulta de nota fiscal eletrônica é um processo importante para verificar o status e os detalhes das notas fiscais emitidas. Neste tutorial, você aprenderá como consultar uma nota fiscal eletrônica (NF-e) utilizando a API da NFE.io.

## Outros passos

1. [Pegar chave de autorização na plataforma][11]
2. [Instalar e importar url no postman][12]
3. [Emitir nota fiscal de produto][13]

## 1\. Consultar nota fiscal

Precisamos [consultar a nota fiscal][14] para verificar o status da mesma.

> **Observação:** Substitua \{companyId\} pela ID da empresa e a \{producInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> **O método HTTP utilizada para consultar a nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.**

`GET: http://api.nfse.io/v2/companies/{companyId}/productinvoices/{productInvoiceId}`

1. Clicar no botão "Send" (Enviar) para completar a requisição.

![](/static/docs/nota-fiscal-eletronica/get-product-invoice-modified.png)

1. Será retornado os dados completos da nota fiscal.

![](/static/docs/nota-fiscal-eletronica/get-product-invoice-result.png)

> **Observação:** A consulta de XML e consulta de PDF geram uma nova url temporária (válida por 15 minutos) e necessitará uma nova requisição para receber o dado válido.

## 2\. Consultar XML

Para [consultar o XML][15] é utilizado a mesma URL de requisição de consulta de nota fiscal adicionado de /xml

> **Observação:** Substitua \{companyId\} pela ID da empresa e a \{producInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> **O método HTTP utilizado para consultar o XML da nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.**

![](/static/docs/nota-fiscal-eletronica/get-xml-product-invoice-modified.png)

`GET: http://api.nfse.io/v2/companies/{companyId}/productinvoices/{productInvoiceId}/xml`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/nota-fiscal-eletronica/get-xml-product-invoice-modified-1.png)
2. Será retornado uma URL temporária para consulta do xml.

![](/static/docs/nota-fiscal-eletronica/get-xml-product-invoice-link.png)

1. Resultado da requisição da url temporária.  
![](/static/docs/nota-fiscal-eletronica/get-xml-product-invoice-result.png)

## 3\. Consultar PDF (Danfe)

Para consultar o PDF é utilizado a mesma URL de requisição de consulta de nota fiscal adicionado de `/pdf`

> **Observação:** Substitua \{companyId\} pela ID da empresa e a \{producInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> **O método HTTP utilizado para consultar o PDF da nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.**

`GET: http://api.nfse.io/v2/companies/{companyId}/productinvoices/{productInvoiceId}/pdf`

1. Clicar no botão "Send" (Enviar) para completar a requisição.

![](/static/docs/nota-fiscal-eletronica/get-pdf-product-invoice-modified.png)

1. Será retornado uma URL temporária para consulta do pdf.  
![](/static/docs/nota-fiscal-eletronica/get-pdf-product-invoice-link.png)
2. Resultado da requisição da url temporária.  
![](/static/docs/nota-fiscal-eletronica/get-pdf-product-invoice-result.png)

## Outros passos

1. [Pegar chave de autorização na plataforma][11]
2. [Instalar e importar url no postman][16]
3. [Emitir nota fiscal de produto][13]

[1]: #Como%5Fconsultar%5Fa%5Fnota%5Ffiscal%5Feletronica%5Femitida
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Outros%5Fpassos
[4]: #1%5FConsultar%5Fnota%5Ffiscal
[5]: #2%5FConsultar%5FXML
[6]: #3%5FConsultar%5FPDF%5FDanfe
[7]: #Outros%5Fpassos-2
[8]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#1%5FConsultar%5Fnota%5Ffiscal
[9]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#2%5FConsultar%5FXML
[10]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#3%5FConsultar%5FPDF%5FDanfe
[11]: https://nfe.io/docs/nossa-plataforma/pegar-chave-acesso/
[12]: http://nfe.io/docs/comum/postman/
[13]: https://nfe.io/docs/nota-fiscal-eletronica/integracao-api/integracao/
[14]: https://nfe.io/blog/financeiro/consultar-nota-fiscal-por-cpf/
[15]: https://nfe.io/consulta-nota-fiscal/
[16]: https://nfe.io/docs/comum/postman/