// Connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306, //default port for MySQL //
    user: 'dwaehiqslzfzvrcz',
    password: 't271g5e22bjeo7j8',
    database: "	csne2l0o2roo8awf"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;