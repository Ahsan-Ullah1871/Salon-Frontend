import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoriesSkeleton from "@/components/Blocks/Catgory/CtegoriesSkeleton";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

const AllCatagoriesPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		name: "",
		id: "",
		image_url: "",
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
		data: categories,
		isLoading,
		isError,
		error,
	} = useGetCategoriesQuery({
		name: filter.name,
		id: filter.id,
		image_url: filter.image_url,
		search: filter?.search,
	});

	const categories_list = categories?.data;

	return (
		<div className=" min-h-[90VH] flex flex-col justify-between ">
			{isLoading && <CategoriesSkeleton />}
			{!isLoading && (
				<CategoriesList
					categories={categories_list?.data}
					meta_data={categories_list?.meta}
				/>
			)}
			{categories_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-30 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							categories_list?.meta?.page
						}
						pageCount={
							categories_list?.meta
								?.totalPage
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

export default AllCatagoriesPage;

