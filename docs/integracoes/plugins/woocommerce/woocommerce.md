---
title: Como integrar o Woocommerce com NFE.io?
sidebar_label: WooCommerce

---
# O que é o WooCommerce?

>O WooCommerce é uma plataforma de e-commerce completa para o WordPress. Por mais que seja amplamente completa e satisfatória, ela é apenas um **plugin** da tradicional plataforma de CMS.

Originalmente, a ideia foi desenvolvida pelos programadores Mike Jolley e James Koster em 2011. Quatro anos depois, ela acabou sendo adquirida pelo WordPress e **detém 26% de todas as lojas virtuais do mundo.**

O WooCommerce é um plugin de WordPress que permite a criação de lojas virtuais a partir de códigos abertos. Por isso, é muito comum as empresas que já possuem sites em WordPress optarem pelo WooCommerce para gerir os seus e-commerces.

Afinal, o WooCommerce permite vender qualquer tipo de produto ou serviço, desde itens duráveis até infoprodutos e assinaturas de conteúdo. Também possui integração com as mais variadas formas de pagamento, tais como:

- Cartão de crédito;
- Cartão de débito;
- Boleto bancário;
- Transferência eletrônica;
- PagSeguro;
- Mercado Pago;
- PayPal;
- Entre outros.

> Portanto, uma vez que o cliente queira comprar a sua oferta, escolher a forma de pagamento de sua preferência não será um problema.Portanto, uma vez que o cliente queira comprar a sua oferta, escolher a forma de pagamento de sua preferência não será um problema.

## Como integrar a Emissão de Nota Fiscal automaticamente da NFE.io com o WooCommerce?

Para realizar a integração do Woocommerce com a NFe.io é muito simples. Siga o passo a passo abaixo para conseguir realizar essa integração sem problemas.

