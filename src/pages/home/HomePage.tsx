import { useState } from "react"
import { shallow } from "zustand/shallow"

import { Nav, PortalModal } from "../../components/ui"
import { NewTrolley } from "./componets/trolleys"

import { useTrolleyStore } from "../../store/trolley-store"

export default function HomePage() {
	const [showNewList, setShowNewList] = useState(false)

	const { trolleys } = useTrolleyStore(
		state => ({
			trolleys: state.trolleys,
		}),
		shallow
	)

	return (
		<div className='isolate px-6 py-6 lg:px-8'>
			<Nav />
			<main>
				<div className='mx-auto max-w-3xl py-10'>
					<h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>Trolleys</h1>
					<div className='mt-8 flex flex-col justify-center p-4 border-2 gap-4'>
						<div className='w-fit m-auto border-2'>
							<button type='button' className='px-2 bg-slate-200' onClick={() => setShowNewList(!showNewList)}>
								New Trolley
							</button>
						</div>
						{showNewList && (
							<PortalModal wrapperId='modal-portal'>
								<NewTrolley setShowNewList={setShowNewList} />
							</PortalModal>
						)}
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
		</div>
	)
}
