const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const coffeeBeansSchema = new Schema(
	{
		store: {
			type: String,
		},
		origin: {
			type: [String],
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

module.exports = model("CoffeeBeans", coffeeBeansSchema);
