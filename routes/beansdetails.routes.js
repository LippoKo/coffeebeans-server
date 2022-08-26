const router = require("express").Router();
const CoffeeBeans = require("../models/CoffeeBeans.model");

// Routes
router.get("/beansdetails/:coffeebeansId", (req, res, next) => {
	const { coffeebeansId } = req.params;

	console.log(coffeebeansId);
	CoffeeBeans.findById(coffeebeansId)

		.then((beans) => {
			console.log(beans);
			res.status(200).json(beans);
		})
		.catch((error) => res.json(error));
});

module.exports = router;
