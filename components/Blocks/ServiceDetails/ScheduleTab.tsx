import ScheduleCard from "@/components/ui/Cards/ScheduleCard";
import ServiceDatePicker from "@/components/ui/DatePicker/DatePicker";
import ScheduleSkeleton from "@/components/ui/Skeleton/ScheduleSkeleton";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import BasicEmpty from "@/components/ui/empty/BasicEmpty";
import { Schedule } from "@/types/CommonTypes";
import React from "react";

const ScheduleTab = ({
	schedule_list,
	setSelectedSchedule,
	setFilter,
	filter,
	isLoading,
	isFetching,
}: {
	schedule_list: Schedule[];
	setSelectedSchedule: any;
	setFilter: any;
	filter: any;
	isLoading: boolean;
	isFetching: boolean;
}) => {
	return (
		<div className=" flex flex-col md:flex-row items-start justify-start  gap-5 md:gap-10">
			<div className="   w-full  px-6 py-4 bg-white md:hidden sticky top-0">
				{/* <DateInputPicker field_styles={""} /> */}
			</div>

			{/*Skeleton on loading  */}
			{(isLoading || isFetching) && <ScheduleSkeleton />}
			{/* Schediles */}
			{!isLoading &&
				!isFetching &&
				schedule_list?.length > 0 && (
					<div className=" flex-grow flex flex-col md:grid grid-cols-2 gap-6  ">
						{schedule_list?.map((schedule) => {
							return (
								schedule?.available && (
									<ScheduleCard
										key={
											schedule.id
										}
										// imageSrc={schedule.worker.}
										// imageAlt="se"
										// imageHeight={80}
										// imageWidth={80}
										workerName={
											schedule
												.worker
												.name
										}
										scheduleDate={
											schedule.date as unknown as string
										}
										duration={
											schedule
												.service
												.duration
										}
										isAvailable={
											schedule.available
										}
										start_time={
											schedule.start_time as unknown as string
										}
										end_time={
											schedule.end_time as unknown as string
										}
										onselectHandler={() =>
											setSelectedSchedule(
												schedule
											)
										}
									/>
								)
							);
						})}
					</div>
				)}

			{/* Empty box on emopth data */}
			{!isLoading &&
				!isFetching &&
				schedule_list?.length === 0 && (
					<div className="flex items-center justify-center flex-grow h-full ">
						<BasicEmpty message="Sorry! There have not any schedule on this Date. Search any new date." />
					</div>
				)}
			{/* Date picker */}
			<div className=" hidden md:block sticky top-14">
				<ServiceDatePicker
					current_date={filter.date}
					setDate={(date: Date) =>
						setFilter((prev: any) => ({
							...prev,
							date: date,
						}))
					}
				/>
			</div>
		</div>
	);
};

export default ScheduleTab;

