//express
const express = require('express');
const router = express.Router();
const app = express();

//posgresql
const { Client } = require('pg')
const client = new Client()
client.connect()

router.get('/', (req,res) => {
  res.json({ message: 'test'});
});

router.get('/posts', (req,res) => {
  client.query('SELECT * FROM posts', (err, res) => {
    res.json((err ? err.stack : res.rows[0].message));
    client.end()
  })
})

app.use('/', router);
app.listen(3000);
