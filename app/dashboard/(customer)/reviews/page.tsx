"use client";

import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import CustomerDashboardHeader from "@/components/Blocks/Header/DashboardHeader2";
import SearchBar from "@/components/Blocks/SearchBlock/SearchBar";
import AdminBlogs from "@/components/PagesComponents/Blog/AdminBlogList";
import AllCatagoriesPage from "@/components/PagesComponents/Categories/AllCatagoriesPage";
import ReviewsListForCustomer from "@/components/PagesComponents/Reviews/ReviewsListForCustomer";
import AllServicesPage from "@/components/PagesComponents/Services/AllServicesPage";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import UserRole from "@/types/UserRole";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ReviewsPage = () => {
	const [searchParam, setSearchParam] = useState("");
	const pathname = usePathname();

	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky  top-0  md:top-4   z-10   py-3 md:px-6   bg-d_body">
				<CustomerDashboardHeader
					role={UserRole.ADMIN}
					left_side_component={
						<SearchBar
							searchParam={searchParam}
							setSearchParam={setSearchParam}
							search_placeholder={
								"Search reviews"
							}
						/>
					}
				/>

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						All Reviews
					</Heading1>
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10 h-full flex-grow">
				<ReviewsListForCustomer searchParam={searchParam} />
			</div>
		</div>
	);
};

export default ReviewsPage;

