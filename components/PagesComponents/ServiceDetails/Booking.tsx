import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import ScheduleCard from "@/components/ui/Cards/ScheduleCard";
import ServiceCardListType from "@/components/ui/Cards/ServiceCardListType";
import Rating from "@/components/ui/Rating/Rating";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import Image from "next/image";
import React from "react";

const Booking = () => {
	return (
		<div
			className="     grid grid-cols-1 md:grid-cols-6 
         gap-10"
		>
			<div className=" py-8 md:col-span-4 bg-white shadow-md  rounded-md  px-6">
				{/* 1st row */}
				<div className="  flex flex-col gap-4 items-start justify-center  ">
					<Heading1 styles="text-start font-sub-spacial ext-[20px] md:text-[20px]  mdl:leading-[26px] ">
						Service Details
					</Heading1>

					<div className="  w-full">
						<ServiceCardListType
							key={""}
							image={"/img/blog.png"}
							title={
								"Keeping Kids Active and Engaged at Home"
							}
							url={"/"}
							time={"! hour"}
							todays_available_schedule={
								"20 seats available "
							}
							ratings={4}
						/>
					</div>
				</div>
				{/* 2nd row */}
				<div className="  flex flex-col gap-4 items-start justify-center  mt-10 ">
					<Heading1 styles="text-start font-sub-spacial ext-[20px] md:text-[20px]  mdl:leading-[26px] ">
						Schedule Details
					</Heading1>

					<div className="  w-full">
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
				</div>
			</div>
			{/* Image and 2nd column */}
			<div className=" md:col-span-2   bg-white shadow-md  rounded-md  px-6 py-8">
				<Heading1 styles="text-start font-sub-spacial ext-[20px] md:text-[20px]  mdl:leading-[26px] ">
					Booking Details
				</Heading1>

				<div className="w-full flex flex-col gap-4 mt-6">
					<div className="flex items-center justify-between gap-2">
						<Title styles="   text-black_deep font-medium  ">
							Subtotal
						</Title>
						<Title styles="    ">3</Title>
					</div>
					<div className="flex items-center justify-between gap-2">
						<Title styles="   text-black_deep font-medium  ">
							Toatl
						</Title>
						<Title styles="    ">100</Title>
					</div>
					<div className="flex items-center justify-between gap-2">
						<Title styles="   text-black_deep font-medium  ">
							Service Charge
						</Title>
						<Title styles="    ">2</Title>
					</div>
					<div className="flex items-center justify-between gap-2">
						<Title styles="   text-black_deep font-medium  ">
							Estimated Total
						</Title>
						<Title styles="    ">200</Title>
					</div>

					<PrimaryButton
						title="Confirm now "
						onClickHandler={() => {}}
						className=" mt-5 md:mt-8 py-3 px-5 "
					/>
				</div>
			</div>
		</div>
	);
};

export default Booking;

