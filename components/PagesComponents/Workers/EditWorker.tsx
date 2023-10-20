import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import EditService from "@/components/Blocks/Services/ServiceEdit";
import WorkerEdit from "@/components/Blocks/Workers/WorkerEdit";
import CategoryDetailsSkeleton from "@/components/ui/Skeleton/category/CategoryDetailsSkeleton";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import { useGetServiceDetailsQuery } from "@/redux/features/service/serviceApi";
import { useGetUsersQuery } from "@/redux/features/users/userApi";
import { useGetWorkerDetailsQuery } from "@/redux/features/workers/workerApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const EditWorker = ({ workerID }: { workerID: string }) => {
	// params

	// Get service details query
	const {
		data: workerDetails,
		isLoading,
		isError,
		error,
	} = useGetWorkerDetailsQuery(workerID);

	const workerData = workerDetails?.data;

	// All user
	const {
		data: users,
		isLoading: userIsLoading,
		isError: isUserError,
		error: userError,
	} = useGetUsersQuery({
		page: 1,
		size: 500,
	});

	return (
		<div>
			{isLoading && <CategoryDetailsSkeleton />}
			{!isLoading && (
				<WorkerEdit
					users_list={users?.data?.data}
					worker_details={workerData}
				/>
			)}{" "}
		</div>
	);
};

export default EditWorker;

