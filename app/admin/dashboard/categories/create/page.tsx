"use client";

import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import SearchBar from "@/components/Blocks/SearchBlock/SearchBar";
import EditCategoryPage from "@/components/PagesComponents/Categories/EditCategory";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import UserRole from "@/types/UserRole";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const CreateCategory = ({ params }: { params: { id: string } }) => {
	const [searchParam, setSearchParam] = useState("");
	const pathname = usePathname();

	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky top-12   py-3  px-6   bg-d_body">
				<DashboardHeader
					role={UserRole.ADMIN}
					left_side_component={
						<SearchBar
							searchParam={searchParam}
							setSearchParam={setSearchParam}
						/>
					}
				/>

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						Create a new Category
					</Heading1>
				</div>
				<div className="mt-6 flex items-center justify-end">
					<PrimaryLink
						url={`${pathname}/create`}
						title="See all categories"
						className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
					/>
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10">
				{/* <EditCategoryPage ct_id={params?.id} /> */}
			</div>
		</div>
	);
};

export default CreateCategory;

