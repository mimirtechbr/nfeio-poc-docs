---
sidebar_label: "Release Notes de agosto/2021"
sidebar_position: 1
slug: release-notes-de-agosto-2021
date: 2021-09-27
last_update:
  date: 2021-10-15
title: "Release Notes de agosto/2021 - NFE.io | Docs"
description: "Release Notes de agosto/2021Plataforma da NFE.ioNota Fiscal de ServiçoNota Fiscal de ProdutoNota Fiscal de ConsumidorDF-e DistribuiçãoIntegrações NFE.io Release Notes de agosto/2021 Novas funcionalidades,&#8230;"
author: "João Kita"
image: "https://nfe.io/docs/app/uploads/2021/09/slyrNkqZtT-scaled.gif"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2605
---

* [Release Notes de agosto/2021][1]  
   * [Plataforma da NFE.io][2]  
   * [Nota Fiscal de Serviço][3]  
   * [Nota Fiscal de Produto][4]  
   * [Nota Fiscal de Consumidor][5]  
   * [DF-e Distribuição][6]  
   * [Integrações NFE.io][7]

# Release Notes de agosto/2021

Novas funcionalidades, mudanças e correções de bugs feitas no mês de agosto pelo time da NFE.io.

## Plataforma da NFE.io

Atividades relacionadas a plataforma da [NFE.io][8]  

nova funcionalidade

Abertura de tíquete pela plataforma da NFE.io

Disponibilizamos mais uma forma de abertura de tíquete pela nossa plataforma. Agora ele também está disponível na tela de listagem de NFS-e e na tela de visualização dos detalhes da NFS-e.  
![Alt Text](/static/docs/releases/slyrNkqZtT-scaled.gif)

nova funcionalidade

 Consulta de nota fiscal

Disponibilizamos a opção de você escolher qual o formato da nota fiscal será consultada. Agora existem três possibilidades: a consulta do XML, a consulta da DANFE ou a cosulta de ambas.  
![Alt Text](/static/docs/releases/PykCeEjBr3-scaled.gif)

correção

 Tela de pré-fatura

A tela onde é descrito o que você consumiu da NFE.io e o valor dos serviços que iremos cobrar não estava disponível para acesso de maneira pública. Antes, o acesso a ela só era possível caso você estivesse acessado com login e senha a nossa plataforma. Agora ela é uma tela que qualquer um pode acessar.

correção

Cadastro de empresa

Corrigimos a situação em que o campo de número do endereço que aparece no cadastro de empresa na nossa plataforma não estava sendo preenchido automaticamente após o preenchimento do CNPJ da empresa a ser cadastrada.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Prefeitura de Votorantim/SP

Implementamos a integração com a prefeitura para habilitar as emissões fiscais por meio dos nossos serviços.

nova funcionalidade

Londrina/PR

Implementamos a integração para emissões fiscais com mais uma prefeitura! Agora é possível emitir através da NFE.io também em Londrina/PR!

nova funcionalidade

Diadema/SP

Prefeitura de Diadema/SP também está integrada com a NFE.io!

nova funcionalidade

Novos campos na nota

Implementamos o campo '_taxRegime_' para ser informado durante a emissão da nota fiscal. Para o preenchimento desse campo, você poderá escolher as seguintes opções:

* MicroempreendedorIndividual (Microempreendedor individual (MEI))
* SimplesNacional
* LucroPresumido
* LucroReal
* Isento

O objetivo deste campo é utilizá-lo para o cálculo automático da retenção de impostos. Hoje ele está disponível para indicação na nossa API. Qualquer meio de pagamento que nos utilize para emissão da nota necessita integrá-lo no seu fluxo de emissão.

nova funcionalidade

Extrema/MG

Realizamos várias melhorias no fluxo de emissão seguindo a regra do provedor WEBISS para ganhar velocidade no tempo de emissão da nota, além de contornar problemas de instabilidade do provedor.

nova funcionalidade

Prefeitura de Florianópolis/SC

Efetuamos novas mudanças no PDF da nota fiscal. Agora alguns campos que constavam no PDF da prefeitura também estão disponíveis no PDF que a NFE.io gera.

mudança

Prefeitura de Saquarema/RJ

Em virtude de instabilidades no sistema da prefeitura de Saquarema, realizamos adequações no nosso sistema para contornar falhas na comunicação onde pode ocorrer um estouro de tempo da sessão (timeout) o que consequentemente gera falha na emissão da nota, sendo que em alguns casos a nota fica com o status "emitida" na prefeitura.

