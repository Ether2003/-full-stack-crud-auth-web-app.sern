CREATE DATABASE IF NOT EXISTS sharkdb;

use sharkdb;

DROP TABLE IF EXISTS sharks;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS sharks (
    id varchar(255) NOT NULL,
    name varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL
);