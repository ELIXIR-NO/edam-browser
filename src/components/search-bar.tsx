import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// TODO: update this based on the edam2json parser
interface SearchOption {
	id: string;
	label: string;
}

interface SearchBarProps {
	options: SearchOption[];
	placeholder?: string;
	onSelect?: (option: SearchOption) => void;
	className?: string;
}

export function SearchBar({
	options,
	placeholder = "Search...",
	onSelect,
	className,
}: SearchBarProps) {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const optionsRef = useRef<HTMLDivElement>(null);

	// Filter options based on the query
	const filteredOptions =
		query === ""
			? []
			: options.filter((option) =>
					option.label.toLowerCase().includes(query.toLowerCase())
				);

	// Handle input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		setIsOpen(value.length > 0);
		setActiveIndex(-1);
	};

	// Handle option selection
	const handleSelectOption = (option: SearchOption) => {
		setQuery(option.label);
		setIsOpen(false);
		setActiveIndex(-1);
		onSelect?.(option);
		inputRef.current?.focus();
	};

	// Handle keyboard navigation
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!isOpen || filteredOptions.length === 0) return;

		// Arrow down
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setActiveIndex((prev) =>
				prev < filteredOptions.length - 1 ? prev + 1 : 0
			);
		}
		// Arrow up
		else if (e.key === "ArrowUp") {
			e.preventDefault();
			setActiveIndex((prev) =>
				prev > 0 ? prev - 1 : filteredOptions.length - 1
			);
		}
		// Enter
		else if (e.key === "Enter" && activeIndex >= 0) {
			e.preventDefault();
			handleSelectOption(filteredOptions[activeIndex]);
		}
		// Escape
		else if (e.key === "Escape") {
			setIsOpen(false);
		}
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				inputRef.current &&
				!inputRef.current.contains(e.target as Node) &&
				optionsRef.current &&
				!optionsRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Scroll active option into view
	useEffect(() => {
		if (activeIndex >= 0 && optionsRef.current) {
			const activeElement = optionsRef.current.children[
				activeIndex
			] as HTMLElement;
			if (activeElement) {
				activeElement.scrollIntoView({ block: "nearest" });
			}
		}
	}, [activeIndex]);

	return (
		<div className={cn("relative w-full", className)}>
			<div className="relative">
				<Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
				<Input
					ref={inputRef}
					type="text"
					placeholder={placeholder}
					value={query}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					onFocus={() => query && setIsOpen(true)}
					className="pl-10"
				/>
			</div>

			{isOpen && filteredOptions.length > 0 && (
				<div
					ref={optionsRef}
					className="ring-opacity-5 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none dark:bg-slate-900"
				>
					{filteredOptions.map((option, index) => (
						<div
							key={option.id}
							onClick={() => handleSelectOption(option)}
							className={cn(
								"cursor-pointer px-4 py-2 text-sm",
								activeIndex === index
									? "bg-primary text-primary-foreground"
									: "hover:bg-muted"
							)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
