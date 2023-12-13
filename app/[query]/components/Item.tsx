import Link from "next/link";

type Props = {
	data: Result;
};

function Item({ data }: Props) {
	const itemBody = (
		<div className="flex flex-col justify-center">
			<h2>
				<Link
					href={`https://en.wikipedia.org/?curid=${data.pageid}`}
					target="_blank"
					className="text-xl font-bold underline">
					{data.title}
				</Link>
			</h2>
			<p className="max-w-prose">{data.extract}</p>
		</div>
	);

	const content = (
		<article className="mb-4 last:mb-0">
			{data?.thumbnail?.source ? (
				<div className="flex flex-row gap-4">
					<div className="flex flex-col justify-center">
						<img
							src={data.thumbnail.source}
							alt={data.title}
							width={data.thumbnail.width}
							height={data.thumbnail.height}
							loading="lazy"
						/>
					</div>
					{itemBody}
				</div>
			) : (
				<>{itemBody}</>
			)}
		</article>
	);

	return content;
}
export default Item;
