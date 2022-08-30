const router = require("express").Router();
const CoffeeBeans = require("../models/CoffeeBeans.model");
const User = require("../models/User.model");

// Routes

// Beans Details
router.get("/beansdetails/:beansId", (req, res, next) => {
	const { beansId } = req.params;

	CoffeeBeans.findById(beansId)
		.populate("user")
		.then((beans) => {
			res.status(200).json(beans);
		})
		.catch((error) => res.json(error));
});

// Edit Beans
router.put("/beansdetails/:beansId", (req, res, next) => {
	const { beansId } = req.params;
	const { store, origin, description, location, imageUrl } = req.body;

	CoffeeBeans.findByIdAndUpdate(
		beansId,
		{ store, origin, description, location, imageUrl },
		{ new: true }
	)
		.then((updatedBeans) => res.status(201).json(updatedBeans))
		.catch((error) => res.json(error));
});

// Delete Beans
router.delete("/beansdetails/:beansId", (req, res, next) => {
	const { beansId } = req.params;

	CoffeeBeans.findByIdAndDelete(beansId)
		.then(() =>
			res.status(200).json({
				message: `CoffeeBeans with id ${beansId} was deleted successfully`,
			})
		)
		.catch((err) => res.json(err));
});

module.exports = router;
