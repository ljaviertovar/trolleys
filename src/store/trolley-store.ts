import create from "zustand"

const TROLLEYS = [
	{
		id: "1",
		name: "my trolley 1",
	},
]

interface Trolley {
	id: string
	name: string
}

interface TrolleyState {
	currentTrolley: null | string
	trolleys: Trolley[]
}

export const useTrolleyStore = create<TrolleyState>(() => ({
	currentTrolley: null,
	trolleys: TROLLEYS,
}))
