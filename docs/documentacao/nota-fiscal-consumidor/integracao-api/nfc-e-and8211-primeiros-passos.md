---
sidebar_label: "NFC-e - Primeiros passos"
sidebar_position: 1
slug: nfc-primeiros-passos
date: 2020-09-24
last_update:
  date: 2025-06-13
title: "NFC-e - Primeiros passos sobre a integração de Nota Fiscal de Consumidor NFC-e"
description: "Nesse documento você entenderá sobre os primeiros passos para fazer a integração da nota fiscal de consumidor eletrônica."
author: "Gabriel Marquez"
image: "https://nfe.io/docs/app/uploads/2020/09/authentication-key-modified.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 623
---

# Integração Nota Fiscal de Consumidor - NFC-e

Nesse documento você entenderá sobre os primeiros passos para fazer a integração da nota fiscal de consumidor eletrônica.

> A Nota fiscal de consumidor eletrônica é o documento digital fiscal usada para a documentação de operaçóes de circulação de mercadorias ou prestação de serviço do consumidor final, em transações presenciais, dentro do mesmo estado.

**Saiba mais:** [O que é nota fiscal eletrônica?][14]

### Ao final desse tutorial, você será capaz de:

[1\. Cadastrar uma empresa][15]  
[2\. Fazer upload de um certificado na plataforma][16]  
[3\. Cadastrar uma inscrição estadual][17]  
[4\. Emitir uma nota fiscal de consumidor][18]

### Próximos passos

[1\. Consultar uma nota fiscal][19]  
[2\. Consultar o XML de uma nota fiscal emitida][20]  
[3\. Consultar o PDF (danfce) de uma nota fiscal emitida][21]

## Requisitos

* Qual tipo de nota fiscal devo emitir?
* Como fazer o credenciamento da minha empresa para emissão de nota?
* Quer saber mais sobre certificado digital?
* [Desconto para adquirir seu certificado digital A1?][22]

## Tutorial

A partir desse momento faremos uma breve explicação de como realizar a integração de Nota fiscal de Consumidor com a API oferecida pela [NFE.io][23].

**Veja mais sobre a** [Documentação da API][24]

> Essa coleção é exclusiva para NFC-e e você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://www.postman.com/nfe-io/workspace/nfe-io-public-api-demos/collection/29654924-bbda8082-c5fe-4dec-b51c-ff3618402957?action=share&creator=29654924
```

Tutorial de como importar a url no postman [Clique aqui][25]

## Primeiros passos

Antes de tudo, você precisará realizar um cadastro na nossa plataforma [app.nfe.io][26]. Depois, você terá que pegar a chave de autorização do nosso sistema.

> Devemos atentar para copiar a autorização referente 'Nota fiscal'

**Veja como pegar a chave de autorização na plataforma:** [Autenticação][27]

> **Lembre-se:** Após importar a url do postman e copiar a chave de autenticação para nota fiscal eletrônica, você deverá adicionar em cada requisição na aba "Headers" (cabeçalhos) a chave em "Authorization" (autorização).  
> ![integração api](/static/docs/nota-fiscal-consumidor/authentication-key-modified.png)

## 1\. Criar uma empresa

Para emitir as notas fiscais, é necessário criar uma empresa. Neste momento será obrigatório a identificação do CNPJ, endereço e tipo de regime tributário.

Ao sucesso da requisição, será gerada um chave de identificação (ID), e você deve copiá-la para os passos seguintes.

Abaixo, a url e um json de exemplo contendo os dados para a criação de uma empresa.

> O método HTTP utilizada na criação da empresa é o "POST", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o Create Company na coleção)

`POST: https://api.nfse.io/v2/companies`

```json
 {  
  "company": {
    "name":"RAZAO SOCIAL DA EMPRESA",
    "federalTaxNumber": 58065968000186,
    "taxRegime": "SimplesNacional",
        "address": {  
            "state":"SP",
            "city": {   
                "code":"3550308",
                "name":"São Paulo"
            },
            "district":"BAIRRO",
            "additionalInformation":" INFORMAÇÃO ADICIONAL",
            "street":"AV NOME DA RUA",
            "number":"1111",
            "postalCode":"14940001",
            "country":"BRA"
        }
  } 
```

1.Você deverá enviar os dados preenchidos corretamente com as informações da sua empresa e clicar no botão "Send" (Enviar).

![api integração postman enviar](/static/docs/nota-fiscal-consumidor/create-company-2.png)

2.Você receberá uma ID de empresa após o envio e sucesso da requisição.

> **Será necerrário copiá-la para dar continuidade nos passos seguintes.**

![integration api](/static/docs/nota-fiscal-consumidor/company-id3-modified.png)

> **Atenção:** Em todas as requisições na API, deverá ser informado a ID da empresa fornecida no sucesso de requisição.

