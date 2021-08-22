# WFM Toolkit

Foobar is a web application built with Express and React to manage WFM activities.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies for the client and server.

```bash
npm install 
```

```bash
cd Client
```

```bash
npm install 
```

## Usage

use the SQL.dump file to create the database locally and pass the config in the dbconfig.js file

```javascript

var mysql= require('mysql');
var connection = mysql.createPool({
  host: 'HOST',
  user: 'USER',
  password: 'PASWWORD',
  database: 'DATABASE'
});
 


module.exports = connection;


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)