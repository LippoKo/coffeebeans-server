const router = require("express").Router();
const CoffeeShop = require("../models/CoffeeShop.model");

// Routes
router.get("/shopdetails/:coffeeshopId", (req, res, next) => {
	const { coffeeshopId } = req.params;

	CoffeeShop.findById(coffeeshopId)
		.then((shop) => {
			console.log(shop);
			res.status(200).res(shop);
		})
		.catch((error) => res.json(error));
});

module.exports = router;