mudança

Prefeitura de Cotia/SP

Realizamos uma alteração no processo de consulta do status da nota fiscal em virtude de uma alteração no layout de retorno da prefeitura. Identificamos que por este motivo a consulta não estava interpretando corretamente o status da nota e dessa forma esta era atualizada com uma informação divergente na nossa plataforma.

mudança

Prefeitura da Viamão/RS

Em virturde da atualização do endereço do webservice nfse realizada pela prefeitura de Viamão/RS, foi necessário uma atualização na nossa integração para emissão da nota fiscal.

correção

 Envio de email pela NFE.io com a nota fiscal emitida

Fizemos uma correção na etapa de envio de email para os tomadores das notas fiscais. Reparamos que, em raros momentos, a nota era enviada duas vezes.

## Nota Fiscal de Produto

Atividades relacionadas a nota fiscal de produto.  

nova funcionalidade

 Nova atualizações nos campos disponíveis para emissão da nota fiscal.

* Fizemos uma nova alteração no produto para assim conseguirmos atender à NT2020.005 v1.10  
   * Introduzidos novos códigos no campo para informação da via de transporte internacional (tpViaTransp – I23a) em razão das alterações relacionadas com as declarações de importação:  
   * 8=Conduto/Rede Transmissão;  
   * 9=Meios Próprios;  
   * 10=Entrada/Saída Ficta;  
   * 11=Courier;  
   * 12=Em mãos;  
   * 13=Por reboque;  
   * Alterações no grupo adi (I25):  
   * Aumentado o número máximo de ocorrências do grupo;  
   * Grupo também pode registar itens da Declaração Única de Importação (DUImp), não apenas adições a documentos de importação;  
   * O número do ato concessório de Drawback agora pode ser alfanumérico, e seu tamanho máximo foi aumentado.  
   * Atendimento à NT2020.005 v1.10  
   * Alteração do Campo cAgreg para Alfanumérico (Grupo I80). A NT2016.002 introduziu o grupo I80 para permitir a rastreabilidade de qualquer produto sujeito a regulações sanitárias. Observou-se a necessidade de alterar o campo onde se informa o Código de Agregação (cAgreg – I85) de numérico para alfanumérico.  
   * Campos para ICMS ST Desonerado (Grupos de Tributação do ICMS=10, 70 e 90)  
   * Para permitir o detalhamento do ICMS de substituição tributária em operações relacionadas com uso na agropecuária ou com órgão de fomento e desenvolvimento agropecuário ficam criados os campos destinados à informação do Valor do ICMS-ST desonerado (vICMSSTDeson – N33a) e do Motivo da desoneração do ICMS-ST (motDesICMSST – N33b) nos grupos relativos a operações tributada e com cobrança do ICMS por substituição tributária (CST 10), com tributação do ICMS com redução de base de cálculo e cobrança do ICMS por substituição tributária (CST 70), e com outras tributações do ICMS (CST 90).  
   * Campos para ICMS Diferido em Operações com FCP (Grupo de Tributação do ICMS=51)  
   * No grupo relativo a operações com tributação por diferimento (CST 51) ficam criados campos para informação do percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP) (pFCPDif – N17d), do valor do ICMS relativo ao FCP diferido (vFCPDif – N17e) e do valor efetivo do ICMS relativo ao FCP (vFCPefet – N17f).  
   * As unidades federadas onde existe esta possibilidade publicarão instruções sobre como estes campos devem ser preenchidos.  
   * Nova Modalidade de Base de Cálculo do ICMS ST nos Grupos de Tributação do ICMS=70 e ICMS=90  
   * Identificou-se a necessidade de criação de novo tipo de modalidade de Base de Cálculo do ICMS ST (modBCST – N18) para operações com tributação do ICMS com redução de base de cálculo e cobrança do ICMS por substituição tributária (CST 70), Tributação ICMS: Outros (CST 90);  
   * Inclusão de Indicadores Relacionados com Valor Total da Nota (Grupos R e T)  
   * Inclusão de campos indicadores sobre se os valores de PIS Substituição Tributária (indSomaPISST – R07) e de COFINS Substituição Tributária (indSomaCOFINSST – T07) integram o valor total da Nota.  
   * Uso dos Indicadores Relacionados com Valor Total da Nota (regra W16-10)  
   * Uso correto dos campos indicadores (indSomaPISST – R07 e indSomaCOFINSST – T07) sobre se os valores de PIS Substituição Tributária (vPIS – R06) e de Cofins Substituição Tributária (vCOFINS – T06) integram o valor total da Nota.  
   * Novos Campos para Códigos de Barra (Grupo I)  
   * Conforme especificado na NT2017.001, os campos cEAN (I03) e cEANTrib (I12) devem ser utilizados exclusivamente para informação de códigos GTIN (Global Trade Item Number) do produto, antigo código EAN.  
   * Como existem outros códigos de barras em uso no Brasil, para que um contribuinte possa informar simultaneamente o código de barras utilizado por seu fornecedor e o seu (do contribuinte) código interno, ficam criados os campos cBarra (I03a) e cBarraTrib (I12a), sem validações, para que seja possível a informação de códigos de barras diferentes do padrão GTIN usados pelo emitente e pelo destinatário.  
   * Emitente Bloqueado para Operação com a UF de Destino  
   * Uma das alterações introduzida pelo Ajuste SINIEF 33/19, de 13 de dezembro de 2019 é apossibilidade de, a critério de cada unidade federada, a irregularidade fiscal que pode motivar a denegação de uma nota fiscal poder alcançar também a inexistência de irregularidades identificadas pela Administração Tributária da unidade federada do destinatário ou tomador, por meio de cruzamento de informações do seu banco de dados fiscais, relativa às operações e prestações interestaduais que destinem bens e serviços a consumidor final não contribuinte, correspondentes à diferença entre a alíquota interna da unidade federada destinatária e a alíquota interestadual.  
         * A implementação desta funcionalidade fica viabilizada pela regra de validação 1C17-50.  
   * Fim da Validação de Inutilização da Numeração nas Emissões em Contingência  
         * A regra 3B08-100, que não permite autorização de NF-e com numeração que tenha sido inutilizada, deixa de ser aplicada nas hipóteses de emissão em contingência.  
   * Rejeição por divergência entre CPF e IE do destinatário  
   * Ativação da regra 5E17-10, para validar o por CPF e IE registrado no Cadastro Centralizado de Contribuintes (CCC): para os destinatários contribuintes identificados por CPF verificar o vínculo entre o CPF e a IE do destinatário informada, conforme o cadastro de contribuintes da unidade federada (UF).  
   * Tag da UF da Placa Opcional  
   * O novo modelo de placa adotado no Brasil não possui a informação da UF de registro, por este motivo esta informação foi tornada opcional no schema (campos X19 e X23).

