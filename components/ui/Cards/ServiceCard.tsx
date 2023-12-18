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

const ServiceCard = ({
	image,
	title,
	url,
	price,
	ratings,
	time,
	todays_available_schedule,
	card_style,
}: {
	image: string;
	title: string;
	price?: string;
	time: string;
	ratings: number;
	url: string;
	todays_available_schedule: string;
	card_style?: string;
}) => {
	const router = useRouter();

	return (
		<Link
			href={url}
			className={cn(
				" min-h-[464px]   max-w-[340px]   relative    bg-transparent  shadow-none hover:shadow-md  cursor-pointer  duration-300  ",
				card_style
			)}
		>
			<div className="w-[340px] h-[280px] relative">
				<Image
					src={image}
					alt="FAQ"
					objectFit="cover"
					fill
				/>
			</div>

			<div className="flex items-center justify-between gap-4   ">
				{/* <Title styles="mt-6 text-green font-medium px-4">
					{todays_available_schedule}
				</Title> */}
				<Heading5 styles=" mt-2 px-4  md:text-[18px] leading-[24px]">
					{title}
				</Heading5>
				<Title styles="mt-6 text-green font-medium px-4 whitespace-nowrap">
					{price}
				</Title>
			</div>

			<div className="flex items-center mt-4 justify-between gap-6 px-4">
				<Rating current_value={ratings} />
				<Title>{`${time}`}</Title>
			</div>
		</Link>
	);
};

export default ServiceCard;

