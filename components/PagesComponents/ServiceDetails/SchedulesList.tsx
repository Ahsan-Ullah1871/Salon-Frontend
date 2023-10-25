import ScheduleCard from "@/components/ui/Cards/ScheduleCard";
import DateInputPicker from "@/components/ui/DatePicker/DateInputPicker";
import ServiceDatePicker from "@/components/ui/DatePicker/DatePicker";
import store from "@/redux/Store";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Schedule, Service } from "@/types/CommonTypes";
import { useGetSchedulesQuery } from "@/redux/features/schedule/scheduleApi";
import { DateISOConverter } from "@/constants/DateStriingCOnverter";
import ScheduleTab from "@/components/Blocks/ServiceDetails/ScheduleTab";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import PaginationFunction from "@/components/ui/Pagination/Pagination";

const SchedulesList = ({
	setSelectedSchedule,
	service_details,
	setSelectedIndex,
}: {
	setSelectedSchedule: Function;
	setSelectedIndex: Function;
	service_details: Service;
}) => {
	// filter state and effect for update
	const [filter, setFilter] = useState({
		id: "",
		available: "",
		service_id: service_details?.id,
		provider_id: "",
		date: new Date(),
		page: 1,
		size: 10,
	});

	const {
		data: schedules,
		isFetching,
		isLoading,
		isError,
		error,
	} = useGetSchedulesQuery({
		id: filter.id,
		available: filter.available,
		provider_id: filter.provider_id,
		date: DateISOConverter(filter.date),
		page: filter?.page,
		service_id: service_details?.id,
		size: filter.size,
	});

	const schedules_list = schedules?.data;

	return (
		<div className=" bg-white w-full  py-[90px] md:py-[100px] px-[20px] md:px-[100px] ">
			<ScheduleTab
				schedule_list={schedules_list?.data}
				setSelectedSchedule={(schedule: Schedule) => {
					if (schedule.available) {
						setSelectedSchedule(schedule);
						setSelectedIndex(2);
					}
				}}
				setFilter={setFilter}
				filter={filter}
				isLoading={isLoading}
				isFetching={isFetching}
			/>

			{schedules_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							schedules_list?.meta?.page
						}
						pageCount={
							schedules_list?.meta?.totalPage
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

export default SchedulesList;

