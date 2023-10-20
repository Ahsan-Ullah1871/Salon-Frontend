"use client";

import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import SearchBar from "@/components/Blocks/SearchBlock/SearchBar";
import AddSchedule from "@/components/PagesComponents/Schedule/AddSchedule";
import AddService from "@/components/PagesComponents/Services/AddService";
import AddWorker from "@/components/PagesComponents/Workers/AddWorker";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { useAppSelector } from "@/hooks/Redux";
import UserRole from "@/types/UserRole";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const CreateSchedule = () => {
	const [searchParam, setSearchParam] = useState("");
	const pathname = usePathname();
	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky  top-0  md:top-4    z-10  py-3  md:px-6   bg-d_body">
				<DashboardHeader role={UserRole.ADMIN} />

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						Create a new schedule
					</Heading1>
				</div>
				<div className="mt-6 flex items-center justify-end">
					<PrimaryLink
						url={`/admin/dashboard/schedules`}
						title="See all schedules"
						className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
					/>
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10">
				<AddSchedule />
			</div>
		</div>
	);
};

export default CreateSchedule;

