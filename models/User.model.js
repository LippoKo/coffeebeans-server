const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			match: [
				/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
				"Please use a valid email address",
			],
		},
		password: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			default:
				"https://w7.pngwing.com/pngs/200/420/png-transparent-user-profile-computer-icons-overview-rectangle-black-data.png",
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
