import { useState } from "react"
import { AddIcon } from "../../../../assets/icons"
import Drawer from "../../../../components/ui/Drawer"
import ContentAddItem from "./ContentAddItem"

export default function AddItem() {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<>
			<button className='flex justify-between gap-1 bg-slate-200 p-2' onClick={() => setOpenDrawer(true)}>
				<AddIcon />
				Add Item
			</button>

			<Drawer title='Add Item to Trolley' isOpen={openDrawer} setIsOpen={setOpenDrawer}>
				<ContentAddItem />
			</Drawer>
		</>
	)
}
