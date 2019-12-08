const express = require("express");
const router = express.Router();
const controllers = require("../controllers/book");
const { sayHello, addBook, showBooks, getOneBook, deleteBook } = controllers;

router.get("/", sayHello);
router.post("/books", addBook);
router.get("/books", showBooks);
router.get("/books/:id", getOneBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
