const express = require('express');
const app = express();
require('dotenv').config()
const mysql = require('mysql2');
const cors = require('cors');

const { encrypt, decrypt } = require('./encryption-handler');

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

app.get('/getpasswords', (req, res) => {
  db.query('SELECT * FROM passwords', 
  (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
})

app.post('/addpasswords', (req, res) => {
  const { password, title } = req.body;
  const encryptedPassword = encrypt(password);
  db.query("INSERT INTO passwords (password, title, iv) VALUES (?, ?, ?)", 
  [encryptedPassword.password, title, encryptedPassword.iv],
  (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/decryptpasswords', (req, res) => {
  res.send(decrypt(req.body));
});