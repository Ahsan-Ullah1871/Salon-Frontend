import ServiceDetails from "@/components/PagesComponents/ServiceDetails/ServiceDetails";
import PageHeader from "@/components/ui/PageBanner/PageHeader";
import { SERVICE_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";
import ServiceLoading from "./loading";

export async function generateMetadata(
	{
		params,
	}: {
		params: { id: string };
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const serviceID = params.id;

	// fetch data
	const service = await fetch(
		`${getBaseUrl()}${SERVICE_PATH}/${serviceID}`
	).then((res) => res.json());

	// optionally access and extend (rather than replace) parent metadata

	return {
		title: service.data.name,
		description: service.data.description,
	};
}

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
		<Suspense fallback={<ServiceLoading />}>
			<ServiceDetails service_details={service_details?.data} />
		</Suspense>
	);
};

export default ServiceDetailPage;

