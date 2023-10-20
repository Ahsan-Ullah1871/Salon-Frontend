import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import EditService from "@/components/Blocks/Services/ServiceEdit";
import CategoryDetailsSkeleton from "@/components/ui/Skeleton/category/CategoryDetailsSkeleton";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import { useGetServiceDetailsQuery } from "@/redux/features/service/serviceApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const EditServicePage = ({ serviceID }: { serviceID: string }) => {
	// params

	// Get service details query
	const {
		data: serviceDetails,
		isLoading,
		isError,
		error,
	} = useGetServiceDetailsQuery(serviceID);

	const serviceDetailsData = serviceDetails?.data;

	// Get categories query
	const {
		data: categories,
		isLoading: ctLoading,
		isError: isCtError,
		error: ctError,
	} = useGetCategoriesQuery({
		page: 1,
		size: 50,
	});

	const categories_list = categories?.data;

	return (
		<div>
			{isLoading && <CategoryDetailsSkeleton />}
			{!isLoading && (
				<EditService
					categories_list={categories_list?.data}
					service_details={serviceDetailsData}
				/>
			)}{" "}
		</div>
	);
};

export default EditServicePage;

