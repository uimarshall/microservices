const Book = require("../models/Books");
exports.sayHello = (req, res) => {
	res.json({ message: "Welcome Hello!" });
};

exports.addBook = (req, res) => {
	const { title, author, numberPages, publisher } = req.body;
	console.log(req.body);
	// res.send("Testing the route!");
	const newBook = new Book({
		// title: req.body.title,
		// author: req.body.author,
		// numberPages: req.body.numberPages,
		// publisher: req.body.publisher
		title,
		author,
		numberPages,
		publisher
	});
	newBook
		.save()
		.then(() => {
			console.log("New book created");
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
	res.send("New book created successfully!");
};

exports.showBooks = (req, res) => {
	Book.find()
		.then(books => {
			res.json(books);
			console.log(books);
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
exports.getOneBook = (req, res) => {
	Book.findById(req.params.id)
		.then(book => {
			if (book) {
				res.json(book);
			} else {
				res.sendStatus(404);
			}
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};

// delete Book
exports.deleteBook = (req, res) => {
	Book.findOneAndRemove(req.params.id)
		.then(() => {
			res.send("Book removed successfully");
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
