import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

import { NewTrolley, Trolley } from "./componets/trolleys"

import { useTrolleyStore } from "../../store/trolley-store"
import Drawer from "../../components/ui/Drawer"
import { CartIcon } from "../../assets/icons"

export default function HomePage() {
	const [showNewList, setShowNewList] = useState(false)
	const [openDrawer, setOpenDrawer] = useState(false)

	const { trolleys, currentTrolley } = useTrolleyStore(
		state => ({
			currentTrolley: state.currentTrolley,
			trolleys: state.trolleys,
		}),
		shallow
	)

	useEffect(() => {
		if (currentTrolley) setOpenDrawer(true)
	}, [currentTrolley])

	return (
		<div className='isolate px-6 py-6 lg:px-8'>
			<main>
				<div className='mx-auto max-w-3xl py-10'>
					<div className='flex justify-between'>
						<h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>Trolleys</h1>

						<button onClick={() => setOpenDrawer(!openDrawer)}>
							<CartIcon />
						</button>
					</div>
					<div className='mt-8 flex flex-col justify-center p-4 border-2 gap-4'>
						<NewTrolley setShowNewList={setShowNewList} />

						<div className='py-10 px-10 text-center border-2'>
							{trolleys.map(trolley => (
								<div key={trolley.id} className='p-4 text-center border-2 w-40'>
									{trolley.name}
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
			<Drawer title={currentTrolley?.name} isOpen={openDrawer} setIsOpen={setOpenDrawer}>
				<Trolley />
			</Drawer>
		</div>
	)
}
