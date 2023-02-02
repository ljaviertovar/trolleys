import { useState } from "react"
import { AddItem } from "."
import { useTrolleyStore } from "@/store/trolley-store"
import PendingIcon from "../../assets/icons/PendingIcon"

export default function ContentCurrentTrolley() {
	const currentTrolley = useTrolleyStore(state => state.currentTrolley)

	return (
		<>
			<AddItem />
			<h4 className='my-4 py-2 bg-slate-200'>Pending Items</h4>
			<ul className='trollyItem__list'>
				{currentTrolley?.items.map(item => (
					<li key={item.id} className='trolleyItem__item py-2 flex gap-2 items-start'>
						<PendingIcon color={"#a1a1a1"} />
						{item.name}
					</li>
				))}
			</ul>
		</>
	)
}
