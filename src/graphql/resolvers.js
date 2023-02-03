import { connectDB, disconnectDB } from "@/database"
import { ItemTrolleyModel, TrolleyModel } from "models"

const resolvers = {
	Query: {
		trolleys: async () => {
			await connectDB()
			const trolleys = TrolleyModel.find().lean()
			await disconnectDB()
			return trolleys
		},
		trolley: async (_, { _id }) => {
			await connectDB()
			const trolleyFound = await TrolleyModel.findById(_id)
			await disconnectDB()

			if (!trolleyFound) throw new Error('Trolley not found')

			return trolleyFound
		},
		itemsTrolley: async () => {
			await connectDB()
			const items = ItemTrolleyModel.find().lean()
			await disconnectDB()

			return items
		},
		itemTrolley: async (_, { _id }) => {
			await connectDB()
			const itemTrolleyFound = await ItemTrolleyModel.findById(_id)
			await disconnectDB()

			if (!itemTrolleyFound) throw new Error('Item Trolley not found')

			return itemTrolleyFound
		}
	},
	Mutation: {
		createTrolley: async (_, { name, description }) => {
			await connectDB()
			const trolley = new TrolleyModel({
				name,
				description,
			})
			const savedTrolley = await trolley.save()
			await disconnectDB()

			return savedTrolley
		},
		updateTrolley: async (_, args) => {
			await connectDB()
			const updatedTrolley = await TrolleyModel.findByIdAndUpdate(args._id, args, { new: true })
			await disconnectDB()

			if (!updatedTrolley) throw new Error('Trolley not found')

			return updatedTrolley
		},
		deleteTrolley: async (_, { _id }) => {
			await connectDB()
			const deletedTrolley = await TrolleyModel.findByIdAndDelete(_id)

			if (!deletedTrolley) throw new Error('Trolley not found')

			await ItemTrolleyModel.deleteMany({ trolleyId: deletedTrolley._id })

			await disconnectDB()

			return deletedTrolley
		},
		createItemTrolley: async (_, { name, trolleyId }) => {
			await connectDB()
			const trolleyFound = await TrolleyModel.findById(trolleyId)
			if (!trolleyFound) throw new Error('Trolley not found')

			const item = new ItemTrolleyModel({
				name,
				trolleyId
			})
			const savedItem = await item.save()
			await disconnectDB()

			return savedItem
		},
		updateItemTrolley: async (_, args) => {
			await connectDB()
			const updatedItemTrolley = await ItemTrolleyModel.findByIdAndUpdate(args._id, args, { new: true })
			await disconnectDB()

			if (!updatedItemTrolley) throw new Error('Item Trolley not found')

			return updatedItemTrolley
		},
		deleteItemTrolley: async (_, { _id }) => {
			await connectDB()
			const deletedItemTrolley = await ItemTrolleyModel.findByIdAndDelete(_id)
			await disconnectDB()

			if (!deletedItemTrolley) throw new Error('Item Trolley not found')

			return deletedItemTrolley
		}
	},
	Trolley: {
		items: async (parent) => {
			await connectDB()
			const itemsTrolleyFound = await ItemTrolleyModel.find({ trolleyId: parent._id })
			await disconnectDB()

			return itemsTrolleyFound
		}
	},
	ItemTrolley: {
		trolley: async (parent) => {
			await connectDB()
			const trolleyFound = await TrolleyModel.findById(parent.trolleyId)
			await disconnectDB()

			return trolleyFound
		}
	}
}

export default resolvers
