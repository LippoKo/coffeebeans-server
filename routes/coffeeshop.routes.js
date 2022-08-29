const router = require("express").Router();
const User = require("../models/User.model");
const CoffeeShop = require("../models/CoffeeShop.model");

// Routes
router.post("/coffeeshop", (req, res, next) => {
	const { store, description, imageUrl, location, user } = req.body;

	CoffeeShop.create({
		store,
		description,
		imageUrl,
		location,
		user,
	})
		.then((newCoffeeShop) => {
			console.log(newCoffeeShop);
			return User.findByIdAndUpdate(user, {
				$push: { createdShops: newCoffeeShop._id },
			});
		})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

module.exports = router;
