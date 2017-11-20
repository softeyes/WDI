var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'geralt',
  password : 'geralt-2017',

  database: 'creatures_db'
});
connection.query('SELECT * FROM `updated_creature_list` WHERE `gender` = "male"', function(err, results, fields){
    console.log(results);

    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });