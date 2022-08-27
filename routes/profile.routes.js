const router = require("express").Router();
const User = require("../models/User.model");

// Routes

// Get User
router.get("/profile/:userId", (req, res) => {
	const { userId } = req.params;

	User.findById(userId)
		.populate("createdBeans")
		.populate("createdShops")
		.then((user) => res.status(200).json(user))
		.catch((error) => res.json(error));
});

// Edit User
router.put("/profile/:userId", (req, res) => {
	const { userId } = req.params;
	const { firstName, lastName, username, image } = req.body;

	User.findByIdAndUpdate(
		userId,
		{ firstName, lastName, username, image },
		{ new: true }
	)
		.then((updatedUser) => res.status(200).json(updatedUser))
		.catch((error) => res.json(error));
});

module.exports = router;
