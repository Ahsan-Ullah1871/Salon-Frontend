import BlogDetails from "@/components/PagesComponents/BlogDetails/BlogDetails";
import { BLOG_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";
import BlogLoading from "./loading";

export async function generateMetadata(
	{
		params,
	}: {
		params: { id: string };
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const blogID = params.id;

	// fetch data
	const blog = await fetch(`${getBaseUrl()}${BLOG_PATH}/${blogID}`).then(
		(res) => res.json()
	);

	// optionally access and extend (rather than replace) parent metadata

	return {
		title: blog.data.title,
		description: blog.data.content,
		authors: [{ name: blog?.data?.author?.name }],
		keywords: blog?.data?.tags?.split(","),
	};
}

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
	return (
		<Suspense fallback={<BlogLoading />}>
			<BlogDetails blogID={params.id} />
		</Suspense>
	);
};

export default BlogDetailsPage;

