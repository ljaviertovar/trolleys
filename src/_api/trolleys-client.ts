import axios from "axios"

const TrolleysClient = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 1000,
	headers: {
		Accept: "application/json",
		ContentType: "application/json",
	},
})

export default TrolleysClient
