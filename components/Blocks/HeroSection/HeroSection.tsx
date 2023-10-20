/* eslint-disable react/no-unescaped-entities */
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/Buttons/SecondaryButton";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import SecondaryLink from "@/components/ui/Links/SecondaryLinks";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import SpecialHeader from "@/components/ui/Text/Headers/SpecialHeader";
import { ICONS } from "@/icons/AllIcons";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
	return (
		<div className="  relative">
			{/* Header */}
			<SpecialHeader
				start_text="Welcome to"
				spacial_text="TeleCare"
				end_ext="Your One-Stop Destination for Family Haircare!  "
				full_text_style=" max-w[880px]  px-7 md:px-14 "
			/>

			{/* Desc */}
			<NormalDescription styles="mt-8 max-w-[700px] px-8 mx-auto text-center">
				At TeleCare, we understand the importance of
				convenience and top-notch services for your entire
				family. That's why we're thrilled to introduce our
				specialized pediatric primary, urgent care, and
				telehealth services.
			</NormalDescription>

			{/* Buttons */}
			<div className="  mt-8 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-7 ">
				<PrimaryLink
					title="Book a service"
					url={"/services"}
					className=""
				/>
				{/* <SecondaryLink
					title="Schedule a call"
					icon={ICONS.call_icon}
					url={"/"}
					className=""
				/> */}
			</div>

			{/* Image  */}

			<Image
				alt="hero Image"
				className=" mt-10 md:mt-20"
				src={"/img/hero-banner.png"}
				width={1440}
				height={700}
			/>
		</div>
	);
};

export default HeroSection;

