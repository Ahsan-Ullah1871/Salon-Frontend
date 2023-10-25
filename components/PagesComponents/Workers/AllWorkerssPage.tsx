import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import AdminServicesList from "@/components/Blocks/Services/AdminServicesList";
import WorkersList from "@/components/Blocks/Workers/WorkersList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import { useGetWorkersQuery } from "@/redux/features/workers/workerApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

const AllWorkersPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		id: "",
		is_authorized: "",
		user_id: "",
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
		data: workers,
		isLoading,
		isError,
		error,
	} = useGetWorkersQuery({
		id: filter.id,
		is_authorized: filter.is_authorized,
		user_id: filter.user_id,
		search: filter?.search,
		page: filter?.page,
		size: filter.size,
	});

	const workers_list = workers?.data;

	return (
		<div className=" min-h-[90VH] flex flex-col justify-between ">
			{isLoading && <TableSkeleton />}
			{!isLoading && (
				<WorkersList
					workers={workers_list?.data}
					meta_data={workers_list?.meta}
				/>
			)}
			{workers_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							workers_list?.meta?.page
						}
						pageCount={
							workers_list?.meta?.totalPage
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

export default AllWorkersPage;

