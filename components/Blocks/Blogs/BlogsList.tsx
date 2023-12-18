import BlogCard from "@/components/ui/Cards/BlogCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import { BlogPost } from "@/types/CommonTypes";
import React from "react";

const BlogsList = ({ blogs_data }: { blogs_data: BlogPost[] }) => {
	return (
		<div className="grid grid-cols-1  min-[480px]:grid-cols-2   min-[700px]:grid-cols-3 lg:grid-cols-4   gap-x-8 gap-y-12 ">
			{blogs_data?.map((blog) => {
				return (
					<BlogCard
						key={blog.id}
						image={blog.image_url}
						title={blog.title}
						url={`/blogs/${blog.id}`}
						tags={blog.tags.split(",")}
						author={blog.author.name}
						date={new Date(
							blog?.created_at
						).toDateString()}
					/>
				);
			})}
		</div>
	);
};

export default BlogsList;

