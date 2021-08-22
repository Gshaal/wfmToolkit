# WFM Toolkit

WFM Toolkit is a web application built with Express and React to manage WFM activities.

## Live Demo

https://wfm-toolkit.herokuapp.com/

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



use the SQL.dump file to create the database locally and pass the config in the dbcon.js file

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

```bash
npm run server 
```

```bash
cd Client
```

```bash
npm start 
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
