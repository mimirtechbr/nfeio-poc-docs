---
sidebar_label: "Webhook"
sidebar_position: 5
slug: webhook
date: 2020-08-11
last_update:
  date: 2020-10-26
title: "Webhook - NFE.io | Docs"
description: "WebhookComo funciona um Webhook?Webhook x APISaiba mais: Webhook O webhook foi criado para facilitar a troca de informações entre diferentes sistemas, funcionando de&#8230;"
author: "Gabriel Marquez"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 317
---

# Webhook

O webhook foi criado para facilitar a troca de informações entre diferentes sistemas, funcionando de maneira passiva, através de eventos.

Ele tem como função principal transmitir informações sobre algum fato ocorrido de um sistema para o outro. É, basicamente, ligar dois sistemas a partir de algum evento. Para entendermos melhor o que é um webhook, vamos a um exemplo simples:

Você quer comprar um jogo para seu videogame, entra em um site e o produto está esgotado, mas no site há um aviso de que em breve o produto estará em estoque e eles perguntam se você quer receber uma notificação quando o produto chegar.

Se você quiser o jogo, vai inserir seu e-mail e receber a notificação sobre a chegada do jogo. Essa notificação por e-mail faz a ponte entre você (sistema 1) e a loja (sistema 2). Essa é a função do webhook.

### Como funciona um Webhook?

Conforme exemplificado, para criar um webhook, você só precisa criar a "ponte" entre os sistemas, para que, quando determinado evento aconteça, a troca de informações ocorra instantaneamente, sem que você precise executar rotinas de chamadas para saber se houve alguma ocorrência no sistema.

Quando há uma ocorrência, a aplicação origem enviará as informações via requisição HTTP para uma URL, anteriormente configurada no webhook, transmitindo as informações da ocorrência, fazendo com que, ferramentas de comunicação ou sistemas recebam essa informação de maneira rápida e eficiente.

### Webhook x API

Embora parecidos, o webhook trabalha de forma diferente de uma API. Enquanto uma API fornece dados quando você solicita (via requisição HTTPs), havendo uma integração direta, o webhook trabalha de forma autônoma e lhe envia as informações sem que você precise executar uma requisição HTTP, sendo assim, uma integração passiva.

### Saiba mais:

[WebHook na NFE.io][5]  
[Cadastrar um webhook][6]


[1]: #Webhook
[2]: #Como%5Ffunciona%5Fum%5FWebhook
[3]: #Webhook%5Fx%5FAPI
[4]: #Saiba%5Fmais
[5]: https://nfe.io/docs/documentacao/webhooks/conceitos/
[6]: https://nfe.io/docs/documentacao/webhooks/integracao/