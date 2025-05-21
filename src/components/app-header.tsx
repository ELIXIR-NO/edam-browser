import edamLogo from "/edam-logo.png";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "lucide-react";
import GitHub from "@/assets/svg/github";
import { EdamVersionSelector } from "@/components/edam-version-selector";
import { EdamConceptSelector } from "@/components/edam-concept-selector";

export function AppHeader() {
	return (
		<nav className="flex flex-row gap-4 p-4">
			<img src={edamLogo} width="100" />
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl">EDAM Ontology</h1>
				<p>
					EDAM is a simple ontology of well established, familiar concepts that
					are prevalent within bioinformatics.
				</p>
				<ul className="flex flex-row">
					<li className="flex flex-row items-center gap-2">
						<Link size="1rem" />
						<a
							href="https://github.com/edamontology/edamontology"
							className="text-blue-600 visited:text-purple-900 hover:underline"
						>
							edamontology.org
						</a>
						<li className="flex flex-row items-center gap-2">
							<GitHub fontSize="1rem" />
							<a
								href="https://github.com/ELIXIR-NO/edam-browser.git"
								className="text-blue-600 visited:text-purple-900 hover:underline"
							>
								edam-browser
							</a>
						</li>
					</li>
				</ul>
			</div>
			<div className="flex flex-row items-center gap-0">
				<EdamVersionSelector />
				<EdamConceptSelector />
			</div>
			<div className="ml-auto content-center">
				<ThemeToggle />
			</div>
		</nav>
	);
}
