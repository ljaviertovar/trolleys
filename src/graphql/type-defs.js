import { gql } from "apollo-server-micro"

const typeDefs = gql`
	type Query {
		trolleys: [Trolley]
		trolley(_id: ID!): Trolley
		itemsTrolley: [ItemTrolley]
		itemTrolley(_id: ID!): ItemTrolley
	}

	type Mutation {
		createTrolley(name: String!, description: String): Trolley
		deleteTrolley(_id: ID!): Trolley
		updateTrolley(_id: ID!, name: String, description:String): Trolley
		createItemTrolley(name: String!, trolleyId: ID!): ItemTrolley
		updateItemTrolley(_id: ID!, name: String, checked:Boolean): ItemTrolley
		deleteItemTrolley(_id: ID!): ItemTrolley
	}

	type Trolley {
		_id: ID
		name: String
		description: String
		items: [ItemTrolley]
		createdAt: String
		updatedAt: String
	}

	type ItemTrolley {
		_id: ID
		name: String
		checked: Boolean
		trolley: Trolley
		createdAt: String
		updatedAt: String
	}
`

export default typeDefs
