CREATE DATABASE unisenac;

-- assim é para comentario

CREATE TABLE IF NOT EXISTS alunos(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
dtNasc DATE,
matricula INT NOT NULL UNIQUE,
cpf VARCHAR(14) NOT NULL UNIQUE,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS endereco(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
rua VARCHAR(30) NOT NULL,
numero INT UNSIGNED NOT NULL,
bairro VARCHAR(30),
cep VARCHAR(9) NOT NULL,
cidade VARCHAR(30) NOT NULL,
estado VARCHAR(30) NOT NULL,
pais VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS professores(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
cpf VARCHAR(14) NOT NULL UNIQUE,
formacao VARCHAR(30) NOT NULL,
dataAdmissao DATE,
PRIMARY KEY(id)
);

-- ALTER - Alterar estrutura da tabela 
-- altera o nome da tabela funcionario para docentes

ALTER TABLE professores RENAME TO docentes;

-- ALTER - para adicionar uma nova coluna numa tabela ja criada

ALTER TABLE docentes ADD COLUMN esp VARCHAR(20);

DESC docentes;

-- ALTER- para adicionar uma novacoluna em local especifico

ALTER TABLE docentes ADD COLUMN salario DECIMAL(9,2) AFTER formacao;

-- ALTER - para adicionar na primeira coluna

ALTER TABLE docentes ADD COLUMN cod INT FIRST;

ALTER TABLE docentes DROP COLUMN cod;

-- apagar tabela;
-- DROP TABLE docentes;

INSERT INTO endereco VALUES
(DEFAULT,'Rua Pedro Peres', '574', 'Rio Branco', '93056-030', 'São Leopoldo', 'RS', 'Brasil');

DESC endereco;

SELECT * FROM endereco;

-- SELECT para ver as colunas especificas

SELECT rua, numero FROM endereco;

INSERT INTO endereco VALUES
(DEFAULT, 'Rua Pedro Peres', '574', 'Rio Branco', '93056-030', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Afrânio Peixoto', '459', 'Duque de Caxias', '93090-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Alberto Bins', '254', 'Arroio', '93080-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Alagoas', '873', 'Arroio', '93120-140', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Alexandre Nunes', '145', 'Arroio', '95039-450', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Bento Gonçalves', '742', 'Centro', '93080-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua José de Alencar', '916', 'Rio Branco', '93076-030', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Olavo Bilac', '118', 'Rio Branco', '93096-030', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Acácias', '892', 'Feitoria', '93040-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Walter Rost', '149', 'Feitoria', '93046-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua José Joaquim de Paula', '975', 'Feitoria', '93036-330', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua Walter Rost', '459', 'Feitoria', '93076-010', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Av. João Corrêa', '887', 'Rio Branco', '93096-030', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua nova 1', '149', 'Centro', '90000-000', 'São Leopoldo', 'RS', 'Brasil'),
(DEFAULT, 'Rua nova 2', '975', 'Centro', '90000-000', 'São Leopoldo', 'RS', 'Brasil');

SELECT * FROM endereco;

DROP TABLE alunos;

--Criar relacionamento  (CHAVE ESTRANGEIRA)

CREATE TABLE IF NOT EXISTS alunos(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
dtNasc DATE,
matricula INT NOT NULL UNIQUE,
cpf VARCHAR(14) NOT NULL UNIQUE,

-- aaui esta o relacionamento 

endereco_id INT NOT NULL,
FOREIGN KEY (endereco_id) REFERENCES endereco(id),
-- fim de relacionamento
PRIMARY KEY(id)
);

DROP TABLE alunos;

SELECT * FROM alunos;

INSERT INTO alunos VALUES
(DEFAULT, 'Luiz Henrique', '2000-12-30', '10001', '000.000.000-10', '1'),
(DEFAULT, 'Rodrigo Fonseca', '2000-11-24', '10002', '000.000.000-20', '2'),
(DEFAULT, 'Gustavo José', '2000-10-27', '10003', '000.000.000-30', '3'),
(DEFAULT, 'Matheus Henrique', '2000-08-14', '10004', '000.000.000-40', '4'),
(DEFAULT, 'Róger Gustavo', '2000-02-05', '10005', '000.000.000-50', '5'),
(DEFAULT, 'Felype Peres', '2000-04-18', '10006', '000.000.000-60', '6'),
(DEFAULT, 'Daniel Estral', '2000-10-13', '10007', '000.000.000-70', '7'),
(DEFAULT, 'Augusto Castro', '2000-07-22', '10008', '000.000.000-80', '8'),
(DEFAULT, 'Renan Bernardo', '2000-12-06', '10009', '000.000.000-90', '9'),
(DEFAULT, 'Lucas Nogueira', '2000-10-16', '10010', '000.000.000-91', '10'),
(DEFAULT, 'Pedro H. Borba', '2000-10-08', '10011', '000.000.000-82', '11'),
(DEFAULT, 'Marcelo S. Boeira', '2000-02-21', '10012', '000.000.000-73', '12'),
(DEFAULT, 'Vitor Gabriel', '2000-05-17', '10013', '000.000.000-64', '13'),
(DEFAULT, 'Felipe Garcia', '2000-04-15', '10014', '000.000.000-75', '14'),
(DEFAULT, 'Augusto A. Morais', '2000-08-04', '10015', '000.000.000-66', '15')

SELECT * FROM endereco;

SELECT * FROM alunos JOIN endereco ON endereco.id = alunos.endereco_id;

SELECT nome, cpf FROM alunos;

SELECT alunos.nome AS alunos, alunos.matricula, alunos.cpf,
endereco.rua AS endereco, endereco.numero, endereco.bairro,
endereco.cep,endereco.cidade,endereco.estado,endereco.pais
FROM alunos JOIN endereco ON endereco.id = alunos.endereco_id;

-- 1º Alterar (ALTER) o nome da tabela "docentes" para "professores" para ficar mais intuitivo.

ALTER TABLE docentes RENAME TO professores;

-- 2º Alterar (ALTER) a tabela "professores" adiconando três novas colunas:

ALTER TABLE professores ADD COLUMN genero ENUM ('M', 'F') AFTER cpf;

ALTER TABLE professores ADD COLUMN carga_horaria INT AFTER formacao;

ALTER TABLE professores ADD COLUMN espec VARCHAR(20) AFTER carga_horaria;

ALTER TABLE professores ADD COLUMN nivel_academico VARCHAR(20) AFTER espec;

ALTER TABLE professores DROP COLUMN espec;

ALTER TABLE professores ADD COLUMN espec VARCHAR(20) AFTER genero;

-- 3º Inserção (INSERT) de Dados e Manipulação

 -- a) Inserir os **dois** registros de professores na tabela;
 -- b) **Deletar (DELETE)** os dois registros inseridos na tabela;
 -- c) Inserir os registros disponibilizados em https://github.com/dayla-bsi/sql/blob/main/dados-profs
 
