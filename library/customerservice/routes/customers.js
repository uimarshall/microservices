// Actionables
// =========================================================
// 1. create a router
// 2. import controllers
// 3. Write routes logic
// 4. Export router
// =========================================================
// create a router
const express = require("express");
const router = express.Router();
// import controllers
const controllers = require("../controllers/customers");
const {
	welcomeCustomer,
	addCustomer,
	showCustomers,
	getOneCustomer,
	deleteCustomer
} = controllers;

// Write routes logic
router.get("/", welcomeCustomer);

router.post("/customers", addCustomer);
router.get("/customers", showCustomers);
router.get("/customers/:id", getOneCustomer);
router.delete("/customers/:id", deleteCustomer);

// Export router
module.exports = router;
