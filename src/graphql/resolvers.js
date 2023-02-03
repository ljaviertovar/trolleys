import { connectDB, disconnectDB } from "@/database"
import Trolley from "models/Trolley"

const resolvers = {
	Query: {
		trolleys: async () => {
			await connectDB()
			const trolleys = Trolley.find()
			await disconnectDB()
			return trolleys
		},
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
