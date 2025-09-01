---
sidebar_label: "Consultar a nota fiscal de consumidor eletrônica"
sidebar_position: 2
slug: consultar-a-nota-fiscal-de-consumidor-eletronica
date: 2020-09-24
last_update:
  date: 2020-10-19
title: "Consultar a nota fiscal de consumidor eletrônica - NFE.io | Docs"
description: "Como consultar a nota fiscal de consumidor eletrônica emitidaAo final desse tutorial, você será capaz de:Outros passos1. Consultar nota fiscal2. Consultar XML3. Consultar&#8230;"
author: "Gabriel Marquez"
image: "https://nfe.io/docs/app/uploads/2020/09/get-consumer-invoice.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 627
---


## Como consultar a nota fiscal de consumidor eletrônica emitida

### Ao final desse tutorial, você será capaz de:

1. Consultar nota fiscal na API
2. Consultar XML da nota fiscal emitida
3. Consultar PDF (Danfce) da nota fiscal emitida

### Outros passos

1. Pegar chave de autorização na plataforma
2. Instalar e importar url no postman
3. Emitir nota fiscal de consumidor

### 1\. Consultar nota fiscal

Precisamos consultar a nota fiscal para verificar o status da mesma.

> Observação: Substitua \{companyId\} pela ID da empresa e a \{consumerInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> O método HTTP utilizada para consultar a nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o Get Invoice na coleção)

`GET: https://api.nfse.io/v2/companies/{companyId}/consumerinvoices/{consumerInvoiceId}`

1. Clicar no botão "Send" (Enviar) para completar a requisição.

![](/static/docs/nota-fiscal-consumidor/get-consumer-invoice.png)

1. Será retornado os dados completos da nota fiscal.

![](/static/docs/nota-fiscal-consumidor/get-consumer-invoice-result.png)

> Observação: A consulta de XML e consulta de PDF geram uma nova url temporária (válida por 15 minutos) e necessitará uma nova requisição para receber o dado válido.

## 2\. Consultar XML

Para consultar o XML é utilizado a mesma URL de requisição de consulta de nota fiscal adicionado de /xml

> Observação: Substitua \{companyId\} pela ID da empresa e a \{consumerInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> O método HTTP utilizado para consultar o XML da nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o Get Invoice XML na coleção)

GET: [https://api.nfse.io/v2/companies/\{companyId\}/consumerinvoices/\{consumerInvoiceId\}/xml][8]

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/nota-fiscal-consumidor/get-xml-consumer-invoice.png)
2. Será retornado uma URL temporária para consulta do xml.

![](/static/docs/nota-fiscal-consumidor/get-xml-consumer-invoice-link.png)

1. Resultado da requisição da url temporária.

![](/static/docs/nota-fiscal-consumidor/get-xml-consumer-invoice-result.png)

## 3\. Consultar PDF (Danfce)

Para consultar o PDF é utilizado a mesma URL de requisição de consulta de nota fiscal adicionado de /pdf

> Observação: Substitua \{companyId\} pela ID da empresa e a \{consumerInvoiceId\} pela ID da nota fiscal gerada na emissão.
> 
> O método HTTP utilizado para consultar o PDF da nota fiscal é o "GET", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o Get Invoice PDF (DANFC-e) na coleção)

`GET: https://api.nfse.io/v2/companies/{companyId}/consumerinvoices/{consumerInvoiceId}/pdf`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/nota-fiscal-consumidor/get-pdf-consumer-invoice.png)
2. Será retornado uma URL temporária para consulta do pdf.

![](/static/docs/nota-fiscal-consumidor/get-pdf-consumer-invoice-link.png)

1. Resultado da requisição da url temporária.

![](/static/docs/nota-fiscal-consumidor/get-pdf-consumer-invoice-result.png)

#### Outros passos

1. Pegar chave de autorização na plataforma
2. Instalar e importar url no postman
3. [Emitir nota fiscal de consumidor][9]

[1]: #Como%5Fconsultar%5Fa%5Fnota%5Ffiscal%5Fde%5Fconsumidor%5Feletronica%5Femitida
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Outros%5Fpassos
[4]: #1%5FConsultar%5Fnota%5Ffiscal
[5]: #2%5FConsultar%5FXML
[6]: #3%5FConsultar%5FPDF%5FDanfce
[7]: #Outros%5Fpassos-2
[8]: https://api.nfse.io/v2/companies/{companyId}/consumerinvoices/{consumerInvoiceId}/xml
[9]: https://nfe.io/docs/nota-fiscal-consumidor/integracao-api/integracao/