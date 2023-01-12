import { SwicherTheme } from "./"

export default function Nav() {
	return (
		<nav className='w-full py-1'>
			<ul className='flex justify-between'>
				<li>
					<SwicherTheme />
				</li>
				<li>
					<button type='button'>Cart</button>
				</li>
			</ul>
		</nav>
	)
}
