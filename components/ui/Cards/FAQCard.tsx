"use client";

import Image from "next/image";
import React from "react";
import Heading1 from "../Text/Headers/Heading1";
import Heading5 from "../Text/Headers/Heading5";
import SecondaryButton from "../Buttons/SecondaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WithoutActionButton from "../Buttons/WithoutActionButton";

const FAQCard = ({
	image,
	title,
	url,
	button_title,
	icon,
}: {
	image: string;
	title: string;
	url: string;
	button_title: string;
	icon?: React.ReactNode;
}) => {
	const router = useRouter();

	return (
		<Link
			href={url}
			className="  min-h-[364px]   max-w-[300px] md:max-w-[350px] flex flex-col items-start justify-start gap-6  px-7 py-8 bg-transparent hover:bg-white border     border-black_deep  border-opacity-20  hover:border-opacity-0 duration-300 cursor-pointer "
		>
			<Image
				src={image}
				width={142}
				height={142}
				alt="FAQ"
			/>
			<Heading5 styles=" ">{title}</Heading5>
			<WithoutActionButton
				title={button_title}
				className=""
				icon={icon}
			/>
		</Link>
	);
};

export default FAQCard;

