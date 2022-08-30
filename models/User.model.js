const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			/* required: true, */
			/* unique: true, */
		},
		lastName: {
			type: String,
			/* required: true, */
			/* unique: true, */
		},
		username: {
			type: String,
			/* required: true, */
			/* unique: true, */
		},
		email: {
			type: String,
			/* required: true, */
			/* unique: true,
			lowercase: true,
			trim: true,
			match: [
				/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
				"Please use a valid email address",
			], */
		},
		password: {
			type: String,
			/* required: true, */
		},
		imageUrl: {
			type: String,
		},

		createdBeans: [{ type: Schema.Types.ObjectId, ref: "CoffeeBeans" }],

		createdShops: [{ type: Schema.Types.ObjectId, ref: "CoffeeShop" }],
	},
	{
		timestamps: true,
	}
);

const User = model("User", userSchema);

module.exports = User;
