import { SwicherTheme } from "./"

interface Props {
	toggleDarkMode: (value: boolean) => void
}

export default function Nav() {
	return (
		<nav className='grid grid-cols-2 place-content-between items-center w-full'>
			<h4 className='text-black dark:text-white text-2xl'>Trolleys</h4>
			<SwicherTheme />
		</nav>
	)
}
