import { gql } from "apollo-server-micro"

const typeDefs = gql`
	type Query {
		trolleys: [Trolley]
		itemsTrolley: [ItemTrolley]
		trolley(_id: ID!): Trolley
		itemTrolley(_id: ID!): ItemTrolley
	}

	type Mutation {
		createTrolley(name: String!, description: String): Trolley
		createItemTrolley(name: String!, trolleyId: ID!): ItemTrolley
	}

	type Trolley {
		_id: ID
		name: String
		description: String
		createdAt: String
		updatedAt: String
	}

	type ItemTrolley {
		_id: ID
		name: String
		checked: Boolean
		trolleyId: ID
		createdAt: String
		updatedAt: String
	}
`

export default typeDefs
