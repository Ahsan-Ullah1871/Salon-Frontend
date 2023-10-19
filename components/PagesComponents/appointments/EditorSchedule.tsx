import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import CategoryEdit from "@/components/Blocks/Catgory/CategoryEdit";
import ScheduleEdit from "@/components/Blocks/Schedule/ScheduleEdit";
import EditService from "@/components/Blocks/Services/ServiceEdit";
import WorkerEdit from "@/components/Blocks/Workers/WorkerEdit";
import CategoryDetailsSkeleton from "@/components/ui/Skeleton/category/CategoryDetailsSkeleton";
import {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
} from "@/redux/features/catgeories/categoryApi";
import { useGetScheduleDetailsQuery } from "@/redux/features/schedule/scheduleApi";
import {
	useGetServiceDetailsQuery,
	useGetServicesQuery,
} from "@/redux/features/service/serviceApi";
import {
	useGetWorkerDetailsQuery,
	useGetWorkersQuery,
} from "@/redux/features/workers/workerApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";

const EditorSchedule = ({ scheduleID }: { scheduleID: string }) => {
	// params

	// Get service details query
	const {
		data: scheduleDetails,
		isLoading,
		isError,
		error,
	} = useGetScheduleDetailsQuery(scheduleID);

	const scheduleDta = scheduleDetails?.data;

	// All workers
	const { data: workers } = useGetWorkersQuery({
		page: 1,
		size: 500,
	});

	// All services
	const { data: services } = useGetServicesQuery({
		page: 1,
		size: 500,
	});

	return (
		<div>
			{isLoading && <CategoryDetailsSkeleton />}
			{!isLoading && (
				<ScheduleEdit
					workers={workers?.data?.data}
					services={services?.data?.data}
					schedule_details={scheduleDta}
				/>
			)}{" "}
		</div>
	);
};

export default EditorSchedule;

