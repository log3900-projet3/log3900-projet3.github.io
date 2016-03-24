var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "us-cdbr-azure-central-a.cloudapp.net",
  user: "b0212399fa1965",
  password: "4c90e9db",
  database: "pinballgr8db"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM Users',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});