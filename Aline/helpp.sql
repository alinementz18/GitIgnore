CREATE DATABASE helpp;

-- Tabela: Usuarios
CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,
    TipoUsuario ENUM('Cliente', 'PrestadorServicos') NOT NULL,
    Telefone VARCHAR(15),
    Endereco VARCHAR(255),
    Cidade VARCHAR(100),
    Estado VARCHAR(50),
    CEP VARCHAR(10),
    FotoPerfil VARCHAR(255) DEFAULT 'default.jpg',
    DataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: PrestadoresDeServicos
uberCREATE TABLE PrestadoresDeServicos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDUsuario INT UNIQUE,
    CategoriaServico VARCHAR(255) NOT NULL,
    AvaliacaoMedia DECIMAL(3, 2),
    DescricaoServicos TEXT,
    Disponibilidade DATE,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

-- Tabela: Agendamentos
CREATE TABLE Agendamentos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDCliente INT,
    IDPrestadorServicos INT,
    DataHoraAgendamento DATETIME,
    Status ENUM('Agendado', 'Confirmado', 'Concluido', 'Cancelado') NOT NULL,
    ComentariosNotas TEXT,
    Valor DECIMAL(10, 2),
    FOREIGN KEY (IDCliente) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDPrestadorServicos) REFERENCES PrestadoresDeServicos(ID)
);

-- Tabela: Avaliacoes
CREATE TABLE Avaliacoes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDPrestadorServicos INT,
    IDCliente INT,
    Classificacao INT,
    Comentario TEXT,
    DataAvaliacao DATETIME,
    FOREIGN KEY (IDPrestadorServicos) REFERENCES PrestadoresDeServicos(ID),
    FOREIGN KEY (IDCliente) REFERENCES Usuarios(ID)
);

-- Tabela: Mensagens
CREATE TABLE Mensagens (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDRemetente INT,
    IDDestinatario INT,
    ConteudoMensagem TEXT,
    DataHoraEnvio DATETIME,
    FOREIGN KEY (IDRemetente) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDDestinatario) REFERENCES Usuarios(ID)
);

-- Tabela: Pagamentos
CREATE TABLE Pagamentos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDCliente INT,
    IDPrestadorServicos INT,
    IDAgendamento INT,
    Valor DECIMAL(10, 2) NOT NULL,
    DataPagamento DATETIME,
    MetodoPagamento VARCHAR(50),
    FOREIGN KEY (IDCliente) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDPrestadorServicos) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDAgendamento) REFERENCES Agendamentos(ID)
);

SELECT * FROM usuarios;

SELECT * FROM PrestadoresDeServicos;

SELECT * FROM Agendamentos;

SELECT * FROM Avaliacoes;

SELECT * FROM Mensagens;

-- Inserindo dados de exemplo na tabela Usuarios (Clientes)
INSERT INTO Usuarios (Nome, Email, Senha, TipoUsuario, Telefone, Endereco, Cidade, Estado, CEP)
VALUES
    ('João Silva', 'joao@email.com', 'senha123', 'Cliente', '123-456-7890', 'Rua das Flores, 123', 'São Paulo', 'SP', '01234-567'),
    ('Maria Souza', 'maria@email.com', 'senha456', 'Cliente', '987-654-3210', 'Avenida Principal, 456', 'Rio de Janeiro', 'RJ', '98765-432');

-- Inserindo dados de exemplo na tabela Usuarios (Prestadores de Serviços)
INSERT INTO Usuarios (Nome, Email, Senha, TipoUsuario, Telefone, Endereco, Cidade, Estado, CEP)
VALUES
    ('Carlos Mendes', 'carlos@email.com', 'senha789', 'PrestadorServicos', '111-222-3333', 'Rua dos Ofícios, 789', 'São Paulo', 'SP', '04567-890'),
    ('Ana Pereira', 'ana@email.com', 'senha101', 'PrestadorServicos', '444-555-6666', 'Avenida das Artes, 101', 'Rio de Janeiro', 'RJ', '02345-678');

-- Inserindo dados de exemplo na tabela PrestadoresDeServicos (com base nos IDs de Usuarios)
INSERT INTO PrestadoresDeServicos (IDUsuario, CategoriaServico, AvaliacaoMedia, DescricaoServicos, Disponibilidade)
VALUES
    (3, 'Encanador', 4.5, 'Especializado em reparos hidráulicos', '2023-08-15'),
    (4, 'Eletricista', 4.2, 'Instalações elétricas e manutenção', '2023-08-16');
    
    SELECT * FROM usuarios;
    
    SELECT * FROM PrestadoresDeServicos;
    
    
    
    
    
    
    
    




