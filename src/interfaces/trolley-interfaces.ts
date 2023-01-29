export interface ItemTrolley {
	id?: string
	name: string
	added: boolean
	quantity: number
}
export interface Trolley {
	id: string
	name: string
	items: ItemTrolley[]
}
