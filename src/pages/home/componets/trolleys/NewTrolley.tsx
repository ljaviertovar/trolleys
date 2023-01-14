import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { useTrolleyStore } from "../../../../store/trolley-store"

import { Trolley } from "../../../../interfaces/trolley-interfaces"

const INITIAL_TROLLEY = {
	id: "",
	name: "",
}
interface Props {
	setShowNewList: (value: boolean) => void
}

export default function NewTrolley({ setShowNewList }: Props) {
	const [newTrolley, setNewTrolley] = useState<Trolley>(INITIAL_TROLLEY)

	const { setCurrentTrolley, addTrolley } = useTrolleyStore()

	const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
		setNewTrolley({ ...newTrolley, name: ev.currentTarget.value })
	}

	const createNewtrolley = () => {
		if (!newTrolley.name) return null
		setCurrentTrolley({ ...newTrolley, id: uuidv4() })
		addTrolley(newTrolley)
		setShowNewList(false)
	}

	console.log(useTrolleyStore())

	return (
		<div className='flex w-full mb-5 shadow-lg'>
			<input
				type='text'
				placeholder="Trolleys's name"
				className='w-8/12 p-4'
				value={newTrolley.name}
				onChange={handleChange}
			/>
			<button className='px-4 w-4/12 bg-slate-200' onClick={() => createNewtrolley()}>
				New trolley
			</button>
		</div>
	)
}
