CREATE DATABASE IF NOT EXISTS watersoft;
USE watersoft;

CREATE TABLE Usuario(
id_usuario int primary key auto_increment,
nombre varchar(50),
tipo_usuario varchar(50),
contaseña varchar(50)
);

CREATE TABLE Deposito(
id_deposito int primary key auto_increment,
cantidad_agua int
);

CREATE TABLE Llave_principal(
id_llave int primary key auto_increment,
estado_llave enum('Abierto','Cerrado')
);