export default function NewTrolley({ setShowNewList }) {
	return (
		<div className='shadow-lg bg-white w-4/12 md:max-w-11/12 mx-auto  overflow-y-auto p-4'>
			<div className='w-full mb-5'>
				<input type='text' placeholder="Trolleys's name" className='w-full' />
			</div>
			<div className='flex justify-end w-full gap-4'>
				<button className='px-2 bg-slate-200' onClick={() => setShowNewList(false)}>
					Cancel
				</button>
				<button className='px-2 bg-slate-200' onClick={() => setShowNewList(false)}>
					Create
				</button>
			</div>
		</div>
	)
}
