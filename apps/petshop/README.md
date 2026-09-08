# Petshop Front-end

Front-end da aplicação Petshop, desenvolvido com Next.js e React. A interface permite consultar a agenda de serviços, filtrar os atendimentos por data, criar novos agendamentos, editar informações e excluir registros.

## Pré-requisitos

- Node.js compatível com o Next.js 16 (Node.js 20.9 ou superior recomendado);
- npm 11, conforme definido no `packageManager` do monorepo;
- a API do Petshop disponível para que as operações da agenda funcionem.

## Instalação

O front-end faz parte de um monorepo npm com workspaces. A instalação deve ser feita na raiz do repositório, pois o npm resolve as dependências dos projetos em `apps/`.

```bash
cd petshop-rocketseat
npm install
```

Em seguida, configure as variáveis de ambiente do front-end conforme a seção abaixo. Os arquivos de ambiente ficam em `apps/petshop/`.

## Variáveis de ambiente

Crie `apps/petshop/.env` a partir do arquivo `.env.example`:

```bash
cp apps/petshop/.env.example apps/petshop/.env
```

Preencha o arquivo com a URL da API:

```env
NEXT_PUBLIC_PETSHOP_API_URL=http://localhost:4000
NEXT_PUBLIC_ALLOW_ORIGINS_URL=http://localhost:3000
```

### Variáveis disponíveis

| Variável                        | Obrigatória        | Finalidade                                                                                                                                                                         |
| ------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_PETSHOP_API_URL`   | Sim                | URL base usada pelo Axios para acessar a API REST. As rotas de agendamento são adicionadas a essa URL, como `/appointments`.                                                       |
| `NEXT_PUBLIC_ALLOW_ORIGINS_URL` | Não no front atual | Está prevista no `.env.example` para representar a origem permitida do front-end, mas não é consumida atualmente pelo código do front. A configuração de CORS é feita no back-end. |

Como as variáveis possuem o prefixo `NEXT_PUBLIC_`, seus valores podem ser expostos ao navegador. Não coloque segredos, tokens privados ou credenciais nesses campos.

Em ambientes publicados, substitua `NEXT_PUBLIC_PETSHOP_API_URL` pela URL pública da API. A URL deve apontar para a origem do back-end e não precisa incluir `/appointments`, pois esse caminho é acrescentado pelos endpoints do front-end.

## Executando o front-end

Na raiz do monorepo, execute o script do workspace:

```bash
npm run dev --workspace=petshop-rocketseat
```

Ou, dentro do diretório do front-end:

```bash
cd apps/petshop
npm run dev
```

Depois, acesse [http://localhost:3000](http://localhost:3000).

Para uma execução de produção local após a compilação:

```bash
npm run build --workspace=petshop-rocketseat
npm run start --workspace=petshop-rocketseat
```

## Scripts disponíveis

Os scripts abaixo estão definidos em `apps/petshop/package.json`:

| Script                       | Finalidade                                                               |
| ---------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                | Inicia o Next.js em modo de desenvolvimento, com atualização automática. |
| `npm run build`              | Gera a build de produção do front-end.                                   |
| `npm run start`              | Inicia a aplicação a partir da build de produção.                        |
| `npm run lint`               | Executa o ESLint.                                                        |
| `npm run validate:typecheck` | Executa a verificação de tipos do TypeScript sem gerar arquivos.         |

## Integração com a API

O front-end usa Axios para chamar a API REST e TanStack React Query para gerenciar consultas e mutações. O recurso atualmente utilizado é `appointments`:

| Método   | Endpoint            | Uso no front-end                 |
| -------- | ------------------- | -------------------------------- |
| `GET`    | `/appointments`     | Carrega a lista de agendamentos. |
| `POST`   | `/appointments`     | Cria um agendamento.             |
| `PATCH`  | `/appointments`     | Atualiza um agendamento.         |
| `DELETE` | `/appointments/:id` | Exclui um agendamento.           |

Após criar, editar ou excluir um registro, os hooks invalidam o cache de `appointments`, fazendo a lista ser atualizada. A API precisa estar acessível pela URL definida em `NEXT_PUBLIC_PETSHOP_API_URL` e aceitar requisições da origem do front-end.

## Estrutura principal

```text
src/
├── api/              # Endpoints, tipos e hooks do TanStack React Query
├── app/              # Entradas do App Router, layout e página principal
├── components/
│   ├── commons/      # Componentes reutilizáveis, formulários, textos e ícones
│   ├── ui/           # Componentes de interface e primitives visuais
│   └── utils/        # Utilitários de composição de componentes
├── config/           # Cliente Axios e opções de horários
├── providers/        # Providers globais, incluindo o QueryClient
├── styles/           # Estilos globais
├── templates/Home/   # Tela de agenda, diálogos, contexto, schemas e utilitários
└── utils/            # Utilitários compartilhados e hooks auxiliares
```

O alias `@/*` aponta para `src/*`, permitindo imports como `@/api` e `@/components`.

## Tecnologias principais

- Next.js 16 e React 19;
- TypeScript;
- Axios;
- TanStack React Query;
- React Hook Form e Zod;
- Tailwind CSS;
- Radix UI;
- React Day Picker e `date-fns`;
- Lucide React e Sonner.

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
