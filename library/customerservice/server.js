const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customers");

const app = express();

// Connect db
mongoose.connect(
	"mongodb://marshall:pass123@ds251618.mlab.com:51618/customerservice",
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	() => {
		console.log("Db is starting!");
	}
);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes middleware
app.use("/api", customerRoutes);

const port = process.env.PORT || 5555;

app.listen(port, () =>
	console.log(`Server running on port ${port} for customer service`)
);
