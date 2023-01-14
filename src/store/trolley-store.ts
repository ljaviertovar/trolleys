import create from "zustand"

interface Trolley {
	id: string
	name: string
}

interface TrolleyState {
	currentTrolley: null | Trolley
	trolleys: Trolley[]
	setCurrentTrolley: (value: Trolley) => void
	addTrolley: (value: Trolley) => void
}

export const useTrolleyStore = create<TrolleyState>(set => ({
	currentTrolley: null,
	trolleys: [],
	setCurrentTrolley: (value: Trolley) => set(state => ({ currentTrolley: value })),
	addTrolley: (value: Trolley) => set(state => ({ trolleys: [...state.trolleys, value] })),
}))
