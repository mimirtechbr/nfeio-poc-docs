---
author: Gabriel Marquez
slug: conceitos
sidebar_position: 1
date: 2020-09-24
sidebar_label: Conceitos
last_update:
  date: 2021-03-05
title: Conceitos sobre Webhook e seu funcionamento
description: Abaixo um breve tutorial sobre o funcionamento do WebHook. Sendo o
  WebHook como um ponto de encontro entre você e a sua nota.
image: https://nfe.io/docs/app/uploads/2020/09/webhook-flow.png
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 635
---

# Conceitos de WebHook

Abaixo um breve tutorial sobre o funcionamento do Webhook em: Conceitos sobre [WebHook.][8] Logo, é um ponto de encontro entre você e a sua nota.

## 1\. Como funciona na NFE.io?

Quando estamos falando de emissão de nota, vimos que nenhum sistema é perfeito, então, entendemos que sistema do Governo pode ficar fora do ar, ter instabilidades ou ter uma série de regras para emissão que pode levar a um tempo maior para o sucesso.

Você poderá enviar os dados para emissão das notas, processaremos, e através dos webhoooks poderemos te avisar o que aconteceu no processo.

O WebHook é um ponto de encontro entre você e a sua nota, ou seja, você não precisará ficar esperando todo o processamento para identificar o estado dela, e sim, te avisaremos no momento de sua conclusão. Em algumas regras de negócio, ela faz total sentido.

## 2\. Fluxo de notificação

No exemplo seguinte, faremos uma análise do fluxo de emissão e notificação.

Basicamente temos dois passos:

1. O "Sistema Cliente" que envia os dados da nota fiscal para a NFE.io.
2. Após todo o fluxo de emissão de nota, faremos as notificações devidas na nota fiscal utilizando o WebHook.

Essas notificações são enviadas para o "Sistema do Cliente" de acordo com a ação identificada (emitida, erro ou falha).

### Ilustração do fluxo

![webhook](/static/docs/webhooks/webhook-flow.png)

#### Passo a passo:

1. Sistema do Cliente envia os dados para emissão.
2. Sistema NFe.io recebe dados para emitir.
3. NFE.io processa a nota fiscal.
4. NFE.io entende o estado da nota, se foi emitida com sucesso, com erro ou com falha.
5. NFE.io aciona o gatilho de notificação para o Sistema do Cliente baseado no status da nota fiscal.
6. Sistema do Cliente recebe a nota fiscal na url equivalente ao status da nota.

#### Como utilizar?

Agora que você já tem uma ideia de como funcionam os WebHooks, os próximos passos são:

[1\. Tutorial de webhooks][11]  
[2\. Consultar tipos de eventos][12]  
[3\. Cadastrar um webhook][13]  
[4\. Consultar um webhook][14]  
[5\. Editar um webhook][15]  
[6\. Excluir um webhook][16]  
[7\. Listar todos webhooks][17]


[1]: #Conceitos%5Fde%5FWebHook
[2]: #O%5Fque%5Fencontrara%5Fno%5Ftexto
[3]: #1%5FComo%5Ffunciona%5Fna%5FNFEio
[4]: #2%5FFluxo%5Fde%5Fnotificacao
[5]: #Ilustracao%5Fdo%5Ffluxo
[6]: #Passo%5Fa%5Fpasso
[7]: #Como%5Futilizar
[8]: https://nfe.io/docs/conceitos/webhook/
[9]: https://nfe.io/docs/documentacao/webhooks/conceitos/#1%5FComo%5Ffunciona%5Fna%5FNFEio
[10]: https://nfe.io/docs/documentacao/webhooks/conceitos/#2%5FFluxo%5Fde%5Fnotificacao
[11]: https://nfe.io/docs/webhooks/integracao/
[12]: https://nfe.io/docs/documentacao/webhooks/integracao/#1%5FTipos%5Fde%5FEventos
[13]: #2%5FCadastrar
[14]: https://nfe.io/docs/documentacao/webhooks/integracao/#3%5FConsultar
[15]: https://nfe.io/docs/documentacao/webhooks/integracao/#4%5FEditar
[16]: https://nfe.io/docs/documentacao/webhooks/integracao/#5%5FExcluir
[17]: https://nfe.io/docs/documentacao/webhooks/integracao/#6%5FListar
