---
author: Gabriel Marquez
slug: integracao
sidebar_position: 2
date: 2020-09-24
sidebar_label: Como Cadastrar, Consultar, Listar, Editar e Excluir
last_update:
  date: 2021-07-14
title: Como Cadastrar, Consultar, Listar, Editar e Excluir WebHook
description: Nesse tutorial você entenderá como cadastrar, consultar, listar,
  editar e excluir WebHook de maneira fácil, simples e intuitiva.
image: https://nfe.io/docs/app/uploads/2020/09/authentication-key-1.png
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 642
---

# Como Cadastrar, Consultar, Listar, Editar e Excluir um WebHook

Nesse tutorial você entenderá como cadastrar, consultar, listar, editar e excluir WebHook de maneira fácil, simples e intuitiva.

## Ao final desse tutorial, você será capaz de:

[1\. Consultar tipos de eventos][12]  
[2\. Cadastrar um webhook][6]  
[3\. Consultar um webhook][13]  
[4\. Editar um webhook][14]  
[5\. Excluir um webhook][15]  
[6\. Listar todos webhooks][16]

## Tutorial

A partir desse momento faremos uma breve explicação de como realizar a integração de WebHooks com a API oferecida pela [NFE.io.][17]

**Veja mais sobre a**[ Documentação da API][18]

> Você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://www.getpostman.com/collections/e0ddf9363c66efd43bc8
```

Tutorial de como importar a url no postman [Clique aqui][19]

## Primeiros passos

Antes de tudo, você precisará realizar um cadastro na nossa plataforma [app.nfe.io.][20] Depois, você terá que pegar a chave de autorização do nosso sistema.

> Devemos atentar para copiar a autorização referente **'Nota fiscal'**

**Veja como pegar a chave de autorização na plataforma:** Autenticação

> **Lembre-se:** Após importar a url do postman e copiar a chave de autenticação para nota fiscal eletrônica, você deverá adicionar em cada requisição na aba "Headers" (cabeçalhos) a chave em "Authorization" (autorização).Lembre-se: Após importar a url do postman e copiar a chave de autenticação para nota fiscal eletrônica, você deverá adicionar em cada requisição na aba "Headers" (cabeçalhos) a chave em "Authorization" (autorização).

![WebHook](/static/docs/webhooks/authentication-key-1.png)

## 1\. Tipos de Eventos

Para começar a ser notificado pelo WebHoook precisamos identificar quais os eventos possíveis na nossa plataforma. Para isso, precisamos realizar uma chamada no `/eventTypes`

> O método HTTP utilizada na requisição é o "GET", portanto, verifique no seu postman se está preenchido corretamente.

`GET: https://api.nfse.io/v2/webhooks/eventTypes`

1. Clicar no botão "Send" (Enviar) para completar a requisição.

![WebHook_eventos](/static/docs/webhooks/get-event-types.png)

1. Será retornado os eventos disponíveis na plataforma.

![WebHook_result](/static/docs/webhooks/get-event-types-result.png)

## 2\. Cadastrar

Agora, vamos cadastrar um WebHook.

Para auxiliar nos testes, utilizaremos um gerador de webhook, neste caso, você poderá utilizar qualquer site de webhooks da sua preferência. Caso não tenha um, te indicamos: [http://webhook.site][21]

**PS: A** [NFE.io][17] **não tem nenhum vínculo com este gerador de WebHook**

> Atenção: A URI indicada na requição será validada no momento da criação e atualização.
> 
> O método HTTP utilizado para cadastrar um webhook é o "POST", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o Create WebHook na coleção)

`POST: https://api.nfse.io/v2/webhooks`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/webhooks/create-webhook.png)

> Será retornado os dados do webhook contendo o identificador deste webhook no campo id.  
> Ao final do envio, você poderá verificar no gerador de webhooks uma notificação.

![](/static/docs/webhooks/create-webhook-result.png)

## 3\. Consultar

No passo anterior, vimos como criar um webhook.

Faremos agora a consulta do webhook criado a partir da **id** gerada anteriormente, substituindo-o no campo `{webhookId}` da request.

> O método HTTP utilizado para a consulta de um webhook é "GET", portanto, verifique no seu postman se está preenchido corretamente.  
> (Utilize o `Get WebHook` na coleção)

`GET: https://api.nfse.io/v2/webhooks/{webhookId}`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/webhooks/get-webhook-1.png)
2. Será retornado os dados do webhook.

