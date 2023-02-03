import { connectDB, disconnectDB } from "@/database"
import { Trolley, ItemTrolley } from "models"

const resolvers = {
	Query: {
		trolleys: async () => {
			await connectDB()
			const trolleys = Trolley.find()
			await disconnectDB()
			return trolleys
		},
		itemsTrolley: async () => {
			await connectDB()
			const items = ItemTrolley.find()
			await disconnectDB()

			return items
		}
	},
	Mutation: {
		createTrolley: async (_, { name, description }) => {
			await connectDB()
			const trolley = new Trolley({
				name,
				description,
			})
			const savedTrolley = await trolley.save()
			await disconnectDB()

			return savedTrolley
		},
	},
}

export default resolvers
