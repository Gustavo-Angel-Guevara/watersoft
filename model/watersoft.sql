drop database watersoft;

CREATE DATABASE IF NOT EXISTS watersoft;
USE watersoft;

CREATE TABLE IF NOT EXISTS Usuario(
id_usuario int primary key auto_increment,
nombre varchar(50),
tipo_usuario enum('Administrador','Tecnico'),
contra varchar(50)
);

CREATE TABLE IF NOT EXISTS Deposito(
id_deposito int primary key auto_increment,
cantidad_agua int
);

CREATE TABLE IF NOT EXISTS Llave_principal(
id_llave int primary key auto_increment,
estado_llave enum('Abierto','Cerrado')
);

INSERT INTO usuario(nombre, tipo_usuario, contra) VALUES("Admin", 1, "Admin123");

SELECT * FROM usuario;