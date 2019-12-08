const express = require("express");
const router = express.Router();
// import controllers
const controllers = require("../controllers/order");
const { sayHi, makeOrder, getOrders, getBookAndCustomer } = controllers;

// Write routes logic
router.get("/", sayHi);

router.post("/order", makeOrder);
router.get("/order", getOrders);
router.get("/order/:id", getBookAndCustomer);
// router.delete("/customers/:id", deleteCustomer);

// Export router
module.exports = router;
