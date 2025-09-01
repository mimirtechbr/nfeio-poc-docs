---
author: Gabriel Marquez
slug: introducao
sidebar_position: 1
date: 2020-08-11
sidebar_label: Introdução
last_update:
  date: 2020-10-26
title: Introdução à documentação das API's
description: Seja bem vindo à introdução da documentação. Criamos este conteúdo
  para você aprender tudo o que é necessário para utilizar nossas API’s.
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 309
---

# Introdução

Seja bem vindo à nossa documentação. Criamos este conteúdo para que você consiga aprender tudo o que é necessário para utilizar qualquer uma de nossas API’s.

Nossa ideia com essa seção de nosso site é oferecer algo dinâmico. Por isso, se tiver sugestões, entre em contato conosco pelo: [suporte@nfe.io][11].

A partir de agora, apresentaremos conceitos básicos sobre Notas Fiscais, CPF, CNPJ, entre outros. Por meio desses conceitos você poderá decidir qual das nossas API’s se encaixa com o seu negócio.

## O que é uma API?

API é uma sigla em inglês para **Aplication Program Interface**, que traduzido seria “Interface de Programação de Aplicações”. Mas o que isso significa?

Basicamente, API é um conjunto de padrões de programação estabelecidos por um software para a utilização das suas funcionalidades por outros aplicativos que pretendem usar seus serviços. Com isso, torna-se possível que dois aplicativos conversem entre si.

Um exemplo muito comum é a integração de e-commerce com meios de pagamento (PagSeguro, por exemplo). Você já deve ter efetuado uma compra em um site e no momento da compra ser direcionado para um ambiente diferente para deixar os dados do cartão de crédito, por exemplo, e efetuar seu pagamento. Essa integração entre o site que vendeu o produto e a plataforma onde ocorreu o pagamento funcona através de API´s.

Nossas API’s foram criadas utilizando o padrão REST, o que possibilita a integração de seu sistema ao nosso.

## Conheça nossas APIs

### Consultar dados de Pessoa Jurídica

Nessa consulta nossa API retornará os dados de uma Pessoas Jurídica através de um CNPJ, [confira os dados que a gente pega][12]. Possuímos diversas fontes de busca para puxar os dados e retorná-los de maneira bem organizada, acesse nossa documentação para conhecer melhor.

### Consultar dados de Pessoa Física

Essa API retornará os [dados de uma Pessoa Física][13] a partir de um CPF. Assim você pode ter acesso a situação cadastral de uma pessoa física, [clique aqui][13] para acessar nossa documentação.

### Consultar dados de endereços

Nossa API de endereços retornará os dados de endereço a partir de um CEP. Nós também disponibilizamos outras formas de fazer essa consulta, [clique aqui][14] para acessar nossa documentação.

### Consultar de Notas Fiscais Eletrônicas (NF-e)

Nessa consulta nossa API retorna os [dados de uma NF-e][15] (em diferentes formatos de arquivos) a partir da chave de acesso da nota. Conheça a [documentação da API][16].

### Emissão Automática de Nota Fiscal de Serviço (NFS-e)

Com a nossa API é possivel emitir notas fiscais de serviço de forma automatizada. Além do calculo automático de impostos, nosso sistema possui diversas funcionalidades como, envio automático de email com a nota emitida para o seu cliente, cancelamento de notas, consulta de pdf ou xml, dentre outros. [Clique aqui][17] e confira nossa documentação.

Nós possuímos integração com as principais plataformas de pagamento, caso tenha interesse clique aqui e veja qual a melhor solução para você. Além disso, é possível integrar nossa API com outros sistemas através de plugins, [clique aqui][18] e saiba mais sobre nossos plugins.

### Emissão Automática de Nota Fiscal de Produtos (NF-e)

Temos também uma API para emitir NFe de Produtos, que nesse momento está em BETA e estamos disponibilizando nossa API para quem deseja integrar em seu sistema. Como ela está em BETA, o uso dela é sem custos, por tempo indeterminado, e quem tem interesse em desenvolver uma integração pode começar agora, olhando [nossa documentação][19].

### Contato

Possui alguma dúvida ou sugestão? Entre contato conosco através do email [suporte@nfe.io][11]., ou por telefone (11) 4063-8091 se preferir. Estaremos a disposição para melhor atendê-lo.


[1]: #Introducao
[2]: #O%5Fque%5Fe%5Fuma%5FAPI
[3]: #Conheca%5Fnossas%5FAPIs
[4]: #Consultar%5Fdados%5Fde%5FPessoa%5FJuridica
[5]: #Consultar%5Fdados%5Fde%5FPessoa%5FFisica
[6]: #Consultar%5Fdados%5Fde%5Fenderecos
[7]: #Consultar%5Fde%5FNotas%5FFiscais%5FEletronicas%5FNF-e
[8]: #Emissao%5FAutomatica%5Fde%5FNota%5FFiscal%5Fde%5FServico%5FNFS-e
[9]: #Emissao%5FAutomatica%5Fde%5FNota%5FFiscal%5Fde%5FProdutos%5FNF-e
[10]: #Contato
[11]: mailto:suporte@nfe.io
[12]: https://nfe.io/docs/documentacao/consultas/pessoa-juridica/
[13]: https://nfe.io/docs/documentacao/consultas/pessoa-fisica/
[14]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-enderecos-v1/
[15]: https://nfe.io/docs/documentacao/consultas/notas-fiscais-3/
[16]: https://nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/
[17]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/
[18]: https://nfe.io/docs/integracoes/
[19]: https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/
