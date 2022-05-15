const fs = require('fs').promises;

const nomeDoArquivo = './text-files/firstFile.txt';
const segundoArquivo = './text-files/secondFile.txt'

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

Promise
  .all([fs.readFile(nomeDoArquivo, 'utf8'), fs.readFile(segundoArquivo, 'utf8')])
  .then(([data1, data2]) => console.log(data1, data2));