# Husky

## O que é

O [Husky](https://typicode.github.io/husky/) integra hooks do Git ao fluxo de desenvolvimento, executando validações automáticas antes de ações como `commit` e `push`. Isso garante qualidade e padronização de código sem depender da atenção manual do desenvolvedor.

---

## Instalação

```bash
# 1. Instalar dependências
npm install --save-dev husky lint-staged

# 2. Inicializar o Husky (gera a pasta .husky)
npx husky init
```

---

## Configuração

No `package.json`:

```json
"scripts": {
  "prepare": "husky"
},
"lint-staged": {
  "*.{js,jsx,ts,tsx,mjs,css,json,md}": ["prettier --write"]
}
```

| Chave              | Função                                                               |
| ------------------ | -------------------------------------------------------------------- |
| `prepare`          | Ativa o Husky automaticamente após `npm install`                     |
| `lint-staged`      | Roda tarefas apenas nos arquivos em staging (não no projeto inteiro) |
| `prettier --write` | Formata os arquivos staged antes do commit                           |

---

## Hooks configurados

### `pre-commit`

```bash
npx lint-staged
```

Formata automaticamente os arquivos staged com Prettier antes de concluir o commit.

**Fluxo:**

1. Desenvolvedor altera arquivos
2. `git add` → arquivos vão para staging
3. `git commit` → hook `pre-commit` é disparado
4. `lint-staged` roda o Prettier apenas nos arquivos staged
5. Se algo for reformatado, o commit é concluído já com os ajustes

### `pre-push`

Executa a verificação de tipos do TypeScript (`type-check`) antes do push, garantindo que nenhum código com erro de tipagem chegue ao repositório remoto.

---

## Extensões cobertas pelo lint-staged

`.js` `.jsx` `.ts` `.tsx` `.mjs` `.css` `.json` `.md`

---

## Benefícios

- Padronização de estilo em toda a base de código
- Menos conflitos de formatação entre desenvolvedores
- Bloqueio de commits mal formatados ou com erros de tipo
- Performance melhor, já que só analisa arquivos staged
