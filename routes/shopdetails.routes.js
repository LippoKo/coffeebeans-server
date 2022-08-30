const router = require("express").Router();
const CoffeeShop = require("../models/CoffeeShop.model");

// Routes

// Shop Details
router.get("/shopdetails/:coffeeshopId", (req, res, next) => {
	const { coffeeshopId } = req.params;

	CoffeeShop.findById(coffeeshopId)
		.populate("user")
		.then((shop) => {
			res.status(200).json(shop);
		})
		.catch((error) => res.json(error));
});

// Edit Shop
router.put("/shopdetails/:coffeeshopId", (req, res, next) => {
	const { coffeeshopId } = req.params;
	const { store, description, location, imageUrl } = req.body;

	CoffeeShop.findByIdAndUpdate(
		coffeeshopId,
		{ store, description, location, imageUrl },
		{ new: true }
	)
		.then((updatedShop) => res.status(201).json(updatedShop))
		.catch((error) => res.json(error));
});

// Delete shop
router.delete("/shopdetails/:coffeeshopId", (req, res, next) => {
	const { coffeeshopId } = req.params;

	CoffeeShop.findByIdAndDelete(coffeeshopId)
		.then(() =>
			res.status(200).json({
				message: `CoffeeShop with id ${coffeeshopId} was deleted successfully`,
			})
		)
		.catch((err) => res.json(err));
});

module.exports = router;
