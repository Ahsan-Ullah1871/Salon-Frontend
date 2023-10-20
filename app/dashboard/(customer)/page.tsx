import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import CustomerDashboardHeader from "@/components/Blocks/Header/DashboardHeader2";
import React from "react";

const Dashboard = async () => {
	return (
		<div className=" min-h-screen w-full h-full">
			<CustomerDashboardHeader />
		</div>
	);
};

export default Dashboard;

