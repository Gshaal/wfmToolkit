require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000


// routes => 

const authinticationRoutes = require("./Routes/authR");
const schedulerRoutes = require('./Routes/schedulerR');
const holidayRoutes = require('./Routes/holidayR');
const settingsRoutes = require('./Routes/settingsR')

//deploy to prod = (read) => https://lo-victoria.com/build-a-mysql-nodejs-crud-app-4-deploying-to-heroku-finale

app.use(cors())

app.use(express.json({ limit: '100mb' }));

app.use(
  express.static(path.join(__dirname, "clinet/build"), { maxAge: "365d" })
);

const accessLogs = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogs }));


app.use("/api/auth", authinticationRoutes);
app.use('/api/schduler', schedulerRoutes)
app.use('/api/holiday', holidayRoutes)
app.use('/api/settings', settingsRoutes)

// Handles any requests that don't match the ones above =>
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/clinet/build/index.html"));
});


app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, results: data, error: true });
});


const server = app.listen(port);
const io = require("./socket").init(server);
io.on("connection", (socket) => {
  console.error("found a client " + socket.id);
});



