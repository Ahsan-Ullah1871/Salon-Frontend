"use client";

import Modal from "@/components/ui/Modal/Modal";
import PopOver from "@/components/ui/PopOver/PopOver";
import { ICONS } from "@/icons/AllIcons";
import Image from "next/image";
import React from "react";
import { header_menus } from "./Links";
import Link from "next/link";
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Divider from "@/components/ui/Divider/Divider";
import { checkUserAuthenticationFromCLientSide } from "@/utils/auth";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";

const MobileHeader = () => {
	const auth_check = checkUserAuthenticationFromCLientSide();

	return (
		<div className=" flex items-center px-8 py-3 max-w-full w-full bg-body justify-between">
			{/* logo */}
			<Image
				src={"/img/Logo.png"}
				height={32}
				width={160}
				alt="Logo"
			/>

			{/* Drop down */}
			<Modal
				button_icon={ICONS.hand_burger}
				button_style=" bg-transparent   "
				panel_style="w-full  mx-auto mt-20 max-w-[90%]   sm:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-top shadow-md transition-all flex flex-col gap-7  "
				isShowCloseButton={true}
			>
				<div className=" flex flex-col items-start  justify-start gap-7 mt-5     ">
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

				{!auth_check?.is_logged_in && (
					<>
						<Divider divider_style="my-1 h-[1px]  bg-black_normal" />
						{/* Button */}
						<div className=" w-full mb-5">
							<PrimaryLink
								title="SignIn"
								url="/signin"
								className="  w-full"
							/>
						</div>
					</>
				)}
			</Modal>
		</div>
	);
};

export default MobileHeader;

