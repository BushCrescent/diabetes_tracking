const mysql = require("mysql2");
const path = require("path");

require("dotenv").config();

let connection;

console.log(
  process.env.HOST,
  process.env.DB_USER,
  process.env.PASSWORD,
  process.env.DATABASE
);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
}

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