### **Você vai precisar de:**
- **Ter o Woocommerce ativado na sua loja virtual**
- **Ter o plugin Brazilian Market instalado, [clique aqui](https://br.wordpress.org/plugins/woocommerce-extra-checkout-fields-for-brazil/ "clique aqui")**
- **[Chave de Acesso (API Key) da NFE](https://nfe.io/docs/documentacao/nossa-plataforma/chaves-de-autenticacao/ "Chave de Acesso (API Key) da NFE")**

## Brazilian Market For Woocommerce

Para realizar a instalação do plugin, basta clicar no painel do Wordpress em "Plugins".

Em seguida, na busca da direita o nome do plugin : Brazilian Market on Woocommerce

Ao aparcer o plugin correto, clique em "Instalar agora", e assim que mudar o botão, clique em "Ativar".

![](https://nfe.io/docs/app/uploads/2020/08/EFYPI2s.png)

Feito isso, os campos de CPF, CNPJ entre outros campos serão adicionados no Woocommerce para que você possa realizar suas vendas com as notas fiscais.

## Passo 1: Instalando o plugin

1 - Faça login no seu painel do Wordpress e clique em Plugins
2 - Clique no Botão "Adicionar Novo"
3 - Na barra de pesquisa busque por "Wocoomerce NFe"

![Woocommerce](https://nfe.io/docs/app/uploads/2020/08/bkTidxp1.png)

4 - Clique em "Instalar Agora para instalar o plugin"
5 - Clique no botão Ativar após a instalação ser finalizada

## Passo 2: Configurando o plugin

![Woocommerce](https://nfe.io/docs/app/uploads/2020/08/QOUy9wD1.png)

1 - Com o plugin ativado, clique em Plugins na barra lateral
2 - Encontre o Plugin Woocommerce NFe e clique em configurações

![Woocommerce](https://nfe.io/docs/app/uploads/2020/08/QHo2rbf1.png)

3 - No campo Chave da API insira a sua chave de API (Api Key)

> Com a sua chave de API inserida o Woocommerce irá identificar a sua conta na plataforma da NFe.io e irá listar as suas empresas cadastradas.

4 - No campo Escolha a empresa, selecione a empresa desejada

Nos próximos 3 campos as configurações são opcionais, mas confira a explicação de cada um deles:

**Emissão de NFe:** Neste campo você deverá escolher se a emissão da nota fiscal será realizado automáticamente quando for identificado o pagamento de uma venda ou se você irá fazer isso manualmente.

**Status da emissão do pedido:** Nesta campo você escolherá em qual passo da venda o sistema irá emitir a nota fiscal. A escolha mais comum neste processo é quando o pedido está no status "Processando".

**Endereço é necessário para emissão:** Por padrão na hora das vendas é necessário que o seu comprador preencha o endereço, então é mais comum manter a opção "Sim".

5 - Com essas configurações prontas, clique em "Salvar Alterações" no final da página

Pronto! Com essas configurações a integração entre o Woocommerce e a NFE.io está feita.

## Emissão Manual Retroativa de Notas Fiscais

![Woocommerce Manual](https://nfe.io/docs/app/uploads/2020/08/MuceNVz1.png)

Caso você queira realizar a emissão retroativa das suas vendas passadas no Woocommerce é possível fazer.

Para isso você precisa configurar os seguintes campos:

- Habilitar Emissão Retroativa: deixe marcado para habilitar;
- Quantos dias atrás: Selecione os dias no passado onde as notas serão emitidas;
- Código de Serviços Municipal: Solicite para o seu contador
- Código de Serviço Ferderal LC 116: Solicite para o seu contador
- Descrição do serviço: Coloque a descrição do serviço que será adicionada na nota fiscal. Na dúvida fale com o seu contador.

------------

Olha que legal, o "WooCommerce NFe" é uma extensão do WooCommerce para emitir notas fiscais utilizando a API do NFe.io.

### Requisitos
- PHP >= 5.5
- WP >= 4.9
- WooCommerce >= 3.3.5


### Como fazer a Instalação?

Dentro da plataforma do Wordpress

1. Vá ao menu Plugins e clique Adicionar Novo.
2. Pesquise por **WooCommerce NFe**.
3. Clique em Instalar Agora.
4. Ativar o plugin

> Ou você pode colocar este plugin no diretório wp-content/plugins e ativá-lo.

## Changelog de nosso plugin.

### 1.0.0
- Initial release
### 1.0.1
- Fix issue #6
### 1.0.2
- Added trigger to issue invoices on specific status
- Fixed when issue invoices federal tax number must be only numbers
### 1.0.3
- Added support to issue invoices without all address fields filled
### 1.0.4
- Fix support to issue invoices without all address fields filled
- Fix trigger to issue invoices on specific status
### 1.2.5
- Added option to require an address when issuing an invoice.
- Fixed a bug where zero orders could be issued.
- Added notice in the order list when a order is zeroed.
- Added php require header on the readme.txt
- Fixed a bug that gave fatal error when on before PHP 5.5 versions.
- Fix - load_textdomain first from WP_LANG_DIR before load_plugin_textdomain
- Tweak - Tweak load_plugin_textdomain to be relative - this falls back to WP_LANG_DIR automatically. Can prevent "open_basedir restriction in effect".
### 1.2.6
- Fixing client-php folder conflict.
### 1.2.7
- Fixing how we verify the type of customer to output its information on the NFe receipt.
### 1.2.8
- Improved code documentation, PHPDoc.
- Started to use [] instead of array().
- Started to use the new logger implementation, wc_get_logger().
- Updated WordPress tested header to 3.5.1.
- Removed Extra Checkout plugin dependency.
- Removed Composer support for the client-php.
- Removed checks when on automatic issuing, as it was avoiding important log information to be saved.
- Added better labeling for the NFe.io flowStatus.

### Consulte também
[Conheça mais sobre nota fiscal](https://nfe.io/docs/documentacao/conceitos/notas-fiscais/ "Conheça mais sobre nota fiscal")

<a href="https://nfe.io/contato" title="Contato">Contato</a>