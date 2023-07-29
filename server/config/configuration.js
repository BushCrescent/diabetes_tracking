const mysql = require("mysql");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  });
}

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
