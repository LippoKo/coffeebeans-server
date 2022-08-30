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
	const { firstName, lastName, username, imageUrl } = req.body;

	User.findByIdAndUpdate(
		userId,
		{ firstName, lastName, username, imageUrl },
		{ new: true }
	)
		.then((updatedUser) => res.status(200).json(updatedUser))
		.catch((error) => res.json(error));
});

module.exports = router;

// Delete Beans
router.delete("/profile/:userId", (req, res, next) => {
	const { userId } = req.params;

	User.findByIdAndDelete(userId)
		.then(() =>
			res.status(200).json({
				message: `User with id ${userId} was deleted successfully`,
			})
		)
		.catch((err) => res.json(err));
});

module.exports = router;
