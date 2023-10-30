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

# RF

- [ X ] Deve ser possível criar um usuário;
- [ X ] O usuário deve poder criar uma nova refeição, com esses dados:
    - Nome
    - Descrição
    - Data e Hora (criado automaticamente)
    - Está dentro ou não da Dieta
- [ X ] O usuário deve poder editar uma refeição podendo alterar todos os dados acima;
- [ X ] O usuário deve poder listar todas as refeições que criou;
- [ X ] O usuário deve poder apagar uma refeição que criou;

# RN

- [ X ] Deve ser possível identificarmos o usuário entre as requisições;
- [ X ] Deve ser possível visualizar uma única refeição pelo ID;
- [ X ] O usuário só pode visualizar, editar ou apagar as refeições que ele criou;
- [ X ] Deve ser possível recuperar as métricas de um usuário:
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

#### 📇 Insomnia da API

Instale o [Insomnia](https://insomnia.rest/download), e então clique no botão a seguir para abrir as requisições já configuradas.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=DailyDiet-API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FAndreViapiana%2FDailyDiet-API%2Fmain%2Fexport.json)

___

#### 🔀 Rotas da API

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

Made with ❤️ by André Viapiana 👋🏽 [Get in Touch!](https://www.linkedin.com/in/andreviapiana/)

---
