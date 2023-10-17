import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const AllCatagoriesPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		name: "",
		id: "",
		image_url: "",
		search: searchParam,
	});

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
		<div>
			<CategoriesList
				categories={categories_list?.data}
				meta_data={categories_list?.meta}
			/>
		</div>
	);
};

export default AllCatagoriesPage;

