export default function TabSkeleton({}: {}) {
	return (
		<div>
			<div className="animate-pulse bg-gray     bg-white p-5 rounded-md shadow   grid grid-cols-4 gap-4">
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
			</div>

			<div className="animate-pulse bg-gray     bg-white p-5  mt-4  rounded-md">
				{" "}
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-80" />
			</div>
		</div>
	);

	// return (
	// 	<Tab.Group
	// 		selectedIndex={selectedIndex}
	// 		onChange={(value) => setSelectedIndex(value)}
	// 	>
	// 		<Tab.List
	// 			className={cn(
	// 				"flex  rounded-xl bg-blue-900/20 ",
	// 				tab_list_style
	// 			)}
	// 		>
	// 			{all_tabs?.map((tab) => (
	// 				<Tab
	// 					key={tab?.id}
	// 					className={({ selected }) =>
	// 						classNames(
	// 							cn(
	// 								"w-full  py-2.5 text-sm font-medium leading-5 text-blue-700 flex flex-col md:flex-row items-center justify-center  gap-2 md:gap-4",
	// 								tab?.tab_style
	// 							),
	// 							selected
	// 								? cn(
	// 										"bg-white shadow",
	// 										tab.selected_tab_style
	// 								  )
	// 								: cn(
	// 										"text-blue-100  ",
	// 										tab.unselected_tab_style
	// 								  )
	// 						)
	// 					}
	// 				>
	// 					<span className="w6 h-6">
	// 						{tab?.tab_icon}
	// 					</span>{" "}
	// 					<span>{tab?.title}</span>
	// 				</Tab>
	// 			))}
	// 		</Tab.List>
	// 		<Tab.Panels className="mt-2">
	// 			{all_tabs?.map((tab) => {
	// 				return (
	// 					<Tab.Panel
	// 						key={tab.id}
	// 						className={classNames(
	// 							cn(
	// 								"  rounded-md outline-none ring-0",
	// 								tab.tab_panel_style
	// 							)
	// 						)}
	// 					>
	// 						{tab.component}
	// 					</Tab.Panel>
	// 				);
	// 			})}
	// 		</Tab.Panels>
	// 	</Tab.Group>
	// );
}

