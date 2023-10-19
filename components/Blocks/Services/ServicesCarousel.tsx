import ServiceCard from "@/components/ui/Cards/ServiceCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import Title from "@/components/ui/Text/Paragraph/Title";
import { Service } from "@/types/CommonTypes";
import React from "react";

const ServicesCarousel = ({
	latest_services,
}: {
	latest_services: Service[];
}) => {
	return (
		<div>
			<div className=" max-w-2xl mx-auto flex flex-col gap-6 mb-[50px] ">
				<Title styles="   text-2xl text-white  px-4 py-2  mx-auto bg-primary rounded-[50px] text-center   w-28">
					Services{" "}
				</Title>

				<Heading1 styles=" text-center  font-medium ">
					Custom Beauty Makeovers
				</Heading1>

				<Title styles=" text-center">
					Experience beauty bliss at TeleCare. From
					hair styling to facials, we offer a variety
					of services designed to enhance your unique
					charm and leave you feeling refreshed.
				</Title>
			</div>

			<Carousel
				swiper_slide_style="!w-[370px] !min-h-[504px]"
				Items={latest_services?.map((service) => {
					return (
						<ServiceCard
							key={service.id}
							image={service.image_url}
							title={service.name}
							url={`/services/${service.id}`}
							time={service.duration}
							todays_available_schedule={
								"20 seats available "
							}
							ratings={4}
						/>
					);
				})}
			/>
		</div>
	);
};

export default ServicesCarousel;

