/* DDL - Data Definittion Language*/

/*A Linguagem de Definição de Dados se ocupa de 
modificar a estrutura de objetos de uma DB*/


 /*Create, Alter, Drop, Truncate*/

 //Comando verbo seguido OBJETO//

 //squima database 


CREATE DATABASE SENAC;
CREATE SCHEMA SENAC;

USE SENAC;


CREATE TABLE pagamentos (
id_pay      INT NOT NULL           AUTO_INCREMENT PRIMARY KEY //chave primaria//
valor  REAL NOT NULL,
moeda    VARCHAR(20) NOT NULL,
data_pagamento   DATE NOT NULL,
tipo_pagamento  VARCHAR(50),
id_usuario    INT NOT NULL,
id_empresa    INT NOT NULL);


//para chamar a tabela - pega o tipo da tabela, se é nulo....
SELECT * FROM pagamentos;  // asterisco = quero todas as colunas, todos os dados 

DESCRIBE pagamentos; //


varchar - caracter variado 20 ou MAX

virgula separando, final ;


ALTER TABLE pagamentos
ADD age INT; // não posso add coluna sem declarar estrutura

ALTER TABLE pagamentos;
MODIFY age VARCHAR(50) NOT NULL; 

DESCRIBE pagamentos;

ALTER TABLE pagamentos; //muda nome e estrutura de dados
CHANGE COLUMN age idade VARCHAR(50) NOT NULL;

SELECT * FROM pagamentos;

ALTER TABLE pagamentos;
DROP COLUMN age; //apaga coluna, se não for chave primaria e estrangeira - não precisa declarar estrutura


ALTER TABLE pagamentos
RENAME TO pagamentos_do_mes; //alterar nome da tabela

SELECT * FROM pagamentos;


CREATE TABLE pay_backup
LIKE pagamentos;  //cria uma tabela com a mesma estrutura (colunas, estruturas de dados)

//inserir dados, popular tabela:

INSERT INTO pagamentos VALUES
(1, 3, 'USD', '01-01-1999', 'PayPal', '2', '3');

id_pay, valor, moeda, data_pagamento, tipo_pagamento, id_usuario, id_empresa  


TRUNCATE TABLE pagamentos; //delete toda tabela, limpa os valores da tabela, mas ela existe


















