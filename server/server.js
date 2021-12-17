const express = require('express');
const app = express();
require('dotenv').config()
const mysql = require('mysql');

const db = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});