![](/static/docs/webhooks/get-webhook-result.png)

## 4\. Editar

Quando precisamos editar algum dado do webhook, trocar a uri por exemplo, utilizamos da seguinte forma.

Faremos agora a edição do webhook criado a partir da id gerada anteriormente, substituindo-o no campo `{webhookId}` da request.

> **O método HTTP utilizado para editar um webhook é "PUT", portanto, verifique no seu postman se está preenchido corretamente**.  
> (Utilize o Update `WebHook` na coleção)
> 
> Atenção: A URI indicada na requição será validada no momento da criação e atualização.

`PUT: https://api.nfse.io/v2/webhooks/{webhookId}`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
```javascript  
{  
"webHook": {  
    "insecureSsl": true,  
    "contentType": "json",  
    "filters": [  
        "consumer_invoice.cancelled_error"  
    ],  
    "uri": "https://nova.url.com"  
}  
}  
```

![](/static/docs/webhooks/update-webhook.png)

1. Será retornado os dados do webhook editado.

![](/static/docs/webhooks/update-webhook-result.png)

## 5\. Excluir

Para remover um webhook criado, precisamos da **id** gerada anteriormente, substituindo-o no campo `{webhookId}` da request.

> **O método HTTP utilizado para excluir um webhook é "DELETE", portanto, verifique no seu postman se está preenchido corretamente.**  
> (Utilize o `Delete WebHook` na coleção)

`DELETE: https://api.nfse.io/v2/webhooks/{webhookId}`

1. Clicar no botão "Send" (Enviar) para completar a requisição.  
![](/static/docs/webhooks/update-webhook-1.png)
2. Será retornado o Status "200 OK" ao sucesso do cancelamento.  
![](/static/docs/webhooks/update-webhook-result-1.png)

## 6\. Listar

Para listar todos os webhooks, apenas será necessário realizar a request de consulta sem passar nenhuma informação adicional na request.

> **O método HTTP utilizado para excluir um webhook é "GET", portanto, verifique no seu postman se está preenchido corretamente.**  
> (Utilize o `List All WebHooks` na coleção)

`GET: https://api.nfse.io/v2/webhooks`

1. Clicar no botão "Send" (Enviar) para completar a requisição.

![](/static/docs/webhooks/get-all-webhooks.png)

1. Será retornado a lista de webhoooks previamente cadastrados.

![](/static/docs/webhooks/get-all-webhooks-result.png)

## Veja também:

1.[ Dúvidas frequentes][22]  
2.[ WebHooks na NFE.io][23]  
3.[Faça uma conta e teste gratuitamente][24]


[1]: #Como%5FCadastrar%5FConsultar%5FListar%5FEditar%5Fe%5FExcluir%5Fum%5FWebHook
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Tutorial
[4]: #Primeiros%5Fpassos
[5]: #1%5FTipos%5Fde%5FEventos
[6]: #2%5FCadastrar
[7]: #3%5FConsultar
[8]: #4%5FEditar
[9]: #5%5FExcluir
[10]: #6%5FListar
[11]: #Veja%5Ftambem
[12]: https://nfe.io/docs/documentacao/webhooks/integracao/#1%5FTipos%5Fde%5FEventos
[13]: https://nfe.io/docs/documentacao/webhooks/integracao/#3%5FConsultar
[14]: https://nfe.io/docs/documentacao/webhooks/integracao/#4%5FEditar
[15]: https://nfe.io/docs/documentacao/webhooks/integracao/#5%5FExcluir
[16]: https://nfe.io/docs/documentacao/webhooks/integracao/#6%5FListar
[17]: https://nfe.io/
[18]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/
[19]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/importar-colecao-postman/
[20]: https://app.nfe.io/
[21]: http://webhook.site
[22]: https://nfe.io/docs/webhooks/duvidas/
[23]: https://nfe.io/docs/webhooks/conceitos/
[24]: https://id.nfe.io/signup?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient%5Fid%3Dapp-nfe-customers-dashboard%26grant%5Ftype%3Dcode%2520implicit%26response%5Ftype%3Did%5Ftoken%2520token%26scope%3Dopenid%2520profile%2520email%2520phone%2520roles%2520aztech.platform.api%26redirect%5Furi%3Dhttps%253A%252F%252Fapp.nfe.io%252Flogin-callback%26state%3DdQvLVGoYbBfwwNScwPJE%26nonce%3DjR0TBmT1saSA5VUoozI5
