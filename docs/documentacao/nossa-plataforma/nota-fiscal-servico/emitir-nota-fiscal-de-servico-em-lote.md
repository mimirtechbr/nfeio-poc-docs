---
sidebar_label: "Emitir Nota Fiscal de Serviço em Lote"
sidebar_position: 1
slug: emitir-em-lote
date: 2020-09-21
last_update:
  date: 2025-07-16
title: "Como Emitir Nota Fiscal de Serviço em Lote - NFE.io | Docs"
description: "Aqui você entenderá melhor como emitir nota fiscal eletrônica de serviço (NFS-e) em Lote na nossa plataforma, explicado passo-a-passo."
author: "Gabriel Marquez"
image: "https://nfe.io/docs/app/uploads/2020/09/company-page-4.png"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 566
---


# Como emitir Nota Fiscal Eletrônica de Serviço em Lote

Aqui você entenderá melhor como emitir [nota fiscal eletrônica de serviço][11] (NFS-e) em Lote na nossa plataforma, explicado passo-a-passo.

## Ao final desse tutorial, você será capaz de:

* [Emitir notas fiscais de serviço eletrônica][12] em lote

## Requisitos

1. [Criar uma conta][13]
2. [Criar uma empresa][14]
3. [Ter Certificado Digital][15]

> Emissão limitada a 50 linhas por vez, para aumentar o volume para 500 linhas por planilha, por favor vá até conta > funcionalidades > ativar 500 linhas ou solicitar via email para suporte@nfe.io  
> Não há custo para essa solicitação.

## 1\. Como emitir

1.1 Clique na aba **EMPRESAS**  
![pagina emitir nota fiscal em lote](/static/docs/plataforma/company-page-4.png)

1.2 Clique no botão **EMITIR** em frente a sua empresa

![passo a passo nfs-e](/static/docs/plataforma/issue-service-invoice.png)

1.3 Nesse passo a passo você encontrará as instruções necessárias para emitir suas notas fiscais utilizando o excel e como preencher os campos da planilha.

![problemas emitir nota](/static/docs/plataforma/step-by-step-issue-service-invoice.png)

Passo a passo para [emitir notas fiscais][16] em lote

## 2\. Passo a passo para montar sua planilha

2.1 Você pode pular caso já saiba como emitir em lote, ou pode clicar em sim e dar continuidade.

![](/static/docs/plataforma/etapa1.png)

2.2 Nessa etapa você deve escolher um dos modelos de planilha que disponibilizamos para realizar as emissões em lote. No modelo **básico**, os **impostos são calculados automaticamente** pelo nosso sistema e contém apenas os campos excênciais para a emissão das notas. No modelo **avançado**, você pode informar os dados de impostos retidos, alíquota de [ISS][17] entre outros campos. Os impostos serão calculados de acordo com as alíquotas que você informou.

![](/static/docs/plataforma/tela-passo-2-da-planilha.png)

2.3 Aqui você poderá baixar e aprender como preencher o modelo de planilha selecionado anteriormente.

![](/static/docs/plataforma/etapa3.png)

2.4 Nessa etapa você já deve estar com a sua planilha corretamente preenchida. Para importá-la, clique no botão **ESCOLHER ARQUIVO**, selecione sua planilha e clique em **IMPORTAR.** Nós iremos validar todas as informações nela contidas.

![](/static/docs/plataforma/etapa4-1.png)

2.5 Aguarde um momento enquanto realizamos a validação dos dados. Se estiver tudo correto, você irá ver a seguinte mensagem "Planilha importada com sucesso!". Clique no botão **IR PARA EMISSÃO** para continuar com a emissão das suas notas.

![](/static/docs/plataforma/etapa5.png)

## 3\. Emitir em lote

Nessa tela temos uma listagem com as notas fiscais de sua planilha. Aqui você poderá revisar as informações das notas, selecionar quais serão enviadas para emissão e acompanhar o status da sua emissão.

![](/static/docs/plataforma/issue-list.png)

3.1 Para selecionar, clique na caixa de seleção na primeira coluna. Você poderá selecionar todas de uma vez clicando na primeira caixa de seleção ou poderá selecionar manualmente quais deseja.

![](/static/docs/plataforma/issue-list-checkbox.png)

3.2 Para emitir, clique no botão em verde **EMITIR EM LOTE** e aguarde até que todas sejam emitidas.

