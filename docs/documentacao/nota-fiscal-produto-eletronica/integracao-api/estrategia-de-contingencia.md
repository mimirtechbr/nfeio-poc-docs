---
sidebar_label: "Estratégia de Contingência"
sidebar_position: 2
slug: /estrategia-de-contingencia
date: 2025-02-14
last_update:
  date: 2025-02-14
title: "Estratégia de Contingência"
description: "Definição da estratégia para emissão de nota fiscal (NF-e) em contingência.1. Entenda o parâmetro &quot;SwitchAuthorizerStrategy&quot;2. Entenda como funciona a estratégia de contingência. Definição&#8230;"
author: "Rogerio Franzoni"
image: "https://nfe.io/docs/app/uploads/2025/02/Change-a-statetax.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 8264
---

## Definição da estratégia para emissão de nota fiscal (NF-e) em contingência.

#### 1\. Entenda o parâmetro "SwitchAuthorizerStrategy"

O parâmetro "SwitchAuthorizerStrategy" é utilizado para definir a regra a ser utilizada na emissão de notas fiscais em contingência.

* O valor do parâmetro "SwitchAuthorizerStrategy" deve ser definido no cadastro da empresa, mas também pode ser atualizado posteriormente.  
   * Segue abaixo os possíveis valores para o parâmetro "SwitchAuthorizerStrategy":  
         * StateTaxAuthorityStatusUnavailable  
         * Manual

#### 2\. Entenda como funciona a estratégia de contingência.

Detalharemos a seguir como deverá funcionar a estratégia de contingência de acordo com o valor definido para o campo "SwitchAuthorizerStrategy" no cadastro da "State Tax":

* **StateTaxAuthorityStatusUnavailable** \- A decisão do momento em que se inicia a emissão das notas fiscais em contingência é da NFE.io, ou seja, ao identificar que uma SEFAZ está com instabilidade, nosso time vai alterar o parâmetro da SEFAZ para que todas as empresas desta UF que estiverem com o parâmetro "SwitchAuthorizerStrategy" definido com o valor "StateTaxAuthorityStatusUnavailable", iniciem as emissões no ambiente de contingência EPEC.
* **Manual** \- A decisão da data e hora em que se inicia a emissão das notas fiscais em contingência é do cliente e nesse caso o cliente deverá enviar uma requisição de alteração "PUT" para o StateTax no momento em que se deseja que as notas sejam enviadas para o ambiente nacional EPEC, conforme exemplo abaixo:  

```json  
{  
"authorizer": "EPEC",  //[EPEC, Normal]  
"reason": "SEFAZ autorizadora indisponível"  
}  
```  

![](https://nfe.io/docs/app/uploads/2025/02/Change-a-statetax.png)  

**Obs.1**: Nesta situação, quando o parâmetro "SwitchAuthorizerStrategy" estiver definido como "Manual" e o parâmetro "authorizer" for alterado para "EPEC", todas as novas notas fiscais recepcionadas pela API NFE.io serão encaminhadas para o ambiente nacional EPEC.  
**Obs.2**: As notas fiscais que já estavam sendo processadas quando a estratégia de comunicação foi alterada para EPEC, não serão encaminhadas para o ambiente nacional EPEC e permanecerão represadas até que a comunicação com a SEFAZ de origem seja reestabelecida.  

![](https://nfe.io/docs/app/uploads/2025/02/Change-a-statetax-Normal.png)

:::danger
**IMPORTANTE:** Todas as notas fiscais emitidas no ambiente nacional EPEC serão encaminhadas para a autorização na SEFAZ de origem, logo que a estratégia de comunicação for alterada de "EPEC" para "Normal".  
:::


[1]: #Definicao%5Fda%5Festrategia%5Fpara%5Femissao%5Fde%5Fnota%5Ffiscal%5FNF-e%5Fem%5Fcontingencia
[2]: #1%5FEntenda%5Fo%5Fparametro%5FquotSwitchAuthorizerStrategyquot
[3]: #2%5FEntenda%5Fcomo%5Ffunciona%5Fa%5Festrategia%5Fde%5Fcontingencia
[4]: https://nfe.io/docs/documentacao/nota-fiscal-eletronica/emitir-uma-nota-fiscal-de-produto/