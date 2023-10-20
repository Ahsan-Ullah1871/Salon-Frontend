import DashboardComponents from "@/components/Blocks/Dashboard/Dashboard";
import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import CustomerDashboardHeader from "@/components/Blocks/Header/DashboardHeader2";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { CATEGORY_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import React from "react";

const Dashboard = async () => {
	return (
		<div className=" min-h-screen w-full h-full">
			{/* Sticky item */}
			<div className="sticky  top-0  md:top-4 z-10   py-3   md:px-6   bg-d_body">
				<DashboardHeader />

				<div>
					<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
						Dashboard
					</Heading1>
				</div>
				<div className="mt-6 flex items-center flex-wrap  justify-between">
					<div className="flex  items-center justify-center flex-wrap gap-4">
						<PrimaryLink
							url={`/admin/dashboard/appointments`}
							title="Check  appointments list"
							className="bg-primary border bg-opacity-20 border-primary hover:bg-transparent p-2  rounded-md text-d_black hover:text-primary duration-500 "
						/>
						<PrimaryLink
							url={`/admin/dashboard/schedules/create`}
							title="Add new schedule"
							className="bg-green bg-opacity-90 border border-green hover:bg-transparent p-2  rounded-md text-white hover:text-green duration-500 "
						/>

						<PrimaryLink
							url={`/admin/dashboard/blogs/create`}
							title="Create a new blog"
							className="bg-green bg-opacity-90 border border-green hover:bg-transparent p-2  rounded-md text-white hover:text-green duration-500 "
						/>
					</div>
					<PrimaryLink
						url={`/admin/dashboard/categories`}
						title="See All Categories"
						className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
					/>
				</div>
			</div>

			{/* Body */}
			<div className=" mt-10">
				<DashboardComponents />
			</div>
		</div>
	);
};

export default Dashboard;

