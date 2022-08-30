const router = require("express").Router();

const CoffeeBeans = require("../models/CoffeeBeans.model");
const CoffeeShop = require("../models/CoffeeShop.model");

// SEARCH AND ALL COFFEE PAGE

// Routes

router.get("/shoplist", async (req, res, next) => {
	try {
		let allShops = await CoffeeShop.find().populate("user");

		res.json({ allShops });
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;
