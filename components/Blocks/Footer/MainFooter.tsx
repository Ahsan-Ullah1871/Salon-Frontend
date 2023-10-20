"use client";

import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Divider from "@/components/ui/Divider/Divider";
import TextInput from "@/components/ui/FormFileds/TextInput";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { VECTORS } from "@/icons/Vectors";
import Link from "next/link";
import React, { useState } from "react";
import {
	company_related,
	locations_links,
	social_links,
	spacial_category_services,
	spacial_catgory,
	spacial_services,
} from "./FooterLinks";
import Title from "@/components/ui/Text/Paragraph/Title";
import AllFooterLinks from "./AllFooterLinks";

const MainFooter = () => {
	const [email, setEmail] = useState("");

	return (
		<div className=" min-h-[1200px] pt-4  md:pt-[56px] b bg-footer-background  bg-no-repeat bg-cover  bg-center 2xl:bg-top  ">
			{/* Email Block  */}
			<div className=" mt-20 max-w-[700px] px-12 mx-auto">
				<Heading1 styles="  text-white font-sub_spacial text-[34px] md:text-[58px] leading-[40px] md:leading-[68px]">
					Beauty Secrets and Tips tips from our
					pediatricians.
				</Heading1>

				<div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
					<TextInput
						current_value={email}
						set_new_value={(value: string) =>
							setEmail(value)
						}
						placeholder="Your email address"
						field_styles=" text-black_deep bg-white shadow  py-4 w-full"
					/>
					<PrimaryButton
						type="button"
						title="Get Notifications"
						onClickHandler={() => {}}
						className="  whitespace-nowrap  py-4"
					/>
				</div>
			</div>

			<Divider divider_style="mt-[100px] mb-[74px] bg-white  max-w-[90%] mx-auto h-[1.5px] bg-opacity-10 " />

			{/* All Links   */}
			<AllFooterLinks />

			{/* Last part */}

			<div className=" max-w-body mx-auto flex items-center  justify-center md:justify-between  mt-20 pb-20 px-6  flex-wrap gap-4">
				<p className=" text-sm font-normal text-white  text-opacity-75">
					Built by{" "}
					<Link
						href={
							"https://github.com/Ahsan-Ullah1871"
						}
					>
						Ahsan Ullah
					</Link>
				</p>

				<div className="flex flex-col gap-2">
					<Link
						href={"/admin"}
						type="email"
						className=" text-white text-opacity-80  text-base md:text-base "
					>
						Admin Login
					</Link>

					<Link
						className=" text-sm font-normal text-white  text-opacity-75"
						href={
							"https://github.com/Ahsan-Ullah1871"
						}
					>
						Terms of Use Privacy Policy Terms of
						Service
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MainFooter;

