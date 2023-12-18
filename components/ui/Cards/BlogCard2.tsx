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
import ActionButtons from "@/components/Blocks/Action/ActionButtons";

const BlogCard2 = ({
	image,
	title,
	url,
	tags,
	author,
	date,
	deleteButtonCLick,
	editButtonCLick,
}: {
	image: string;
	title: string;
	author: string;
	date?: Date | null;
	url: string;
	tags: Array<string>;
	deleteButtonCLick: Function;
	editButtonCLick: Function;
}) => {
	const router = useRouter();

	return (
		<div className=" min-h-[400px]    sm:min-h-[470px]   max-w-[370px]   relative    bg-d_black_normal  bg-opacity-10 pb-6  shadow-none hover:shadow-md duration-300  ">
			<div className="absolute top-2 right-2 bg-white rounded-md px-2 py-1">
				<ActionButtons
					deleteButtonCLick={() => deleteButtonCLick()}
					editButtonCLick={() => editButtonCLick()}
				/>
			</div>

			<div className="max-w-[370px] h-[280px] relative">
				<Image
					src={image}
					fill
					objectFit="cocer"
					alt="blog"
				/>
			</div>
			<Heading5 styles=" mt-6 px-4  md:text-[18px] leading-[24px] truncate">
				{title}
			</Heading5>
			<div className="mt-7 px-4 flex items-center justify-start gap-3">
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

			<div className=" px-4 flex items-center  justify-start gap-6">
				<Title>{author}</Title>
				<Title>{`. ${
					date ? new Date(date)?.toDateString() : ""
				}`}</Title>
			</div>
		</div>
	);
};

export default BlogCard2;

