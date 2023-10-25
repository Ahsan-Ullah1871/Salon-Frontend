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
				<Title styles="   text-2xl text-white  px-4 py-2  mx-auto bg-primary rounded-[50px] text-center ">
					Services{" "}
				</Title>

				<Heading1 styles=" text-center font-spacial  font-medium  text-[34px] md:text-[58px] leading-[40px] md:leading-[68px] font-medium ">
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
				swiper_slide_style="!w-[340px] !min-h-[420px]"
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
							price={`$ ${service.price}`}
							ratings={0}
						/>
					);
				})}
			/>
		</div>
	);
};

export default ServicesCarousel;

