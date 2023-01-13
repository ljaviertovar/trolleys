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
	currentTrolley: null | Trolley
	trolleys: Trolley[]
	setCurrentTrolley: (value: Trolley) => void
}

export const useTrolleyStore = create<TrolleyState>(set => ({
	currentTrolley: null,
	setCurrentTrolley: (value: Trolley) => set(state => ({ currentTrolley: value })),
	trolleys: TROLLEYS,
}))
