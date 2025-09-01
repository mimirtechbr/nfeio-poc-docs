---
sidebar_label: "Dúvidas frequentes"
sidebar_position: 3
slug: duvidas-frequentes
date: 2020-09-24
last_update:
  date: 2020-10-27
title: "Dúvidas frequentes sobre webhook"
description: "Essa seção de dúvidas frequentes sobre o webhook, tem o objetivo se clarificar qualquer dúvida que possa aparecer durante seu aprendizado."
author: "Gabriel Marquez"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 645
---

# Dúvidas frequentes

Essa seção de dúvidas frequentes sobre o webhook, tem o objetivo se clarificar qualquer dúvida que possa aparecer durante seu aprendizado.

## 1\. Após o cadastro de webhook, o que recebo nas notificações?

* De acordo com o webhook cadastrado, será enviado uma nota fiscal completa (os mesmos dados retornados na **consulta da nota fiscal**), adicionado dos campos do webhook informados no momento de sua criação.  
Veja como realizar a [consulta da nota fiscal][9].

## 2\. Como saber se o webhook que recebi é da NFE.io?

Disponibilizamos o campo **secret** para validar que os webhooks que recebe do host da [NFE.io][10] são legítimos.

O objetivo é calcular um hash usando seu **SECRET\_TOKEN** e garantir que o hash da NFE.io corresponda. O [NFE.io][10] usa um HMAC para calcular o hash.

Segredo, contendo de 32 até 64 caracteres que será usado gerar o valor do HMAC em hexadecimal que será enviado no cabeçalho HTTP X-Hub-Signature. O HMAC será gerado baseado no bytes do evento de notificação que será enviado.

## 3\. Como funciona os Headers?

Caso você precise passar algum campo validador do seu sistema autorizando o nosso sistema enviar notificações.

**Exemplo:**

Autenticação, disponibilizamos um campo chamado "Header" que poderá ser preenchido de acordo com a sua necessidade. Sendo enviado no momento da criação como **"Authorization"**:

**Json para análise dos Headers**

```json
{
  "webHook": {

        "insecureSsl": true,
        "contentType": "json",
        "filters": [
            "product_invoice.issued_successfully"
        ],
        "headers": [
            "Authorization": "api-key-test"
        ],
        "uri": "https://webhook.site/3483dade-39b8-445f-8928-95f0c0897c76"
    }
}
```


[1]: #Duvidas%5Ffrequentes
[2]: #O%5Fque%5Fencontrara%5Fno%5Ftexto
[3]: #1%5FApos%5Fo%5Fcadastro%5Fde%5Fwebhook%5Fo%5Fque%5Frecebo%5Fnas%5Fnotificacoes
[4]: #2%5FComo%5Fsaber%5Fse%5Fo%5Fwebhook%5Fque%5Frecebi%5Fe%5Fda%5FNFEio
[5]: #3%5FComo%5Ffunciona%5Fos%5FHeaders
[6]: https://nfe.io/docs/documentacao/webhooks/duvidas-frequentes/#1%5FApos%5Fo%5Fcadastro%5Fde%5Fwebhook%5Fo%5Fque%5Frecebo%5Fnas%5Fnotificacoes
[7]: https://nfe.io/docs/documentacao/webhooks/duvidas-frequentes/#2%5FComo%5Fsaber%5Fse%5Fo%5Fwebhook%5Fque%5Frecebi%5Fe%5Fda%5FNFEio
[8]: https://nfe.io/docs/documentacao/webhooks/duvidas-frequentes/#3%5FComo%5Ffunciona%5Fos%5FHeaders
[9]: https://nfe.io/docs/documentacao/consultas/notas-fiscais/
[10]: https://nfe.io/