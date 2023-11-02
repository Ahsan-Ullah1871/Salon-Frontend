import ServicesList from "@/components/Blocks/Services/ServicesList";
import { SERVICE_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import { setValueINRootVariable } from "@/utils/colorChanging";

// Get Latest service
async function getServices() {
	const res = await fetch(
		`${getBaseUrl()}${SERVICE_PATH}?page=1&size=200`,
		{
			cache: "force-cache",
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const Services = async () => {
	const { data: services_data } = await getServices();

	return (
		<div>
			<ServicesList services_data={services_data} />
			{/*   */}
		</div>
	);
};

export default Services;

