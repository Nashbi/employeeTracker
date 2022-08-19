DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  _name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT PRIMARY KEY, 
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  department_id INT
);

CREATE TABLE roles (
  id INT PRIMARY KEY, 
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  department_id INT
);

