import CategoriesList from "@/components/Blocks/Catgory/CategoriesList";
import AdminServicesList from "@/components/Blocks/Services/AdminServicesList";
import WorkersList from "@/components/Blocks/Workers/WorkersList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import { useGetWorkersQuery } from "@/redux/features/workers/workerApi";
import { Category } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import SchedulesList from "../ServiceDetails/SchedulesList";
import DashboardSchedulesList from "@/components/Blocks/Schedule/SchedulesList";
import { useGetAppointmentsListQuery } from "@/redux/features/appointment/appointmentApi";
import AppointmentsList from "@/components/Blocks/Appointments/AppointmentsList";
import { useGetUsersQuery } from "@/redux/features/users/userApi";
import UsersList from "@/components/Blocks/Users/UsersList";

const AllUsersPage = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		email: "",
		name: "",
		phone_number: "",
		address: "",
		role: "",
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
		data: users,
		isLoading,
		isError,
		error,
	} = useGetUsersQuery({
		email: filter.email,
		name: filter.name,
		phone_number: filter.phone_number,
		address: filter.address,
		role: filter.role,
		search: filter.search,
		page: filter?.page,
		size: filter.size,
	});

	const users_list = users?.data;

	return (
		<div className=" min-h-[90VH] flex flex-col justify-between ">
			{isLoading && <TableSkeleton />}
			{!isLoading && (
				<UsersList
					users={users_list?.data}
					meta_data={users_list?.meta}
				/>
			)}
			{users_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={users_list?.meta?.page}
						pageCount={
							users_list?.meta?.totalPage
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

export default AllUsersPage;

