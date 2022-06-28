const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

const swaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const connectDB = require('./db/connect');

// Connect the database
connectDB();

const port = process.env.PORT || 8080;

const app = express();

// const uri = process.env.MONGO_DB_URI;

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, E-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
  })
  .use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Exception: ${err}\n` + `Origin: ${origin}`);
});

app.listen(port, console.log(`Server running on port ${port}`));

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });
