---
title: Microsoft Flow
sidebar_label: Microsoft Flow
sidebar_position: 2
---


Nesse tutorial iremos entender o que é Microsoft Flow, como usar junto ao Google Planilhas e integrá-lo à plataforma da [NFE.io](https://nfe.io "NFE.io").

### Emitindo uma nota pelo Google Sheets
#### Downloads
Antes de dar início a este tutorial, você deve realizar o download do fluxo necessário de acordo com sua necessidade. clique para fazer o download.

### Efetuando login
[Acesse o site](https://flow.microsoft.com/pt-br/ "Acesse o site"), clique no botão **“Entrar”**, preencha os campos com as informações necessárias (Para que a funcionalidade seja completa, utilize um email comercial).

![](https://nfe.io/docs/app/uploads/2020/08/msflow1.png)

Após inserir o email no campo mostrado acima, chegará um email com o código de confirmação no email informado e que precisará ser utilizado na etapa de preenchimento das informações.

![](https://nfe.io/docs/app/uploads/2020/08/msflow2.png)

Após preencher todas as informações e clicar no botão **“Iniciar”**, você será redirecionado para a página inicial do Microsoft Flow, conforme imagem a seguir:

![](https://nfe.io/docs/app/uploads/2020/08/msflow3.png)

### Configurando o ambiente
Antes de importar o fluxo, devemos fazer as configurações necessárias para que o fluxo funcione corretamente.

> No menu superior direito, clique na engrenagem e depois em “Conexões (Connections)”, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow4.png)

Após clicar em conexões você será redirecionado para a seguinte página:

![](https://nfe.io/docs/app/uploads/2020/08/msflow5.png)

Nesta página clique em **“Criar uma conexão (New connection)”**, como destacado na imagem acima, você será redirecionado novamente.

Selecionaremos as conexões necessárias para o funcionamento do nosso fluxo. Precisaremos de uma conexão com o Google Sheets e com o Google Drive.

> Digite **“Google sheets (Planilhas Google)”** na barra de pesquisa. Após selecionar a conexão com o Google sheets, clique em **“Criar (Create)”** na opção que aparecerá conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow6.png)

Uma nova janela aparecerá solicitando que você selecione uma conta. Selecione uma conta do google conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow7.png)

Agora precisamos adicionar a conexão com o Google Drive. Faça o mesmo procedimento anterior e adicione uma conexão com o Google Drive. Esta deverá ser a tela final de conexões:

![](https://nfe.io/docs/app/uploads/2020/08/msflow8.png)]

#### Importando um Fluxo no MS Flow
Nesta etapa iremos importar nosso fluxo.

> No menu superior, clique em **“Meus fluxos (My flows)”**, logo no menu abaixo, clique na opção **“Importar (Import)”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow9.png)

Clique em **“Carregar (Upload)”** e o mesmo abrirá uma nova janela para que você selecione um arquivo.

Selecione o fluxo com o nome **“Fluxo emissão padrão”** que está em formato **.zip**.

Após carregar o fluxo, a seguinte tela irá aparecer:![](https://nfe.io/docs/app/uploads/2020/08/msflow11.png)

Apenas temos que selecionar nossos Recursos relacionados. Assim como mostra na imagem acima, clique na opção **“Selecionar durante a importação (Select during import) ”**. Surgirá a seguinte janela no canto direito da sua tela:

![](https://nfe.io/docs/app/uploads/2020/08/msflow12.png)

Selecione sua conta de e-mail e clique no botão **“Salvar”**.

![](https://nfe.io/docs/app/uploads/2020/08/msflow13.png)

Sua tela ficará assim. Clique no botão **“Importar (Import)”** na parte inferior e espere até que a seguinte tela apareça com uma mensagem de sucesso na importação.

![](https://nfe.io/docs/app/uploads/2020/08/msflow14.png)

Feito isso, o fluxo já está pronto para uso. Clique em **“Meus fluxos (my flows)”** no menu principal do site na parte superior e siga os próximos passos.

### Criando um arquivo do Google Sheets
Para criar uma planilha do Google Sheets, acesse o Google Drive e faça o login com sua conta do Google.
Na página inicial, clique no botão **“New (Novo)”** ou clique com o botão direito na área onde se encontram seus arquivos e selecione a opção Google Sheets, como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/msflow15.png)

Abra a planilha que foi baixada no início deste tutorial e copie a primeira linha onde contém os campos em verde e cole em sua planilha do Google Sheets. Deverá ficar assim:

![](https://nfe.io/docs/app/uploads/2020/08/msflow16.png)

Agora precisamos inserir os valores para a emissão da Nfe. Alguns campos possuem regras a serem seguidas:

- **CPF_CNPJ:** pode ser preenchido no padrão de CPF ou CNPJ ou somente números se preferir (Ex: 123.456.789-12; 12345678912).
- **Email:** caso queira enviar para mais de um email, separá-los com vígula. Ex: teste@teste.com, teste2@teste.com, teste3@teste.com
- Valor: deve ser preenchido sem “R$” e com “.”(Ex: 10.50).
- **Endereco_Cep:** pode ser preenchido no padrão CEP (Ex: 12345-678).
- **Endereco_Complemento:** caso não haja complemento, pode-se deixar em branco.
- **Data_emissao:** a data de emissão deve ser preenchida apenas para notas retroativas (datas anteriores à data atual) e deve seguir o seguinte formato: “yyyy-MM-dd” (ano-mês-dia).
- **Aliquota_ISS:** caso necessário informar a alíquota ISS, preencher o campo sem o sinal de porcentagem “%” (Ex: 2,5). Caso não seja necessário, preencher o campo com o valor 0.

O fluxo se encarregará de preencher os campos **“status”** e **“ERRO mensagem”**, por isso não devem ser preenchidos. Caso a nota seja emitida com sucesso, o campo de status será preenchido com um **“OK”**, caso contrário, com **“ERRO”**.

> Se houver alguma falha na emissão, o campo** “ERRO mensagem”** retornará o motivo pela qual a nota não foi emitida.

Caso você se depare com um campo desconhecido como na imagem abaixo, não se preocupe, pois o fluxo o cria automaticamente para poder identificar as linhas da planilha.

![](https://nfe.io/docs/app/uploads/2020/08/msflow17.png)

### Executando o fluxo
Na página **“Meus fluxos (My flows)”** no menu principal, selecione o fluxo que foi importado e após isso, clique no ícone para editar o fluxo como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/msflow18.png)

Após isso, você será redirecionado para a página de edição do fluxo, onde devemos editar as informações necessárias para emissão. Para o fluxo funcionar corretamente, precisamos apenas que o usuário carregue o arquivo do google sheets que contém as Nfes que serão emitidas.

> Na etapa **“Obter linhas (Get rows)”** clique no ícone de busca de arquivos (ícone destacado em vermelho) e selecione a sua planilha do Google sheets e o nome da tabela logo abaixo, previamente criada em sua conta no Google Drive.

![](https://nfe.io/docs/app/uploads/2020/08/msflow19.png)

Para que o fluxo retorne o status da emissão, devemos também selecionar essa mesma planilha nas etapas destacadas abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/msflow20.png)

Após selecionar sua planilha e sua tabela na etapa de status, o fluxo automaticamente irá reconhecer os campos da planilha, como mostra a imagem abaixo, porém não precisamos preencher nenhum dos campos.

![](https://nfe.io/docs/app/uploads/2020/08/msflow21.png)

> Feito isso, basta iniciar o fluxo. Na parte superior da página de edição do fluxo, clique em **Testar**.

![](https://nfe.io/docs/app/uploads/2020/08/msflow23.png)

Em seguida marque a primeira opção “Vou executar a ação de disparo **(I’ll perform the trigger action)**” e clique em **“Salvar e Testar”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow24.png)

A seguinte tela aparecerá:

![](https://nfe.io/docs/app/uploads/2020/08/msflow25.png)

Os campos **“ID empresa”** e **“Chave API”** são obrigatórios e devem ser preenchidos corretamente para o funcionamento do fluxo. Essas informações podem ser encontradas em nossa plataforma.

[Acesse a nossa plataforma](https://app.nfe.io/ "Acesse a nossa plataforma"), faça o login e clique no menu **“EMPRESAS(COMPANIES)”**, procure por sua empresa e clique em editar. Na aba** “CHAVES DE ACESSO(ACCESS KEYS)”** estarão os dados necessários.
Preenchidos os campos, clique no botão** “Run flow (executar fluxo)”** que estará habilitado para a execução do fluxo.

Você receberá uma mensagem na tela dizendo que o fluxo foi iniciado com êxito, apenas clique em **“Concluído”**:

![](https://nfe.io/docs/app/uploads/2020/08/msflow26.png)

> Se todos os passos anteriores estiverem corretos, a seguinte tela irá aparecer. Note que a mensagem na parte superior nos diz que o fluxo foi executado com sucesso.

![](https://nfe.io/docs/app/uploads/2020/08/msflow27.png)

O fluxo retornará automaticamente o status da nota no campo status na mesma planilha que foi enviada, ou seja, se ela foi emitida de fato ou ocorreu algum erro. Caso a nota for emitida com sucesso, o status aparecerá como **“OK”**, se houver algum erro, o campo status aparecerá como **“ERRO”** e no campo **“ERRO mensagem“** estará descrito qual o motivo do erro, por exemplo: **“cityServiceCode can not be null or empty”**.

Veja os campos na imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow28.png)

### Salvando as notas no Google drive
Os passos citados neste tutorial para salvar as notas no Google Drive são os mesmos para o formato em PDF ou XML.

#### Download
Antes de dar início a este tutorial, você deve realizar o download do fluxo que se adequa à sua necessidade. clique para fazer o download.


**IMAGEM AQUI COM LINK******

#### Efetuando login
[Acesse o site](https://flow.microsoft.com/pt-br/ "Acesse o site"), clique no botão **“Entrar Gratuito”**, preencha os campos com as informações necessárias (Para que a funcionalidade seja completa, utilize um email comercial).

![](https://nfe.io/docs/app/uploads/2020/08/msflow1-1.png)

Após inserir o email no campo mostrado acima, chegará um email com o código de confirmação no email informado e que precisará ser utilizado na etapa de preenchimento das informações.

![](https://nfe.io/docs/app/uploads/2020/08/msflow2-1.png)

Após preencher todas as informações e clicar no botão **“Iniciar”**, você será redirecionado para a página inicial do Microsoft Flow, conforme imagem a seguir:

![](https://nfe.io/docs/app/uploads/2020/08/msflow3-1.png)

### Configurando o ambiente
Antes de importar o fluxo, devemos fazer as configurações necessárias para que o fluxo funcione corretamente.

>No menu superior direito, clique na engrenagem e depois em **“Conexões (Connections)”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow4-1.png)

Após clicar em conexões você será redirecionado para a seguinte página:

Nesta página clique em **“Criar uma conexão (New connection)”**, como destacado na imagem acima, você será redirecionado novamente.

Selecionaremos as conexões necessárias para o funcionamento do nosso fluxo. Precisaremos apenas de uma conexão com o Google Drive.

> Digite **“Google Drive”** na barra de pesquisa. Após selecionar a conexão com o Google Drive, clique em “Criar (Create)” na opção que aparecerá conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/drive-connection.png)

Uma nova janela aparecerá solicitando que você selecione uma conta. Selecione uma conta do google conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/drive-account.png)

Feito isso, esta deverá ser a tela final de conexões:![](https://nfe.io/docs/app/uploads/2020/08/connections.png)

### Importando um Fluxo no MS Flow
Nesta etapa iremos importar nosso fluxo.

No menu superior, clique em **“Meus fluxos (My flows)”**, logo no menu abaixo, clique na opção **“Importar (Import)”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow10.png)

Clique em **“Carregar (Upload)”** e o mesmo abrirá uma nova janela para que você selecione um arquivo.

> Selecione o fluxo com o nome Clique em “Carregar (Upload)” e o mesmo abrirá uma nova janela para que você selecione um arquivo.

Selecione o fluxo com o nome “Fluxo envio notas googledrive” que está em formato .zip.

Após carregar o fluxo, a seguinte tela irá aparecer: que está em formato .zip.

Após carregar o fluxo, a seguinte tela irá aparecer:

![](https://nfe.io/docs/app/uploads/2020/08/import.png)

Apenas temos que selecionar nossos Recursos relacionados. Assim como mostra na imagem acima, clique na opção **“Selecionar durante a importação (Select during import)”**. Surgirá a seguinte janela no canto direito da sua tela:

![](https://nfe.io/docs/app/uploads/2020/08/msflow12-1.png)

> Selecione sua conta de e-mail e clique no botão **“Salvar”**.

![](https://nfe.io/docs/app/uploads/2020/08/import2.png)

Sua tela ficará assim. Clique no botão **“Importar (Import)”** na parte inferior e espere até que a seguinte tela apareça com uma mensagem de sucesso na importação.

![](https://nfe.io/docs/app/uploads/2020/08/import3.png)

Feito isso, o fluxo já está pronto para uso. Clique em **“Meus fluxos (my flows)”** no menu principal do site na parte superior e siga os próximos passos.

### Executando o fluxo
Na página **“Meus fluxos (My flows)”** no menu principal, selecione o fluxo que foi importado e após isso, clique no ícone para editar o fluxo como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/edit.png)

Após isso, você será redirecionado para a página de edição do fluxo, onde devemos configurar o fluxo. Para o fluxo funcionar corretamente, precisamos que o usuário informe sua chave de API e selecione a pasta do Google Drive onde deseja guardar o pdf das notas.

> Na etapa “Chave de API” insira sua chave de API no campo informado.

![](https://nfe.io/docs/app/uploads/2020/08/apikey.png)

O campo **“Chave API”** é obrigatório e deve ser preenchido corretamente para o funcionamento do fluxo. A chave de API pode ser encontrada em nossa plataforma.

[Acesse a nossa plataforma](https://app.nfe.io/ "Acesse a nossa plataforma"), faça o login e clique no menu **“CONTA”**. Na aba **“CHAVES DE ACESSO”**, sua chave de API estará no campo **“Nota Fiscal (api.nfe.io)”**

Por último, na etapa **“Create file”**, devemos selecionar a pasta onde deseja armazenar as Nfes em pdf. Clique no ícone destacado em vermelho e selecione a pasta desejada como mostra a imagem.

![](https://nfe.io/docs/app/uploads/2020/08/folder.png)

Agora precisamos fazer nosso sistema conversar com o fluxo. Para isso, vá em nossa plataforma e clique no menu **"CONTA"**, logo abaixo clique na aba **"WEBHOOKS"**. O webhook será disparado sempre que uma nota fiscal for emitida. Para configurá-lo, clique em **"Criar Webhook"** como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/webhook.png)

Para preencher o primeiro campo do formulário iremos voltar para o nosso fluxo e clicar na primeira etapa chamada "Quando uma solicitação HTTP for recebida", iremos copiar esse link conforme ilustrado na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/url-request.png)

Podemos agora voltar para nossa plataforma e preencher os campos corretamente. O formulário ficará como no exemplo abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/webhook-form.png)

- No primeiro campo cole o link que copiamos do fluxo.
- No segundo campo deixe apenas o evento "Emitida".
- No campo de senha, preencha com a senha de acesso da plataforma.
- No campo de status, deixe como ativo.
### Cancelando uma NFe
#### Downloads
Antes de dar início a este tutorial, você deve realizar o download do fluxo. clique para fazer o download.

**IMAGEM EXCEL E PASTA*****

### Efetuando login

[Acesse o site](https://flow.microsoft.com/pt-br/ "Acesse o site"), clique no botão “Entrar Gratuito”, preencha os campos com as informações necessárias (Para que a funcionalidade seja completa, utilize um email comercial)., preencha os campos com as informações necessárias (Para que a funcionalidade seja completa, utilize um email comercial).

![](https://nfe.io/docs/app/uploads/2020/08/msflow1-2.png)

Após inserir o email no campo mostrado acima, chegará um email com o código de confirmação no email informado e que precisará ser utilizado na etapa de preenchimento das informações.

![](https://nfe.io/docs/app/uploads/2020/08/msflow2-2.png)

Após preencher todas as informações e clicar no botão **“Iniciar”**, você será redirecionado para a página inicial do Microsoft Flow, conforme imagem a seguir:

![](https://nfe.io/docs/app/uploads/2020/08/msflow3-2.png)

### Configurando o ambiente
Antes de importar o fluxo, devemos fazer as configurações necessárias para que o fluxo funcione corretamente.

> No menu superior direito, clique na engrenagem e depois em **“Conexões (Connections)”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow4-2.png)

Após clicar em conexões você será redirecionado para a seguinte página:

![](https://nfe.io/docs/app/uploads/2020/08/msflow5-1.png)

Nesta página clique em **“Criar uma conexão (New connection)”**, como destacado na imagem acima, você será redirecionado novamente.

Selecionaremos as conexões necessárias para o funcionamento do nosso fluxo. Precisaremos de uma conexão com o Google Sheets e com o Google Drive.

> Digite **“Google sheets (Planilhas Google)”** na barra de pesquisa. Após selecionar a conexão com o Google sheets, clique em “Criar (Create)” na opção que aparecerá conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow6-1.png)

Uma nova janela aparecerá solicitando que você selecione uma conta. Selecione uma conta do google conforme imagem abaixo:
![](https://nfe.io/docs/app/uploads/2020/08/msflow7-1.png)

Agora precisamos adicionar a conexão com o Google Drive. Faça o mesmo procedimento anterior e adicione uma conexão com o Google Drive. Esta deverá ser a tela final de conexões:

![](https://nfe.io/docs/app/uploads/2020/08/msflow8-1.png)

### Importando um Fluxo no MS Flow
Nesta etapa iremos importar nosso fluxo.

> No menu superior, clique em **“Meus fluxos (My flows)”**, logo no menu abaixo, clique na opção “Importar (Import)”, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow10-1.png)

Clique em **“Carregar (Upload)”** e o mesmo abrirá uma nova janela para que você selecione um arquivo.

> Selecione o fluxo com o nome **“Fluxo cancelamento nfe”** que está em formato **.zip**.

Após carregar o fluxo, a seguinte tela irá aparecer:

![](https://nfe.io/docs/app/uploads/2020/08/msflow11-1.png)

Apenas temos que selecionar nossos Recursos relacionados. Assim como mostra na imagem acima, clique na opção **“Selecionar durante a importação (Select during import) ”**. Surgirá a seguinte janela no canto direito da sua tela:

![](https://nfe.io/docs/app/uploads/2020/08/msflow12-2.png)

> Selecione sua conta de e-mail e clique no botão **“Salvar”**.

![](https://nfe.io/docs/app/uploads/2020/08/msflow13-1.png)

Sua tela ficará assim. Clique no botão **“Importar (Import)”** na parte inferior e espere até que a seguinte tela apareça com uma mensagem de sucesso na importação.

![](https://nfe.io/docs/app/uploads/2020/08/msflow14-1.png)

Feito isso, o fluxo já está pronto para uso. Clique em **“Meus fluxos (my flows) ”** no menu principal do site na parte superior e siga os próximos passos.

### Criando um arquivo do Google Sheets

Para criar uma planilha do Google Sheets, acesse o Google Drive e faça o login com sua conta do Google.
Na página inicial, clique no botão **“New (Novo)”** ou clique com o botão direito na área onde se encontram seus arquivos e selecione a opção Google Sheets, como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/msflow15-1.png)

Abra a planilha que foi baixada no início deste tutorial e copie a primeira linha onde contém os campos em verde e cole em sua planilha do Google Sheets. Deverá ficar assim:

![](https://nfe.io/docs/app/uploads/2020/08/id-nfe.png)

Agora precisamos inserir os valores para o cancelamento da Nfe.

- **ID nota:** deve ser preenchido com o ID da NFe (Ex: 5b43dac68efda7092c364bb1).

Caso você se depare com um campo desconhecido como na imagem abaixo, não se preocupe, pois o fluxo o cria automaticamente para poder identificar as linhas da planilha.

![](https://nfe.io/docs/app/uploads/2020/08/power-apps-id.png)

### Executando o fluxo
Na página **“Meus fluxos (My flows)”** no menu principal, selecione o fluxo que foi importado e após isso, clique no ícone para editar o fluxo como na imagem abaixo.

![](https://nfe.io/docs/app/uploads/2020/08/msflow18-1.png)

Após isso, você será redirecionado para a página de edição do fluxo, onde devemos editar as informações necessárias para emissão. Para o fluxo funcionar corretamente, precisamos apenas que o usuário carregue o arquivo do google sheets que contém as Nfes que serão emitidas.

> Na etapa **“Obter linhas (Get rows)”** clique no ícone de busca de arquivos (ícone destacado em vermelho) e selecione a sua planilha do Google sheets e o nome da tabela logo abaixo, previamente criada em sua conta no Google Drive.

![](https://nfe.io/docs/app/uploads/2020/08/msflow19-1.png)

Feito isso, basta iniciar o fluxo. Na parte superior da página de edição do fluxo, clique em **Testar.**

![](https://nfe.io/docs/app/uploads/2020/08/msflow23-1.png)

Em seguida marque a primeira opção **“Vou executar a ação de disparo (I’ll perform the trigger action)”** e clique em **“Salvar e Testar”**, conforme imagem abaixo:

![](https://nfe.io/docs/app/uploads/2020/08/msflow24-1.png)

A seguinte tela aparecerá:

![](https://nfe.io/docs/app/uploads/2020/08/msflow25-1.png)

Os campos **“ID empresa”** e **“Chave API”** são obrigatórios e devem ser preenchidos corretamente para o funcionamento do fluxo. Essas informações podem ser encontradas em nossa plataforma.

[Acesse a nossa plataforma](https://app.nfe.io/ "Acesse a nossa plataforma"), faça o login e clique no menu **“EMPRESAS(COMPANIES)”**, procure por sua empresa e clique em editar. Na aba **“CHAVES DE ACESSO(ACCESS KEYS)”** estarão os dados necessários.
Preenchidos os campos, clique no botão** “Run flow (executar fluxo)”** que estará habilitado para a execução do fluxo.

Você receberá uma mensagem na tela dizendo que o fluxo foi iniciado com êxito, apenas clique em **“Concluído”**:

![](https://nfe.io/docs/app/uploads/2020/08/msflow26-1.png)

Se todos os passos anteriores estiverem corretos, uma mensagem na parte superior nos dirá que o fluxo foi executado com sucesso.

### Veja também:
[Nossos segmentos](https://nfe.io/segmentos/ "Nossos segmentos")
[Sobre a NFE.io](https://nfe.io/sobre/ "Sobre a NFE.io")
[Junte-se ao nosso time](https://nfe.io/carreira/ "Junte-se ao nosso time")






