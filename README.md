## Description

**Desafio: Cadastro de Usuários com Operações**

**Requisitos**

- Utilizar o padrão de projeto Restful para os micro serviços
- Utilizar o padrão de projeto JWT para implementação da camada de segurança no processo de autenticação e autorização
- Utilizar na camada de persistência o banco de dados relacional MySQL

**Modelo**

- Entidade Usuário

  - Identificadores únicos

    - Chave artificial administrada pelo sistema
    - Chave de negócio, por exemplo: cpf

  - Campos obrigatórios

    - Nome
    - Data de nascimento
    - Endereço (Rua, número, complemento, bairro, cidade, estado, cep)

  - Campos não funcionais

    - Status do registro: Ativo ou Removido
    - Data e hora de criação do registro
    - Usuário utilizado na criação do registro
    - Data e hora de atualização do registro
    - Usuário utilizado na atualização do registro
    - Data e hora de remoção do registro
    - Usuário utilizado na remoção do registro

**Checkpoints**

- **[X] 1: Criação do repositório Git**

  - Criar um repositório Git público para o desafio
  - Adicionar o arquivo README.md com as instruções e requisitos do desafio

- **[X] 2: Definição do modelo de dados**

  - Definir o modelo de dados para a entidade Usuário
  - Criar as tabelas necessárias no banco de dados MySQL

- **[X] 3: Implementação da camada de persistência**

  - Implementar a camada de persistência utilizando o banco de dados relacional MySQL
  - Criar endpoints para CRUD (Create, Read, Update, Delete) de usuários

  - Criar endpoints para realizar operações de cadastro de usuários

- **[X] 4: Implementação da lógica de negócio**

  - Implementar a lógica de negócios para a entidade Usuário

  - Adicionar Dtos e validar rotas
  - [x] Rota - Criar usuário;
        **Validações** 
    1.  [x] Usuário duplicado validado;
    2.  [x] CPF Inválido em todos DTOs;

  - [x] Rota - Atualizar senha;
        **Validações** 
        1. [x] Nova senha igual a atual; 2. [x] Nova senha e confirmação de senha diferentes; 3. [x] Senha diferente de 8 caracteres;

  - [x] Rota - Usuário por id;
        **Validações** 
        1. [x] Id não existente;

  - [x] Rota - Todos usuários;
        **Validações** 
        1. [x] Retorna apenas usuários ativos;
  - [x] Rota - Atualizar usuário;
        **Validações** 
        1. [x] Altera apenas dados simples, não é possível alterar cpf e id;
  - [x] Padronizar e tratar Exceções 1. [x] Excessões padronizadas conforme os erros;

  - [x] Padronizar excessão de Bad Request e Method Not Allowed...
  - [x] Auth - Validar se usuário que vai autenticar esta deletado;

  - [x] Delete - Capturar dados do usuário que esta fazendo request para anotar no deleteBy;

- **[ ] 5: Implementação da camada de segurança**

  - [x] Implementar a camada de segurança utilizando o padrão de projeto JWT
  - [x] Criar endpoints para autenticação

  - [x] Implementar campos funcionais
      1. [x] Quando o usuário for alterado atualizar campos não funcionais;
      2. [x] Soft delete na mão (Campo status e DeletedBy);

  - Regras adicionais com base na Role (função)
  - [ ] Um usuário com a função "User" apenas consultará e alterará recursos pertencentes ao mesmo;
  - [ ] Um usuário com a função "Admin" consultará todos usuários da base, individualmente ou listando todos, mas só alterara os dados pertecentes a ele;

- **[ ] 6: Implementação de testes**

  - Criar testes para a aplicação utilizando frameworks de teste adequados
  - Realizar testes ponta a ponta nas rotas abaixo
  - [ ] CreateUser, CPF duplicado, CPF válido; Senha vazia, Senha inferior ou superior a 8 digitos
  - [ ] UpdatePassowordenha, validar se senha é diferente de 8 digitos com id existente e não existente

  - [ ] GetUserById, com id existente e não existente;
  - [ ] GetAll;
  - [ ] UpdateUser;

  - [ ] Incluir nos testes autenticação para as rotas necessárias;

- **[ ] 6: Documentar API**

  - [ ] Adicionar SpringDoc
  - [ ] Documentar Rota - Criar usuário;

  - [ ] Documentar Rota - Atualizar senha;

  - [ ] Documentar Rota - Usuário por id;
  - [ ] Documentar Rota - Todos usuários;
  - [ ] Documentar Rota - Atualizar usuário;

  - [ ] Documentar Rota - Deletar usuário;


- **[ ] 8: Entrega do código fonte**

  - [ ] Criar instruções para iniciar ambiente

  - Entregar o código fonte em um repositório Git público
  - Incluir instruções claras para montar o ambiente, rodar os testes e rodar a aplicação

**Avaliação**

- Organização e estrutura do código
- Adesão às melhores práticas de desenvolvimento
- Eficiência na resolução dos desafios propostos
- Cobertura de testes adequada
- Documentação clara e completa

**Histórico de Commits**

- [Commit 1: Criação do repositório Git](https://github.com/ageurdo/1sti-nesjs/commit/af7894d32b66c06f218ce2337867655672f2193a 'Commit 1')

- [Commit 2: Definição do modelo de dados ](https://github.com/ageurdo/1sti-nesjs/commit/c0a8605b74224530f787132f8f90e2f3724fee90 'Commit 2')

- [Commit 2: Implementação da camada de persistência](https://github.com/ageurdo/1sti-nesjs/commit/c0a8605b74224530f787132f8f90e2f3724fee90 'Commit 2')

- [Commit 3: Implementação da lógica de negócio](https://github.com/ageurdo/1sti-nesjs/commit/7e59608d5282cc5b387cdf77030800913268a867 'Commit 3')

- [Commit 4: Implementação da lógica de negócio](https://github.com/ageurdo/1sti-nesjs/commit/7e59608d5282cc5b387cdf77030800913268a867 'Commit 4')
- [Commit 5: Documentar API\](link para o commit)

- [Commit 6: Implementação de testes\](link para o commit)

- [Commit 7: Implementação da camada de segurança\](link para o commit)

**Instruções para montar o ambiente**

- [Instruções para montar o ambiente](link para as instruções)

- 1: Na pasta **./instructions** há um **docker-compose.yml**
- 2: Na pasta **./instructions** há uma **sql** para criar o banco, usuário para o banco, atribuição de privilégios e inserção do primeiro usuário com role 'ADMIN'\*\*
- **3: Configuração do banco src/main/resources/application.properties'**
  ![Connection Instructions](/instructions/connection.png)

**Instruções para rodar os testes**

- \[Instruções para rodar os testes\](link para as instruções)

**Instruções para rodar a aplicação**

- \[Instruções para rodar a aplicação\](link para as instruções)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
