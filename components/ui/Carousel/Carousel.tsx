"use client";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// const SwiperButtonNext = () => {
// 	const swiper = useSwiper();
// 	return (
// 		<button
// 			className="text-lg "
// 			onClick={() => swiper.slideNext()}
// 		>
// 			{ICONS.arrow_long_right}
// 		</button>
// 	);
// };
// const SwiperButtonPrev = () => {
// 	const swiper = useSwiper();
// 	return (
// 		<button
// 			className="text-2xl "
// 			onClick={() => swiper.slidePrev()}
// 		>
// 			{ICONS.arrow_long_left}
// 		</button>
// 	);
// };

export default function Carousel({
	Items,
	swiper_slide_style,
}: {
	Items: Array<any>;
	swiper_slide_style: string;
}) {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Autoplay]}
		>
			{Items?.map((Item) => {
				return (
					<SwiperSlide
						key={Item?.key}
						className={swiper_slide_style}
					>
						{Item}
					</SwiperSlide>
				);
			})}

			{/* <div className="flex items-center justify-end gap-5 my-5">
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</div> */}
		</Swiper>
	);
}

