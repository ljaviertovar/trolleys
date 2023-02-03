import { connectDB, disconnectDB } from "@/database"
import { Trolley, ItemTrolley } from "models"

const resolvers = {
	Query: {
		trolleys: async () => {
			await connectDB()
			const trolleys = Trolley.find().lean()
			await disconnectDB()
			return trolleys
		},
		itemsTrolley: async () => {
			await connectDB()
			const items = ItemTrolley.find().lean()
			await disconnectDB()

			return items
		},
		trolley: async (_, { _id }) => {
			await connectDB()
			const trolleyFound = await Trolley.findById(_id)
			await disconnectDB()

			if (!trolleyFound) throw new Error('Trolley not found')

			return trolleyFound
		},
		itemTrolley: async (_, { _id }) => {
			await connectDB()
			const itemTrolleyFound = await ItemTrolley.findById(_id)
			await disconnectDB()

			if (!itemTrolleyFound) throw new Error('Item Trolley not found')

			return itemTrolleyFound
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
		updateTrolley: async (_, args) => {
			await connectDB()
			const updatedTrolley = await Trolley.findByIdAndUpdate(args._id, args, { new: true })
			await disconnectDB()

			if (!updatedTrolley) throw new Error('Trolley not found')

			return updatedTrolley
		},
		deleteTrolley: async (_, { _id }) => {
			await connectDB()
			const deletedTrolley = await Trolley.findByIdAndDelete(_id)

			if (!deletedTrolley) throw new Error('Trolley not found')

			await ItemTrolley.deleteMany({ trolleyId: deletedTrolley._id })

			await disconnectDB()

			return deletedTrolley
		},
		createItemTrolley: async (_, { name, trolleyId }) => {
			await connectDB()
			const trolleyFound = await Trolley.findById(trolleyId)
			if (!trolleyFound) throw new Error('Trolley not found')

			const item = new ItemTrolley({
				name,
				trolleyId
			})
			const savedItem = await item.save()
			await disconnectDB()

			return savedItem
		},
		updateItemTrolley: async (_, args) => {
			await connectDB()
			const updatedItemTrolley = await ItemTrolley.findByIdAndUpdate(args._id, args, { new: true })
			await disconnectDB()

			if (!updatedItemTrolley) throw new Error('Item Trolley not found')

			return updatedItemTrolley
		},
		deleteItemTrolley: async (_, { _id }) => {
			await connectDB()
			const deletedItemTrolley = await ItemTrolley.findByIdAndDelete(_id)
			await disconnectDB()

			if (!deletedItemTrolley) throw new Error('Item Trolley not found')

			return deletedItemTrolley
		}
	},
}

export default resolvers
