---
author: Gabriel Marquez
slug: primeiros-passos
sidebar_position: 3
date: 2020-09-22
sidebar_label: Primeiros Passos
last_update:
  date: 2025-06-13
title: Primeiros Passos para integração de nota fiscal de serviço - NFE.io | Docs
description: Veja os Primeiros Passos para integrar seu sistema com nossa API e
  começar a emitir notas fiscais eletrônicas (NFS-e), de forma automatizada.
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 582
---
# Integração Nota Fiscal de Serviço - NFSe

Nesse documento você entenderá os primeiros passos para fazer a integração da **Nota Fiscal de Serviço Eletrônica (NFSe)**.

> A Nota Fiscal de Serviço Eletrônica é um documento digital fiscal utilizado para registrar a prestação de serviços de uma empresa, conforme as regras da prefeitura do município onde o serviço foi prestado.

**Saiba mais:** [O que é nota fiscal eletrônica?](https://nfe.io/docs/documentacao/conceitos/notas-fiscais/)

### Ao final desse tutorial, você será capaz de:

[1. Cadastrar uma empresa](https://nfe.io/docs/documentacao/nota-fiscal-servico/primeiros-passos/#1-criar-uma-empresa)\
[2. Fazer upload de um certificado digital](https://nfe.io/docs/documentacao/nota-fiscal-servico/primeiros-passos/#2-enviar-certificado-digital)\
[3. Emitir uma nota fiscal de serviço](https://nfe.io/docs/documentacao/nota-fiscal-servico/primeiros-passos/#4-emissao-da-nota)

### Próximos passos

[1. Consultar uma nota fiscal de serviço emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-nota/)\
[2. Consultar o XML de uma nota fiscal emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-xml/)\
[3. Consultar o PDF da nota fiscal emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-pdf/)

## Requisitos

* Empresa com CNPJ e CNAE de prestação de serviços
* Certificado digital A1 (arquivo .pfx)
* Integração via API REST, via Meio de Pagamento ou Planilha
* Verificar se a prefeitura é **atendida** pela NFE.io ([lista de prefeituras](https://nfe.io/docs/documentacao/prefeituras-integradas/))

## Tutorial

A partir deste momento, faremos uma explicação de como realizar a integração da Nota Fiscal de Serviço com a API da [NFE.io](https://nfe.io/).

**Veja mais sobre a** [Documentação da API de NFSe](https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-servico-v2/)

Você pode realizar a importação da URL no Postman para ter todos os exemplos de requisição:

```json
https://www.postman.com/nfe-io/workspace/nfe-io-public-api-demos/collection/29654924-09b8c724-7d9a-4735-93a3-518cc135989d?action=share&creator=29654924&active-environment=29463388-d0c59007-e68a-45c8-8fb8-16b53cb58c11
```

Tutorial de como importar a URL no Postman [Clique aqui](https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/importar-colecao-postman/)

- - -

## Primeiros passos

Antes de tudo, você precisará realizar um cadastro na nossa plataforma [app.nfe.io](https://app.nfe.io/) e pegar a chave de autorização da API.

> Devemos atentar para copiar a autorização referente a "Nota Fiscal"

**Veja como pegar a chave de autorização:** [Autenticação](https://nfe.io/docs/documentacao/nossa-plataforma/chaves-de-autenticacao/)

> **Lembre-se:** A chave deve ser adicionada em cada requisição na aba "Headers" com o campo `Authorization`.

- - -

## 1. Criar uma empresa

**Endpoint:**\
`POST: https://api.nfe.io/v2/companies`

**Exemplo de JSON:**

```json
{
  "company": {
    "name": "RAZAO SOCIAL DA EMPRESA",
    "federalTaxNumber": 12345678000199,
    "taxRegime": "SimplesNacional",
    "address": {
      "state": "SP",
      "city": {
        "code": "3550308",
        "name": "São Paulo"
      },
      "district": "Centro",
      "street": "Av. Exemplo",
      "number": "100",
      "postalCode": "01001000",
      "country": "BRA"
    }
  }
}
```

> Será retornado o `id` que representa o `companyId`, que deve ser utilizado nas próximas requisições.

- - -

## 2. Enviar certificado digital

**Endpoint:**\
`POST: https://api.nfe.io/v2/companies/{companyId}/certificate`

Você deve enviar o arquivo `.pfx` e a senha no corpo da requisição. Após o envio, o sistema informará a validade, status e dados do certificado.

> **Segurança:** Os dados são criptografados e armazenados com segurança na plataforma da NFE.io.

- - -

## 3. Emitir uma nota fiscal de serviço

**Endpoint:**\
`POST: https://api.nfe.io/v2/companies/{companyId}/serviceinvoices`

**Campos principais:**

* Descrição do serviço
* Código do serviço (`cityServiceCode`)
* Alíquota de ISS (`issRate`)
* Dados do tomador (CNPJ ou CPF, endereço, nome)

> Consulte a prefeitura para confirmar o código de serviço correto.

**Exemplo mínimo de payload:**

```json
{
  "description": "Consultoria em tecnologia",
  "cityServiceCode": "101",
  "issRate": 5.0,
  "borrower": {
    "federalTaxNumber": "12345678909",
    "name": "Cliente Exemplo",
    "email": "cliente@exemplo.com",
    "address": {
      "street": "Rua Cliente",
      "number": "200",
      "district": "Centro",
      "city": {
        "code": "3550308",
        "name": "São Paulo",
        "country": "BRA"
      },
      "state": "SP",
      "postalCode": "01001000"
    }
  }
}
```

> O processamento é assíncrono. Após envio bem-sucedido, você receberá um `id` que representa o id único da nota atribuído pela NFE.io. Acompanhe o status por consulta de nota.

- - -

## Próximos passos

[Consultar uma nota fiscal de serviço emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-nota/)\
[Consultar o XML de uma nota fiscal emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-xml/)\
[Consultar o PDF da nota fiscal emitida](https://nfe.io/docs/documentacao/nota-fiscal-servico/consultar-pdf/)

## Informações adicionais

### Primeiros passos para integrar com nossa API de forma simples

Integre seu sistema com a nossa API para começar a emitir notas fiscais de forma automatizada. Em caso de dúvida em algum conceito utilizado aqui, visite nossa [Página de Conceitos](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/conceitos/) e saiba tudo que você precisa para emitir Nota Fiscal de Serviço Eletrônica (NFS-e).

Recomendamos que você use nosso **[Ambiente de Testes](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/primeiros-passos/#Utilizando%5Fo%5FAmbiente%5Fde%5FTestes)** para fazer a integração e só depois mudar para o **[Ambiente de Produção](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/primeiros-passos/#Mudando%5Fpara%5Fo%5Fambiente%5Fde%5Fproducao)**. Assim você pode tirar suas dúvidas e evitar equívocos quando mudar para produção.

Caso você não seja um desenvolvedor ou sua empresa não possua uma equipe de TI, nós disponibilizamos outras formas de automatizar suas emissões, [clique aqui](https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/conceitos/#Como%5Femitir%5FNota%5FFiscal%5Fde%5FServico%5FNFs-e) e veja as outras possibilidades disponíveis.

### Integração a partir de um meio de pagamento

A emissão automatizada de NFS-e depende da integração com o meio de pagamento usado por você. O meio de pagamento deve ter uma API por onde serão disponibilizadas as informações sobre os pagamentos que foram realizados.

Alguns meios de pagamento disponibilizam Webhooks para monitoramento dos pagamentos. Uma das opções de integrar com a nossa API é através desses [Webhooks](https://nfe.io/docs/documentacao/webhooks/conceitos/), que informarão sempre que um pagamento for realizado.

Outra opção é, de tempos em tempos, consultar a API do seu meio de pagamento para coletar os dados dos pagamentos que foram realizados.

Tendo os dados do pagamento, é só adicionar as informações pertinentes ao serviço prestado e enviar para nossa API, que emitirá a nota calculando os impostos automaticamente.

> Observação: A maioria dos meios de pagamento não disponibilizam todas as informações necessárias para que a nota seja emitida. Ou seja, sua solução terá que agregar as informações faltantes com as informações cedidas pelo seu meio de pagamento.

### Utilizando o Ambiente de Testes

Uma das vantagens da nossa API é que você pode testá-la gratuitamente, assim você pode garantir que a nossa solução atenda às suas demandas.

Abaixo temos um passo a passo para utilização do nosso Ambiente de Testes:

> Observação: Para testar nossa API você não precisa ter um Certificado Digital, Inscrição Municipal e nem mesmo uma Inscrição Estadual.

### Módulos disponíveis

1. **Escolha da linguagem**: Oferecemos bibliotecas em:  

   * [Node.js](https://nfe.io/docs/desenvolvedores/bibliotecas/node-js/)  
   * [PHP](https://nfe.io/docs/desenvolvedores/bibliotecas/php/)  
   * [Ruby](https://nfe.io/docs/desenvolvedores/bibliotecas/ruby/)

Para outras linguagens, use nossa [Referência da API](https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-servico-v1/).

### Mudando para o ambiente de produção

Após testar com sucesso, siga os passos abaixo:

1. Verifique os dados ao [criar sua empresa](https://nfe.io/docs/documentacao/nossa-plataforma/criar-empresa/)
2. Certifique-se de que está credenciado na prefeitura para emissão de nota fiscal ([como credenciar](https://nfe.io/docs/nota-fiscal-servico/credenciamento-nfs-e/))
3. Faça o [upload do certificado digital](https://nfe.io/docs/documentacao/nossa-plataforma/upload-certificado/)
4. Entre em contato com a equipe comercial para gerar sua fatura.
5. Após o pagamento, vá até a aba **"EMPRESAS"**, clique em **"ALTERAR EMPRESA"**.
6. Mude o ambiente de testes para produção na seção **"Ambiente"**.
