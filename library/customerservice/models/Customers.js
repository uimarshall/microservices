const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
	name: {
		type: String
		// required: true
	},
	age: {
		type: Number
		// required: true
	},
	address: {
		type: String,
		required: true
	}
});
module.exports = Customers = mongoose.model("customers", CustomersSchema);