SELECT * FROM professores;

ALTER TABLE professores DROP COLUMN espec;

ALTER TABLE professores DROP COLUMN esp;

ALTER TABLE professores DROP COLUMN nivel_academico;

ALTER TABLE professores ADD COLUMN espec VARCHAR(30) AFTER dataAdmissao;

ALTER TABLE professores ADD COLUMN nivel_academico VARCHAR(20) AFTER espec; 

INSERT INTO professores VALUES
(DEFAULT, 'VITOR HUGO', '000.000.000-90', 'M', 'Analise de Sistemas', '40', '15000.00', '2020-05-01', 'não possui', 'Mestrado'),
(DEFAULT, 'LUCAS GOMES', '000.000.000-80', 'M', 'Engenharia da Computação', '40', '10000.00', '2020-06-01', 'não possui', 'Mestrado');

TRUNCATE professores;

ALTER TABLE professores MODIFY nome VARCHAR(100);

INSERT INTO professores VALUES
(DEFAULT, 'GUILHERME BOTELHO DE OLIVEIRA', '000.000.000-10', 'M', 'Ciência da Computação', '40', '13000.00', '2020-03-01', 'não possui', 'Mestrado'),
(DEFAULT, 'GUSTAVO OLIVEIRA DE LIMA PEREIRA', '000.000.000-20', 'M', 'Engenharia da Computação', '40', '12000.00', '2021-07-01', 'não possui', 'Mestrado'),
(DEFAULT, 'FLAVIO CRUZ PRATES', '000.000.000-30', 'M', 'Engenharia da Computação', '30', '11000.00', '2021-03-01', 'não possui', 'Mestrado'),
(DEFAULT, 'HENRIQUE JOSE DA ROCHA', '000.000.000-40', 'M', 'Ciência da Computação', '30', '11000.00', '2021-03-01', 'não possui', 'Mestrado'),
(DEFAULT, 'LETICIA LOUREIRO SILVA', '000.000.000-50', 'F', 'Ciência da Computação', '40', '15000.00', '2018-03-01', 'não possui', 'Doutorado'),
(DEFAULT, 'PEDRO GUILHERME AUGUSTIN', '000.000.000-60', 'M', 'Engenharia da Computação', '40', '10000.00', '2019-03-01', 'Ciência de Dados', 'Não possui'),
(DEFAULT, 'REGINA LINDEN RUARO', '000.000.000-70', 'F', 'Engenharia da Computação', '30', '11000.00', '2020-03-01', 'não possui', 'Mestrado'),
(DEFAULT, 'YURI RESTANO MACHADO', '000.000.000-80', 'M', 'Engenharia da Computação', '20', '10000.00', '2012-03-01', 'Engenharia de Software', 'Pós Doutorado'),
(DEFAULT, 'DENISE PIRES FINCATO', '000.000.000-90', 'F', 'Ciência da Computação', '40', '15000.00', '2019-03-01', 'não possui', 'Doutorado'),
(DEFAULT, 'CARLA MARIA PETERSEN HERRLEIN', '000.000.000-11', 'F', 'Ciência da Computação', '40', '12000.00', '2021-07-01', 'não possui', 'Mestrado'),
(DEFAULT, 'ARTUR LUIS PEREIRA TORRES', '000.000.000-12', 'M', 'Ciência da Computação', '40', '20000.00', '2015-03-01', 'Redes de Computadores', 'Pós Doutorado'),
(DEFAULT, 'ELTON SOMENSI DE OLIVEIRA', '000.000.000-13', 'M', 'Engenharia da Computação', '30', '11000.00', '2019-03-01', 'não possui', 'Mestrado'),
(DEFAULT, 'FELIPE CARDOSO MOREIRA DE OLIVEIRA', '000.000.000-14', 'M', 'Ciência da Computação', '40', '15000.00', '2019-03-01', 'não possui', 'Doutorado'),
(DEFAULT, 'ANA CLAUDIA REDECKER', '000.000.000-15', 'F', 'Ciência da Computação', '40', '15000.00', '2019-03-01', 'não possui', 'Doutorado'),
(DEFAULT, 'DANIELA COURTES LUTZKY', '000.000.000-16', 'F', 'Ciência da Computação', '20', '10000.00', '2022-03-01', 'Não possui', 'Pós Doutorado'),
(DEFAULT, ' LAURA ANTUNES DE MATTOS', '000.000.000-17', 'F', 'Ciência da Computação', '40', '15000.00', '2019-03-01', 'não possui', 'Doutorado');


SELECT * FROM professores;

SELECT cliente.nome FROM cliente
INNER JOIN compras ON compras.id_cliente = cliente.id
WHERE valor >
(SELECT AVG(valor) FROM compras);


CREATE TABLE IF NOT EXISTS aluno(
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (30) NOT NULL,
cpf VARCHAR (14) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS curso(
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (30) NOT NULL,
carga_hora INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS vinculo_aluno_curso(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
faltas INT NOT NULL,

id_aluno INT NOT NULL,
id_curso INT NOT NULL,

FOREIGN KEY (id_aluno) REFERENCES aluno(id),
FOREIGN KEY (id_curso) REFERENCES curso(id)
);








