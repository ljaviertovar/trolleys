export default function NewTrolley({ setShowNewList }) {
	return (
		<div className='shadow-lg bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl z-50 overflow-y-auto'>
			<div>
				<button className='px-2 bg-slate-200' onClick={() => setShowNewList(false)}>
					close
				</button>
			</div>
			<div className='modal-content py-4 text-left px-6'></div>
		</div>
	)
}
