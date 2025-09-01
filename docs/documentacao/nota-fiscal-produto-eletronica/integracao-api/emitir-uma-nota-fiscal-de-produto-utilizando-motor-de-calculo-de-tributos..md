---
sidebar_label: "Emitir uma nota fiscal de produto utilizando Motor de Cálculo de Tributos"
sidebar_position: 4
slug: /emitir-uma-nota-fiscal-de-produto-utilizando-o-motor-de-calculo-de-tributos
date: 2025-02-10
last_update:
  date: 2025-02-28
title: "Emitir uma nota fiscal de produto utilizando Motor de Cálculo de Tributos"
description: "Integração da Nota Fiscal Eletrônica utilizando o Motor de Cálculo de Tributos (NF-e / NFC-e)Ao final desse tutorial, você será capaz de:Próximos passosRequisitosTutorial1&#8230;."
author: "Rogerio Franzoni"
image: "https://nfe.io/docs/app/uploads/2025/02/NFe-Taxes-Diagram.drawio-5.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 8013
---

# Integração da Nota Fiscal Eletrônica utilizando o Motor de Cálculo de Tributos (NF-e / NFC-e)

A Nota fiscal eletrônica é o documento digital fiscal usada para a documentação de operaçóes de circulação de mercadorias ou prestação de serviço, seja transporte no mesmo estado, quanto entre estados.

**Saiba mais:** [O que é nota fiscal eletrônica?][20]

## Ao final desse tutorial, você será capaz de:

Emitir uma nota fiscal eletrônica utilizando o motor de cálculo de tributos.

## Próximos passos

1. [Consultar uma nota fiscal][21]
2. [Consultar o XML de uma nota fiscal emitida][22]
3. [Consultar o PDF (danfe) de uma nota fiscal emitida][23]
4. [Motor de Cálculo de Tributos][24]

## Requisitos

* [Qual tipo de nota fiscal devo emitir?][25]
* [Como fazer o **credenciamento** da minha empresa para emissão de nota?][26]
* [Quer saber mais sobre certificado digital?][27]
* [Desconto para adquirir seu certificado digital **A1?**][28]
* [Cadastrar uma empresa][29]
* [Fazer upload de um certificado na plataforma][30]
* [Cadastrar uma inscrição estadual][31]

## Tutorial

A partir desse momento faremos uma breve explicação de como realizar a integração de Nota fiscal Eletrônica (NF-e / NFC-e) com a API oferecida pela NFE.io utilizando o Taxes (motor de cálculo de imposto).

**Veja mais sobre a** [Documentação da API][32]

> Você pode realizar a importação da url no Postman para ter todos os seguintes exemplos através do link:

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

Tutorial de como importar a url no postman [Clique aqui][33]

### 1\. Introdução

Utilizamos uma API REST (Representational State Transfer), que é um padrão amplamente adotado para a integração entre sistemas.

* Aqui estão os pontos principais sobre a forma de comunicação com a API NFE.io:  
   * Protocolo HTTPS: HTTPS é uma combinação do protocolo HTTP com uma camada adicional de segurança chamada SSL/TLS (Secure Sockets Layer/Transport Layer Security). A comunicação é feita através do protocolo HTTP, o mesmo utilizado para navegar na web. Isso facilita a integração, pois é um protocolo bem conhecido e suportado por diversas plataformas.  
   * Métodos HTTP: Utilizamos métodos HTTP para realizar diferentes operações:  
         * GET: Para obter informações.  
         * POST: Para enviar novas informações.  
         * PUT: Para atualizar informações existentes.  
         * DELETE: Para remover informações.  
   * Formato de Dados: As requisições e respostas são geralmente em formato JSON, que é leve e fácil de interpretar. Isso torna a troca de dados eficiente e simples de manipular.  
   * Códigos de Status: Cada resposta da API inclui um código de status HTTP que indica o resultado da operação, como:  
         * 200: Sucesso.  
         * 400: (BadRequest) Erros nos dados enviados.  
         * 404: Recurso não encontrado.  
         * 500: Erro no servidor.
* A API NFE.io permitie que você escolha entre duas opções para emitir uma nota fiscal, são elas:  
   * **Sem cálculo do imposto** \- As informações tributárias serão fornecidas por você, ou seja, a nota fiscal será emitida sem a utilização do motor de cálculo tributário.  
   Clique aqui para mais informações  
   * **Com cálculo do imposto** \- As informações tributárias serão fornecidas pela NFE.io, de acordo com os parâmetros informados no grupo "taxDetermination".  
   Veja o detalhamento mais abaixo.

### 2\. Visão Geral do fluxo de emissão de nota fiscal.

