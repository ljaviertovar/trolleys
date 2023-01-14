import { FormEvent, useState } from "react"
import { useTrolleyStore } from "../../store/trolley-store"
import { v4 as uuidv4 } from "uuid"

interface Trolley {
	id: string
	name: string
}
interface Props {
	setShowNewList: (value: boolean) => void
}

const INITIAL_TROLLEY = {
	id: "",
	name: "",
}

export default function NewTrolley({ setShowNewList }: Props) {
	const [newTrolley, setNewTrolley] = useState<Trolley>(INITIAL_TROLLEY)

	const { setCurrentTrolley, addTrolley } = useTrolleyStore()

	const handleChange = (ev: FormEvent<HTMLInputElement>) => {
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
		<div className='shadow-lg bg-white w-4/12 md:max-w-11/12 mx-auto  overflow-y-auto p-4'>
			<div className='w-full mb-5'>
				<input
					type='text'
					placeholder="Trolleys's name"
					className='w-full'
					value={newTrolley.name}
					onChange={handleChange}
				/>
			</div>
			<div className='flex justify-end w-full gap-4'>
				<button className='px-2 bg-slate-200' onClick={() => setShowNewList(false)}>
					Cancel
				</button>
				<button className='px-2 bg-slate-200' onClick={() => createNewtrolley()}>
					Create
				</button>
			</div>
		</div>
	)
}
