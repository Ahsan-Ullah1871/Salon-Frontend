"use client";
import store from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";

export default function AuthUI({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-screen  h-screen  flex items-center justify-center font-main">
			<div className="w-full h-full flex flex-col gap-10 items-center justify-center">
				<Link href={"/"}>
					<Image
						src={"/img/Logo.png"}
						height={32}
						width={160}
						alt="Logo"
						className=" md:fixed md:top-10  md:left-20  "
					/>
				</Link>
				{children}
			</div>
		</section>
	);
}

