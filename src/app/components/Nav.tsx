"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "Contact", url: "/contact" },
	{ name: "Team", url: "/team" },
	{ name: "Members", url: "/members" },
	{ name: "Blog", url: "/blog" },
	{ name: "Sponsors", url: "/sponsors" },
];

export default function Nav() {
	const currentPage = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="sticky top-0 mb-8 backdrop-blur-md border-b border-edge p-3">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex cursor-pointer items-center gap-2 transition-colors hover:text-edge md:hidden"
			>
				<span>{"{...pages}"}</span>
				<svg
					className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Dropdown navigation arrow</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

            <div className="hidden md:block">
            {links.map(
						(link, index) =>
							link.url !== currentPage && (
								<Link
									key={index}
									href={link.url}
									className="px-4 py-2 transition-all font-semibold hover:underline hover:text-heading"
								>
									{link.name}
								</Link>
							),
					)}
            </div>

			{isOpen && (
				<div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-edge bg-secondary py-2 shadow-lg">
					{links.map(
						(link, index) =>
							link.url !== currentPage && (
								<Link
									key={index}
									href={link.url}
									className="block px-4 py-2 transition-colors font-semibold hover:text-heading"
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</Link>
							),
					)}
				</div>
			)}
		</nav>
	);
}