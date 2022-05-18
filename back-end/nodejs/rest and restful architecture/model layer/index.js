const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;

    const booksById = await Book.getBookById(id);
    res.json(booksById);
});

app.post('/createbook', async (req, res) => {
    const { title, author_id } = req.body;

    if(!Book.newBookValid(title, author_id)) return res.status(400).json({message: 'Dados Inválidos'});

    await Book.createBook(title, author_id);
    res.status(201).json({message: 'Livro criado com sucesso.'})
});

app.listen(3001, () => console.log('Listening port 3001.'));