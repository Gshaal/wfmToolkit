var mysql= require('mysql');
var connection = mysql.createPool({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b040c4d0e68881',
  password: 'ac5e9650',
  database: 'heroku_930837092c17f24'
});
 


module.exports = connection;

