import Link from "next/link";
import Search from "./Search";
const Navbar = () => {
	return (
		<nav className="bg-blue-100 py-2 sm:h-14 ">
			<div className="h-full container flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
				<Link href="/" className="font-medium text-xl text-blue-500">
					WikiRocket
				</Link>

				<Search />
			</div>
		</nav>
	);
};
export default Navbar;
