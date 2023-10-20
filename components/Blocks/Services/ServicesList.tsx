import ServiceCard from "@/components/ui/Cards/ServiceCard";
import ServiceCard2 from "@/components/ui/Cards/ServiceCard2";
import Carousel from "@/components/ui/Carousel/Carousel";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import { Service } from "@/types/CommonTypes";
import { IMeta, ISendResponse } from "@/types/DataResponseTypes";
import React from "react";

const ServicesList = ({ services_data }: { services_data: any }) => {
	return (
		<div className="grid grid-cols-1  min-[480px]:grid-cols-2   min-[700px]:grid-cols-3 lg:grid-cols-4 gap-8 ">
			{services_data?.data?.map((service: any) => {
				return (
					<ServiceCard2
						key={service.id}
						image={service.image_url}
						title={service.name}
						url={`/services/${service.id}`}
						time={service.duration}
						price={`$ ${service.price}`}
						todays_available_schedule={`${
							service?.schedules?.length ?? 0
						} schedule  available today `}
						ratings={0}
						card_style={""}
					/>
				);
			})}
		</div>
	);
};

export default ServicesList;

