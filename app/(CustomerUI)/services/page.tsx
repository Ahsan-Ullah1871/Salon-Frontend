import Services from "@/components/PagesComponents/Services/ServicesList";
import PageHeader from "@/components/ui/PageBanner/PageHeader";
import { Metadata } from "next";

// Meta Data
export const metadata: Metadata = {
	title: "Beauty Care Services",
	description:
		"Explore our wide range of beauty care products for a radiant and confident you.",
	keywords: [
		"beauty products",
		"skincare products",
		"cosmetics",
		"product categories",
		"beauty essentials",
	],
};

const page = () => {
	return (
		<div className="px-6">
			{/* Page Header */}
			<div className="mb-20">
				<PageHeader
					page_title="All services page"
					page_description="Check our all latest service"
					bg_image=""
				/>
			</div>
			<Services />
		</div>
	);
};

export default page;

