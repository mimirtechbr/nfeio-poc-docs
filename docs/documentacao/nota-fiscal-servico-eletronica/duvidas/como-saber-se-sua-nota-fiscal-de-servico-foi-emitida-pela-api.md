---
sidebar_label: "Como saber se sua nota fiscal de serviço foi emitida pela API"
sidebar_position: 2
slug: como-saber-se-sua-nota-fiscal-de-servico-foi-emitida-pela-api
date: 2021-06-08
last_update:
  date: 2021-06-08
title: "Como saber se sua nota fiscal de serviço foi emitida pela API - NFE.io | Docs"
description: "Como avaliar se a sua nota fisca de serviço foi emitida a partir dos retornos da APIOs campos do json da nota que&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 1906
---

# Como avaliar se a sua nota fisca de serviço foi emitida a partir dos retornos da API

### Os campos do json da nota que se relacionam com a condição de nota fiscal de serviço emitida

O json de uma nota que já foi processada na NFE.io possui alguns campos que combinados expressam ou não a emissão de uma nota fiscal.

Na tabela abaixo são descritos quais são os campos do json que contém os dados da nota, bem como o significado de cada um desses campos.

| Campo na API | Significado do campo                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| status       | Status final da nota. Ele representa em qual etapa final a nota se encontra                |
| flowStatus   | Indica em qual estágio do processamento da nota se encontra.                               |
| flowMessage  | Mensagem que indica o motivo pelo qual a nota se encontra no status definido no flowStatus |

Dos três campos apresentados acima, existem dois que possuem valores pré estabelecidos para eles. Ou seja, ambos possuem como parâmetros de retorno um item de uma lista que possui valores já determinados. O `status` e o `flowStatus` são esses campos.

O campo `flowMessage` é uma string com uma mensagem de reporte do evento final da nota.

#### Campo `status`

O campo `status` é uma lista no formato de `Enum` e possui cinco possibilidades de retorno. Abaixo segue uma tabela que indica quais são os retornos no formato de string. Como se trata de um `Enum`, há um número correspondente ao valor da string. Esse último valor é apresentado na segunda coluna. Já a última coluna indica com detalhes o que significa cada um dos tipos de retorno da API.  

| Retorno do campo | Número correspondente ao retorno (formato Enum) | Descrição do campo                                                          |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| _Error_          | \-1                                             | Nota não conseguiu concluir com sucesso todos os estágios de processamento. |
| _None_           | 0                                               | Nota não iniciou o processo de emissão da nota.                             |
| _Created_        | 1                                               | Nota em processo de emissão.                                                |
| _Issued_         | 2                                               | Nota conseguiu concluir com sucesso todos os estágios de processamento.     |
| _Cancelled_      | 3                                               | Nota cancelada.                                                             |

#### Campo `flowStatus`

O campo `flowStatus` também é uma lista no formato de `Enum` e possui onze possibilidades de retorno. Como na tabela acima, são identificados na primeira coluna o valor em string, na segunda coluna o número correspondente ao campo de string e na terceira coluna um detalhamento do que o retorno significa.

| Retorno do campo         | Número correspondente ao retorno (formato Enum) | Descrição do campo                                                                            |
| ------------------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| _CancelFailed_           | \-2                                             | Nota não foi cancelada com sucesso                                                            |
| _IssueFailed_            | \-1                                             | Emissão da nota sem sucesso                                                                   |
| _Issued_                 | 1                                               | Nota emitida                                                                                  |
| _Cancelled_              | 2                                               | Nota cancelada                                                                                |
| _PullFromCityHall_       | 3                                               |                                                                                               |
| _WaitingCalculateTaxes_  | 10                                              | Calculando impostos da nota                                                                   |
| _WaitingDefineRpsNumber_ | 11                                              | Definindo número de RPS da nota                                                               |
| _WaitingSend_            | 12                                              | Nota enviada para emissão na prefeitura e aguardando confirmação de recebimento da mesma      |
| _WaitingSendCancel_      | 13                                              | Nota enviada para cancelamento na prefeitura e aguardando confirmação de recebimento da mesma |
| _WaitingReturn_          | 14                                              | Aguardando retorno da prefeitura com confirmação de nota emitida                              |
| _WaitingDownload_        | 15                                              | Aguardando download do PDF da nota                                                            |

#### Campo `flowMessage`

Caso a nota não consiga concluir todos os estágios de processamento (ou seja, passar com sucesso por todas as etapas definidas no `flowStatus`), o campo `flowMessage` é preenchido com uma mensagem com detalhes sobre a falha na conclusão das etapas de processamento.

### Como saber se uma nota foi efetivamente emitida.

Somente o campo `status` não indica a emissão de nota. Esse campo expressa que houve falha em alguma das etapas do processamento da nota. E dependendo de qual estágio do `flowStatus`, a nota pode estar emitida. Dessa forma, para se considerar a emissão de uma nota, deve ser feita a análise de ambos os campos em conjunto.

Abaixo segue uma tabela que descreve alguns cenários onde há a combinação dos valores dos campos `status` e `flowStatus`. A partir do cruzamento desses dois dados, é possível inferir como a nota se encontra.

| status    | flowStatus   | Situação da nota            |
| --------- | ------------ | --------------------------- |
| Issued    | Issued       | Nota emitida com sucesso.   |
| Cancelled | Cancelled    | Nota cancelada com sucesso. |
| Issued    | CancelFailed | Nota com falha ao cancelar  |

Existe ainda um cenário que necessita de uma avaliação especial quanto a situção final da nota. Em raros os casos, é possível que a nota tenha sido emitida, contudo a disponibilização do PDF da mesma não é concluído. Por conta dessa situação, o processamento da nota não é completo, e consequentemente o status da nota está com a informação de "falha". Esse é um contexto onde é necessário utilizar a informação do campo `flowMessage`, além dos campos já apresentados acima para interpretar o estágio da nota.

Abaixo segue uma tabela expressando a combinação dos campos e a interpretação da combinação de todos eles.

| status | flowStatus  | flowMessage                           | Situação da nota                                       |
| ------ | ----------- | ------------------------------------- | ------------------------------------------------------ |
| Issued | IssueFailed | "max retry reached on download stage" | Nota emitida. Porém o PDF da nota não está disponivel. |

Como é possível observar, apesar do `flowStatus` representar a informação de falha em uma etapa do processamento, a nota foi emitida. Para esse caso, o perigo de se interpretar a falha na nota é o de induzir o prestador de serviço a emitir uma nova nota. Ou seja, gerar duplicação de uma informação fiscal. Caso esse cenário seja vislumbrado, você pode entrar em contato com a NFE.io que nós reprocessamos a etapa de disponibilização do PDF da nota.


[1]: #Como%5Favaliar%5Fse%5Fa%5Fsua%5Fnota%5Ffisca%5Fde%5Fservico%5Ffoi%5Femitida%5Fa%5Fpartir%5Fdos%5Fretornos%5Fda%5FAPI
[2]: #Os%5Fcampos%5Fdo%5Fjson%5Fda%5Fnota%5Fque%5Fse%5Frelacionam%5Fcom%5Fa%5Fcondicao%5Fde%5Fnota%5Ffiscal%5Fde%5Fservico%5Femitida
[3]: #Campo%5Fstatus
[4]: #Campo%5FflowStatus
[5]: #Campo%5FflowMessage
[6]: #Como%5Fsaber%5Fse%5Fuma%5Fnota%5Ffoi%5Fefetivamente%5Femitida