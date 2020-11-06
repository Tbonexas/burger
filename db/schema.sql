-- Create the database burgers_db.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

-- Run the schema.sql and seeds.sql files into the mysql server from the command line.
-- Make sure you're in the db folder of your app.
    -- 1. Start MySQL command line tool and login: <mysql -u root -p>.
    -- 2. With the mysql> command line tool running, enter the command <source schema.sql>. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
    -- 3. Now insert the entries you defined in seeds.sql by running the file: <source seeds.sql>.
    -- 4. Close out of the MySQL command line tool: <exit>.