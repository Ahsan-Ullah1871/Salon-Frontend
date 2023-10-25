import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import AdminServicesList from "@/components/Blocks/Services/AdminServicesList";
import WorkersList from "@/components/Blocks/Workers/WorkersList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import { useGetWorkersQuery } from "@/redux/features/workers/workerApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import SchedulesList from "../ServiceDetails/SchedulesList";
import DashboardSchedulesList from "@/components/Blocks/Schedule/SchedulesList";

const AllSchedulesPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		id: "",
		available: "",
		service_id: "",
		provider_id: "",
		search: searchParam,
		page: 1,
		size: 10,
	});

	//  searchParam  updating
	useEffect(() => {
		setFilter((prev) => ({
			...prev,
			search: searchParam,
		}));
	}, [searchParam]);

	// Get categories query
	const {
		data: schedules,
		isLoading,
		isError,
		error,
	} = useGetSchedulesQuery({
		id: filter.id,
		available: filter.available,
		service_id: filter.service_id,
		provider_id: filter.provider_id,
		search: filter?.search,
		page: filter?.page,
		size: filter.size,
	});

	const schedules_list = schedules?.data;

	return (
		<div className=" min-h-[90VH] flex flex-col justify-between ">
			{isLoading && <TableSkeleton />}
			{!isLoading && (
				<DashboardSchedulesList
					schedules={schedules_list?.data}
					meta_data={schedules_list?.meta}
				/>
			)}
			{schedules_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							schedules_list?.meta?.page
						}
						pageCount={
							schedules_list?.meta?.totalPage
						}
						moreData={(value) =>
							setFilter((prev) => ({
								...prev,
								page: value,
							}))
						}
					/>
				</div>
			)}
		</div>
	);
};

export default AllSchedulesPage;

