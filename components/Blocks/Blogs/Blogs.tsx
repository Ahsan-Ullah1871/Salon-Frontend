import BlogCard from "@/components/ui/Cards/BlogCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import { BlogPost } from "@/types/CommonTypes";
import React from "react";

const Blogs = ({ blogs }: { blogs: BlogPost[] }) => {
	return (
		<div>
			<div className=" max-w-2xl mx-auto flex flex-col gap-6 mb-[50px] ">
				<Heading1 styles=" text-center font-spacial  font-medium  text-[34px] md:text-[58px] leading-[40px] md:leading-[68px]">
					See Our Latest Blog
				</Heading1>
			</div>
			<Carousel
				swiper_slide_style="!w-[370px] !min-h-[504px]"
				Items={blogs?.map((blog) => {
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
			/>
		</div>
	);
};

export default Blogs;

