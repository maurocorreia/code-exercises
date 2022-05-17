const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const simpsonsData = require('./data.js');

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/', function (req, res) {
  res.json(simpsonsData);
});

app.post('/', function (req, res) {
  const { id, name } = req.body;

  if(simpsonsData.some((r) => r.id === id)) return res.status(409).json({ message: 'id already exists' });

  simpsonsData.push({ id, name });
  res.status(204).end();
});

app.get('/simpsons/:id', function (req, res) {
  const { id } = req.params;

  if (!simpsonsData.some((r) => r.id === id)) return res.status(404).json({ message: 'simpson not found' });

  const filterData = simpsonsData.filter((r) => r.id === id);
  res.status(200).json(filterData);
});
