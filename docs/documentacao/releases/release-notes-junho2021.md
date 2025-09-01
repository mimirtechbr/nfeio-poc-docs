---
sidebar_label: "Release Notes junho/2021"
sidebar_position: 1
slug: release-notes-junho-2021
date: 2021-07-05
last_update:
  date: 2021-07-07
title: "Release Notes junho/2021 - NFE.io | Docs"
description: "Release Notes de junho/2021Nota Fiscal de ServiçoNota Fiscal de ProdutoConsulta de dadosPlataforma da NFE.ioIntegrações NFE.io Release Notes de junho/2021 Novas funcionalidades, mudanças e&#8230;"
author: "João Kita"
migration_info:
  migrated_on: "2025-08-18 03:18:51"
  migrated_by: "andrekutianski"
  source: "WordPress"
  source_id: 2465
---

* [Release Notes de junho/2021][1]  
   * [Nota Fiscal de Serviço][2]  
   * [Nota Fiscal de Produto][3]  
   * [Consulta de dados][4]  
   * [Plataforma da NFE.io][5]  
   * [Integrações NFE.io][6]

# Release Notes de junho/2021

Novas funcionalidades, mudanças e correções de bugs feitas no mês de junho pelo time da NFE.io.

## Nota Fiscal de Serviço

Atividades relacionadas a nota fiscal de serviço.  

nova funcionalidade

Prefeitura de Divinópolis/MG.  
Implementação de integração para emissão de notas fiscais na prefeitura por meio da NFE.io.

nova funcionalidade

Prefeitura de Piracicaba/SP.  
Implementação de integração para emissão de notas fiscais na prefeitura por meio da NFE.io.

nova funcionalidade

Prefeitura de Extrema/MG.  
Implementação de integração para emissão de notas fiscais na prefeitura por meio da NFE.io.

mudança

Prefeitura de Campo Grande/MS.  
Alteração realizada para utilização do pdf padrão NFE.io no lugar do pdf obtido diretamente da prefeitura.

mudança

Prefeitura de Brasília/DF.  
Durante a emissão fiscal, foi incluído um tratamento no sistema para aceitar o nome do país "Brasil" independente da existência de caracteres em letras maísculas ou minúsculas.

correção

Prefeitura de São José dos Campos/SP.  
Ocorreram falhas no download do pdf da nota fiscal da prefeitura de São José dos Campos. Foi realizado uma alteração no fluxo de download do pdf da nota fiscal para que a informação seja capturada diretamente no site da prefeitura e assim garantindo o funcionamento da etapa.

correção

Prefeitura de São Paulo/SP.  
Em função de problemas no download do pdf da nota no portal da prefeitura, foi realizado uma alteração no sistema para que seja realizado novas tentativas de download da nota quando ocorrer algum problema.

correção

Provedor DSFNET.  
Foram identificados algumas situações que geravam erro na emissão das notas e para solucionar o problema, foram incluídos no sistema os tratamentos descritos abaixo:

* Cidade do tomador - Incluir regra para permitir valor nulo.
* Remover caracteres alfanuméricos do campo logradouro (rua).

correção

Prefeitura de Belo Horizonte/MG.  
A prefeitura de Belo Horizonte retorna o erro "Erro de xml" ou "Erro de autenticação" de forma intermitente, sendo que após reenviar a mesma nota, esta é autorizada.  
Foi incluído um tratamento no sistema para que seja feito retentativas de envio da nota para a prefeitura de Belo Horizonte quando o erro retornado for "Erro de xml" ou "Erro de autenticação".

correção

Prefeituras de Ribeirão Preto/SP e Novo Hamburgo/RS.  
Para algumas notas das prefeituras de Ribeirão Preto e Novo Hamburgo, as imagens do logotipo da empresa, da prefeitura e do QRCode não constavam no pdf da nota.  
Foi realizado um tratamento no sistema corrigindo o motivo pelo qual as imagens não estavam sendo carregadas.

correção

Prefeitura de Porto Alegre/RS.  
A prefeitura de Porto Alegre retorna o erro "Inscrição Municipal Inválida" de forma intermitente, sendo que após reenviar a mesma nota, esta é autorizada.  
Foi incluído um tratamento no sistema para que seja feito retentativas de envio da nota para a prefeitura de Porto Alegre quando o erro retornado for "Inscrição Municpal Inválida".

correção

Prefeitura de Brasília/DF.  
A chave de acesso é composta por um conjunto de números, entre eles as informações de data que constam na nota. No cenário onde a data informada era a data de competência e a nota era emitida no mês subsequente, ocorria uma rejeição na emissão.  
O processo foi alterado para utilizar a data de emissão no lugar da data de competência seguindo a definição do manual do contribuinte.

## Nota Fiscal de Produto

Atividades relacionadas a nota fiscal de produto.  

nova funcionalidade

Atualização legal para atendimento à Nota Técnica NT2020.006 v1.20 - Intermediador-Marketplace. Para atender a NT foi incluído o campo xPag (Descrição do tipo de pagamento) quando o campo tPag for informado com o valor "99".  
O campo no json referente ao xPag é o "method\_description" dentro do grupo "payment", conforme exemplo abaixo:

```json
"payment": [
    {
      "paymentDetail": [
        {
          "method": "others",
          "method_description": "Descrição do meio de pagamento",
          "amount": 100
        }
      ],
      "payBack": 0
    }
  ],
```

correção

SEFAZ/GO - Falha no schema.  
Foi realizado uma alteração no sistema para incluir o encolding "UTF-8" no cabeçalho do xml que é enviado para emissão.

correção

SEFAZ/PA e SEFAZ/MA.  
Foi realizado uma alteração no sistema para utilização do protocolo TLS 1.2 a fim de evitar a falha de comunicação com a SEFAZ de PA e MA.

## Consulta de dados

Atividades relacionadas a consulta de CNPJ, CPF, NFe, Inscrição Estadual e endereço  

correção

Consulta CNPJ.  
Foram realizadas melhorias no sistema para melhorar o tempo de resposta na consulta de CNPJ.  
Com as melhorias realizadas o tempo médio de resposta foi reduzido em mais de 50%.

## Plataforma da NFE.io

Atividades relacionadas a plataforma da [NFE.io][7]  

nova funcionalidade

Foi disponibilizada a abertura de tickets para o suporte dentro da plataforma da NFE.io. Essa nova opção pode ser encontrada no botão de ajuda, na parte superior direita da plataforma.

correção

Emissão de NFSe em lote via excel.  
Quando a nota era enviada e por algum motivo ocorria algum erro/rejeição durante a tentativa de emissão, o status da mesma na tela era exibido sempre com a situação de "Aguardando". O sistema foi ajustado para exibir a informação correta, neste caso informando que a nota está "Enviado com falha".

## Integrações NFE.io

Atividades relacionadas aos meios integradores com a NFE.io.  

correção

Integração biblioteca Node.js.  
Necessidade de atualização da forma de execução dos métodos HTTP executados na biblioteca que executa as chamadas da API da NFE.io.


[1]: #Release%5FNotes%5Fde%5Fjunho2021
[2]: #Nota%5FFiscal%5Fde%5FServico
[3]: #Nota%5FFiscal%5Fde%5FProduto
[4]: #Consulta%5Fde%5Fdados
[5]: #Plataforma%5Fda%5FNFEio
[6]: #Integracoes%5FNFEio
[7]: https://app.nfe.io