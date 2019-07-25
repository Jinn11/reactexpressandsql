const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '10.9.3.217:3306',
  user: 'TWStudent',
  password: 'TechWorks!',
  database: 'techworks',
});

mysqlConnection.connect(err => {
  if (!err) console.log(`DB connection succeded`);
  else console.log(`DB connection failed \n Error: ${JSON.stringify(err,undefined,2)}`);
});
