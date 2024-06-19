## Desafio: Cadastro de Usuários com Operações

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

- **1: Criação do repositório Git**

  - [x] Criar um repositório Git público para o desafio
  - [x] Adicionar o arquivo README.md com as instruções e requisitos do desafio

  </br>
- **2: Definição do modelo de dados**

  - [x] Definir o modelo de dados para a entidade Usuário
  - [x] Criar as tabelas necessárias no banco de dados MySQL
  </br>

- **3: Implementação da camada de persistência**

  - [x] Implementar a camada de persistência utilizando o banco de dados relacional MySQL
  - [x] Criar endpoints para CRUD (Create, Read, Update, Delete) de usuários
  - [x] Criar endpoints para realizar operações de cadastro de usuários
  </br>
- **4: Implementação da lógica de negócio**

  - [x] Implementar a lógica de negócios para a entidade Usuário
  - [x] Utilizar Dtos e validar campos

  - [x] Rota - Criar usuário;  
    1.  [x] Usuário duplicado validado;
 
  - [x] Rota - Atualizar senha;
         1. [x] Nova senha igual a atual; 2. [x] Nova senha e confirmação de senha diferentes; 3. [x] Senha diferente de 8 caracteres;

  - [x] Rota - Usuário por id;
         1. [x] Id não existente;

  - [x] Rota - Todos usuários;
         1. [x] Retorna apenas usuários ativos;
       
  - [x] Rota - Atualizar usuário;
         1. [x] Altera apenas dados simples, não é possível alterar cpf e id;
       
  - [x] Padronizar e tratar Exceções 1. [x] Excessões padronizadas conforme os erros;

  - [x] Padronizar excessão de Bad Request e Method Not Allowed...

  - [x] Auth - Validar se usuário que vai autenticar esta deletado;

  - [x] Delete - Capturar dados do usuário que esta fazendo request para anotar no deleteBy;
  
  </br>

- **5: Implementação da camada de segurança**

  - [x] Implementar a camada de segurança utilizando o padrão de projeto JWT
  - [x] Criar endpoints para autenticação

  - [x] Implementar campos funcionais

    1. [x] Quando o usuário for alterado atualizar campos não funcionais;
    2. [x] Soft delete na mão (Campo status e DeletedBy);

  - [ ] Regras adicionais com base na Role (função)
  - [ ] Um usuário com a função "User" apenas consultará e alterará recursos pertencentes ao mesmo;
  - [ ] Um usuário com a função "Admin" consultará todos usuários da base, individualmente ou listando todos, mas só alterara os dados pertecentes a ele;
  
  </br>

- **6: Implementação de testes**

  - [x] Criar testes 
  - [x] Realizar testes 
  - [x] UpdatePassoword
  - [x] FindOne
  - [x] FindAll;
  - [x] Update;
  - [x] SoftDelete;
  - [ ] Incluir nos testes autenticação para as rotas necessárias;
  
  </br>

- **7: Documentar API**

  - [x] Adicionar Swagger
  - [x] Documentar Rota - Criar usuário;
  - [x] Documentar Rota - Atualizar senha;
  - [x] Documentar Rota - Usuário por id;
  - [x] Documentar Rota - Todos usuários;
  - [x] Documentar Rota - Atualizar usuário;
  - [x] Documentar Rota - Deletar usuário;

  - [x] Autenticação Via Swagger
  
  </br>

- **8: Entrega do código fonte**

  - [x] Criar instruções para iniciar ambiente

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

- [Commit 4: Implementação da camada de segurança](https://github.com/ageurdo/1sti-nesjs/commit/9a7dfcb6f0a3e04df618174c1d6a1cc83e4b1f45 'Commit 4')

- [Commit 5: Implementação do Swagger](https://github.com/ageurdo/1sti-nesjs/commit/6a667e59afd3708cce8a7b88c1d201f53182f287 'Commit 5')

- [Commit 6: Implementação da Testes User Controller](https://github.com/ageurdo/1sti-nesjs/commit/4b94d3e5964ef8d2825b5011dcabc8c081fcc04b 'Commit 6')

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
