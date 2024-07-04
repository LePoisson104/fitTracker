const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST_NAME,
  database: process.env.DATABASE_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
});

pool.getConnection((err) => {
  if (err) throw err;
  console.log("database connected sucessfully!");
});

module.exports = pool;
