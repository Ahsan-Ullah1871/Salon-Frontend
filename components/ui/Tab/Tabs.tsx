"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { cn } from "@/utils/classNames";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs({
	all_tabs,
	tab_list_style,
	selectedIndex,
	setSelectedIndex,
}: {
	tab_list_style?: string;
	selectedIndex: number;
	setSelectedIndex: Function;
	all_tabs: Array<{
		title: string;
		id: string;
		component: React.ReactElement;
		tab_style?: string;
		selected_tab_style?: string;
		tab_icon?: React.ReactNode;
		unselected_tab_style?: string;
		tab_panel_style?: string;
	}>;
}) {
	const [selected_tab, setSelectedTab] = useState(all_tabs[0].id);

	return (
		<Tab.Group
			selectedIndex={selectedIndex}
			onChange={(value) => setSelectedIndex(value)}
		>
			<Tab.List
				className={cn(
					"flex  rounded-xl bg-blue-900/20 ",
					tab_list_style
				)}
			>
				{all_tabs?.map((tab) => (
					<Tab
						key={tab?.id}
						className={({ selected }) =>
							classNames(
								cn(
									"w-full  py-2.5 text-sm font-medium leading-5 text-blue-700 flex flex-col md:flex-row items-center justify-center  gap-2 md:gap-4",
									tab?.tab_style
								),
								selected
									? cn(
											"bg-white shadow",
											tab.selected_tab_style
									  )
									: cn(
											"text-blue-100  ",
											tab.unselected_tab_style
									  )
							)
						}
					>
						<span className="w6 h-6">
							{tab?.tab_icon}
						</span>{" "}
						<span>{tab?.title}</span>
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels className="mt-2">
				{all_tabs?.map((tab) => {
					return (
						<Tab.Panel
							key={tab.id}
							className={classNames(
								cn(
									"  rounded-md outline-none ring-0",
									tab.tab_panel_style
								)
							)}
						>
							{tab.component}
						</Tab.Panel>
					);
				})}
			</Tab.Panels>
		</Tab.Group>
	);
}

