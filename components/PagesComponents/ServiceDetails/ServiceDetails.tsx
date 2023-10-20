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
import { Service } from "@/types/CommonTypes";
import { Provider } from "react-redux";
import store from "@/redux/Store";

const ServiceDetails = ({ service_details }: { service_details: Service }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedSchedule, setSelectedSchedule] = useState(null);

	return (
		<Provider store={store}>
			<div>
				{/* Page Header */}
				<PageHeader
					page_title="Service Details"
					page_description="Book a service by schedule"
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
								component: (
									<FullDescription
										service_details={
											service_details
										}
										setSelectedIndex={
											setSelectedIndex
										}
									/>
								),
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
								component: (
									<SchedulesList
										setSelectedSchedule={
											setSelectedSchedule
										}
										service_details={
											service_details
										}
										setSelectedIndex={
											setSelectedIndex
										}
									/>
								),
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
								component: (
									<Booking
										service_details={
											service_details
										}
										setSelectedIndex={
											setSelectedIndex
										}
										selectedSchedule={
											selectedSchedule
										}
										setSelectedSchedule={
											setSelectedSchedule
										}
									/>
								),
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
		</Provider>
	);
};

export default ServiceDetails;

