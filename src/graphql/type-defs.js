import { gql } from "apollo-server-micro"

const typeDefs = gql`
	type Query {
		trolleys: [Trolley]
	}

	type Mutation {
		createTrolley(name: String, description: String): Trolley
	}

	type Trolley {
		_id: ID
		name: String
		description: String
		createdAt: String
		updatedAt: String
	}
`

export default typeDefs
