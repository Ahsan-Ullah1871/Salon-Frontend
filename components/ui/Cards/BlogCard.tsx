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

const BlogCard = ({
	image,
	title,
	url,
	tags,
	author,
	date,
}: {
	image: string;
	title: string;
	author: string;
	date: string;
	url: string;
	tags: Array<string>;
}) => {
	const router = useRouter();

	return (
		<Link
			href={url}
			className="  min-h-[504px]   max-w-[370px]   relative    bg-transparent  shadow-none hover:shadow-md duration-300 cursor-pointer "
		>
			<Image
				src={image}
				width={370}
				height={280}
				alt="FAQ"
			/>
			<Heading5 styles=" mt-6 ">{title}</Heading5>
			<div className="mt-7">
				{tags?.map((tag) => {
					return (
						<WithoutActionButton
							key={tag}
							title={tag}
							className=" px-5 py-2 text-xs bg-green bg-opacity-10    text-green"
						/>
					);
				})}
			</div>

			<Divider divider_style="w-full h-[1px]  text-black_deep my-6  bg-opacity-20 " />

			<div className="flex items-center  justify-start gap-6">
				<Title>{author}</Title>
				<Title>{`. ${date}`}</Title>
			</div>
		</Link>
	);
};

export default BlogCard;

