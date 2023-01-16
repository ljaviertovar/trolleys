import { CloseIcon } from "../../assets/icons"

interface Props {
	title?: string
	children: React.ReactElement | React.ReactElement[]
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export default function Drawer({ title, children, isOpen, setIsOpen }: Props) {
	return (
		<main
			className={
				" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
				(isOpen
					? " transition-opacity opacity-100 duration-500 translate-x-0  "
					: " transition-all delay-500 opacity-0 translate-x-full  ")
			}
		>
			<section
				className={
					"w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
					(isOpen ? " translate-x-0 " : " translate-x-full ")
				}
			>
				<header className='drawer-header p-4 flex justify-between flex-1 gap-4 border-b-2 shadow-lg'>
					<h3 className='text-xl'>{title}</h3>
					<button
						title='Close Trolley'
						type='button'
						className='w-10 bg-slate-200 flex justify-center items-center'
						onClick={() => setIsOpen(false)}
					>
						<CloseIcon />
					</button>
				</header>
				<div className='px-4 py-5'>{children}</div>
			</section>
			<div
				className=' w-screen h-full cursor-pointer '
				onClick={() => {
					setIsOpen(false)
				}}
			></div>
		</main>
	)
}
