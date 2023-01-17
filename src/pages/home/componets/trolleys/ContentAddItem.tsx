import { AddIcon } from "../../../../assets/icons"
import { useTrolleyStore } from "../../../../store/trolley-store"

const DEFAULT_ITEMS = [
	{
		id: "1",
		name: "Cafe",
		added: false,
		quantity: 1,
	},
	{
		id: "2",
		name: "Bread",
		added: false,
		quantity: 1,
	},
]

export default function ContentAddItem() {
	const currentTrolley = useTrolleyStore(state => state.currentTrolley)
	const addItem = useTrolleyStore(state => state.addItem)

	const handleChange = () => {}

	return (
		<>
			<div className='trolleyItem__add flex w-full mb-4 shadow-lg'>
				<input type='text' placeholder="Item's name" className='w-8/12 p-4' value={""} onChange={handleChange} />
				<button className='px-4 w-4/12 bg-slate-200' onClick={() => handleChange()}>
					Add
				</button>
			</div>
			<h4 className='mb-4 py-2 bg-slate-200'>Suggestions</h4>
			<ul className='trollyItem__list'>
				{DEFAULT_ITEMS.map(item => (
					<li key={item.id} className='trolleyItem__item py-2 flex gap-2 items-start' onClick={() => addItem(item)}>
						<AddIcon />
						{item.name}
					</li>
				))}
			</ul>
		</>
	)
}
