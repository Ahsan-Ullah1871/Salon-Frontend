import Carousel from "@/components/ui/Carousel/Carousel";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Image from "next/image";
import React from "react";

const Category = () => {
	return (
		<div>
			{/* Title */}
			<Heading1 styles=" font-special ">
				Salon Market Spotlight
			</Heading1>

			{/* Desc */}
			<NormalDescription styles="mt-4 mb-9 md:mb-14 mx-auto max-w-[650px] px-12 text-center">
				Discover the latest trends and insights in the salon
				industry. Stay ahead of the style game with our
				Salon Market Spotlight.
			</NormalDescription>
			<Carousel
				Items={[
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct1.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
					<Image
						src={"/img/ct2.png"}
						width={200}
						height={100}
						alt="ct"
						key={"ct1"}
						objectFit="contain"
					/>,
				]}
				swiper_slide_style="!w-[200px] !h-[100px]"
			/>
		</div>
	);
};

export default Category;