## 2\. Fazer upload do certificado na plataforma

### O que é um certificado digital?

Para entender mais sobre o que é um certificado digital, escrevemos um resumo em: [Tudo sobre Certificado Digital][28].

Na nota fiscal eletrônica de consumidor devemos realizar uma requisição para o envio do certificado digital que será utilizado como autenticador com o Governo, onde deverá ser enviado o arquivo `.pfx` e a senha.

> **Atenção:** Não se preocupe, após a inserção do certificado na nossa plataforma, todos os dados são criptografados para maior segurança.

Abaixo, a url e um json de exemplo contendo os dados para realizar o envio do certificado.

> Observação: Substitua \{companyId\} pela ID gerada no passo de criação da empresa.
> 
> O método HTTP utilizada no envio do certificado é o "POST", portanto verifique no seu postman se está preenchido corretamente.  
> (Utilize o Create Certificate na coleção)

`` `POST: https://api.nfse.io/v2/companies/{companyId}/certificates` ``

![criacao do certificado](/static/docs/nota-fiscal-consumidor/create-certificate.png)

1. Você deverá selecionar o arquivo .pfx em seus arquivos juntamente com a senha e clicar no botão "Send" (Enviar).

![Envio da requisição do certificado](/static/docs/nota-fiscal-consumidor/create-certificate-send-modified.png)

Após o sucesso da requisição, será informado alguns dados sobre o certificado, tais como:

* A validade do certificado
* Status se está ativou ou inativo na plataforma
* Thumbprint
* Dados sobre o emissor do certificado
1. Você deverá enviar os dados preenchidos corretamente com as informações da sua inscrição estadual e clicar no botão "Send" (Enviar).

![Certificado inserido com sucesso](/static/docs/nota-fiscal-consumidor/certificate-created-modified.png)

## 3\. Criar inscrição estadual

O terceiro passo será criar o "State Tax", que identifica na nossa plataforma a Inscrição Estadual usada pela empresa.

Saiba mais sobre [Inscrição Estadual][24].

A inscrição estadual tem possibilidade de ser uma ou mais por estado para o mesmo CNPJ. Portanto, separamos a requisição para melhor identificação e organização das sequências númericas.

Ela também é responsável por identificar o ambiente em que a nota fiscal será emitida, sendo disponível como "EnvironmentType" (tipo de ambiente), com os valores "_Test_" (_desenvolvimento_) e "Production" (_produção_).

> Por padrão o ambiente criado na plataforma é "Test" (desenvolvimento).

Abaixo, a url e um json de exemplo contendo os dados básicos para a criação de uma inscrição estadual.

> Observação: Substitua \{companyId\} pela ID gerada no passo anterior.
> 
> **O método HTTP utilizada na criação da inscrição estadual é o "POST", portanto, verifique no seu postman se está preenchido corretamente.** 
> (Utilize o `Create StateTaxes` na coleção)

`` `POST: https://api.nfse.io/v2/companies/{companyId}/stateTaxes` ``

```Json
    {
  "stateTax": {
    "code": "SP",
    "taxNumber": "344104773111",
    "SpecialTaxRegime": "automatico",
    "serie": 1,
    "number": 1,
    "type": "NFCe",
    "securityCredential": {
        "code": "d41492a9-4d10-4454-b19b-dddddddddd",
        "id": 1 }
        }
    }
```

Devemos atentar para os valores de Série e Número (_serie e number_), que são utilizados pela SEFAZ para sequenciar as notas emitidas por uma empresa.

Caso você já emita nota, precisará identificar qual a série e o último número emitido, com isso podemos continuar a emissão de onde parou.

Se preferir, poderá identificar com seu contador, uma nova série e número para emissão de nota com a nossa plataforma.

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua inscrição estadual e clicar no botão "Send" (Enviar).

![Envio da requisição da inscricao estadual](/static/docs/nota-fiscal-consumidor/create-state-tax-modified.png)

1. Você receberá uma ID da inscrição estadual após o envio e sucesso da requisição.  
![Inscrição estadual criada com sucesso](/static/docs/nota-fiscal-consumidor/state-tax-created-modified.png)

## 4\. Emitir primeira nota fiscal

Pronto, todos os passos antecessores de emissão de suas notas fiscais eletrônicas estão concluídos.

Colocamos um exemplo do mínimo de dados para serem informados à nossa API, caso precise ou queira verificar o restante da documentação, estará disponível em: [Documentação completa.][24]

Os campos mínimos para serem enviados são os dados do comprador (buyer) e os produtos (items).

