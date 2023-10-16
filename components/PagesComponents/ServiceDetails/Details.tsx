import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Rating from "@/components/ui/Rating/Rating";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import Image from "next/image";
import React from "react";

const FullDescription = () => {
	return (
		<div
			className=" bg-white w-full  py-[90px] md:py-[100px] px-[20px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 
         gap-10"
		>
			{/* 1st column */}
			<div className=" flex flex-col gap-4 items-start justify-center  ">
				<Heading1 styles="text-start font-sub-spacial">
					Everything You Need to Know About the Delta
					Variant
				</Heading1>
				<NormalDescription styles="text-start  ">
					The Delta variant has taken over the country
					as the most prevalent COVID-19 strain. We
					know that it can
				</NormalDescription>

				<PrimaryButton
					title="Book now"
					onClickHandler={() => {}}
					className=" mt-5 md:mt-8 py-3 px-5 "
				/>

				<div className="flex items-center mt-4 justify-between gap-6 w-full">
					<Title styles=" text-green font-medium  ">
						$100
					</Title>
					<Rating current_value={3} />
				</div>
			</div>

			{/* Image and 2nd column */}
			<div className="flex justify-center md:justify-end relative">
				<Image
					src={"/img/product.png"}
					height={560}
					width={470}
					alt="feature"
				/>
			</div>
		</div>
	);
};

export default FullDescription;

