DROP DATABASE IF EXISTS cards_db;
CREATE DATABASE cards_db;

USE cards_db;

CREATE TABLE title(
  id INT NOT NULL,
  card_name VARCHAR(30) NOT NULL,
);

CREATE TABLE categories(
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

