import ScheduleCard from "@/components/ui/Cards/ScheduleCard";
import DateInputPicker from "@/components/ui/DatePicker/DateInputPicker";
import ServiceDatePicker from "@/components/ui/DatePicker/DatePicker";
import React from "react";

const SchedulesList = () => {
	return (
		<div className=" bg-white w-full  py-[90px] md:py-[100px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-start justify-start  gap-5 md:gap-10">
			<div className="   w-full  px-6 py-4 bg-white md:hidden sticky top-0">
				<DateInputPicker field_styles={""} />
			</div>
			{/* Schediles */}
			<div className=" flex-grow flex flex-col gap-6  ">
				<ScheduleCard
					imageSrc="/img/blog.png"
					imageAlt="se"
					imageHeight={80}
					imageWidth={80}
					workerName="Ahsan Ullah"
					scheduleDate="29 January 2023 at 12=00 AM"
					duration="1 hour"
					isBooked={true}
				/>
				<ScheduleCard
					imageSrc="/img/blog.png"
					imageAlt="se"
					imageHeight={80}
					imageWidth={80}
					workerName="Ahsan Ullah"
					scheduleDate="29 January 2023 at 12=00 AM"
					duration="1 hour"
					isBooked={true}
				/>
				<ScheduleCard
					imageSrc="/img/blog.png"
					imageAlt="se"
					imageHeight={80}
					imageWidth={80}
					workerName="Ahsan Ullah"
					scheduleDate="29 January 2023 at 12=00 AM"
					duration="1 hour"
					isBooked={true}
				/>
			</div>
			{/* Date picker */}
			<div className=" hidden md:block sticky top-14">
				<ServiceDatePicker />
			</div>
		</div>
	);
};

export default SchedulesList;

