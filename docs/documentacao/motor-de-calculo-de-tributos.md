---
sidebar_label: "Motor de Cálculo de Tributos"
sidebar_position: 10
slug: /nota-fiscal-eletronica/motor-de-calculo-de-imposto
date: 2025-02-10
last_update:
  date: 2025-02-14
title: "Motor de Cálculo de Tributos - NFE.io | Docs"
description: "Motor de Cálculo de Tributos1. Como utilizar o Motor de cálculo de tributos?2. Como realizar uma chamada para o Motor de Cálculo de&#8230;"
author: "Rogerio Franzoni"
image: "https://nfe.io/docs/app/uploads/2025/02/tax-calculation-1.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7987
---

# Motor de Cálculo de Tributos

O Taxes (motor de cálculo de imposto) é uma ferramenta automatizada que facilita a gestão e o cálculo de tributos da sua empresa. Ajuda a simplificar a gestão tributária, garantindo conformidade e eficiência. 

Nós preenchemos as informações tributárias da nota fiscal para você.

Se precisar de mais informações entre em contato com o nosso time de produto!

## 1\. Como utilizar o Motor de cálculo de tributos?

**O Motor de Cálculo de Tributos pode ser acionado diretamente antes do envio da nota fiscal possibilitando a validação das regras tributárias retornadas antes da emissão da nota fiscal ou, conforme descrito no tópico [Emitir uma nota fiscal de produto utilizando o Taxes (motor de cálculo de tributos)][15], o Motor de Cálculo de Tributos pode ser acionado automaticamente na emisão da nota fiscal.**

