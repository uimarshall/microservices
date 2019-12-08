const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/book");

// If you don't initialise the app as 'const app = express()', data will not be posted to the database
// The application will not know which app to use e.g 'app.use(bodyParser.json())'.
const app = express();
// Connect db
mongoose.connect(
	"mongodb://marshall:pass123@ds139934.mlab.com:39934/librarydb",
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	() => {
		console.log("Db is starting!");
	}
);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes middleware
app.use("/api", bookRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
