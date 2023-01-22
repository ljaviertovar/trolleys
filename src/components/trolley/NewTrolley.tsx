import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { useTrolleyStore } from "../../store/trolley-store"

import { Trolley, ItemTrolley } from "../../interfaces/trolley-interfaces"

const INITIAL_TROLLEY = {
	id: "",
	name: "",
	items: [],
}
interface Props {}

export default function NewTrolley({}: Props) {
	const [newTrolley, setNewTrolley] = useState<Trolley>(INITIAL_TROLLEY)

	const { setCurrentTrolley, addTrolley } = useTrolleyStore()

	const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
		setNewTrolley({ ...newTrolley, name: ev.currentTarget.value })
	}

	const createNewtrolley = () => {
		if (!newTrolley.name) return null
		const id = uuidv4()
		setCurrentTrolley({ ...newTrolley, id })
		addTrolley({ ...newTrolley, id })
	}

	return (
		<div className='flex w-full mb-5 shadow-lg'>
			<input
				type='text'
				placeholder="Trolleys's name"
				className='w-8/12 p-4'
				value={newTrolley.name}
				onChange={handleChange}
			/>
			<button type='button' className='px-4 w-4/12 bg-slate-200' onClick={() => createNewtrolley()}>
				New trolley
			</button>
		</div>
	)
}
