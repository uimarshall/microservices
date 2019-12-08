const mongoose = require("mongoose");
const Order = require("../models/Order");

exports.sayHi = (req, res) => {
	res.send("A warm welcome to all our clients");
};

// Add customers - post
exports.makeOrder = (req, res) => {
	const { orderDate, returnedDate, bookID, customerID } = req.body;
	console.log(req.body);

	const newOrder = new Order({
		customerID: mongoose.Types.ObjectId(req.body.customerID),
		bookID: mongoose.Types.ObjectId(req.body.bookID),
		orderDate,
		returnedDate
	});
	newOrder
		.save()
		.then(() => {
			console.log("New order made");
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
	res.send("New order made successfully!");
};
//  Get Orders - get
exports.getOrders = (req, res) => {
	Customer.find()
		.then(orders => {
			res.json(orders);
			console.log(orders);
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
//  Get customer and book title requested
exports.getBookAndCustomer = (req, res) => {
	Order.findById(req.params.id)
		.then(order => {
			if (order) {
				axios
					.get("http//localhost:5555/customers/" + order.CustomerID)
					.then(response => {
						console.log(response);
						const orderInfo = {
							customerName: response.data.name,
							bookTitle: ""
						};
						axios
							.get("http//localhost:5000/books/" + order.BookID)
							.then(response => {
								orderInfo.bookTitle = response.data.title;
								res.json(orderInfo);
							});
					})
					.catch(err => console.error(err));
			} else {
				res.send("Invalid Order");
			}
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
