import { useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"

import { useTrolleyStore } from "../../store/trolley-store"

import { ItemTrolley, Trolley } from "@/interfaces/trolley-interfaces"

import { AddIcon } from "../../assets/icons"

const DEFAULT_ITEMS = [
	{
		id: "1",
		name: "Cafe",
		added: false,
		quantity: 1,
	},
	{
		id: "2",
		name: "Bread",
		added: false,
		quantity: 1,
	},
]

const INITIAL_ITEM = {
	name: "",
	added: true,
	quantity: 1,
}

export default function ContentAddItem() {
	const currentTrolley = useTrolleyStore(state => state.currentTrolley)
	const [newItem, setNewItem] = useState<ItemTrolley>(INITIAL_ITEM)

	const addItem = useTrolleyStore(state => state.addItem)

	const handleChange = (value: string) => {
		setNewItem({ ...newItem, name: value })
	}

	const handleClick = () => {
		if (!newItem.name) return null
		const id = uuidv4()

		const item = { ...newItem, id, added: true }

		if (currentTrolley) {
			console.log(item)
			const updatedItems = [...currentTrolley.items, item]
			console.log(updatedItems)
			temp_saveItem(updatedItems).then(resp => {
				console.log(resp)

				addItem(item)

				//TODO: add new item to suggestions
			})
		}
	}

	const temp_saveItem = async (updatedItems: ItemTrolley[]) => {
		return axios({
			method: "PATCH",
			url: `http://localhost:3001/trolleys/${currentTrolley?.id}`,
			data: {
				items: updatedItems,
			},
		})
	}

	return (
		<>
			<div className='trolleyItem__add flex w-full mb-4 shadow-lg'>
				<input
					type='text'
					placeholder="Item's name"
					className='w-8/12 p-4'
					value={newItem.name}
					onChange={e => handleChange(e.target.value)}
				/>
				<button type='button' className='px-4 w-4/12 bg-slate-200' onClick={() => handleClick()}>
					Add
				</button>
			</div>

			<h4 className='mb-4 py-2 bg-slate-200'>Suggestions</h4>
			<ul className='trollyItem__list'>
				{DEFAULT_ITEMS.map(item => (
					<li key={item.id} className='trolleyItem__item py-2 flex gap-2 items-start' onClick={() => addItem(item)}>
						<AddIcon />
						{item.name}
					</li>
				))}
			</ul>

			<h4 className='mb-4 py-2 bg-slate-200'>Items</h4>
			<ul className='trollyItem__list'>
				{currentTrolley?.items.map(item => (
					<li key={item.id} className='trolleyItem__item py-2 flex gap-2 items-start' onClick={() => addItem(item)}>
						<AddIcon />
						{item.name}
					</li>
				))}
			</ul>
		</>
	)
}
