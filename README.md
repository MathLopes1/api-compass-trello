![api](https://user-images.githubusercontent.com/70352508/147391625-1dbd5456-c802-4552-816d-399899bf5e6e.PNG)
<h1>Primeiro Desafio do Programa de Bolsas - CompassUOL</h1>
<h3> Nesta aplicação foram implementadas as seguintes fucionalidades: adicionar task, listar task, buscar uma task por id, remover task. Foi feito em Node usando a arquitetura REST.</h3>

## Tecnologias Utilizadas:

<table>
  <tr>
    <td>Node.Js</td>
    <td>MySQL</td>
    <td>Postman</td>
  </tr>
  <tr>
    <td>16.13</td>
    <td>8.0</td>
    <td>9.6</td>
  </tr>
</table>

⚠ Para obter sucesso em rodar a API, é necessário a instalação das tecnologias utilizadas. <br>
 Segue alguns vídeos curtos para caso tinham dificuldades na instalação:
* Instalação Postman - https://www.youtube.com/watch?v=CWKLVapcnCU&list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox&index=3
* Instalação Node.Js/NPM - https://www.youtube.com/watch?v=42QuY7rfLTU&list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox&index=6
* Instalação MySQL - https://www.youtube.com/watch?v=zpssr3u1EO8

### ATENÇÂO ⚠
1. É necessário clonar esse repositório em sua máquina, utilizando o Comando: <br>
`git clone https://github.com/MathLopes1/api-compass-trello.git` 
2. Utilizar uma IDE acessar o código. Recomendo o VScode.
3. Para facilitar o desenvolvido, recomendo a instalação do Nodemon que estará startando as modificações feitas no código automâticamente. Ele pode ser instalado da seguinte forma: <br>
`npm install nodemon`
Logo após, vá na pastar Package.json e adicionar na área de "scripts" o seguinte código. <br>   
`"start": "nodemon index.js"`<br>
Em seguida, dentro da pasta api, abra o terminal e rode o comando:
`npm start

## Foi utilizado o gerencionador de pacotes NPM na instalação de Frameworks para facilitar o desenvolvimento.
As ferramentas foram:
* Express
* Body-parser
* Config
* MySql2
* Sequelize

1. Antes de tudo, rode o comando `npm init` na sua pasta.
2. Baixe o express em sua pasta rodando o comando `npm install express`.
3. Baixe o body-parser em sua pasta rodando o comando `npm install body-parser`.
4. Baixe o Config em sua pasta rodando o comando `npm install config`.
5. Baixe o MySql2 em sua pasta rodando o comando `npm install mysql2`.
6. baixe o sequelize em sua pasta rodando o comando `npm install sequelize`.

## Rotas

A seguir está uma configuração genérica de local host na porta 3000:

- Listagem de Task - GET: localhost:3000/api/project/

   . Em caso de sucesso retorna todas os Task já cadastradas no banco de dados, cada Task no formato JSON.
   
- Adicionar Task - POST: localhost:3000/api/project/adicionar 
  
  . Adiciona uma task ao banco de dados, sendo necessário inserir as informações corretamente. O Id é gerado automaticamente.
  
- Buscar Task por Id - GET: localhost:3000/api/project/{inserir-id-aqui}

  . Utiliza o Id gerado automaticamente quando a Task é adicionada ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista.
  
- Atualizar  Task por Id - PUT: localhost:3000/api/project/{inserir-id-aqui}

   . Utilizar o Id cadastrado para atualizar, caso não existe o id correspodente, retornará um erro.
   
- Deletar uma Task por Id - DELETE: localhost:3000/api/project/{inserir-id-aqui}

   . Remove a Task utilizando o Id que foi gerado automaticamente, utilizando o método DELETE. 

## Testes

Foram totalmente realizados no ambiente automatizado do Postman. comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo. O Postman é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

![ggggg](https://user-images.githubusercontent.com/70352508/147392624-378977e6-51b6-4e50-9dad-b79e5dc87962.PNG)

## Créditos

Essa API foi elaborado como teste para o programa de bolsas da Compass pelo time responsável. E desenvolvida, documentada por Matheus Lopes da Silva, no dia 25/12/2021.

## Agradecimentos

Sou extremamente grato aos meus instrutores e líderes de equipe por tudo.
* Felipe Silva
* Thais Nicodemus
* Diego Bueno
* Bruna Santos
* Giovanni Hoffmann
* Gabriel Missio 
<br>
Meus agradecimentos se extendem para meus colegas do programa de bolsas, pelo ambiente fantástico e troca de conhecimento.



