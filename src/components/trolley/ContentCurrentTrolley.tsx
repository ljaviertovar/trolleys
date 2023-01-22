import { useState } from "react"
import Drawer from "../ui/Drawer"
import { AddItem } from "."

export default function ContentCurrentTrolley() {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<>
			<AddItem />
		</>
	)
}
