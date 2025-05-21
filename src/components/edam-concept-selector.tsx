import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function EdamConceptSelector() {
	const [concept, setConcept] = useState<string>("All EDAM");
	return (
		<Select onValueChange={setConcept}>
			<SelectTrigger>
				<SelectValue placeholder={concept} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="all">All EDAM</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectItem value="data">Only Data</SelectItem>
					<SelectItem value="format">Only Format</SelectItem>
					<SelectItem value="operation">Only Operation</SelectItem>
					<SelectItem value="topic">Only Topic</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectItem value="deprecated">Only Deprecated</SelectItem>
					<SelectItem value="all-deprecated">
						All EDAM with Deprecated concepts
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
