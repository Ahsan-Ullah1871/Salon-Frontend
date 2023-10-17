import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const EditCategoryPage = ({ ct_id }: { ct_id: string }) => {
	// params

	// Get categories query
	const {
		data: categoryDetails,
		isLoading,
		isError,
		error,
	} = useGetCategoryDetailsQuery(ct_id);

	const categoryDetailsData = categoryDetails?.data;

	return (
		<div>
			<CategoryEdit categoryDetailsData={categoryDetailsData} />
		</div>
	);
};

export default EditCategoryPage;

