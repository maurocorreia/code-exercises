const fs = require('fs').promises;

fs.writeFile('./text-files/secondFile.txt', '> w <.')
  .then(() => console.log('Escrito com sucesso.'))
  .catch((err) => console.log(err.message));