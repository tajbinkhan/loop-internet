"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="mb-20">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href={"/"}>
						<Image src="/logo.png" width={200} height={200} alt="logo" />
					</Link>
				</div>
			</nav>
		</header>
	);
}
