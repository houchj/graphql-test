const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongo db will automatically create table with id
const authorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);
