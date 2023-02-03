import { Trolley } from "@/interfaces/trolley-interfaces"
import mongoose, { model, Model } from "mongoose"

const trolleySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true }
)

trolleySchema.index({ name: "text" })

const TrolleyModel: Model<Trolley> = mongoose.models.Trolley || model("Trolley", trolleySchema)
export default TrolleyModel
