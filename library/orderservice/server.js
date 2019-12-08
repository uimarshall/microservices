const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/order");

const app = express();

// Connect db
mongoose.connect(
	"mongodb://marshall:pass123@ds119853.mlab.com:19853/orderservicee",
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	() => {
		console.log("Db is starting!");
	}
);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes middleware
app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () =>
	console.log(`Server running on port ${port} for order service`)
);
