CREATE DATABASE biblioteca;

CREATE TABLE livro (
id_livro INT AUTO_INCREMENT PRIMARY KEY,
nome_livro VARCHAR (100),
valor_livro DECIMAL (8,2),
genero_livro VARCHAR (100)
);

SELECT * FROM livro;

DESC livro;

INSERT INTO livro VALUES
(DEFAULT, 'Banco de Dados Essencial', 199.83, 'Educação'),
(DEFAULT, 'Rede de Computadores', 141.83, 'Educação'),
(DEFAULT, 'Engenharia de Software', 175.48, 'Educação'),
(DEFAULT, 'Padrão de Projetos', 288.83, 'Educação')


SELECT nome_livro FROM livro;

CREATE VIEW nome_livros AS
SELECT nome_livro FROM livro;

SELECT * FROM nome_livros;


CREATE VIEW media_valor_livro AS
SELECT *FROM livro WHERE valor_livro >= (SELECT AVG(valor_livro) FROM livro);

SELECT * FROM media_valor_livro;


CREATE TABLE compras (
id_compra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
valor DECIMAL(6) NOT NULL,

id_cliente INT NOT NULL,
FOREIGN KEY(id_cliente) REFERENCES cliente (id)
);

SELECT * FROM livro;

ALTER TABLE livro ADD autor VARCHAR(20) AFTER nome_livro;

ALTER TABLE livro ADD quant_livro DECIMAL(20) AFTER valor_livro;

SELECT * FROM livro;

ALTER TABLE livro MODIFY quant_livro INT;

SELECT * FROM livro;

UPDATE livro SET nome_livro = 'Banco de Dados' WHERE id_livro = '1';

SELECT * FROM livro;

UPDATE livro SET autor = 'Carlos Alberto' WHERE id_livro = '1';
UPDATE livro SET autor = 'Lisandro Granvile' WHERE id_livro = '2';
UPDATE livro SET autor = 'Marcelo Soares' WHERE id_livro = '3';
UPDATE livro SET autor = 'Leila Ribeiro' WHERE id_livro = '4';
UPDATE livro SET quant_livro = '20' WHERE id_livro = '1';
UPDATE livro SET quant_livro = '34' WHERE id_livro = '2';
UPDATE livro SET quant_livro = '17' WHERE id_livro = '3';
UPDATE livro SET quant_livro = '43' WHERE id_livro = '4';

SELECT * FROM livro;

INSERT INTO livro VALUES
(DEFAULT, 'Banco de Dados', 'Fabio Zambieri', '143.50', '23', 'Educação'),
(DEFAULT, 'Rede de Computadores', 'Luciano Paschoal', '189.43', '23', 'Educação');

SELECT * FROM nome_livros;

CREATE VIEW exibir_livro AS
SELECT * FROM livro WHERE valor_livro >= (SELECT AVG(valor_livro) FROM livro);

SELECT * FROM exibir_livro;


CREATE VIEW subtotais AS
SELECT nome_livro, autor, valor_livro, quant_livro, valor_livro*quant_livro AS subtotal FROM livro;

SELECT * FROM subtotais;

CREATE PROCEDURE calcular_total(OUT total DECIMAL(10,2))
SELECT SUM(subtotal) INTO total FROM subtotais;

--invocar a proccedure
CALL calcular_tota























