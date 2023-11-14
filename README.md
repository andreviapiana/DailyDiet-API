<p align="center">
  <h1 align="center">DailyDiet API - Node.js :rocket:</h1>
</p>

<p align="center" margin-top="25px" >
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/andreviapiana/DailyDiet-API" />

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/andreviapiana/DailyDiet-API" />
</p>


DailyDiet API é uma API Rest desenvolvida em Node.js com o intuito de simular o Banco de Dados de uma aplicação de controle de Dieta.

___

## 💻 Sobre
A ideia deste projeto é criar uma API para registrar as refeições do usuário.

Essa API permite a criação de usuários, e cada usuário pode Visualizar, Editar ou Remover as refeições que sejam de sua propriedade.

Quando um usuário é registrado, um Cookie é criado com um SessionID específico para este usuário. Através desse Cookie é realizado um controle de quais refeições este usuário pode visualizar, editar ou remover, ou seja, um usuário só tem acesso as refeições que ele mesmo criar, dessa forma a API consegue lidar com múltiplos usuários simultaneamente sem que as ações de um interfiram em outro, evitando que um usuário veja, edite ou apague uma refeição que não lhe pertence.

Os arquivos incluem ainda o Insomnia do projeto com as requisições já configuradas, para que você possa testar de forma rápida e fácil a API.

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Knex](https://knexjs.org/guide/)
- [Fastify](https://www.npmjs.com/package/fastify)
- [SQlite3](https://www.npmjs.com/package/sqlite3)
- [Zod](https://www.npmjs.com/package/zod)

___

## 🚀 Regras da Aplicação

#### RF

- [x] Deve ser possível criar um usuário;
- [x] O usuário deve poder criar uma nova refeição, com esses dados:
    - Nome
    - Descrição
    - Data e Hora (criado automaticamente)
    - Está dentro ou não da Dieta
- [x] O usuário deve poder editar uma refeição podendo alterar todos os dados acima;
- [x] O usuário deve poder listar todas as refeições que criou;
- [x] O usuário deve poder apagar uma refeição que criou;

#### RN

- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] Deve ser possível visualizar uma única refeição pelo ID;
- [x] O usuário só pode visualizar, editar ou apagar as refeições que ele criou;
- [x] Deve ser possível recuperar as métricas de um usuário:
    - Quantidade de refeições
    - Quantidade dentro da dieta
    - Quantidade fora da dieta
    - Maior sequência dentro da dieta
___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/DailyDiet-API.git
```
___

#### 🚧 Executando a Aplicação
```bash

# Navegue até o diretório
$ cd DailyDiet-API

# Instale as dependências necessárias
$ npm install

# Agora inicie a API
$ npm run dev

# Execute as Migrations para criar o Banco de Dados
$ npm run knex -- migrate:latest

```

___

## 📇 Insomnia da API

Instale o [Insomnia](https://insomnia.rest/download), e então clique no botão a seguir para abrir as requisições já configuradas.

Ao fazer a primeira requisição pode ser que o tempo limite seja atingido, pois o servidor gratuito pode demorar 1 minuto para startar.

Importante: Vai rodar o servidor localmente? No Insomnia a seguir, selecione o Base Environment DEV. Quer ver o projeto funcionando sem instalar nada eu seu computador? No Insomnia a seguir, selecione o Base Environment PROD.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=DailyDiet-API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fandreviapiana%2FDailyDiet-API%2Fmaster%2Fexport.json)

___

## 🔀 Rotas da API

- Criar Novo Usuário
```bash
POST /users
```

- Criar Novo Registro de Refeição
```bash
POST /meals
```

- Listar Todas as Refeições Registradas pelo Usuário
```bash
GET /meals
```

- Listar uma Refeição Específica Registrada pelo Usuário
```bash
GET /meals/:${meal_id}
```

- Exibir um resumo geral das refeições do usuário (total, refeições dentro da dieta e refeições fora da dieta)
```bash
GET /meals/summary
```

- Deletar uma Refeição
```bash
DELETE /meals/:${meal_id}
```

- Editar uma Refeição
```bash
PUT /meals/:${meal_id}
```

___

## 📚 Testes automatizados e2e
  - [x] Should be able to create a new account
  - [x] Should be able to create a new meal
  - [x] Should be able to list all meals
  - [x] Should be able to get a specific meals
  - [x] Should be able to get the summary meals
  - [x] Should be able to delete a specific meal
  - [x] Should be able to edit a meal


```bash
# Após a instalação do projeto e suas depêndencias:
  npm run test
```

___

Made with ❤️ by André Viapiana 👋🏽 [Get in Touch!](https://www.linkedin.com/in/andreviapiana/)

---
