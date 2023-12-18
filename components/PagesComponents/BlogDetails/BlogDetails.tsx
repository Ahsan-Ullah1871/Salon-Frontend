import PageHeader from "@/components/ui/PageBanner/PageHeader";
import { BLOG_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import FullBlogDescription from "./Details";
//
async function getBlogDetails(blogID: string) {
	const res = await fetch(`${getBaseUrl()}${BLOG_PATH}/${blogID}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const BlogDetails = async ({ blogID }: { blogID: string }) => {
	const blog_details = await getBlogDetails(blogID);

	return (
		<div>
			{/* Page Header */}
			<PageHeader
				page_title="Blog Details"
				page_description="Read our article everyday"
				bg_image=""
			/>

			<FullBlogDescription blog_details={blog_details?.data} />
		</div>
	);
};

export default BlogDetails;

