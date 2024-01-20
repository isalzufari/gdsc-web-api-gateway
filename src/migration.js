require('dotenv').config();

var mysql = require('mysql2');
var migration = require('mysql-migrations');
const {
  MYSQLHOST,
  MYSQLPORT,
  MYSQLUSER,
  MYSQLDATABASE,
  MYSQLPASSWORD
} = process.env;

var connection = mysql.createPool({
  connectionLimit: 10,
  host: MYSQLHOST,
  port: parseInt(MYSQLPORT),
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE
});

migration.init(connection, __dirname + '/migrations', function () {
  console.log("finished running migrations");
});