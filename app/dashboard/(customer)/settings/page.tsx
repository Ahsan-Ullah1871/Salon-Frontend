"use client";

import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import CustomerDashboardHeader from "@/components/Blocks/Header/DashboardHeader2";
import SearchBar from "@/components/Blocks/SearchBlock/SearchBar";
import EditBlogPage from "@/components/PagesComponents/Blog/EditBlog";
import AllCatagoriesPage from "@/components/PagesComponents/Categories/AllCatagoriesPage";
import EditCategoryPage from "@/components/PagesComponents/Categories/EditCategory";
import EditServicePage from "@/components/PagesComponents/Services/EditService";
import ProfilePage from "@/components/PagesComponents/Users/ProfilePage";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import { useAppSelector } from "@/hooks/Redux";
import UserRole from "@/types/UserRole";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const UserSetting = () => {
	const [searchParam, setSearchParam] = useState("");
	const pathname = usePathname();
	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky  top-0  md:top-4 z-10   py-3   md:px-6   bg-d_body">
				<CustomerDashboardHeader />

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						User Profile & Settings
					</Heading1>
				</div>
				<div className="mt-6 flex items-center justify-end">
					<PrimaryLink
						url={`/admin/dashboard/`}
						title="Dashboard"
						className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
					/>
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10">
				<ProfilePage />
			</div>
		</div>
	);
};

export default UserSetting;