nova funcionalidade

Nova opção de campo.

Disponibilizamos uma nova opção a ser informada no campo 'CSOSN'. Agora é possível também informar a opção '900', além das que hoje já existem.

## Nota Fiscal de Consumidor

Atividades relacionadas a nota fiscal de consumidor.  

nova funcionalidade

Nova atualizações nos campos disponíveis para emissão da nota fiscal.

* Fizemos uma nova alteração no produto para assim conseguirmos atender à NT2020.005 v1.10  
   * Autorização Assíncrona de NFC-e  
   * Autorização assíncrona de NFC-e passa a ser permitida somente para lotes com mais de uma nota (regra GAP03a-3).

## DF-e Distribuição

Atividades relacionadas a nota fiscal de serviço.

nova funcionalidade

Integração com outras plataformas

Concluímos a integração do produto NF-e Distribuição com o sistema **Kolossus** (software de auditoria digital). Com essa junção, agora possibilitamos auditorias complexas dos SPEDs até cruzamentos entre declarações, passando por consultas de carga tributária de produtos a correções e edições de obrigações acessórias.

correção

Corrigimos a falta de não enviarmos webhooks com as informações consultadas no DF-e Distribuição após a ativação dessa funcionalidade.

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.  

correção

Plugin WHMCS

Liberada a versão 1.4.1 do add-on WHMCS com correções de bugs no campo "Emitir a nota", que não estava sendo salvo corretamente.


[1]: #Release%5FNotes%5Fde%5Fagosto2021
[2]: #Plataforma%5Fda%5FNFEio
[3]: #Nota%5FFiscal%5Fde%5FServico
[4]: #Nota%5FFiscal%5Fde%5FProduto
[5]: #Nota%5FFiscal%5Fde%5FConsumidor
[6]: #DF-e%5FDistribuicao
[7]: #Integracoes%5FNFEio
[8]: https://app.nfe.io