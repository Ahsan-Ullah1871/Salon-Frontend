import EditBlogInfo from "@/components/Blocks/Blogs/EditBlogInfo";
import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import EditService from "@/components/Blocks/Services/ServiceEdit";
import CategoryDetailsSkeleton from "@/components/ui/Skeleton/category/CategoryDetailsSkeleton";
import { useGetBlogDetailsQuery } from "@/redux/features/blogs/blogsApi";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import {
	useGetServiceDetailsQuery,
	useGetServicesQuery,
} from "@/redux/features/service/serviceApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const EditBlogPage = ({ serviceID }: { serviceID: string }) => {
	// params

	// Get service details query
	const { data: blogDetails, isLoading } =
		useGetBlogDetailsQuery(serviceID);

	const serviceDetailsData = blogDetails?.data;

	// Get categories query
	const { data: services } = useGetServicesQuery({
		page: 1,
		size: 100,
	});

	const services_list = services?.data;

	return (
		<div>
			{isLoading && <CategoryDetailsSkeleton />}
			{!isLoading && (
				<EditBlogInfo
					services_list={services_list?.data}
					blog_details={blogDetails?.data}
				/>
			)}{" "}
		</div>
	);
};

export default EditBlogPage;

