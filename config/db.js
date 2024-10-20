const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
host : 'localhost',
user : 'root',
password : '1234',
database : 'blog'
});
module.exports = mySqlPool;