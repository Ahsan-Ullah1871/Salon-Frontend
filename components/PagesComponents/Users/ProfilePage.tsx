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
import { useGetUserProfileQuery } from "@/redux/features/users/userApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import ProfileIno from "./ProfileIno";

const ProfilePage = () => {
	// params

	// Get service details query
	const { data: profileDetails, isLoading } = useGetUserProfileQuery({});

	const serviceDetailsData = profileDetails?.data;

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
				<ProfileIno
					profile_details={profileDetails?.data}
				/>
			)}{" "}
		</div>
	);
};

export default ProfilePage;

