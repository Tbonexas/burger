// Connect Node to MySQL.
const mysql = require("mysql");
let connection;
//make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "dwaehiqslzfzvrcz",
    password: "t271g5e22bjeo7j8",
    database: "csne2l0o2roo8awf"
  });
}
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
