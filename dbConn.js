var mysql= require('mysql');
var connection = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});
 


module.exports = connection;

