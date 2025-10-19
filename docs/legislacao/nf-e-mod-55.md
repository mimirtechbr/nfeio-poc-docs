---
sidebar_label: Nota Fiscal Eletrônica (NF-e) - Modelo 55
hide_title: true
title: Valor Aproximado dos Tributos - NF-e (mod. 55)
description: Entenda o que é o campo "Valor Aproximado dos Tributos" na Nota Fiscal Eletrônica (NF-e) modelo 55, sua importância e como calcular corretamente esse valor.
slug: /legislacao/valor-aproximado-dos-tributos-nf-e-mod-55
---

# Valor Aproximado dos Tributos - NF-e (mod. 55)

> Regra para definição do "Valor Aproximados dos Tributos".

O valor aproximado dos tributos informado no campo de informações complementares se baseia na soma do valor aproximado do total de tributos federais, estaduais e municipais de cada item. (items.tax.totalTax).

Essa informação deve ser enviada pelo cliente com base no valor informado na tabela fornecida pelo Instutito Brasileiro de Planejamento Tributário (IBPT) que contém a carga fiscal média aproximada de todos os produtos e serviços com base nos códigos das listas abaixo:

* Nomenclatura Comum do Mercosul (NCM)
* Lei Complementar 116/2003 (LC116)
* Serviço Nomenclatura Brasileira (NBS)

Concluindo, o valor aproximado dos tributos que é exibido no campo informações complementares será a soma do valor informado no campo "items.tax.totalTax" para cada item da nota, ou seja, o NFE.io vai calcular esse valor somando o valor informado em cada item da nota.