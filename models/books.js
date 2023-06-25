const mongoose = require('mongoose')
const {Schema} = mongoose

const booksSchema = Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String  
})
module.exports = Book 