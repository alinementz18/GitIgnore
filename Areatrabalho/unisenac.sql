-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.33 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para hqs
CREATE DATABASE IF NOT EXISTS `hqs` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hqs`;

-- Copiando estrutura para tabela hqs.banca_revista
CREATE TABLE IF NOT EXISTS `banca_revista` (
  `id_banca` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_banca`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.banca_revista: ~5 rows (aproximadamente)
INSERT INTO `banca_revista` (`id_banca`, `nome`, `endereco`, `telefone`) VALUES
	(1, 'Banca do João', 'Rua A, 123', '1234567890'),
	(2, 'Banca da Maria', 'Rua B, 456', '9876543210'),
	(3, 'Banca do Pedro', 'Rua C, 789', '6543210987'),
	(4, 'Banca da Ana', 'Rua D, 321', '0123456789'),
	(5, 'Banca do Carlos', 'Rua E, 654', '9870123456');

-- Copiando estrutura para tabela hqs.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.cliente: ~5 rows (aproximadamente)
INSERT INTO `cliente` (`id_cliente`, `nome`, `salario`, `endereco`, `telefone`) VALUES
	(1, 'João Silva', 2000.00, 'Rua A, 123', '1234567890'),
	(2, 'Maria Santos', 2500.00, 'Rua B, 456', '9876543210'),
	(3, 'Pedro Oliveira', 3000.00, 'Rua C, 789', '6543210987'),
	(4, 'Ana Pereira', 2800.00, 'Rua D, 321', '0123456789'),
	(5, 'Carlos Ferreira', 3500.00, 'Rua E, 654', '9870123456');

-- Copiando estrutura para tabela hqs.estoque
CREATE TABLE IF NOT EXISTS `estoque` (
  `id_produto` int NOT NULL,
  `quantidade` int NOT NULL,
  `valor_atacado` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_produto`),
  CONSTRAINT `estoque_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.estoque: ~5 rows (aproximadamente)
INSERT INTO `estoque` (`id_produto`, `quantidade`, `valor_atacado`) VALUES
	(6, 100, 10.50),
	(7, 120, 9.99),
	(9, 200, 8.25),
	(10, 50, 15.75),
	(11, 75, 12.00);

-- Copiando estrutura para tabela hqs.fornecedor
CREATE TABLE IF NOT EXISTS `fornecedor` (
  `id_fornecedor` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_fornecedor`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.fornecedor: ~10 rows (aproximadamente)
INSERT INTO `fornecedor` (`id_fornecedor`, `nome`, `endereco`, `telefone`) VALUES
	(1, 'Panini Comics', 'Rua Alpha, 123', '1234567890'),
	(2, 'Marvel', 'Rua Beta, 456', '9876543210'),
	(3, 'Vertigo', 'Rua Gama, 789', '6543210987'),
	(4, 'DC', 'Rua Delta, 321', '0123456789'),
	(5, 'DC Black Label', 'Rua Epsilon, 654', '9870123456'),
	(6, 'Marvel 2', 'Rua Alpha, 123', '1234567890'),
	(7, 'Editora B', 'Rua Beta, 456', '9876543210'),
	(8, 'Editora C', 'Rua Gama, 789', '6543210987'),
	(9, 'Editora D', 'Rua Delta, 321', '0123456789'),
	(10, 'Editora E', 'Rua Epsilon, 654', '9870123456');

-- Copiando estrutura para tabela hqs.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `id_produto` int NOT NULL,
  `id_fornecedor` int NOT NULL,
  `id_vendedor` int DEFAULT NULL,
  `valor_pedido` decimal(10,2) NOT NULL,
  `valor_frete` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `id_produto` (`id_produto`),
  KEY `id_fornecedor` (`id_fornecedor`),
  KEY `id_vendedor` (`id_vendedor`),
  CONSTRAINT `fkvendedor` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id_vendedor`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_fornecedor`) REFERENCES `fornecedor` (`id_fornecedor`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.pedidos: ~6 rows (aproximadamente)
INSERT INTO `pedidos` (`id_pedido`, `id_produto`, `id_fornecedor`, `id_vendedor`, `valor_pedido`, `valor_frete`) VALUES
	(1, 6, 1, 4, 250.00, 25.00),
	(2, 7, 2, 4, 180.00, 20.00),
	(3, 8, 3, 4, 120.00, 15.00),
	(4, 9, 1, 5, 200.00, 30.00),
	(5, 10, 2, 2, 150.00, 18.00),
	(6, 6, 3, 1, 500.00, 12.00);

-- Copiando estrutura para tabela hqs.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `valor_varejo` decimal(10,2) NOT NULL,
  `id_fornecedor` int NOT NULL,
  PRIMARY KEY (`id_produto`),
  KEY `id_fornecedor` (`id_fornecedor`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`id_fornecedor`) REFERENCES `fornecedor` (`id_fornecedor`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.produtos: ~10 rows (aproximadamente)
INSERT INTO `produtos` (`id_produto`, `nome`, `valor_varejo`, `id_fornecedor`) VALUES
	(6, 'Hellblazer: The Devil\'s Trenchcoat', 49.99, 1),
	(7, 'Watchmen', 29.99, 2),
	(8, 'Maus', 19.99, 1),
	(9, 'Sandman: Prelúdios e Noturnos', 39.99, 3),
	(10, 'Saga: Volume 1', 24.99, 2),
	(11, 'Batman: O Cavaleiro das Trevas', 34.99, 1),
	(12, 'X-Men: Dias de um Futuro Esquecido', 27.99, 3),
	(13, 'Hellboy: Sementes da Destruição', 19.99, 2),
	(14, 'V for Vendetta', 22.99, 1),
	(15, 'Sin City', 29.99, 3);

-- Copiando estrutura para tabela hqs.vendedor
CREATE TABLE IF NOT EXISTS `vendedor` (
  `id_vendedor` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_vendedor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela hqs.vendedor: ~5 rows (aproximadamente)
INSERT INTO `vendedor` (`id_vendedor`, `nome`, `salario`, `endereco`, `telefone`) VALUES
	(1, 'Rafaela Souza', 2500.00, 'Rua X, 789', '9876543210'),
	(2, 'Fernando Lima', 3000.00, 'Rua Y, 456', '6543210987'),
	(3, 'Luciana Santos', 2800.00, 'Rua Z, 321', '0123456789'),
	(4, 'Gustavo Mendes', 3200.00, 'Rua W, 654', '9870123456'),
	(5, 'Juliana Costa', 2800.00, 'Rua V, 123', '1234567890');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
