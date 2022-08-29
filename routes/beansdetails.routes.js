const router = require("express").Router();
const CoffeeBeans = require("../models/CoffeeBeans.model");
const User = require("../models/User.model");

// Routes

// Beans Details
router.get("/beansdetails/:coffeebeansId", (req, res, next) => {
	const { coffeebeansId } = req.params;

	CoffeeBeans.findById(coffeebeansId)
		.populate("user")
		.then((beans) => {
			res.status(200).json(beans);
		})
		.catch((error) => res.json(error));
});

// Edit Beans
router.put("/beansdetails/:coffeebeansId", (req, res, next) => {
	const { coffeebeansId } = req.params;
	const { store, origin, description, location, imageUrl } = req.body;

	CoffeeBeans.findByIdAndUpdate(
		coffeebeansId,
		{ store, origin, description, location, imageUrl },
		{ new: true }
	)
		.then((updatedBeans) => res.status(201).json(updatedBeans))
		.catch((error) => res.json(error));
});

// Delete Beans
router.delete("/beansdetails/:coffeebeansId", (req, res, next) => {
	const { coffeebeansId } = req.params;

	CoffeeBeans.findByIdAndDelete(coffeebeansId)
		.then(() =>
			res.status(200).json({
				message: `CoffeeBeans with id ${coffeebeansId} was deleted successfully`,
			})
		)
		.catch((err) => res.json(err));
});

module.exports = router;
