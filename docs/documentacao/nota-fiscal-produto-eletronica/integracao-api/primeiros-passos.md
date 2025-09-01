---
sidebar_label: "Primeiros Passos"
sidebar_position: 1
slug: /nota-fiscal-eletronica/integracao-api/primeiros-passos
date: 2025-02-14
last_update:
  date: 2025-02-14
title: "Primeiros passos - NFE.io | Docs"
description: "Primeiros Passos para Integração da Nota Fiscal Eletrônica.Ao final desse tutorial, você será capaz de:Próximos passosRequisitosTutorialPrimeiros passos1. Obter a chave de autorização (apikey).2&#8230;."
author: "Rogerio Franzoni"
image: "https://nfe.io/docs/app/uploads/2025/02/Auth.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7984
---

# Primeiros Passos para Integração da Nota Fiscal Eletrônica.

A Nota fiscal eletrônica é o documento digital fiscal usada para a documentação de operaçóes de circulação de mercadorias ou prestação de serviço, seja transporte no mesmo estado, quanto entre estados.

**Saiba mais:** [O que é nota fiscal eletrônica?][15]

## Ao final desse tutorial, você será capaz de:

[1\. Cadastrar uma empresa][16]  
[2\. Fazer upload de um certificado na plataforma][17]  
[3\. Cadastrar uma inscrição estadual][18]

## Próximos passos

1. [Emitir uma nota fiscal de produto][19]
2. [Emitir uma nota fiscal de produto utilizando o Motor de Cálculo de Tributos][20]
3. [Consultar uma nota fiscal][21]
4. [Consultar o XML de uma nota fiscal emitida][22]
5. [Consultar o PDF (danfe) de uma nota fiscal emitida][23]

## Requisitos

* [Qual tipo de nota fiscal devo emitir?][24]
* [Como fazer o **credenciamento** da minha empresa para emissão de nota?][25]
* [Quer saber mais sobre certificado digital?][26]
* [Desconto para adquirir seu certificado digital **A1?**][27]

## Tutorial

A partir desse momento faremos uma breve explicação de como realizar cadastros necessários para possibilitar a integração de Nota fiscal de Produto com a API oferecida pela NFE.io.

**Veja mais sobre a** [Documentação da API][28]

> Você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

Tutorial de como importar a url no postman [Clique aqui][29]

## Primeiros passos

Antes de tudo, você precisará realizar um cadastro na nossa plataforma [app.nfe.io][30]. Depois, você terá que pegar a chave de autorização do nosso sistema.

> Devemos atentar para copiar a autorização referente 'Nota fiscal'

## 1\. Obter a chave de autorização (apikey).

**Veja como pegar a chave de autorização na plataforma:** [Autenticação][31]

