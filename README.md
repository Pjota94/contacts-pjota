# Sobre o Projeto

Este é um projeto fullstack, para criação de contatos. Nele você pode criar uma conta e depois de estar autenticado, poderá criar contatos, atualizar e deletar.

<h1 align="center">
 Instruções para execução
</h1>

## Passo a passo para iniciar a aplicação.

```bash
# 1º Clone este repositório e abra o projeto no vsCode
$ git clone git@github.com:Pjota94/contacts-pjota.git

# 2º Abra o terminal e vá para a pasta back-end
$ cd Back

# 3º Instale as dependências do projeto
$ yarn install

# 4º Faça uma copia do arquivo .env.example e renomeie para apenas .env, preencha os dados de acordo com os dados do seu banco.

# 5º Execute as migrações
$ yarn typeorm migration:run -d src/data-source.ts

# 6º Rode o servidor
$ yarn dev

Com o servidor funcionando vamos iniciar o front!

# 7º Abra um novo terminal e vá para a pasta front-end
$ cd Front

# 7º Execute os comandos para instalar e iniciar a aplicação
$ yarn install
$ yarn start

# por ultimo pressione y para iniciar na porta 3001.
$ y
```

## 🛠 Tecnologias Utilizadas

| Front-End         | Back-End   |
| ----------------- | ---------- |
| React             | Node.js    |
| TypeScript        | Express    |
| Styled-Components | TypeOrm    |
| ContextApi        | PostgreSQL |

## Figma

https://www.figma.com/file/SQuPvxc3swnVe4wHVU9kJ0/Untitled?node-id=2%3A168&t=v8cqUy2jq36PGtdu-1

Obs: Essa não é a versão final, em breve irá ser implementado mais funcionalidades.
