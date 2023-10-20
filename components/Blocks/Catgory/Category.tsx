import Carousel from "@/components/ui/Carousel/Carousel";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { Category } from "@/types/CommonTypes";
import Image from "next/image";
import React from "react";

const CategoriesListCarousel = ({ categories }: { categories: Category[] }) => {
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
				Items={categories?.map((ct) => {
					return (
						<Image
							src={ct.image_url}
							width={200}
							height={100}
							alt={ct.name}
							key={ct.id}
							objectFit="contain rounded-lg"
						/>
					);
				})}
				swiper_slide_style="!w-[200px] !h-[100px]"
			/>
		</div>
	);
};

export default CategoriesListCarousel;