> Você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://api.postman.com/collections/13456751-85dce505-ec19-4086-b2ed-fd6adfa49b41?access_key=PMAT-01JKE6X6T47G7JGRYDNV5XRD1S
```

## 2\. Como realizar uma chamada para o Motor de Cálculo de Tributos?

Neste tópico vamos descrever como você pode utilizar API do Motor de Cálculo de Tributos.

1. Para Obter a regra tributária do produto, basta enviar uma requisição para o endpoint descrito abaixo utilizando um json conforme exemplo abaixo:  
> **Observação:** Substitua \{tenantId\} pela ID da subscription (ID da assinatura da conta).  
> `POST: https://api.nfse.io/{tenantId}/calculate`  
```json  
{  
    "issuer": {  
        "state": "SP",  
        "taxRegime": "RealProfit"  
    },  
    "recipient": {  
        "state": "SP",  
        "taxRegime": null  
    },  
    "operationType": "Outgoing",  
    "items": [  
        {  
            "id": "1",  
            "operationCode": 121,  
            "acquisitionPurpose": "43",  
            "issuerTaxProfile": "retail",  
            "recipientTaxProfile": "final_consumer_non_icms_contributor",  
            "origin": "ForeignInternalMarket",  
            "ncm": "82142000",  
            "gtin": "7891060679724",  
            "quantity": 10.0,  
            "unitAmount": 20.0  
        }  
    ]  
}  
```  
![](https://nfe.io/docs/app/uploads/2025/02/tax-calculation-1.png)
2. Ao sucesso da requisição, será fornecido a regra tributária a ser utilizada na emissão da nota fiscal.  
```json  
{  
    "items": [  
        {  
            "id": "1",  
            "cfop": 5405,  
            "cest": "2005500",  
            "icms": {  
                "orig": "2",  
                "cst": "60"  
            },  
            "pis": {  
                "cst": "01",  
                "vBC": "200.00",  
                "pPIS": "1.6500",  
                "vPIS": "3.30"  
            },  
            "cofins": {  
                "cst": "01",  
                "vBC": "200.00",  
                "pCOFINS": "7.6000",  
                "vCOFINS": "15.20"  
            },  
            "additionalInformation": "vBCFCP:R$0; pFCP:0%; vFCP:R$0; vBCFCPST:R$0;pFCPST:0%; vFCPST:R$0;  ICMS:Arts. 313-E e 313-F do RICMS/SP e Portaria SRE nº 12/2022;",  
            "lastModified": "2025-01-27T14:17:09.2955836+00:00"  
        }  
    ]  
}  
```  
![](https://nfe.io/docs/app/uploads/2025/02/tax-calculation-response.png)

## 3\. Como posso definir os parâmetros da requisição para o Motor de Cálculo de Tributos?

**Segue abaixo as opções de preenchimento para cada campo do grupo "taxDetermination":**<br></br>

#### **IssuerTaxRegime**

> **Remetente/Regime Tributário**  
> Tabela de Regime Tributário do Remetente.

| Código                         | Descrição                           |
| ------------------------------ | ----------------------------------- |
| NationalSimple                 | Simples Nacional                    |
| RealProfit                     | Lucro Real                          |
| PresumedProfit                 | Lucro Presumido                     |
| NationalSimpleSublimitExceeded | Simples Nacional sublimite excedido |
| IndividualMicroEnterprise      | Microempreendedor Individual        |
| Exempt                         | Isento                              |

---

#### **IssuerTaxProfile**

* Para obter os valores disponíveis para preenchimento do campo "IssuerTaxProfile", faça uma chamada na API de listagem dos perfis fiscais do emissor confome exemplo abaixo:  
**Veja a documentação da API:** [IssuerTaxProfile][16]  
   * Ao sucesso da requisição, será fornecido uma lista de valores possíveis de serem utilizados.

> **Remetente/Perfil Origem**  
> Tabela parcial com os perfis mais comuns.

| Código      | Descrição  |
| ----------- | ---------- |
| whole\_sale | Atacadista |
| importer    | Importador |
| industry    | Indústria  |
| retail      | Varejista  |

---

#### **BuyerTaxRegime**

> **Destinatário/Regime Tributário**  
> Tabela de Regime Tributário do Destinatário.

| Código                         | Descrição                           |
| ------------------------------ | ----------------------------------- |
| NationalSimple                 | Simples Nacional                    |
| RealProfit                     | Lucro Real                          |
| PresumedProfit                 | Lucro Presumido                     |
| NationalSimpleSublimitExceeded | Simples Nacional sublimite excedido |
| IndividualMicroEnterprise      | Microempreendedor Individual        |
| Exempt                         | Isento                              |

---

#### **BuyerTaxProfile**

* Para obter os valores disponíveis para preenchimento do campo "BuyerTaxProfile", faça uma chamada na API de listagem dos perfis fiscais do destinatário confome exemplo abaixo  
**Veja a documentação da API:** [BuyerTaxProfile][17]  
   * Ao sucesso da requisição, será fornecido uma lista de valores possíveis de serem utilizados.

> **Destinatário/Perfil Destino**  
> Tabela parcial com os perfis mais comuns.

| Código                                  | Descrição                                 |
| --------------------------------------- | ----------------------------------------- |
| closed\_warehouse                       | Depósito temporário (Fullfilment)         |
| whole\_sale                             | Atacadista                                |
| company\_abroad                         | Comercial exportadora (inclusive trading) |
| final\_consumer\_icms\_contributor      | Consumidor final contribuinte do ICMS     |
| final\_consumer\_non\_icms\_contributor | Consumidor final não contribuinte do ICMS |
| importer                                | Importador                                |
| industry                                | Indústria                                 |
| NationalSimple                          | Optante pelo Simples Nacional             |
| retail                                  | Varejista                                 |

---

#### **OperationType**

> **Tipo de Operação**  
> Tabela de tipos de Operação.

| Código   | Descrição |
| -------- | --------- |
| Outgoing | Saída     |
| Incoming | Entrada   |

---

#### **OperationCode**

* Para obter os valores disponíveis para preenchimento do campo "OperationCode", faça uma chamada na API de listagem de códigos da operação confome exemplo abaixo:  
**Veja a documentação da API:** [OperationCode][18]  
   * Ao sucesso da requisição, será fornecido uma lista de valores possíveis de serem utilizados.

> **Natureza de Operação**  
> Tabela parcial com as operações mais comuns.

| Código | Descrição                                                                                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 159    | Remessa de amostra grátis                                                                                                                                                          |
| 549    | Remessa de mercadoria em consignação industrial                                                                                                                                    |
| 547    | Remessa de mercadoria em consignação mercantil                                                                                                                                     |
| 160    | Remessa de mercadoria em demonstração                                                                                                                                              |
| 162    | Remessa de mercadoria ou bem para conserto ou reparo                                                                                                                               |
| 101    | Remessa de mercadoria ou bem para exposição ou feira                                                                                                                               |
| 537    | Remessa de mercadoria recebida de terceiros em bonificação                                                                                                                         |
| 105    | Remessa de mercadoria para armazém geral                                                                                                                                           |
| 104    | Remessa de mercadoria para depósito fechado                                                                                                                                        |
| 145    | Saída em transferência de bem do ativo imobilizado                                                                                                                                 |
| 148    | Saída em transferência de material de uso ou consumo                                                                                                                               |
| 108    | Saída em transferência de mercadoria adquirida ou recebida de terceiros                                                                                                            |
| 107    | Saída em transferência de produção do estabelecimento                                                                                                                              |
| 147    | Venda de bem do ativo imobilizado                                                                                                                                                  |
| 121    | Venda de mercadoria adquirida ou recebida de terceiros                                                                                                                             |
| 120    | Venda de produção do estabelecimento                                                                                                                                               |
| 72     | Compra de mercadoria arrematada em leilão.                                                                                                                                         |
| 569    | Compra para comercialização.                                                                                                                                                       |
| 630    | Compra pelo sistema de marketing direto para revendedores que operem na modalidade de venda porta-a-porta exclusivamente a consumidores finais ou em bancas de jornais e revistas. |

---

#### **AcquisitionPurpose**

* Para obter os valores disponíveis para preenchimento do campo "AcquisitionPurpose", faça uma chamada na API de listagem de finalidades de aquisição confome exemplo abaixo:  
**Veja a documentação da API:** [AcquisitionPurpose][19]  
   * Ao sucesso da requisição, será fornecido uma lista de valores possíveis de serem utilizados.

> **Finalidade de aquisição**  
> Tabela parcial com as finalidades de aquisição mais comuns.

| Código | Descrição                                                            |
| ------ | -------------------------------------------------------------------- |
| 220    | Compra de bem para o ativo imobilizado                               |
| 569    | Compra para comercialização                                          |
| 202    | Compra para insumo                                                   |
| 43     | Compra de material para uso ou consumo                               |
| 197    | Entrada de amostra grátis                                            |
| 353    | Entrada de bonificação                                               |
| 198    | Entrada de mercadoria em demonstração                                |
| 201    | Entrada de mercadoria ou bem recebido para conserto ou reparo        |
| 205    | Entrada de mercadoria recebida em consignação industrial             |
| 204    | Entrada de mercadoria recebida em consignação mercantil              |
| 189    | Entrada de mercadoria recebida para depósito em armazém geral        |
| 188    | Entrada de mercadoria recebida para depósito em depósito fechado     |
| 325    | Recebimento em transferência de material para uso ou consumo         |
| 175    | Recebimento em transferência para comercialização                    |
| 174    | Recebimento em transferência para industrialização ou produção rural |
| 200    | Retorno de mercadoria remetida em exposição ou feira                 |
| 320    | Transferência de bem do ativo imobilizado                            |

---

#### **Origin**

**Códigos do campo origem do material**

* O código de origem do material é um código oficial e representa o conteúdo de importação do material. Segue a lista de todos os códigos disponíveis:

| Código | Descrição                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| 0      | Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8                                                                |
| 1      | Estrangeira - Importação direta, exceto a indicada no código 6                                                       |
| 2      | Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7                                            |
| 3      | Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%                      |
| 4      | Nacional, cuja produção tenha sido feita em conformidade com os PPB de que tratam as legislações citadas nos Ajustes |
| 5      | Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%                                       |
| 6      | Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural                     |
| 7      | Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista da CAMEX e gás natural          |
| 8      | Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%                                                |

## 4\. Visão Geral do fluxo de emissão de nota fiscal utilizando o Taxes

![](https://nfe.io/docs/app/uploads/2025/02/TAxes-Diagram.drawio-4.png)

> Você pode realizar a importação da url no Postman para ter todos os exemplos acima através do link:

```json
https://api.postman.com/collections/13456751-85dce505-ec19-4086-b2ed-fd6adfa49b41?access_key=PMAT-01JKE6X6T47G7JGRYDNV5XRD1S
```

### Mais informações

[Certificado digital com desconto][20]  
[Crie uma conta e teste nossa plataforma gratuitamente][21]


[1]: #Motor%5Fde%5FCalculo%5Fde%5FTributos
[2]: #1%5FComo%5Futilizar%5Fo%5FMotor%5Fde%5Fcalculo%5Fde%5Ftributos
[3]: #2%5FComo%5Frealizar%5Fuma%5Fchamada%5Fpara%5Fo%5FMotor%5Fde%5FCalculo%5Fde%5FTributos
[4]: #3%5FComo%5Fposso%5Fdefinir%5Fos%5Fparametros%5Fda%5Frequisicao%5Fpara%5Fo%5FMotor%5Fde%5FCalculo%5Fde%5FTributos
[5]: #IssuerTaxRegime
[6]: #IssuerTaxProfile
[7]: #BuyerTaxRegime
[8]: #BuyerTaxProfile
[9]: #OperationType
[10]: #OperationCode
[11]: #AcquisitionPurpose
[12]: #Origin
[13]: #4%5FVisao%5FGeral%5Fdo%5Ffluxo%5Fde%5Femissao%5Fde%5Fnota%5Ffiscal%5Futilizando%5Fo%5FTaxes
[14]: #Mais%5Finformacoes
[15]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#4%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[16]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Fissuer%5Ftax%5Fprofile
[17]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Frecipient%5Ftax%5Fprofile
[18]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Foperation%5Fcode
[19]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Facquisition%5Fpurpose
[20]: https://p.nfe.io/pt-br/certificado-digital-20off
[21]: https://id.nfe.io/signup?returnUrl=%2Flogout%3FlogoutId%3DCfDJ8KGjv5x5Q6lMi2BB4X2DIf1-IF%5FHuff4L-tg32LR9%5FTivqZl6WKpGA4HGNBnbXjpTrWYM7spj54Fi3S%5F1R2n-8ZkNkXyeLVDHyMrPEM-fluAMwNYeJ7wSqAYL-RTWnNMRsX2COo2x9z9ZVQVyRL1IWqZWOJ4gxi-jOMj05eW3ITsdxirELxKUg11cmZ2zRCKXif5GEzbF8JzMI9EGHHKOLIoSTeBA4V0HXo170%5FKDvgjFWmNRbpZyj7Wcq9P2ct643g0DKw9wPPO9PmrmGjO9G4B9-xQ2cgs5Cs5RDZN9hTfZ%5F6325h0%5Fy8Xfb2W6V2ICf7v-GNWj7lVdjdqqlANIwQ