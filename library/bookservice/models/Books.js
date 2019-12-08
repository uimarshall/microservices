const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
	title: {
		type: String
		// required: true
	},
	author: {
		type: String
		// required: true
	},
	numberPages: {
		type: Number,
		required: false
	},
	publisher: {
		type: String,
		required: false
	}
});
module.exports = Books = mongoose.model("books", BooksSchema);
