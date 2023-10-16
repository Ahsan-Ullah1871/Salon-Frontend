import BlogCard from "@/components/ui/Cards/BlogCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import React from "react";

const BlogsList = () => {
	return (
		<div className="grid grid-cols-1  min-[480px]:grid-cols-2   min-[700px]:grid-cols-3 lg:grid-cols-4 gap-8 ">
			<BlogCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				tags={["Test"]}
				author={"Ahsan "}
				date={"01 June 2023"}
			/>

			<BlogCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				tags={["Test"]}
				author={"Ahsan "}
				date={"01 June 2023"}
			/>

			<BlogCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				tags={["Test"]}
				author={"Ahsan "}
				date={"01 June 2023"}
			/>

			<BlogCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				tags={["Test"]}
				author={"Ahsan "}
				date={"01 June 2023"}
			/>

			<BlogCard
				key={""}
				image={"/img/blog.png"}
				title={"Keeping Kids Active and Engaged at Home"}
				url={"/"}
				tags={["Test"]}
				author={"Ahsan "}
				date={"01 June 2023"}
			/>
		</div>
	);
};

export default BlogsList;

