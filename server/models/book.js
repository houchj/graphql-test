const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongo db will automatically create table with id
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);
