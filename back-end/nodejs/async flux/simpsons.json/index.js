const fs = require('fs').promises;

async function readingData() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  data.map(element => console.log(`${element.id} - ${element.name}`));
}

async function findingData(id) {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));

  return new Promise((resolve, reject) => {
    if (data.every((element) => element.id !== id)) reject(new Error("ID não encontrado."));
    resolve(data.find((element) => element.id === id));
  })
}

async function deletingData() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const filteredData = JSON.stringify(data.filter((element) => element.id !== '10' && element.id !== '6'));

  fs.writeFile('./simpsons.json', filteredData)
    .then(() => console.log('Escrito com sucesso.'))
    .catch((err) => console.log(err.message));
}

async function gettingData() {
  const data = JSON.parse(await fs.readFile('simpsons.json', 'utf8'));
  const filteredData = JSON.stringify(data.filter((element) => Number(element.id) > 0 && Number(element.id) < 5));

  fs.writeFile('./simpsonsFamily.json', filteredData)
    .then(() => console.log('Escrito com sucesso.'))
    .catch((err) => console.log(err.message));
}

async function addingData() {
  const data = JSON.parse(await fs.readFile('simpsonsFamily.json', 'utf8'));
  const filteredData = JSON.stringify([...data, {id:'5', name: 'Nelson Muntz'}]);

  fs.writeFile('./simpsonsFamily.json', filteredData)
    .then(() => console.log('Escrito com sucesso.'))
    .catch((err) => console.log(err.message));
}

async function replacingData() {
  const data = JSON.parse(await fs.readFile('simpsonsFamily.json', 'utf8'));
  const filteredData = JSON.stringify(data.map((element) => {
    if(element.name.includes('Nelson')) return {id:'5', name: 'Maggie Simpson'}
    else return element;
  }));

  fs.writeFile('./simpsonsFamily.json', filteredData)
    .then(() => console.log('Escrito com sucesso.'))
    .catch((err) => console.log(err.message));
}

// readingData();
// findingData('2').then(el => console.log(el)).catch((err) => console.log(err));
// deletingData();
// gettingData();
// addingData();
// replacingData();