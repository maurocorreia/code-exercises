const connection = require('./connection');

const getAllBooks = async () => {
    const [books] = await connection.execute('SELECT books.id, books.title, CONCAT(authors.first_name," ",authors.last_name) AS author_name FROM model_example.books AS books INNER JOIN authors AS authors ON books.author_id = authors.id;');
    return books;
}

const getBookById = async (id) => {
    const query = 'SELECT books.id, books.title, CONCAT(authors.first_name," ",authors.last_name) AS author_name FROM model_example.books AS books INNER JOIN authors AS authors ON books.author_id = authors.id WHERE books.id = ?;'
    const [booksById] = await connection.execute(query, [id]);
    return booksById;
}

const newBookValid = (title, author_id) => {
    if(!title) return false;
    if(title.length < 3) return false;
    if(!author_id) return false;
    if(author_id > 5 || author_id < 1) return false;

    return true;
}
const createBook = async (title, author_id) =>  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES(?,?)',[title, author_id]);

module.exports = {
    getAllBooks,
    getBookById,
    newBookValid,
    createBook
}