var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pokemon",
  database: "Game_Database"
});

con.connect(function(err){
  if(err){
    console.log('hey');
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});



con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});