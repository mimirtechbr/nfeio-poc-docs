---
author: Gabriel Marquez
slug: notas-fiscais
sidebar_position: 2
date: 2020-08-11
sidebar_label: Notas Fiscais
last_update:
  date: 2020-11-11
title: Notas Fiscais
description: Você deseja automatizar o seu processo de emissão de notas fiscais?
  Através das nossas API’s você pode emitir suas notas online e automaticamente
  sem preocupação.
migration_info:
  migrated_on: 2025-08-18 03:18:51
  migrated_by: andrekutianski
  source: WordPress
  source_id: 311
---

# Tudo sobre Nota Fiscal Eletrônica

Você deseja automatizar o seu processo de emissão de notas fiscais? Pode contar com a gente! Através das nossas API's você pode emitir suas notas online e automaticamente sem preocupação.

Abaixo estão os tipos de notas ficais existentes. Atualmente nós disponibilizamos comercialmente API para emissão de NFS-e. As APIs de NF-e e NFC-e estão em versão beta para testes, podendo ser integradas por quem estiver disposto a testar.

Veja nossas [referências das API´s.][7]

## Nota Fiscal Eletrônica (NF-e)

A Nota Fiscal Eletrônica (NF-e) é um documento de existência apenas digital, emitido e armazenado eletronicamente, com o intuito de documentar, para fins fiscais, uma operação de circulação de mercadorias ocorrida entre as partes.

Normalmente quando compramos um produto numa loja online é comum recebermos no email cadastrado na loja, um arquivo no formato XML, esse arquivo é a NF-e. Além disso, recebemos com a encomenda uma representação da nota fiscal eletrônica, esse arquivo é o DANFE(Documento Auxiliar da Nota Fiscal Eletrônica) que é necessário para que a mercadoria possa ser legalmente transportada.

Quer saber mais sobre Nota Fiscal Eletrônica? [Clique aqui][8].

## Nota Fiscal de Serviço (NFS-e)

A NFS-e é a versão da Nota Fiscal eletrônica que cumpre a **função de documentar uma prestação de serviço** ocorrido entre as partes. Caso você compre um curso online, por exemplo, a empresa que vendeu o curso deve emitir uma NFS-e e te enviar.

O objetivo desse documento é justamente facilitar a comunicação entre os prestadores de serviço e a prefeitura, para que seja possível ter um controle maior sobre as suas responsabilidades fiscais.

A responsabilidade sobre a NFS-e é municipal, sendo assim, cabe às prefeituras fazer a implantação e a fiscalização das emissões realizadas em sua área de coordenação.

Quer saber mais sobre Nota Fiscal de Serviço? [Clique aqui][9].

## Nota Fiscal do Consumidor (NFC-e)

A **Nota Fiscal do Consumidor (NFC-e)** surgiu com o intuito de documentar as operações comerciais de venda presencial ou venda para entrega em domicílio a consumidor final (pessoa física ou jurídica) em operação interna e sem geração de crédito de ICMS ao adquirente.

Essa nota é a mais comum no nosso dia a dia (normalmente nos referimos à NFC-e como Cupom Fiscal), ela está presente nos comércios e sempre recebemos quando fazemos compras no supermercado, por exemplo. Esse papel impresso contém a chave de acesso e o famoso QR Code para que o consumidor final consulte a validade do cupom fiscal.

## O que é um XML da nota fiscal?

Quando algum bem ou serviço é adquirido, o cliente recebe uma nota fiscal em formato XML. Esse arquivo XML é a versão digital da nota fiscal eletrônica e cumpre o papel de comprovar a propriedade sobre o bem ou serviço. É por meio dele que o governo pode verificar os detalhes sobre as transações realizadas.

## Data de emissão X Data de competência

A data de emissão refere-se ao dia e hora exatos em que a nota fiscal foi enviada à prefeitura, não podendo ser alterada.

A data de competência refere-se ao dia em que o serviço foi efetivamente prestado. Assim, é possivel emitir uma nota fiscal com uma data anterior a data em que realmente está sendo emitida.


[1]: #Tudo%5Fsobre%5FNota%5FFiscal%5FEletronica
[2]: #Nota%5FFiscal%5FEletronica%5FNF-e
[3]: #Nota%5FFiscal%5Fde%5FServico%5FNFS-e
[4]: #Nota%5FFiscal%5Fdo%5FConsumidor%5FNFC-e
[5]: #O%5Fque%5Fe%5Fum%5FXML%5Fda%5Fnota%5Ffiscal
[6]: #Data%5Fde%5Femissao%5FX%5FData%5Fde%5Fcompetencia
[7]: https://nfe.io/docs/desenvolvedores/
[8]: https://nfe.io/docs/documentacao/nota-fiscal-produto-eletronica/conceitos/
[9]: https://nfe.io/docs/documentacao/conceitos/notas-fiscais/#Nota%5FFiscal%5Fde%5FServico%5FNFS-e
