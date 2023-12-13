import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
import type { Metadata } from "next";

// defining props type recieved by page component
type Props = {
	params: {
		query: string;
	};
};

// generating dynamic metadata for the page
export async function generateMetadata({ params: { query } }: Props): Promise<Metadata> {
	const wikiResultPromise: Promise<SearchResult> = getWikiResults(query);
	const wikiResult: SearchResult = await wikiResultPromise;

	const serachQuery = query.replaceAll("%20", " ");

	if (!wikiResult?.query?.pages) {
		return {
			title: `${serachQuery} Not Found`,
			description: `No relevant data found for ${serachQuery}`,
		};
	}

	return {
		title: serachQuery,
		description: `Search results for ${serachQuery}`,
	};
}

async function page({ params: { query } }: Props) {
	const wikiResultPromise: Promise<SearchResult> = getWikiResults(query);
	const wikiResult: SearchResult = await wikiResultPromise;

	const data: Result[] | undefined = wikiResult?.query?.pages;

	return (
		<main>
			<div className="container py-4">
				{data ? (
					Object.values(data).map((result) => <Item key={result.pageid} data={result} />)
				) : (
					<p className="text-center text-2xl text-red-600 font-medium">{query} Not Found</p>
				)}
			</div>
		</main>
	);
}
export default page;