> **Lembre-se:** Após importar a url do postman e copiar a chave de autenticação para nota fiscal eletrônica, você deverá adicionar em cada requisição na aba "Auth", Auth Type "API Key", Key "Authorization", Value "inserir a chave" ou na aba "Headers" (cabeçalhos) a chave em "Authorization" (autorização).  
> 
> * Como configurar a chave de autorização no Postman.  
> ![](https://nfe.io/docs/app/uploads/2025/02/Auth.png)  
> ![](https://nfe.io/docs/app/uploads/2025/02/Headers-Auth.png)

## 2\. Criar uma empresa

Para emitir as notas fiscais, é necessário criar uma empresa. Neste momento será obrigatório a identificação do CNPJ, endereço e tipo de regime tributário.

Ao sucesso da requisição, será gerada um chave de identificação (ID), e você deve copiá-la para os passos seguintes.

Abaixo, a url e um json de exemplo contendo os dados para a criação de uma empresa.

**Saiba mais:** [Entendendo a estrutura do json (layout de integração)][32]

> O método HTTP utilizada na criação da empresa é o "POST", portanto, verifique no seu postman se está preenchido corretamente.

```
POST: https://api.nfse.io/v2/companies/
```

```json
 {  
  "company": {
    "name":"RAZAO SOCIAL DA EMPRESA",
    "federalTaxNumber": 99999999000199,
    "taxRegime": "SimplesNacional",
    "address":{  
     "state":"SP",
     "city":{   
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
}
```

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua empresa e clicar no botão "Send" (Enviar).  
>   * Create a Company  
>   ![](https://nfe.io/docs/app/uploads/2025/02/Create-a-comapny-2.png)
2. Você receberá uma ID de empresa após o envio e sucesso da requisição.  
Será necerrário copiá-la para dar continuidade nos passos seguintes.  
>   * Company Id  
>   ![](/static/docs/nota-fiscal-eletronica/company-id3-modified.png)

> Atenção: Em todas as requisições na API, deverá ser informado a ID da empresa fornecida no sucesso de requisição.

## 3\. Fazer upload do certificado na plataforma

### O que é um certificado digital?

Para entender mais sobre o que é um certificado digital, escrevemos um resumo em: [Tudo sobre Certificado Digital.][26]

Na nota fiscal eletrônica de produto devemos realizar uma requisição para o envio do certificado digital que será utilizado como autenticador com o Governo, onde deverá ser enviado o arquivo .pfx e a senha.

> **Atenção:** Não se preocupe, após a inserção do certificado na nossa plataforma, todos os dados são criptografados para maior segurança.

Abaixo, a url e um json de exemplo contendo os dados para realizar o envio do certificado.

> **Observação:** Substitua \{companyId\} pela ID gerada no passo de criação da empresa.  
> **O método HTTP utilizada no envio do certificado é o "POST", portanto verifique no seu postman se está preenchido corretamente.**

`POST: https://api.nfse.io/v2/companies/{companyId}/certificates`

1. Você deverá selecionar o arquivo .pfx em seus arquivos juntamente com a senha e clicar no botão "Send" (Enviar).  
>   * Uploading a Certificate  
>   ![](https://nfe.io/docs/app/uploads/2025/02/Upload-certificate-1.png)
2. Após o sucesso da requisição, será informado alguns dados sobre o certificado, tais como:  
   * A validade do certificado  
   * Status se está ativou ou inativo na plataforma  
   * Thumbprint  
   * Dados sobre o emissor do certificado  
![](/static/docs/nota-fiscal-eletronica/certificate-created-modified.png)

## 4\. Criar inscrição estadual

O terceiro passo será criar o "State Tax", que identifica na nossa plataforma a[ Inscrição Estadual][33] usada pela empresa.

Saiba mais sobre [ Inscrição Estadual][33].

1. No cadastro da Inscrição Estadual você vai definir as seguintes informações:  
   * "processingDetails" - Estratégia para emissão de nota fiscal em contingência.  
   (clique [aqui][34] para mais informações).  
   * "type" - Tipo de nota fiscal (NF-e \[nFe\] ou NFC-e \[nFCe\]).  
   * "environmentType" -Ambiente da SEFAZ (Produção \[production\] ou Homologação \[test\]).  
   * "serie" - Série da nota fiscal.  
   * "number" - Número inicial da nota fiscal.  
   * "code" - UF (define qual é a SEFAZ que vai recepcionar as notas fiscais).  
   * "specialTaxRegime" - Regime especial de tributação (specialTaxRegime).  
   * "taxNumber" - Número da Inscrição Estadual.  
   * "securityCredential" - Código de segurança do contribuinte **(necessário para emissão de NFCe)**.

A inscrição estadual tem possibilidade de ser uma ou mais por estado para o mesmo CNPJ. Portanto, separamos a requisição para melhor identificação e organização das sequências númericas.

Ela também é responsável por identificar o ambiente em que a nota fiscal será emitida, sendo disponível como "EnvironmentType" (tipo de ambiente), com os valores "Test" (desenvolvimento) e "Production" (produção).

> Por padrão o ambiente criado na plataforma é **"Test"** (desenvolvimento).

---

> O grupo de parâmetros "processingDetails" se refere ao detalhamento da estratégia de contingência que será adotada. Clique [aqui][34] para obter mais informações.

---

Abaixo, a url e um json de exemplo contendo os dados básicos para a criação de uma inscrição estadual.

> **Observação:** Substitua \{companyId\} pela ID gerada no passo anterior.

---

> **O método HTTP utilizada na criação da inscrição estadual é o "POST", portanto, verifique no seu postman se está preenchido corretamente.**

---

`POST: https://api.nfse.io/v2/companies/{companyId}/stateTaxes`

```json
{
  "stateTax": {
    "code": "SP",
    "taxNumber": "99999999999",
    "specialTaxRegime": "automatico",
    "environmentType": "Test",
    "type": "nFe",
    "serie": 1,
    "number": 1,
    "processingDetails": {
        "SwitchAuthorizerStrategy" : "StateTaxAuthorityStatusUnavailable"
        // "SwitchAuthorizerStrategy" : "Manual"
    },
    //O grupo abaixo deve ser informado somente se o 'type' for 'nFCe'
    "securityCredential": {
        "id": 1,
        "code": "999999999999999"
    }
  }
}
```

Devemos atentar para os valores de Série e Número (serie e number), que são utilizados pela SEFAZ para sequenciar as notas emitidas por uma empresa.

Caso você já emita nota, precisará identificar qual a série e o último número emitido, com isso podemos continuar a emissão de onde parou.

Se preferir, poderá identificar com seu contador, uma nova série e número para emissão de nota com a nossa plataforma.

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua inscrição estadual e clicar no botão "Send" (Enviar).  
>   * Create a StateTax  
>   ![](https://nfe.io/docs/app/uploads/2025/02/Create-a-statetax.png)
2. Você receberá uma ID da inscrição estadual após o envio e sucesso da requisição.  
>   * StateTax Id  
>   ![](/static/docs/nota-fiscal-eletronica/state-tax-created-modified.png)

## Importação da url do postman

Novamente, fornecemos uma URL de importação no POSTMAN com todas essas requisiçôes já inclusas. Basta inserir sua Autorização em cada requisição e alterar os dados fornecidos.

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

## Próximos passos

1. [Emitir uma nota fiscal de produto][19]
2. [Emitir uma nota fiscal de produto utilizando o Motor de Cálculo de Tributos][20]
3. [Consultar uma nota fiscal][21]
4. [Consultar o XML de uma nota fiscal emitida][22]
5. [Consultar o PDF (danfe) de uma nota fiscal emitida][23]

## Veja também:

* [Nossos segmentos][35]
* [Sobre a NFE.io][36]
* [Junte-se ao nosso time][37]

[1]: #Primeiros%5FPassos%5Fpara%5FIntegracao%5Fda%5FNota%5FFiscal%5FEletronica
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Proximos%5Fpassos
[4]: #Requisitos
[5]: #Tutorial
[6]: #Primeiros%5Fpassos
[7]: #1%5FObter%5Fa%5Fchave%5Fde%5Fautorizacao%5Fapikey
[8]: #2%5FCriar%5Fuma%5Fempresa
[9]: #3%5FFazer%5Fupload%5Fdo%5Fcertificado%5Fna%5Fplataforma
[10]: #O%5Fque%5Fe%5Fum%5Fcertificado%5Fdigital
[11]: #4%5FCriar%5Finscricao%5Festadual
[12]: #Importacao%5Fda%5Furl%5Fdo%5Fpostman
[13]: #Proximos%5Fpassos-2
[14]: #Veja%5Ftambem
[15]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/
[16]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#1%5FCriar%5Fuma%5Fempresa
[17]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#2%5FFazer%5Fupload%5Fdo%5Fcertificado%5Fna%5Fplataforma
[18]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#3%5FCriar%5Finscricao%5Festadual
[19]: https://nfe.io/docs/documentacao/nota-fiscal-eletronica/emitir-uma-nota-fiscal-de-produto/
[20]: https://nfe.io/docs/documentacao/emitir-uma-nota-fiscal-de-produto-utilizando-o-motor-de-calculo-de-tributos/
[21]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#1%5FConsultar%5Fnota%5Ffiscal
[22]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#2%5FConsultar%5FXML
[23]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#3%5FConsultar%5FPDF%5FDanfe
[24]: https://nfe.io/docs/conceitos/notas-fiscais/
[25]: https://nfe.io/docs/nota-fiscal-eletronica/credenciamento-nf-e/
[26]: https://nfe.io/docs/certificado-digital/conceitos/
[27]: https://p.nfe.io/pt-br/certificado-digital-20off
[28]: https://nfe.io/doc/rest-api/nfe-v2/
[29]: https://nfe.io/docs/comum/postman/
[30]: https://app.nfe.io/
[31]: https://nfe.io/docs/nossa-plataforma/pegar-chave-acesso/
[32]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Companies/V2CompaniesPost
[33]: https://nfe.io/docs/nota-fiscal-eletronica/conceitos-nf-e/
[34]: https://nfe.io/docs/documentacao/estrategia-de-contingencia/
[35]: https://nfe.io/segmentos/
[36]: https://nfe.io/sobre/
[37]: https://nfe.io/carreira/