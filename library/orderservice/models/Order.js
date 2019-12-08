const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	customerID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	bookID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	orderDate: {
		type: Date,
		required: true
	},
	returnedDate: {
		type: Date,
		required: true
	}
});

module.exports = Orders = mongoose.model("orders", OrderSchema);
