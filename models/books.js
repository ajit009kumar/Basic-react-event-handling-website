"use strict"

var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
	date: String,
	time: String,
	description: String,
	number_of_people_following_the_event: Number ,
	
});

var Books = mongoose.model('Books',booksSchema);
module.exports = Books;