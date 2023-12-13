"use client";
import { useState } from "react";

function Search() {
	const [query, setQuery] = useState("");

	return (
		<form className="flex gap-2 h-full">
			<input
				type="text"
				placeholder="Search"
				className="rounded-md px-2 border-2 border-transparent focus-within:border-blue-300 focus-within:outline-none"
			/>
			<button type="submit" className="text-2xl">
				🚀
			</button>
		</form>
	);
}
export default Search;
