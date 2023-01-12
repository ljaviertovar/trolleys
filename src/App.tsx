import { useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

import { CartIcon } from "./assets/icons"
import { PortalModal } from "./components/ui"
import { NewTrolley } from "./components/trolleys"

export default function App() {
	const [showNewList, setShowNewList] = useState(false)
	const [wrapperId, setWrapperId] = useState<string | null>(null)
	const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

	return (
		<div className='isolate px-6 py-6 lg:px-8'>
			<nav className='flex h-9 items-center justify-between'>
				<div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Your Company</span>
						<img className='h-8' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
					</button>
				</div>
				{/* <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>
							{navigation.map(item => (
								<a key={item.name} href={item.href} className='font-semibold text-gray-900 hover:text-gray-900'>
									{item.name}
								</a>
							))}
						</div> */}
				<div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
					<CartIcon />
				</div>
			</nav>
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
