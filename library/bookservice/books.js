const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect db
mongoose.connect(
	"mongodb+srv://marshall1:C0smos@1a2z@project-0-yyayt.mongodb.net/test?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
	() => {
		console.log("Db is starting!");
	}
);

app.get("", (req, res) => {
	res.send("Way to start");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
