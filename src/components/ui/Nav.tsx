import { useEffect, useState } from "react"
import { CartIcon } from "../../assets/icons"
import Drawer from "./Drawer"
import { ItemTrolley } from "../../pages/home/componets/trolleys"

// import { SwicherTheme } from "./"
import { useTrolleyStore } from "../../store/trolley-store"

export default function Nav() {
	const [openDrawer, setOpenDrawer] = useState(false)

	const currentTrolley = useTrolleyStore(state => state.currentTrolley)

	useEffect(() => {
		if (currentTrolley) setOpenDrawer(true)
	}, [currentTrolley])

	return (
		<nav className='flex h-9 items-center justify-between'>
			<div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
				<a href='#' className='-m-1.5 p-1.5'>
					<span className='sr-only'>Your Company</span>
					<img className='h-8' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
				</a>
			</div>
			<div className='flex lg:hidden'>
				{/* <button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className='sr-only'>Open main menu</span>
				</button> */}
			</div>
			{/* <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>
					{navigation.map(item => (
						<a key={item.name} href={item.href} className='font-semibold text-gray-900 hover:text-gray-900'>
							{item.name}
						</a>
					))}
				</div> */}
			<div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
				<button onClick={() => setOpenDrawer(!openDrawer)}>
					<CartIcon />
				</button>
			</div>
			<Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer}>
				<ItemTrolley />
			</Drawer>
		</nav>
	)
}
