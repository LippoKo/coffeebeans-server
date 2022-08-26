const router = require("express").Router();
const User = require("../models/User.model");
const CoffeeBeans = require("../models/CoffeeBeans.model");

// Routes
router.post("/coffeebeans", (req, res, next) => {
	const { store, origin, description, image, location, user } = req.body;

	CoffeeBeans.create({
		store,
		origin,
		description,
		image,
		location,
		user,
	})
		.then((newCoffeeBeans) => {
			return User.findByIdAndUpdate(user, {
				$push: { createdBeans: newCoffeeBeans._id },
			});
		})
		.then((response) => {
			res.json(response);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
