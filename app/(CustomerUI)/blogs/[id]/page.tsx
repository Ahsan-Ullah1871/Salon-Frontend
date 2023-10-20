import BlogDetails from "@/components/PagesComponents/BlogDetails/BlogDetails";
import React from "react";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<BlogDetails blogID={params.id} />
		</div>
	);
};

export default BlogDetailsPage;

