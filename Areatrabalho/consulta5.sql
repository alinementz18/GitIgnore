CREATE DATABASE JOINN;

CREATE TABLE funcionarios(
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR (30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE projetos(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (30) NOT NULL,

id_funcionarios INT NOT NULL,
FOREIGN KEY(id_funcionarios) REFERENCES funcionarios(id)
);
DESC projetos

INSERT INTO funcionarios VALUES
(DEFAULT, 'Gustavo'),
(DEFAULT, 'Leonardo'),
(DEFAULT, 'Vitor'),
(DEFAULT, 'Aline'),
(DEFAULT, 'José');

TRUNCATE funcionarios;

SELECT * FROM funcionarios;

INSERT INTO projetos VALUES
(DEFAULT, 'Lua', '2'),
(DEFAULT, 'Sol', '1'),
(DEFAULT, 'Marte', '4'),
(DEFAULT, 'Saturno', null),
(DEFAULT, 'Saturno', '3');


SELECT * FROM projetos;
TRUNCATE projetos

SELECT * FROM funcionarios INNER JOIN projetos ON funcionarios.id=projetos.id_funcionarios

-- LEFT JOIN
-- alias -- apeelido para a tabela
SELECT f.nome, p.nome FROM funcionarios f LEFT JOIN projetos p ON funcionarios.id=p

-- RIGHT JOIN
SELECT f.nome, p.nome FROM funcionarios f RIGHT JOIN projetos p ON funcionarios.id=p

