import BlogsList from "@/components/Blocks/Blogs/BlogsList";
import ServicesList from "@/components/Blocks/Services/ServicesList";
import { BLOG_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";

// Get Latest blogs
async function getBlogs() {
	const res = await fetch(`${getBaseUrl()}${BLOG_PATH}?page=1&size=200`, {
		cache: "force-cache",
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const Blogs = async () => {
	const { data: blogs_data } = await getBlogs();

	return (
		<div>
			<BlogsList blogs_data={blogs_data?.data} />
		</div>
	);
};

export default Blogs;

