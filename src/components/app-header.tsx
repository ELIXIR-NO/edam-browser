import edamLogo from "/edam-logo.png";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
	return (
		<nav className="flex flex-row justify-between">
			<img src={edamLogo} />
			<ThemeToggle />
		</nav>
	);
}
