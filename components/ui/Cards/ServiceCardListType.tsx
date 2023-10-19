"use client";

import Image from "next/image";
import React from "react";
import Heading1 from "../Text/Headers/Heading1";
import Heading5 from "../Text/Headers/Heading5";
import SecondaryButton from "../Buttons/SecondaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WithoutActionButton from "../Buttons/WithoutActionButton";
import Divider from "../Divider/Divider";
import Title from "../Text/Paragraph/Title";
import Rating from "../Rating/Rating";
import { cn } from "@/utils/classNames";

const ServiceCardListType = ({
	image,
	title,
	url,
	ratings,
	time,
	todays_available_schedule,
	card_style,
	price = "$0",
}: {
	image: string;
	title: string;
	time: string;
	ratings: number;
	url: string;
	todays_available_schedule: string;
	card_style?: string;
	price?: string;
}) => {
	const router = useRouter();

	return (
		<div
			className={cn(
				"w-full bg-black   bg-opacity-10  p-5 shadow-md rounded-md flex items-center justify-between gap-4",
				card_style
			)}
		>
			<div className="flex  items-center justify-start gap-10">
				<Image
					src={image}
					width={100}
					height={100}
					alt="im"
					className="rounded-md"
				/>
				<div className="flex flex-col gap-2 ">
					<Title styles="   text-black_deep font-bold font-sub_main">
						{title}
					</Title>

					<Title>{`${time}`}</Title>
				</div>
			</div>
			<Title styles="  text-medium text-green ">${price}</Title>
		</div>
	);
};

export default ServiceCardListType;

