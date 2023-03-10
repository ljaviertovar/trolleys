import { ItemTrolley } from "@/interfaces/trolley-interfaces"
import mongoose, { Model, model } from "mongoose"

const itemTrolleySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		checked: {
			type: Boolean,
			default: false,
			require: true,
		},
		trolleyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "trolley",
			require: true,
		},
	},
	{ timestamps: true }
)

const ItemTrolleyModel = (Model<ItemTrolley> = mongoose.models.ItemTrolley || model("ItemTrolley", itemTrolleySchema))

export default ItemTrolleyModel
