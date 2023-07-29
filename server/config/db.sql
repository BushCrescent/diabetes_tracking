DROP DATABASE IF EXISTS sugar_tracker_db;

CREATE DATABASE sugar_tracker_db;

USE sugar_tracker_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	age INT,
	gender VARCHAR(255)
);

CREATE TABLE sugar_levels (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	date DATE,
	level INT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user (name, age, gender)
VALUES 
	("Jane", 50, "FEMALE"),
	("Joe", 40, "MALE");

INSERT INTO sugar_levels (date, level, user_id)
VALUES
	("2023-07-24", 150, 1),
	("2023-07-25", 160, 1),
	("2023-07-26", 170, 1),
	("2023-07-27", 180, 1),
	("2023-07-28", 140, 1),
	("2023-07-24", 137, 2),
	("2023-07-24", 145, 2),
	("2023-07-24", 148, 2),
	("2023-07-24", 130, 2),
	("2023-07-24", 134, 2);