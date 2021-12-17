const express = require('express');
const app = express();
require('dotenv').config()
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log('Server started on port 8000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/addpasswords', (req, res) => {
  const { password, title } = req.body;
  db.query("INSERT INTO passwords (pw_passwords, pw_title) VALUES (?,?)", 
  [password, title], 
  (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});