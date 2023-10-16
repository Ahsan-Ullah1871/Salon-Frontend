import ServiceCard from "@/components/ui/Cards/ServiceCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import React from "react";

const ServicesList = () => {
	return (
		<div className="grid grid-cols-1  min-[480px]:grid-cols-2   min-[700px]:grid-cols-3 lg:grid-cols-4 gap-8 ">
			<ServiceCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				time={"! hour"}
				todays_available_schedule={"20 seats available "}
				ratings={4}
				card_style={""}
			/>
			<ServiceCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				time={"! hour"}
				todays_available_schedule={"20 seats available "}
				ratings={4}
				card_style={""}
			/>
			<ServiceCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				time={"! hour"}
				todays_available_schedule={"20 seats available "}
				ratings={4}
				card_style={""}
			/>
			<ServiceCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				time={"! hour"}
				todays_available_schedule={"20 seats available "}
				ratings={4}
				card_style={""}
			/>
		</div>
	);
};

export default ServicesList;

