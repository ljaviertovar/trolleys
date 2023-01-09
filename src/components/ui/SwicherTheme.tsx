import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "../../assets/icons"

type Theme = null | "dark" | "light"

export default function SwicherTheme() {
	const [theme, setTheme] = useState<Theme>(null)

	useEffect(() => {
		window.matchMedia("(prefers-color-scheme: dark)").matches ? setTheme("dark") : setTheme("light")
	}, [])

	useEffect(() => {
		if (theme === "dark") document.documentElement.classList.add("dark")
		else document.documentElement.classList.remove("dark")
	}, [theme])

	const handleThemeSwitch = () => setTheme(theme === "dark" ? "light" : "dark")

	return (
		<button type='button' onClick={handleThemeSwitch}>
			{theme === "dark" ? <SunIcon /> : <MoonIcon />}
		</button>
	)
}
