<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Petshop API

Back-end da aplicação Petshop, desenvolvido com NestJS, TypeScript, Prisma e PostgreSQL. A API disponibiliza as operações de agenda consumidas pelo front-end: listar, criar, atualizar e excluir agendamentos.

## Pré-requisitos

- Node.js compatível com o NestJS 12 e o Prisma 7;
- npm 11, conforme definido no `packageManager` do monorepo;
- uma instância PostgreSQL acessível pela aplicação;
- credenciais de acesso ao banco para preencher `DATABASE_URL`.

## Instalação

O back-end está dentro do monorepo npm. Instale as dependências a partir da raiz para configurar todos os workspaces:

```bash
cd petshop-rocketseat
npm install
```

O script `postinstall` do pacote gera o cliente Prisma automaticamente. Depois, configure o ambiente da API conforme a seção seguinte.

## Variáveis de ambiente

Crie `apps/petshop-api/.env` a partir do exemplo:

```bash
cp apps/petshop-api/.env.example apps/petshop-api/.env
```

Preencha o arquivo com uma URL válida do PostgreSQL:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/petshop
```

### Variáveis disponíveis

| Variável       | Obrigatória | Finalidade                                                       |
| -------------- | ----------- | ---------------------------------------------------------------- |
| `DATABASE_URL` | Sim         | String de conexão usada pelo Prisma para acessar o PostgreSQL.   |
| `PORT`         | Não         | Porta HTTP da API. Quando não informada, a aplicação usa `3000`. |

O `DATABASE_URL` pode conter credenciais. Não o publique, não o versione e não o inclua em logs. O arquivo `.env` está ignorado pelo Git. Em ambientes hospedados, configure a variável diretamente no provedor.

## Banco de dados e Prisma

O schema está em `prisma/schema.prisma` e define o modelo `Appointment`, com os campos `id`, `petName`, `tutorName`, `phone`, `service` e `date`.

Para criar ou aplicar migrações a partir da raiz do monorepo, os scripts da raiz esperam que `DATABASE_URL` também esteja disponível em um `.env` na raiz:

```bash
npm run db:migrate
```

Os demais comandos relacionados ao banco são:

```bash
npm run db:generate
npm run db:reset
```

`db:generate` gera o cliente Prisma; `db:reset` apaga e recria o banco conforme as migrações, portanto deve ser usado com cuidado. Como o repositório ainda não possui uma pasta `prisma/migrations` versionada, a primeira migração deve ser criada pelo comando `db:migrate` após o banco e o ambiente estarem configurados.

## Executando a API

Na raiz do monorepo:

```bash
npm run dev --workspace=petshop-api
```

Ou dentro do diretório do back-end:

```bash
cd apps/petshop-api
npm run dev
```

A API será iniciada na porta definida por `PORT` ou, por padrão, em [http://localhost:3000](http://localhost:3000). O modo `dev` observa alterações nos arquivos e reinicia o processo automaticamente.

## Scripts disponíveis

Os scripts abaixo estão definidos em `apps/petshop-api/package.json`:

| Script               | Finalidade                                               |
| -------------------- | -------------------------------------------------------- |
| `npm run start`      | Inicia a API sem watch mode.                             |
| `npm run dev`        | Inicia a API em modo de desenvolvimento, com watch mode. |
| `npm run build`      | Compila o back-end para produção.                        |
| `npm run start:prod` | Executa a aplicação compilada em `dist/main`.            |
| `npm run lint`       | Executa o Oxlint nos diretórios de código e testes.      |
| `npm run format`     | Formata os arquivos TypeScript com Prettier.             |
| `npm run test`       | Executa os testes unitários.                             |
| `npm run test:watch` | Executa os testes em modo de observação.                 |
| `npm run test:cov`   | Executa os testes e gera cobertura.                      |
| `npm run test:e2e`   | Executa os testes end-to-end configurados.               |

## API REST

O módulo atual é `appointments`:

| Método   | Endpoint            | Descrição                                           |
| -------- | ------------------- | --------------------------------------------------- |
| `GET`    | `/appointments`     | Lista os agendamentos e retorna o total.            |
| `POST`   | `/appointments`     | Cria um agendamento.                                |
| `PATCH`  | `/appointments`     | Atualiza um agendamento pelo `id` enviado no corpo. |
| `DELETE` | `/appointments/:id` | Exclui um agendamento pelo `id`.                    |

Os DTOs validam campos obrigatórios, strings e datas no formato ISO. O bootstrap da aplicação habilita `ValidationPipe` global e CORS.

## Estrutura principal

```text
src/
├── main.ts                    # Bootstrap, ValidationPipe, CORS e porta HTTP
├── app.module.ts              # Módulo raiz e carregamento de configuração
├── app.controller.ts          # Controlador geral da aplicação
├── modules/
│   └── appointments/
│       ├── appointments.module.ts
│       ├── appointments.controller.ts
│       ├── appointments.service.ts
│       └── dtos/               # DTOs de criação e atualização
└── prisma/
  ├── prisma.service.ts       # Cliente Prisma com adaptador PostgreSQL
  └── index.ts                 # Exportação da instância compartilhada

prisma/
└── schema.prisma                # Modelo e configuração do banco
```

O controlador define as rotas HTTP, o serviço executa as operações de negócio e o Prisma realiza a persistência no PostgreSQL.

## Tecnologias principais

- NestJS 12 e Node.js;
- TypeScript;
- Express via `@nestjs/platform-express`;
- Prisma 7 e `@prisma/adapter-pg`;
- PostgreSQL;
- `class-validator` e `class-transformer`;
- Jest e Supertest;
- Oxlint e Prettier.

## Referências

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
