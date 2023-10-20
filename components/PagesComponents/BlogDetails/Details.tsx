import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import WithoutActionButton from "@/components/ui/Buttons/WithoutActionButton";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Rating from "@/components/ui/Rating/Rating";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import { BlogPost, Service } from "@/types/CommonTypes";
import Image from "next/image";
import React from "react";

const FullBlogDescription = ({ blog_details }: { blog_details: BlogPost }) => {
	return (
		<div
			className=" bg-white w-full  py-[90px] md:py-[100px] px-[20px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 
         gap-10"
		>
			{/* 1st column */}
			<div className=" flex flex-col gap-4 items-start justify-center  ">
				<Heading1 styles="text-start font-sub-spacial">
					{blog_details.title}
				</Heading1>
				<NormalDescription styles="text-start  ">
					{blog_details.content}
				</NormalDescription>

				<div className="mt-7  flex items-center justify-start flex-wrap gap-4">
					{blog_details?.tags
						?.split(",")
						.map((tag) => {
							return (
								<WithoutActionButton
									key={tag}
									title={tag}
									className=" px-5 py-2 text-xs bg-green bg-opacity-10    text-green"
								/>
							);
						})}
				</div>

				<div className="flex items-center mt-4 justify-start  gap-6 w-full   border-t pt-8 border-d_gray">
					<Title>{blog_details?.author?.name}</Title>
					{blog_details?.publishedAt && (
						<Title>{`. ${new Date(
							blog_details?.publishedAt
						).toLocaleDateString()}`}</Title>
					)}
				</div>
			</div>

			{/* Image and 2nd column */}
			<div className="flex justify-center md:justify-end relative">
				<Image
					src={blog_details?.image_url}
					height={560}
					width={470}
					alt="feature"
				/>
			</div>
		</div>
	);
};

export default FullBlogDescription;

