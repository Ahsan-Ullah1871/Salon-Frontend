"use client";

import Image from "next/image";
import Link from "next/link";
import { header_menus } from "./Links";
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";

const Header = () => {
	return (
		<div className=" bg-bg_color py-6 px-6   max-w-body mx-auto  flex items-center justify-between ">
			{/* logo */}
			<Link href={"/"}>
				<Image
					src={"/img/Logo.png"}
					height={32}
					width={160}
					alt="Logo"
				/>
			</Link>

			{/* Links */}

			<div className=" flex items-center justify-center gap-7 ">
				{header_menus.map((menu) => {
					return (
						<Link
							href={menu.url}
							key={menu.title}
							className=" text-black_normal hover:text-green duration-500 text-base    "
						>
							{menu.title}
						</Link>
					);
				})}
			</div>

			{/* Button */}
			<div>
				<PrimaryButton
					type="button"
					title="SignIn"
					onClickHandler={() => {}}
					className=""
				/>
			</div>
		</div>
	);
};

export default Header;

