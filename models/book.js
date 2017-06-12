var mongoose = require('mongoose');

// Genres Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Books', bookSchema);