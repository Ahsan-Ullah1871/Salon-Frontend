"use client";

import PageHeader from "@/components/ui/PageBanner/PageHeader";
import Tabs from "@/components/ui/Tab/Tabs";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect, useState } from "react";
import { tabBgChange } from "./Service.function";
import { ICONS } from "@/icons/AllIcons";
import FullDescription from "./Details";
import SchedulesList from "./SchedulesList";
import Booking from "./Booking";

const ServiceDetails = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	useEffect(() => {
		setValueINRootVariable({
			variable_name: "bg_color",
			value: "#F6EFDB",
		});
	}, []);

	//

	return (
		<div>
			{/* Page Header */}
			<PageHeader
				page_title="Service Details"
				page_description="Selec from schedule"
				bg_image=""
			/>
			<div className="">
				<Tabs
					tab_list_style="  sticky top-0 z-10   bg-bg_color md:bg-transparent border border-primary  w-full max-w-full  rounded-none flex items-center justify-center "
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
					all_tabs={[
						{
							id: "1",
							title: "Service Details",
							component: <FullDescription />,
							tab_style: [
								" outline-none ring-0 py-3  text-lg font-medium text-sm md:text-base ",
								tabBgChange(
									selectedIndex,
									0
								),
							].join(" "),
							selected_tab_style:
								"  bg-green text-white ",
							unselected_tab_style:
								"text-green ",
							tab_icon: ICONS.details,
						},

						{
							id: "1",
							title: "Schedules",
							component: <SchedulesList />,
							tab_style: [
								" outline-none ring-0 py-3  text-lg font-medium text-sm md:text-base ",
								tabBgChange(
									selectedIndex,
									1
								),
							].join(" "),
							selected_tab_style:
								"bg-green text-white ",
							unselected_tab_style:
								"  text-green",
							tab_icon: ICONS.schedule,
						},

						{
							id: "1",
							title: "Booking",
							component: <Booking />,
							tab_style: [
								" outline-none ring-0 py-3  text-lg font-medium text-sm md:text-base ",
								tabBgChange(
									selectedIndex,
									2
								),
							].join(" "),
							selected_tab_style:
								" bg-green text-white ",
							unselected_tab_style:
								"  text-green ",
							tab_icon: ICONS.checkout,
						},
					]}
				/>
			</div>
		</div>
	);
};

export default ServiceDetails;

