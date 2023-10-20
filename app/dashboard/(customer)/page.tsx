import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import CustomerDashboardHeader from "@/components/Blocks/Header/DashboardHeader2";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
	return redirect("/dashboard/appointments");
	// <div className=" min-h-screen w-full h-full">
	// 	{/* Sticky item */}
	// 	<div className="sticky  top-0  md:top-4 z-10   py-3   md:px-6   bg-d_body">
	// 		<CustomerDashboardHeader />

	// 		<div>
	// 			<Heading1 styles=" md:text-2xl md:leading-[30px]  md:font-bold text-start font-sub_main">
	// 				Dashboard
	// 			</Heading1>
	// 		</div>
	// 		<div className="mt-6 flex items-center justify-end">
	// 			<PrimaryLink
	// 				url={`/admin/dashboard/categories`}
	// 				title="Dashboard"
	// 				className="bg-d_primary border border-d_primary hover:bg-transparent p-2  rounded-md text-white hover:text-d_primary duration-500 "
	// 			/>
	// 		</div>
	// 	</div>

	// 	{/* Body */}
	// 	{/* <div className=" mt-10">
	// 		<ProfilePage />
	// 	</div> */}
	// </div>
};

export default Dashboard;

