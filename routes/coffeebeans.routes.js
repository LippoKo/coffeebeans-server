const router = require("express").Router();
const User = require("../models/User.model");
const CoffeeBeans = require("../models/CoffeeBeans.model");

// Routes
router.post("/coffeebeans", (req, res, next) => {
	const { store, origin, description, imageUrl, location, user } = req.body;

	console.log(user);

	CoffeeBeans.create({
		store,
		origin,
		description,
		imageUrl,
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
