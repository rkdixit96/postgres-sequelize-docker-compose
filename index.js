const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./database/models');

const app = express();

app.get('/users', async (req, res) => {
  const users = await db.Users.findAll();
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
