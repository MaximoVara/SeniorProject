var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'sqlTest', 
    password: 'testingSQL-', 
    database: 'MySQLServer'
});

con.connect(function(err){
    if(err) throw err;
    console.log("Hello World!\n");
});