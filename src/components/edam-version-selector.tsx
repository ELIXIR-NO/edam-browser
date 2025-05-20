import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const edamVersions = ["latest (unstable)", "1.25 (stable)", "1.24", "1.23"];

export function EdamVersionSelector() {
	return (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="1.25 (stable)" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{edamVersions.map((version) => (
						<SelectItem key={version} value={version}>
							{version}
						</SelectItem>
					))}
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectItem value="bioimaging">
						Fork BioImaging (latest, unstable)
					</SelectItem>
					<SelectItem value="geo">Frok Geo (latest, unstable)</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectItem value="custom">Custom</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
