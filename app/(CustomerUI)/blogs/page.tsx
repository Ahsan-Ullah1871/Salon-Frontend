import Blogs from "@/components/PagesComponents/Blog/BlogsList";
import Services from "@/components/PagesComponents/Services/ServicesList";
import PageHeader from "@/components/ui/PageBanner/PageHeader";

const page = () => {
	return (
		<div className="px-6">
			{/* Page Header */}
			<div className="mb-20">
				<PageHeader
					page_title="All blogs  page"
					page_description="Check our all latest blogs "
					bg_image=""
				/>
			</div>
			<Blogs />
		</div>
	);
};

export default page;

