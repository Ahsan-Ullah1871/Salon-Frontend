"use client";

import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import SearchBar from "@/components/Blocks/SearchBlock/SearchBar";
import AllCatagoriesPage from "@/components/PagesComponents/Categories/AllCatagoriesPage";
import AllSchedulesPage from "@/components/PagesComponents/Schedule/AllSchedulesPage";
import AllServicesPage from "@/components/PagesComponents/Services/AllServicesPage";
import AllWorkersPage from "@/components/PagesComponents/Workers/AllWorkerssPage";
import AllAppointmentsPage from "@/components/PagesComponents/appointments/AllAppointmentsPage";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import UserRole from "@/types/UserRole";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AppointmentsPage = () => {
	const [searchParam, setSearchParam] = useState("");
	const pathname = usePathname();

	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky  top-0  md:top-4   z-10   py-3 md:px-6   bg-d_body">
				<DashboardHeader
					role={UserRole.ADMIN}
					left_side_component={
						<SearchBar
							searchParam={searchParam}
							setSearchParam={setSearchParam}
							search_placeholder={
								"Search appointments"
							}
						/>
					}
				/>

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						All appointments list
					</Heading1>
				</div>
				<div className="mt-6 flex items-center justify-end">
					{/* <PrimaryLink
						url={`${pathname}/create`}
						title="Add new schedule"
						className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
					/> */}
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10 h-full flex-grow">
				<AllAppointmentsPage searchParam={searchParam} />
			</div>
		</div>
	);
};

export default AppointmentsPage;

