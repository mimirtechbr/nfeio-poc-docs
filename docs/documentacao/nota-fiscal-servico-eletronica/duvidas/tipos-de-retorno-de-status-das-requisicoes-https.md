---
sidebar_label: "Tipos de retorno de status das requisições HTTPS"
sidebar_position: 1
slug: tipos-de-retorno-de-status-das-requisicoes-https
date: 2021-05-31
last_update:
  date: 2021-06-08
title: "Tipos de retorno de status das requisições HTTPS"
description: "Durante o seu processo de emissão via API de nota fiscal de serviço, é possível que você se depare com uma série de status de retorno HTTP."
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 1889
---

# Tipos de retorno de status das requisições HTTPS

Durante o seu processo de emissão via API de nota fiscal de serviço, é possível que você se depare com uma série de tipos de retorno de status HTTP. 

Esses retornos são definidos por padrão, mas para cada um deles, talvez seja necessário algum tipo de ação com relação às emissões das suas notas.

Na tabela abaixo estão expressos alguns status com o seu respectivo significado, bem como um possível plano de ação.

| **Código status** | **Significado status**                                | **Significado do status para a NFE.io**                              | **Ação para solucionar possível pendência**                                                                                                                                                                                      |
| ----------------- | ----------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 202               | Requisição aceita                                     | Nota Fiscal de Serviços foi enviada com sucesso para fila de emissão | Nada a ser feito.                                                                                                                                                                                                                |
| 400               | Requisição errada                                     | Algum parametro informado não é válido                               | Verificar no seu json de envio se há algum dado que está sendo enviado está em desacordo com os padrões definidos na nossa [documentação][1].                                                                                    |
| 401               | Requisição não autorizada                             | API Key da conta não é valida                                        | Verificar se está utilizando a autenticação correta, bem como se você está apto para emissões de nota.                                                                                                                           |
| 408               | Requisição excedeu tempo limite                       | Tempo de reposta do servidor excedeu o limite (60s)                  | Buscar na [listagem de notas fiscais][2] se há o registro da nota que houve tentativa de emissão (buscar pelo CPF/CNPJ do tomador da nota).                                                                                      |
| 500               | Erro no processamento                                 | Serviço indisponível                                                 | Reenviar a requisição de emissão da nota que recebeu de retorno o erro.                                                                                                                                                          |
| 503               | Serviço indisponível                                  | Serviço da NFE.io está indisponível                                  | Entrar em contato com a NFE.io para confirmar o motivo da indisponibilidade.                                                                                                                                                     |
| 504               | Requisição excedeu o tempo na comunicação com Gateway | Não foi possível concluir a comunicação com o serviço da NFE.io      | Não há certeza se a nota foi ou não enviada para emissão. Nesse caso, recomenda-se que seja realizada a consulta da nota no portal da NFE.io através do CPF do tomador da nota para que seja constatado se houve ou não emissão. |

Após a avaliação da suituação encontrada por você, caso seja necessário, pode nos contatar pelo email suporte@nfe.io.


[1]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-servico-v1/
[2]: https://nfe.io/docs/documentacao/nossa-plataforma/nota-fiscal-servico/listar-notas-servico/