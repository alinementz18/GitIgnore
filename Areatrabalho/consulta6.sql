CREATE DATABASE uber;

CREATE TABLE IF NOT EXISTS motoristas(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
nome VARCHAR (100) NOT NULL,
placa VARCHAR (10) NOT NULL,
avaliação NUMERIC (5,2) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS passageiros(
id INT NOT NULL UNIQUE AUTO_INCREMENT,
nome VARCHAR (100) NOT NULL,
contato VARCHAR (50) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS viagens(
id INT NOT NULL AUTO_INCREMENT,
data_hora DATETIME NOT NULL,
origem VARCHAR (100) NOT NULL,
destino VARCHAR (100) NOT NULL,
distancia VARCHAR (100) NOT NULL,
preco DECIMAL NOT NULL,

id_motorista INT NOT NULL,
FOREIGN KEY (id_motorista) REFERENCES motoristas(id),
id_passageiro INT NOT NULL,
FOREIGN KEY (id_passageiro) REFERENCES passageiros(id),

PRIMARY KEY(id)
);

INSERT INTO motoristas (nome, placa, avaliacao) VALUES
('Aline Mentz', 'NOV1988', '5.0'),
('William José', 'SET2000', '5.0')

SELECT * FROM motoristas;

INSERT passageiros (nome, contato) VALUES
('Isabel Mentz', '51986578876'),
('Henrique Mentz', '5197658856')

SELECT * FROM passageiros;

INSERT viagens (data_hora, origem, destino, distancia, preco, id_motorista, id_passageiro) VALUES
('2023-08-30 20:55:00', 'São Leopoldo', 'Novo Hamburgo', '25km', 10.00, 1, 1),
('2023-08-30 21:23:00', 'Novo Hamburgo', 'São Leopoldo', '25km', 20.00, 2, 2)

UPDATE motoristas SET placa = 'DEF789' WHERE nome 'Aline Mentz'

UPDATE motoristas 
SET avaliacao = avaliacao + 0,5
WHERE avaliação >= 4.0;

UPDATE Viagens
SET Preco = 20.0
WHERE DataHora < '2023-06-01'

SELECT 











