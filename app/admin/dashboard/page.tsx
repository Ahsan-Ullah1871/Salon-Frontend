import DashboardHeader from "@/components/Blocks/Header/DashboardHeader";
import { CATEGORY_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import React from "react";

const Dashboard = async () => {
	return (
		<div className=" min-h-screen w-full h-full">
			<DashboardHeader />
		</div>
	);
};

export default Dashboard;

