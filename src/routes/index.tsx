import { createFileRoute } from "@tanstack/react-router";

import "@/index.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <div className="App"></div>;
}
