const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const coffeeShopSchema = new Schema(
	{
		store: {
			type: String,
		},
		description: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
		},
		location: {
			type: String,
			required: true,
		},
		user: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{
		timestamps: true,
	}
);

module.exports = model("CoffeeShop", coffeeShopSchema);
