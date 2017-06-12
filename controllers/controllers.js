// Models
var genre = require('../models/genre');
var book = require('../models/book');

// Genre Controllers
function findAllGenres (req, res) {
    genre.find()
    .then(function(genres) {
        res.status(200).json(genres);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function findGenreById(req, res) {
    genre.findById(req.params.id)
    .then(function(genre) {
        res.status(200).json(genre);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function insertGenre(req, res) {
    genre.create(req.body)
    .then(function(genre) {
        res.status(200).json(genre);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function updateGenre(req, res) {
    genre.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(genre) {
        res.status(200).json(genre);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function deleteGenre(req, res) {
    genre.remove({_id: req.params.id})
    .then(function(genre) {
        res.status(200).json(genre);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

// Book Controllers
function findAllBooks(req, res) {
    book.find()
    .then(function(books) {
        res.status(200).json(books);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    }); 
}

function findBookById(req, res) {
    book.findById(req.params.id)
    .then(function(book) {
        res.status(200).json(book);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function insertBook(req, res) {
    book.create(req.body)
    .then(function(book) {
        res.status(200).json(book);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

function deleteBook(req, res) {
    book.remove({_id: req.params.id})
    .then(function(book) {
        res.status(200).json(book);
    })
    .catch(function(err) {
        return res.status(400).send(err);
    });
}

module.exports = {
    findAllGenres: findAllGenres,
    findGenreById: findGenreById,
    insertGenre: insertGenre,
    updateGenre: updateGenre,
    deleteGenre: deleteGenre,
    findAllBooks: findAllBooks,
    findBookById: findBookById,
    insertBook: insertBook,
    deleteBook: deleteBook
}