> Observação: Neste momento, caso você não tenha os dados de impostos:
> 
> * NCM
> * CST/CSOSN - ICMS/PIS/COFINS
> * CFOP
> * CEST
> * GTIN  
> Sugerimos que você avalie com seu contador como deverão ser preenchidos no contexto da sua empresa.
> 
> Caso você já tenha as informaçôes, preenchê-las corretamente e realizar a requisição de emissão de nota.
> 
> **Atenção: Nosso processamento é realizado de forma assíncrona, portanto, o sucesso da requisição não significa que a nota fiscal já foi emitida. Realizamos uma breve validação no momento do envio e outras verificações no decorrer do processamento.**

Abaixo, a url e um json de exemplo contendo os dados mínimos para a emissão de uma nota fiscal.

> **Observação:** Substitua \{companyId\} pela ID gerada no passo de criação da empresa.
> 
> **O método HTTP utilizada no envio da nota fiscal é o "POST", então verifique no seu postman se está preenchido corretamente.**  
> (Utilize o _Issue Invoice_ na coleção)

`POST: https://api.nfse.io/v2/companies/{companyId}/consumerinvoices`

```json
{
    "items": [{
        "unitAmount": 499.00,
        "quantity": 1.0000,
        "cfop": 5102,
        "ncm": "21069030",
        "codeGTIN": "SEM GTIN",
        "CodeTaxGTIN": "SEM GTIN",
        "tax": {
            "totalTax": 156.94,
            "icms": {
                "origin": "0",
                "csosn": "102"
            },
            "pis": {
                "amount": 0.00,
                "rate": 0.6500,
                "baseTax": 0.00,
                "cst": "01"
            },
            "cofins": {
                "amount": 14.97,
                "rate": 3.0000,
                "baseTax": 499.00,
                "cst": "01"
            }
        },
        "cest": "0301100",
        "description": "NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
        "code": "K0003-3"
    }]
}
```

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua nota fiscal e clicar no botão "Send" (Enviar).

![Enviar nota fiscal](/static/docs/nota-fiscal-consumidor/create-invoice-modified.png)

1. Ao sucesso da requisição, será fornecido uma ID da nota fiscal utilizada no processamento da emissão.

![Nota fiscal enviada com sucesso](/static/docs/nota-fiscal-consumidor/invoice-created-modified-300x72.png)

## Importação da url do postman

Novamente, fornecemos uma URL de importação no **POSTMAN** com todas essas requisiçôes já inclusas. Basta inserir sua Autorização em cada requisição e alterar os dados fornecidos.

```json
https://www.getpostman.com/collections/ac619eadd8e51fb33e95
```

## Próximos passos

[Consultar uma nota fiscal de consumidor][29]  
[Consultar o XML de uma nota fiscal de consumir emitida][20]  
[Consultar o PDF (danfe) de uma nota fiscal de consumidor emitida][21]


[1]: #Integracao%5FNota%5FFiscal%5Fde%5FConsumidor%5F-%5FNFC-e
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Proximos%5Fpassos
[4]: #Requisitos
[5]: #Tutorial
[6]: #Primeiros%5Fpassos
[7]: #1%5FCriar%5Fuma%5Fempresa
[8]: #2%5FFazer%5Fupload%5Fdo%5Fcertificado%5Fna%5Fplataforma
[9]: #O%5Fque%5Fe%5Fum%5Fcertificado%5Fdigital
[10]: #3%5FCriar%5Finscricao%5Festadual
[11]: #4%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[12]: #Importacao%5Fda%5Furl%5Fdo%5Fpostman
[13]: #Proximos%5Fpassos-2
[14]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/
[15]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/primeiros-passos/#1%5FCriar%5Fuma%5Fempresa
[16]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/primeiros-passos/#2%5FFazer%5Fupload%5Fdo%5Fcertificado%5Fna%5Fplataforma
[17]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/primeiros-passos/#3%5FCriar%5Finscricao%5Festadual
[18]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/primeiros-passos/#4%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[19]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/consultar-nota-fiscal-consumidor/#Como%5Fconsultar%5Fa%5Fnota%5Ffiscal%5Fde%5Fconsumidor%5Feletronica%5Femitida
[20]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/consultar-nota-fiscal-consumidor/#2%5FConsultar%5FXML
[21]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/consultar-nota-fiscal-consumidor/#3%5FConsultar%5FPDF%5FDanfce
[22]: https://p.nfe.io/pt-br/certificado-digital-20off
[23]: https://nfe.io/
[24]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-consumidor-v2/
[25]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/importar-colecao-postman/
[26]: https://app.nfe.io/
[27]: https://nfe.io/docs/documentacao/nossa-plataforma/chaves-de-autenticacao/
[28]: https://nfe.io/docs/documentacao/certificado-digital/conceitos/
[29]: https://nfe.io/docs/documentacao/nota-fiscal-consumidor/integracao-api-nfc/consultar-nota-fiscal-consumidor/#1%5FConsultar%5Fnota%5Ffiscal