---
author: Gabriel Marquez
slug: alterar-empresa
sidebar_position: 3
date: 2020-09-21
sidebar_label: Alterar Empresa
last_update:
  date: 2020-10-29
title: Como alterar empresa na plataforma
image: https://nfe.io/docs/app/uploads/2020/09/company-page-2.png
description: Nessa documentação você apredenderá como alterar empresa na
  plataforma da API da NFE.io. Como alterar a empresa na NFE.io ?
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 561
---
# Alterar Empresa

**Ao final desse tutorial, você será capaz de:**

* Alterar uma empresa

**Requisitos**

* [Criar uma conta][3]
* [Criar uma empresa][4]

## 1\. Alterar uma empresa

1) Clique no menu **EMPRESAS**

![Empresas](/static/docs/plataforma/company-page-2.png)

2) Clique no botão **ALTERAR EMPRESA**

![Alterar Empresa](/static/docs/plataforma/change-company.png)

3) Clicando em cada uma das seções a seguir, você poderá alterar dados da sua empresa, fazer um novo upload de certificado digital, alterar o ambiente de operação da empresa e consultar as chaves de autenticação.

![Dados da Empresa](/static/docs/plataforma/edit-company-cards.png)

**Próximos passos**

* [Fazer upload do certificado digital][5]
* [Emitir uma nota fiscal de serviço][6]
* [Listar notas fiscais de serviço][7]
* [Cancelar uma nota fiscal de serviço][8]

**Consultar dados de Pessoa Jurídica**  
Nessa consulta nossa API retornará os dados de uma Pessoas Jurídica através de um CNPJ, confira os dados que a gente pega. Possuímos diversas fontes de busca para puxar os dados e retorná-los de maneira bem organizada, acesse nossa documentação para conhecer melhor.

**Consultar dados de Pessoa Física**  
Essa API retornará os dados de uma Pessoa Física a partir de um CPF. Assim você pode ter acesso a situação cadastral de uma pessoa física, clique aqui para acessar nossa documentação.

**Consultar dados de endereços**  
Nossa API de endereços retornará os dados de endereço a partir de um CEP. Nós também disponibilizamos outras formas de fazer essa consulta, clique aqui para acessar nossa documentação.

**Consultar de Notas Fiscais Eletrônicas (NF-e)**  
Nessa consulta nossa API retorna os dados de uma NF-e (em diferentes formatos de arquivos) a partir da chave de acesso da nota. Conheça a documentação da API.

**Emissão Automática de Nota Fiscal de Serviço (NFS-e)**  
Com a nossa API é possivel emitir notas fiscais de serviço de forma automatizada. Além do calculo automático de impostos, nosso sistema possui diversas funcionalidades como, envio automático de email com a nota emitida para o seu cliente, cancelamento de notas, consulta de pdf ou xml, dentre outros. Clique aqui e confira nossa documentação.


[1]: #Alterar%5FEmpresa
[2]: #1%5FAlterar%5Fuma%5Fempresa
[3]: https://nfe.io/docs/documentacao/nossa-plataforma/criar-conta/
[4]: https://nfe.io/docs/documentacao/nossa-plataforma/criar-empresa/
[5]: https://nfe.io/docs/documentacao/nossa-plataforma/upload-certificado/
[6]: https://nfe.io/docs/documentacao/nossa-plataforma/nota-fiscal-servico/emitir-nota-servico/
[7]: https://nfe.io/docs/documentacao/nossa-plataforma/nota-fiscal-servico/listar-notas-servico/
[8]: https://nfe.io/docs/documentacao/nossa-plataforma/nota-fiscal-servico/cancelar-nota-servico/
