import Services from "@/components/PagesComponents/Services/ServicesList";
import PageHeader from "@/components/ui/PageBanner/PageHeader";

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

