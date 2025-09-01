---
sidebar_label: "Cálculo de impostos na NFE.io"
sidebar_position: 4
slug: calculo-de-impostos
date: 2024-10-24
last_update:
  date: 2024-11-11
title: "Cálculo de impostos na NFE.io - NFE.io | Docs"
description: "Impostos incidentes na nota fiscal (NFS-e)Impostos Incidentes em Notas Fiscais de Serviços1. ISS (Imposto sobre Serviços de Qualquer Natureza)2. PIS (Programa de Integração&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 7897
---

# Impostos incidentes na nota fiscal (NFS-e)

Nesta seção, será serão descritos os impostos que incidem na nota e como ele é calculado quando a nota é emitida na NFE.io.

Caso não encontre uma resposta para sua dúvida, fique à vontade para [entrar em contato][12] e enviar sua pergunta.

## Impostos Incidentes em Notas Fiscais de Serviços

Quando você lida com **notas fiscais de serviços**, existem vários impostos que podem incidir, dependendo do tipo de serviço, da localização e do porte da empresa. Aqui está um resumo dos impostos mais comuns:

### 1\. **ISS (Imposto sobre Serviços de Qualquer Natureza)**

* **O que é?** Um imposto municipal que se aplica à maioria dos serviços. A alíquota varia de 2% a 5%, dependendo da cidade e do tipo de serviço.
* **Quem paga?** Geralmente, o prestador de serviços, mas o custo pode ser repassado ao cliente.

### 2\. **PIS (Programa de Integração Social)**

* **O que é?** Um imposto federal que financia programas sociais para trabalhadores.
* **Alíquota:** Em geral, é 0,65% no **Regime Cumulativo** ou 1,65% no **Regime Não Cumulativo** (depende do regime tributário da empresa).
* **Quem paga?** O prestador de serviços.

### 3\. **COFINS (Contribuição para o Financiamento da Seguridade Social)**

* **O que é?** Um imposto federal que financia a seguridade social, saúde e assistência social.
* **Alíquota:** 3% no **Regime Cumulativo** ou 7,6% no **Regime Não Cumulativo**.
* **Quem paga?** O prestador de serviços.

### 4\. **CSLL (Contribuição Social sobre o Lucro Líquido)**

* **O que é?** Um tributo sobre o lucro da empresa para financiar a seguridade social.
* **Alíquota:** Geralmente 9% para a maioria das empresas e 20% para instituições financeiras.
* **Quem paga?** O prestador de serviços (especificamente sobre o lucro da empresa).

### 5\. **IRPJ (Imposto de Renda Pessoa Jurídica)**

* **O que é?** Imposto de renda sobre o lucro das empresas.
* **Alíquota:** Depende do regime tributário:  
   * **Lucro Presumido:** Tributado com base em um percentual do lucro presumido, geralmente em torno de 15% sobre a margem de lucro fixa.  
   * **Lucro Real:** Tributado sobre o lucro real, com alíquota base de 15%, mais um adicional de 10% sobre lucros acima de R$ 240.000 anuais.
* **Quem paga?** O prestador de serviços.

### 6\. **INSS (Instituto Nacional do Seguro Social)**

* **O que é?** Contribuição para a seguridade social, paga pelas empresas sobre os salários.
* **Alíquota:** Geralmente 20% sobre a folha de pagamento, mas para prestadores de serviço, existe a **Retenção de INSS**, onde 11% pode ser retido diretamente na nota fiscal.
* **Quem paga?** O empregador (prestador de serviços), mas parte pode ser retida na nota fiscal (se aplicável).

### 7\. **Retenção de IR (Imposto de Renda Retido na Fonte)**

* **O que é?** Imposto de renda que pode ser retido pelo cliente em determinados serviços, geralmente para pessoas físicas ou pequenos prestadores de serviços.
* **Alíquota:** Pode variar, mas geralmente é em torno de 1,5%.
* **Quem paga?** O imposto é retido pelo cliente e repassado ao governo em nome do prestador de serviços.

### Resumo em Tabela:

