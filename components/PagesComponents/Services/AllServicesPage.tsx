import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import AdminServicesList from "@/components/Blocks/Services/AdminServicesList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

const AllServicesPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		minPrice: "",
		maxPrice: "",
		category: "",
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
		data: services,
		isLoading,
		isError,
		error,
	} = useGetServicesQuery({
		minPrice: filter.minPrice,
		maxPrice: filter.maxPrice,
		category: filter.category,
		search: filter?.search,
		page: filter?.page,
		size: filter.size,
	});

	const services_list = services?.data;

	return (
		<div className=" min-h-[90VH] flex flex-col justify-between ">
			{isLoading && <TableSkeleton />}
			{!isLoading && (
				<AdminServicesList
					services={services_list?.data}
					meta_data={services_list?.meta}
				/>
			)}
			{services_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							services_list?.meta?.page
						}
						pageCount={
							services_list?.meta?.totalPage
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

export default AllServicesPage;

