const router = require("express").Router();

const CoffeeBeans = require("../models/CoffeeBeans.model");
const CoffeeShop = require("../models/CoffeeShop.model");

// SEARCH AND ALL COFFEE PAGE

// Routes

router.get("/beanslist", async (req, res, next) => {
	try {
		let allBeans = await CoffeeBeans.find().populate("user");

		res.json({ allBeans });
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;
