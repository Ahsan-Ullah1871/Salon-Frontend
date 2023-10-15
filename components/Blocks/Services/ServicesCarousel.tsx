import ServiceCard from "@/components/ui/Cards/ServiceCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import React from "react";

const ServicesCarousel = () => {
	return (
		<div>
			<Carousel
				swiper_slide_style="!w-[370px] !min-h-[504px]"
				Items={[
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
					<ServiceCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						time={"! hour"}
						todays_available_schedule={
							"20 seats available "
						}
						ratings={4}
					/>,
				]}
			/>
		</div>
	);
};

export default ServicesCarousel;

