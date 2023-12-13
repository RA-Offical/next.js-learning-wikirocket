"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

function Search() {
	const [query, setQuery] = useState("");
	const router = useRouter();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setQuery("");
		router.push(`/${query}/`);
	}

	return (
		<form className="flex gap-2 h-full" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="rounded-md px-2 border-2 border-transparent focus-within:border-blue-300 focus-within:outline-none shadow-[0_0_4px_-1px_rgba(0,0,0,0.2)]"
			/>
			<button type="submit" className="text-2xl">
				🚀
			</button>
		</form>
	);
}
export default Search;
