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

**Instruções para montar o ambiente**

- **1: Execute o docker-compose.yml via cmd para levantar um servidor Mysql**

```bash
$ docker-compose up -d
```

- **2: Execute o sql no seu gerenciador de banco de dados**

```bash
 -- Criar banco de dados
CREATE DATABASE 1sti2;

-- Criar usuário MainUser
CREATE USER 'MainUser' IDENTIFIED BY 'MainPassword';

-- Atribuir permissões totais ao usuário MainUser sobre o banco de dados 1sti2
GRANT ALL PRIVILEGES ON 1sti2.* TO 'MainUser'@'%';

-- Dar permissão para o usuário MainUser criar tabelas, inserir dados, etc.
GRANT CREATE, INSERT, UPDATE, DELETE, DROP, INDEX, ALTER ON 1sti2.* TO 'MainUser'@'%';

-- Atualizar privilégios
FLUSH PRIVILEGES;

-- Cria usuário administrador, não há rota para tronar um usuário administrador via Api;
INSERT INTO users (id, cpf, password, name, date_of_birth, role, street, number, complement, neighborhood, city, state, status, zip_code, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES (1, '73553655500', '$2a$12$UI31aDSVDESajV3h.ASAsO2O0x.Ldt./7cOoPE6yI4ghkBpnjD9La', 'Rebeca Sara Barbosa', '1990-02-20T10:00:00','ROLE_ADMIN', 'Rua da Praia', '456', 'Casa 2', 'Praia Grande', 'Santos', 'SP', 0, '11015-000', '2024-06-13T10:00:00', 'SQL Teste Banco H2', null, null, null, null);
```

Obs: execute um bloco por vez. Na imagem abaixo fiz a configuração com o Azure Data Studio;

  !Connection Instructions

## Variáveis de ambiente

```bash

# Database
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=1sti2
DB_USER=root
DB_PASSWORD=RootPassword

# JWt
JWT_SECRET=Zeg*%[7?X[<dU+EN{9|&M^T2G?Ld:x
JWT_EXPIRES_IN='30m'
```

## Testes

Para rodar os testes abra o terminal do Vscode e execute os comandos abaixo:

```bash
yarn test || npm run test
```

![Connection Instructions](./instructions/tests.png)


## Insomnia
Na pasta ./Instructions há um arquivo com o nome de Insomnia_NestJs, você pode importar ele para o mesmo, todas rotas estarão configuradas neste arquivo.

## Swagger
Para abrir o swagger com o projeto já iniciado abra no navegador esta url: http://localhost/api