![](https://nfe.io/docs/app/uploads/2025/02/NFe-Taxes-Diagram.drawio-5.png)

## Primeiros passos

### 1\. Emitir primeira nota fiscal

Pronto, todos os passos antecessores de emissão de suas notas fiscais eletrônicas estão concluídos.

Colocamos um exemplo do mínimo de dados para serem informados à nossa API, caso precise ou queira verificar o restante da documentação, estará disponível em: [Documentação completa.][34]

Os campos mínimos para serem enviados são os dados do comprador (buyer) e os produtos (items).  
**Obs.1: O grupo "taxDetermination" substituí o grupo "tax" (dados dos impostos da nota fiscal) para que o sistema acione automaticamente o Motor de Cálculo de Tributos. Desta forma o grupo "tax" será preenchido com o resultado da consulta no motor de cálculo de tributos de forma automática.**

**Saiba mais:** [O que é motor de cálculo de tributos][35]

Abaixo, a url e um json de exemplo contendo os dados mínimos para a emissão de uma nota fiscal **com a utilização do motor de cálculo de tributos.**  
**Saiba mais:** [Entendendo a estrutura do json (layout de integração)][36]  

> **Observação:** Substitua \{companyId\} pela ID gerada no passo de criação da Empresa e a \{statetaxId\} pela ID gerada no passo de criação da Inscrição Estadual.
> 
> **O método HTTP utilizada no envio da nota fiscal é o "POST", então verifique no seu postman se está preenchido corretamente.**

`POST: https://api.nfse.io/v2/companies/{companyId}/statetaxes/{statetaxId}/productinvoices`

```json
{
    "buyer": {
        "name": "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
        "federalTaxNumber": 8662968678,
        "address": {
            "city": {
                "code": "3550308",
                "name": "jundiai"
            },
            "state": "SP",
            "district": "centro",
            "street": "rua petronilha antunes",
            "postalCode": "13207760",
            "number": "204",
            "country": "BRA"
        }
    },
    "items": [
        {
            "code": "2617",
            "unitAmount": 9.98,
            "quantity": 5,
            "ncm": "47079000",
            "cest": null,
            "description": "FEIJAO BOLINHA CAMIL 500G NF ENTRADA 1030099 14/05/2018",
            "codeGTIN": "9999999999999",
            "taxDetermination": {
                "BuyerTaxProfile": "<string>",
                "IssuerTaxProfile": "<string>",
                "acquisitionPurpose": "<string>",
                "OperationCode": "<number>",
                "Origin": "<string>"
            }
        }
    ]
}
```

### 2\. Detalhamento dos campos do grupo "taxDetermination":

O grupo "taxDetermination" define o cenário que representa a operação tributária realizada e é identificada por, basicamente, quatro códigos: natureza da operação, perfil do remetente, o perfil do destinatário e a finalidade da aquisição. Os quatro códigos combinados dão o significado para a operação realizada, exemplo: Industria rementendo para o varejo material de sua produção.  

#### **BuyerTaxProfile**

* Para obter os valores disponíveis para preenchimento do campo "BuyerTaxProfile", faça uma chamada na API de listagem dos perfis fiscais do destinatário confome exemplo abaixo  
**Veja a documentação da API:** [BuyerTaxProfile][37]

**Destinatário/Perfil Destino**  
Tabela parcial com os perfis mais comuns.

| Código                                  | Descrição                                 |
| --------------------------------------- | ----------------------------------------- |
| closed\_warehouse                       | Depósito temporário (Fullfilment)         |
| wholesale                               | Atacadista                                |
| company\_abroad                         | Comercial exportadora (inclusive trading) |
| final\_consumer\_icms\_contributor      | Consumidor final contribuinte do ICMS     |
| final\_consumer\_non\_icms\_contributor | Consumidor final não contribuinte do ICMS |
| importer                                | Importador                                |
| industry                                | Indústria                                 |
| NationalSimple                          | Optante pelo Simples Nacional             |
| retail                                  | Varejista                                 |

---

#### **IssuerTaxProfile**

* Para obter os valores disponíveis para preenchimento do campo "IssuerTaxProfile", faça uma chamada na API de listagem dos perfis fiscais do emissor confome exemplo abaixo:  
**Veja a documentação da API:** [IssuerTaxProfile][38]

**Remetente/Perfil Origem**  
Tabela parcial com os perfis mais comuns.

| Código    | Descrição  |
| --------- | ---------- |
| wholesale | Atacadista |
| importer  | Importador |
| industry  | Indústria  |
| retail    | Varejista  |

---

#### **AcquisitionPurpose**

* Para obter os valores disponíveis para preenchimento do campo "AcquisitionPurpose", faça uma chamada na API de listagem de finalidades de aquisição confome exemplo abaixo:  
**Veja a documentação da API:** [AcquisitionPurpose][39]

**Finalidade de aquisição**  
Tabela parcial com as finalidades de aquisição mais comuns.

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

#### **OperationCode**

* Para obter os valores disponíveis para preenchimento do campo "OperationCode", faça uma chamada na API de listagem de códigos da operação confome exemplo abaixo:  
**Veja a documentação da API:** [OperationCode][40]

**Natureza de Operação**  
Tabela parcial com as operações mais comuns.

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

#### **Origin**

* Códigos do campo origem do material  
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

---

### 3\. Integração da nota fiscal no padrão "json".

1. Você deverá enviar os dados preenchidos corretamente com as informações da sua nota fiscal e clicar no botão "Send" (Enviar).  
![](https://nfe.io/docs/app/uploads/2025/02/Issue-invoice-2.png)
2. Ao sucesso da requisição, será fornecido uma ID da nota fiscal utilizada no processamento da emissão.  
![](https://nfe.io/docs/app/uploads/2025/02/Issue-invoice-response.png)

### 4\. Importação da url do postman

Novamente, fornecemos uma URL de importação no POSTMAN com todas essas requisiçôes já inclusas. Basta inserir sua Autorização em cada requisição e alterar os dados fornecidos.

```json
https://api.postman.com/collections/13456751-f3769b82-5291-445b-b7bf-8fc0ffcab9b2?access_key=PMAT-01JKDTXTXB7DN8645BWG6K7C7K
```

## Próximos passos

1. [Consultar uma nota fiscal][21]
2. [Consultar o XML de uma nota fiscal emitida][22]
3. [Consultar o PDF (danfe) de uma nota fiscal emitida][23]
4. [Motor de Cálculo de Tributos][24]

## Veja também:

* [Nossos segmentos][41]
* [Sobre a NFE.io][42]
* [Junte-se ao nosso time][43]

[1]: #Integracao%5Fda%5FNota%5FFiscal%5FEletronica%5Futilizando%5Fo%5FMotor%5Fde%5FCalculo%5Fde%5FTributos%5FNF-e%5FNFC-e
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Proximos%5Fpassos
[4]: #Requisitos
[5]: #Tutorial
[6]: #1%5FIntroducao
[7]: #2%5FVisao%5FGeral%5Fdo%5Ffluxo%5Fde%5Femissao%5Fde%5Fnota%5Ffiscal
[8]: #Primeiros%5Fpassos
[9]: #1%5FEmitir%5Fprimeira%5Fnota%5Ffiscal
[10]: #2%5FDetalhamento%5Fdos%5Fcampos%5Fdo%5Fgrupo%5FquottaxDeterminationquot
[11]: #BuyerTaxProfile
[12]: #IssuerTaxProfile
[13]: #AcquisitionPurpose
[14]: #OperationCode
[15]: #Origin
[16]: #3%5FIntegracao%5Fda%5Fnota%5Ffiscal%5Fno%5Fpadrao%5Fquotjsonquot
[17]: #4%5FImportacao%5Fda%5Furl%5Fdo%5Fpostman
[18]: #Proximos%5Fpassos-2
[19]: #Veja%5Ftambem
[20]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/
[21]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#1%5FConsultar%5Fnota%5Ffiscal
[22]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#2%5FConsultar%5FXML
[23]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/como-consultar-nota-fiscal-eletronica/#3%5FConsultar%5FPDF%5FDanfe
[24]: https://nfe.io/docs/documentacao/nota-fiscal-eletronica/motor-de-calculo-de-imposto/
[25]: https://nfe.io/docs/conceitos/notas-fiscais/
[26]: https://nfe.io/docs/nota-fiscal-eletronica/credenciamento-nf-e/
[27]: https://nfe.io/docs/certificado-digital/conceitos/
[28]: https://p.nfe.io/pt-br/certificado-digital-20off
[29]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#1%5FCriar%5Fuma%5Fempresa
[30]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#2%5FFazer%5Fupload%5Fdo%5Fcertificado%5Fna%5Fplataforma
[31]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/integracao-api/primeiros-passos/#3%5FCriar%5Finscricao%5Festadual
[32]: https://nfe.io/doc/rest-api/nfe-v2/
[33]: https://nfe.io/docs/comum/postman/
[34]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/
[35]: https://nfe.io/docs/sem-categoria/motor-de-calculo-de-imposto/
[36]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/post%5Fv2%5Fcompanies%5F%5FcompanyId%5F%5Fstatetaxes%5F%5FstatetaxId%5F%5Fproductinvoices
[37]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Frecipient%5Ftax%5Fprofile
[38]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Fissuer%5Ftax%5Fprofile
[39]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Facquisition%5Fpurpose
[40]: https://nfe.io/docs/desenvolvedores/rest-api/calculo-de-impostos-v1/#/C%C3%B3digos%20Auxiliares/get%5Ftax%5Fcodes%5Foperation%5Fcode
[41]: https://nfe.io/segmentos/
[42]: https://nfe.io/sobre/
[43]: https://nfe.io/carreira/