| **Imposto**        | **Tipo**  | **Quem Paga?**        | **Alíquota**                    |
| ------------------ | --------- | --------------------- | ------------------------------- |
| **ISS**            | Municipal | Prestador de Serviços | 2% - 5%                         |
| **PIS**            | Federal   | Prestador de Serviços | 0,65% ou 1,65%                  |
| **COFINS**         | Federal   | Prestador de Serviços | 3% ou 7,6%                      |
| **CSLL**           | Federal   | Prestador de Serviços | 9% (sobre o lucro)              |
| **IRPJ**           | Federal   | Prestador de Serviços | 15% (sobre o lucro)             |
| **INSS**           | Federal   | Empregador            | 20% sobre a folha ou 11% retido |
| **Retenção de IR** | Federal   | Retido pelo Cliente   | \~1,5%                          |

Esses impostos podem ser um pouco confusos, então é importante saber qual é o regime tributário da sua empresa (**Simples Nacional**, **Lucro Presumido** ou **Lucro Real**) para identificar quais impostos se aplicam. Se precisar de mais detalhes sobre algum imposto específico, é só avisar!

## Cálculo de impostos na NFe.io

O cálculo de impostos é feito a partir da combinação da informação da cidade onde o prestador de serviços está registrado com a informação do tipo de serviço prestado.

Com esses dois dados, uma base de dados é consultada e dela são trazidas as informações das alíquotas dos impostos relacionados às informações utilizadas na busca. Os dados retornados nessa busca são os seguintes:

* Código de Serviço da Cidade
* Código Federal
* Cnae Nacional
* ISS
* Descrição do serviço
* IR (Imposto a ser retido)
* PIS (Imposto a ser retido)
* COFINS (Imposto a ser retido)
* CSLL (Imposto a ser retido)
* INSS (Imposto a ser retido)
* ISS (Imposto a ser retido)

A partir desse conjunto de informações retornado, os impostos que incidem na nota fiscal são calculados.

Para o cálculo de impostos de uma nota o tipo de regime tributário da empresa e a sua cidade de registro são fatores de definirão como o imposto é calculado. Dessa forma, com a combinação do retorno das alíquotas com o tipo de regime da sua empresa, regras no nosso processamento são aplicadas para a definição dos impostos que incidem na nota. 

Como regras gerais na aplicação de impostos para cenários em que o cliente é do regime do Lucro Real ou Lucro Presumido, os impostos retidos incidem na nota fiscal. Para os demais cenários, esses tipos de impostos não são aplicados. Com relação ao município onde a empresa reside, cenários específicos são aplicados para as empresas que retêm impostos.

Caso tenha alguma dúvida de como o imposto é aplicado para o seu cenário, entre em contato conosco para que possamos esclarecer.


[1]: #Impostos%5Fincidentes%5Fna%5Fnota%5Ffiscal%5FNFS-e
[2]: #Impostos%5FIncidentes%5Fem%5FNotas%5FFiscais%5Fde%5FServicos
[3]: #1%5FISS%5FImposto%5Fsobre%5FServicos%5Fde%5FQualquer%5FNatureza
[4]: #2%5FPIS%5FPrograma%5Fde%5FIntegracao%5FSocial
[5]: #3%5FCOFINS%5FContribuicao%5Fpara%5Fo%5FFinanciamento%5Fda%5FSeguridade%5FSocial
[6]: #4%5FCSLL%5FContribuicao%5FSocial%5Fsobre%5Fo%5FLucro%5FLiquido
[7]: #5%5FIRPJ%5FImposto%5Fde%5FRenda%5FPessoa%5FJuridica
[8]: #6%5FINSS%5FInstituto%5FNacional%5Fdo%5FSeguro%5FSocial
[9]: #7%5FRetencao%5Fde%5FIR%5FImposto%5Fde%5FRenda%5FRetido%5Fna%5FFonte
[10]: #Resumo%5Fem%5FTabela
[11]: #Calculo%5Fde%5Fimpostos%5Fna%5FNFeio
[12]: https://nfe.io/#contato