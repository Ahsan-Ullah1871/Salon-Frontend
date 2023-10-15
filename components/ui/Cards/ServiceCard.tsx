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

const ServiceCard = ({
	image,
	title,
	url,
	ratings,
	time,
	todays_available_schedule,
}: {
	image: string;
	title: string;
	time: string;
	ratings: number;
	url: string;
	todays_available_schedule: string;
}) => {
	const router = useRouter();

	return (
		<div className="  min-h-[504px]   max-w-[370px]   relative    bg-transparent  shadow-none hover:shadow-md  cursor-pointer  duration-300  ">
			<Image
				src={image}
				width={370}
				height={280}
				alt="FAQ"
			/>
			<Title styles="mt-6 text-green font-medium px-4">
				{todays_available_schedule}
			</Title>
			<Heading5 styles=" mt-2 px-4 ">{title}</Heading5>

			<div className="flex items-center mt-4 justify-start gap-6 px-4">
				<Rating current_value={ratings} />
				<Title>{`. ${time}`}</Title>
			</div>
		</div>
	);
};

export default ServiceCard;

