import CreateReview from "@/app/dashboard/(customer)/reviews/[id]/page";
import EditBlogInfo from "@/components/Blocks/Blogs/EditBlogInfo";
import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import CreateReviewForm from "@/components/Blocks/Review/CreateReview";
import EditService from "@/components/Blocks/Services/ServiceEdit";
import CategoryDetailsSkeleton from "@/components/ui/Skeleton/category/CategoryDetailsSkeleton";
import { useGetAppointmentDetailsQuery } from "@/redux/features/appointment/appointmentApi";
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

const CreateReviewOnService = ({
	appointmentID,
}: {
	appointmentID: string;
}) => {
	// params

	// Get service details query
	const { data: appointmentDetails, isLoading } =
		useGetAppointmentDetailsQuery(appointmentID);

	const appointmentDetailsData = appointmentDetails?.data;

	return (
		<div>
			{isLoading && <CategoryDetailsSkeleton />}
			{!isLoading && (
				<CreateReviewForm
					appointment_details={appointmentDetailsData}
				/>
			)}{" "}
		</div>
	);
};

export default CreateReviewOnService;

