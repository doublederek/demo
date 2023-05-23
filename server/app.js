const express = require('express');
const { Player } = require('./models/Player');
const sequelize = require('./database');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/media'));

app.get('/media', (req, res) => {
  console.log(req);
  res.send('http://localhost:3000/derek.png');
})

// API routes
app.get('/players', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.post('/players', async (req, res) => {
  try {
    const { name, score } = req.body;
    const player = await Player.create({ name, score });
    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.get('/test', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    res.send('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Unable to connect to the database.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
