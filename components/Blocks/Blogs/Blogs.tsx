import BlogCard from "@/components/ui/Cards/BlogCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import React from "react";

const Blogs = () => {
	return (
		<div>
			<Carousel
				swiper_slide_style="!w-[370px] !min-h-[504px]"
				Items={[
					<BlogCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						tags={["Test"]}
						author={"Ahsan "}
						date={"01 June 2023"}
					/>,
					<BlogCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						tags={["Test"]}
						author={"Ahsan "}
						date={"01 June 2023"}
					/>,
					<BlogCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						tags={["Test"]}
						author={"Ahsan "}
						date={"01 June 2023"}
					/>,
					<BlogCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						tags={["Test"]}
						author={"Ahsan "}
						date={"01 June 2023"}
					/>,
					<BlogCard
						key={""}
						image={"/img/blog.png"}
						title={
							"Keeping Kids Active and Engaged at Home"
						}
						url={"/"}
						tags={["Test"]}
						author={"Ahsan "}
						date={"01 June 2023"}
					/>,
				]}
			/>
		</div>
	);
};

export default Blogs;