> Veja esse tutorial que montamos para você!

## 4\. Planilha básica

Veja abaixo algumas regras importantes para alguns campos específicos.

* **CPF\_CNPJ**: pode ser preenchido no formato padrão ou somente números.
* **Email:** caso queira enviar para mais de um email, basta separá-los com vírgula. (Ex: email@teste.com, email2@teste.com).
* **Valor:** pode ser preenchido no padrão brasileiro ou americano. (Ex: 1.000,50 ou 1000.50).
* **Endereco\_Pais:** Sigla do País no padrão ISO 3166-1\. (Ex: BRA, USD, ARG). Mais em [bit.ly/1OgCkxd][18].
* **Endereco\_Cep:** pode ser preenchido no formato padrão ou somente números.
* **Data\_competencia:** a data de competência deve ser preenchida apenas para notas retroativas e deve seguir o seguinte formato: YYYY-MM-DD (ano-mês-dia).

### Os campos de preenchimento obrigatórios são:

> Atenção: a obrigatoriedade das informações sofrem variações de prefeitura para prefeitura.

* **CPF\_CNPJ**
* **Nome**
* **Valor**
* **Codigo\_Servico**
* **Endereco\_Pais**
* **Endereco\_Cep**
* **Endereco\_Logradouro**
* **Endereco\_Numero**
* **Endereco\_Bairro**
* **Endereco\_Cidade\_Codigo**
* **Endereco\_Cidade\_Nome**
* **Endereco\_Estado**
* **Descricao**

## 5\. Planilha avançada

A planilha avançada possui os mesmos campos da planilha básica e mais alguns campos adicionais, veja abaixo.

* CNAE
* Inscricao\_Municipal
* Informacoes\_Adicionais
* Tipo\_Tributacao
* Aliquota\_ISS
* Valor\_ISS
* Retencao\_IR
* Retencao\_PIS
* Retencao\_COFINS
* Retencao\_CSLL
* Retencao\_INSS
* Retencao\_ISS
* Retencao\_OUTROS
* Valor\_Deducoes
* Valor\_Desconto\_Incondicionado
* Valor\_Desconto\_Condicionado
* Tipo\_Tomador
* Estado\_Prestacao\_Servico
* Cidade\_Prestacao\_Servico
* Codigo\_Cidade\_Prestacao\_Servico
* ID\_Externo

> Evite adicionar fórmulas, índices ou qualquer tipo de alteração no excel. Isso pode gerar problemas ao capturar os dados do excel.

## Próximos passos

* [Listar notas fiscais de serviço][19]
* [Cancelar uma nota fiscal de serviço][20]

[1]: #Como%5Femitir%5FNota%5FFiscal%5FEletronica%5Fde%5FServico%5Fem%5FLote
[2]: #Ao%5Ffinal%5Fdesse%5Ftutorial%5Fvoce%5Fsera%5Fcapaz%5Fde
[3]: #Requisitos
[4]: #1%5FComo%5Femitir
[5]: #2%5FPasso%5Fa%5Fpasso%5Fpara%5Fmontar%5Fsua%5Fplanilha
[6]: #3%5FEmitir%5Fem%5Flote
[7]: #4%5FPlanilha%5Fbasica
[8]: #Os%5Fcampos%5Fde%5Fpreenchimento%5Fobrigatorios%5Fsao
[9]: #5%5FPlanilha%5Favancada
[10]: #Proximos%5Fpassos
[11]: https://nfe.io/blog/nota-fiscal/o-que-e-nota-fiscal-servico/
[12]: https://nfe.io/nota-fiscal-de-servico-eletronica/
[13]: https://nfe.io/docs/nossa-plataforma/criar-conta/
[14]: https://nfe.io/docs/nossa-plataforma/criar-empresa/
[15]: https://p.nfe.io/pt-br/certificado-digital-20off
[16]: https://nfe.io/blog/nota-fiscal/como-emitir-nota-fiscal-em-sao-paulo/
[17]: http://nfe.io/blog/financeiro/o-que-e-iss/
[18]: http://bit.ly/1OgCkxd
[19]: https://nfe.io/docs/nossa-plataforma/nota-fiscal-servico/listar-notas-servico/
[20]: https://nfe.io/docs/nossa-plataforma/nota-fiscal-servico/cancelar-nota-servico/