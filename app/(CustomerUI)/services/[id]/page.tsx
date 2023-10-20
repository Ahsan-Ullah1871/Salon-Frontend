import ServiceDetails from "@/components/PagesComponents/ServiceDetails/ServiceDetails";
import PageHeader from "@/components/ui/PageBanner/PageHeader";
import { SERVICE_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import React from "react";

//
async function getServiceDetails(serviceID: string) {
	const res = await fetch(`${getBaseUrl()}${SERVICE_PATH}/${serviceID}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const ServiceDetailPage = async ({ params }: { params: { id: string } }) => {
	const service_details = await getServiceDetails(params.id);

	return (
		<div>
			<ServiceDetails service_details={service_details?.data} />
		</div>
	);
};

export default ServiceDetailPage;

