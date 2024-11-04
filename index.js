const express = require('express');
const path = require('path');
const app = express();

const hero = require("./src/model/hero");

app.get('/hero', (req, res) => {
  res.send(hero);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "static/html", "hero.html"));
});

app.use(express.static('static'))

const server = app.listen(8081, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = app;