import { create } from "zustand"
import axios from "axios"

import { Trolley, ItemTrolley } from "../interfaces/trolley-interfaces"

interface TrolleyState {
	currentTrolley: null | Trolley
	trolleys: Trolley[]
	getTrolleys: () => void
	setCurrentTrolley: (value: Trolley) => void
	// addTrolley: (value: Trolley) => void
	addItem: (item: ItemTrolley) => void
}

export const useTrolleyStore = create<TrolleyState>((set, get) => ({
	currentTrolley: null,
	trolleys: [],
	getTrolleys: async () => {
		const { data, status } = await axios.get("http://localhost:3001/trolleys").then(resp => resp)
		if (status === 200) {
			set({ trolleys: data })
		}
	},
	setCurrentTrolley: (value: Trolley) => set(state => ({ currentTrolley: value })),
	// addTrolley: (value: Trolley) => set(state => ({ trolleys: [...state.trolleys, value] })),
	addItem: (item: ItemTrolley) => {
		const currentTrolley = get().currentTrolley
		if (currentTrolley) {
			const updatedTrolley = { ...currentTrolley, items: [...currentTrolley.items, item] }
		}
	},
}))
