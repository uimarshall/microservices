const Customer = require("../models/Customers");

exports.welcomeCustomer = (req, res) => {
	res.send("A warm welcome to all our customers");
};

// Add customers - post
exports.addCustomer = (req, res) => {
	const { name, age, address } = req.body;
	console.log(req.body);

	const newCustomer = new Customer({
		name,
		age,
		address
	});
	newCustomer
		.save()
		.then(() => {
			console.log("New customer created");
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
	res.send("New customer created successfully!");
};
//  Get customers - get
exports.showCustomers = (req, res) => {
	Customer.find()
		.then(customers => {
			res.json(customers);
			console.log(customers);
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
//  Get single customer -by id params
exports.getOneCustomer = (req, res) => {
	Customer.findById(req.params.id)
		.then(customer => {
			if (customer) {
				res.json(customer);
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

// delete Customer
exports.deleteCustomer = (req, res) => {
	Customer.findOneAndRemove(req.params.id)
		.then(() => {
			res.send("Customer removed successfully");
		})
		.catch(err => {
			if (err) {
				throw err;
			}
		});
};
