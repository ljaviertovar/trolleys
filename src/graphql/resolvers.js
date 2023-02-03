import { connectDB, disconnectDB } from "@/database"
import Trolley from "models/Trolley"

const resolvers = {
	Query: {
		hello: () => "Hello world",
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
