import React from "react";
import Heading1 from "../Text/Headers/Heading1";
import NormalDescription from "../Text/Description/NormalDescription";
import Image from "next/image";

const PageHeader = ({
	page_title,
	page_description,
	bg_image,
}: {
	page_title: string;
	page_description: string;
	bg_image: string;
}) => {
	return (
		<div
			className="bg-bg_color2 py-10 md:py-14 px-6  relative   "
			style={{
				backgroundImage: bg_image ? `url(${bg_image})` : "",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Heading1 styles=" font-spacial text-[40px] md:text-[74px] leading-[44px] md:leading-[84px] ">
				{page_title}
			</Heading1>
			<NormalDescription styles="mt-3 text-center">
				{page_description}
			</NormalDescription>

			<Image
				src={"/img/pageBanner.png"}
				className=" absolute -bottom-16 right-0 hidden md:block "
				width={100}
				height={100}
				alt="Page Header"
			/>
		</div>
	);
};

export default PageHeader;

