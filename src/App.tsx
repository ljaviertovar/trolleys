import { useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

import { Nav, PortalModal } from "./components/ui"
import { NewTrolley } from "./components/trolleys"

export default function App() {
	const [showNewList, setShowNewList] = useState(false)

	return (
		<div className='isolate px-6 py-6 lg:px-8'>
			<Nav />
			<main>
				<div className='mx-auto max-w-3xl py-10'>
					<h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>Trolleys</h1>
					<div className='mt-8 flex flex-col justify-center p-4 border-2 gap-4'>
						<div className='w-fit m-auto border-2'>
							<button className='px-2 bg-slate-200' onClick={() => setShowNewList(!showNewList)}>
								New Trolley
							</button>
						</div>
						{showNewList && (
							<PortalModal wrapperId='modal-portal'>
								<NewTrolley setShowNewList={setShowNewList} />
							</PortalModal>
						)}
						<div className='py-10 px-10 text-center border-2'>My Trolleys</div>
					</div>
				</div>
			</main>
		</div>
	)
}
