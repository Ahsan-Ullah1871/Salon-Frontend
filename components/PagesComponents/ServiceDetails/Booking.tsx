import Alert from "@/components/Blocks/Alerts/Alerts";
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import ScheduleCard from "@/components/ui/Cards/ScheduleCard";
import ServiceCardListType from "@/components/ui/Cards/ServiceCardListType";
import Rating from "@/components/ui/Rating/Rating";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import { useAppSelector } from "@/hooks/Redux";
import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { useAddAppointmentMutation } from "@/redux/features/appointment/appointmentApi";
import { Schedule, Service } from "@/types/CommonTypes";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import AppointmentStatus from "@/types/ServiceStatus";
import { checkUserAuthenticationFromCLientSide } from "@/utils/auth";
import { get_error_messages } from "@/utils/error_messages";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Booking = ({
	service_details,
	setSelectedIndex,
	selectedSchedule,
	setSelectedSchedule,
}: {
	service_details: Service;
	setSelectedIndex: Function;
	selectedSchedule: Schedule | null;
	setSelectedSchedule: Function;
}) => {
	const router = useRouter();
	const { user, isLoggedIn } = useAppSelector((state) => state.auth);

	const auth_details = checkUserAuthenticationFromCLientSide();
	// login mutation hook
	const [addAppointment, { data, isLoading, isError, error, isSuccess }] =
		useAddAppointmentMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [appointmentForm, setAppointmentForm] = useState({
		user_id: auth_details?.user_details?.id,
		service_id: service_details.id,
		schedule_id: selectedSchedule?.id,
		status: AppointmentStatus.BOOKED,
		date: selectedSchedule?.date,
		start_time: selectedSchedule?.start_time,
		end_time: selectedSchedule?.end_time,
	});

	//

	const confirmHandler = async () => {
		if (!isLoggedIn) {
			router.push("/signin");
			return;
		}
		if (selectedSchedule == null) {
			setISAlertOpen(true);
			setAlertType("error");
			setAlertMessage("Select a schedule");

			return false;
		}
		addAppointment({
			...appointmentForm,
		});
	};

	useEffect(() => {
		if (error && "data" in error) {
			setISAlertOpen(true);
			setAlertType("error");
			const error_messages = get_error_messages(
				error?.data as IGenericErrorResponse
			);
			setAlertMessage(error_messages);
		} else if (isSuccess) {
			setISAlertOpen(true);
			setAlertType("success");
			setAlertMessage("Booking confirmed  successfully");
			router.push(`/dashboard/`);
		}
	}, [error, isSuccess]);

	return (
		<>
			<Alert
				alert_type={alert_type}
				alert_message={alert_message}
				is_alert_open={is_alert_open}
				setISAlertOpen={setISAlertOpen}
				setAlertMessage={setAlertMessage}
				closeAlert={() => setISAlertOpen(false)}
			/>

			{/*  */}
			<div
				className="     grid grid-cols-1 md:grid-cols-6 
         gap-10"
			>
				{/*Alert  */}

				<div className=" py-8 md:col-span-4 bg-white shadow-md  rounded-md  px-6">
					{/* 1st row */}
					<div className="  flex flex-col gap-4 items-start justify-center  ">
						<Heading1 styles="text-start font-sub-spacial ext-[20px] md:text-[20px]  mdl:leading-[26px] ">
							Service Details
						</Heading1>

						<div className="  w-full">
							<ServiceCardListType
								key={service_details.id}
								image={
									service_details.image_url
								}
								title={
									service_details.name
								}
								url={"/"}
								time={
									service_details.duration
								}
								todays_available_schedule={
									""
								}
								ratings={4}
								price={service_details.price.toString()}
							/>
						</div>
					</div>
					{/* 2nd row */}
					<div className="  flex flex-col gap-4 items-start justify-center  mt-10 ">
						<Heading1 styles="text-start font-sub-spacial ext-[20px] md:text-[20px]  mdl:leading-[26px] ">
							Schedule Details
						</Heading1>

						<div className="  w-full">
							{selectedSchedule && (
								<ScheduleCard
									workerName={
										selectedSchedule
											?.worker
											?.name
									}
									scheduleDate={
										selectedSchedule?.date as unknown as string
									}
									duration={
										service_details.duration
									}
									isAvailable={
										selectedSchedule?.available
									}
									start_time={
										selectedSchedule?.start_time as unknown as string
									}
									end_time={
										selectedSchedule?.end_time as unknown as string
									}
								/>
							)}
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
							<Title styles="    ">1</Title>
						</div>
						<div className="flex items-center justify-between gap-2">
							<Title styles="   text-black_deep font-medium  ">
								Toatl
							</Title>
							<Title styles="    ">
								${service_details.price}
							</Title>
						</div>
						<div className="flex items-center justify-between gap-2">
							<Title styles="   text-black_deep font-medium  ">
								Service Charge
							</Title>
							<Title styles="    ">
								$10
							</Title>
						</div>
						<div className="flex items-center justify-between gap-2">
							<Title styles="   text-black_deep font-medium  ">
								Estimated Total
							</Title>
							<Title styles="    ">
								$
								{service_details.price +
									10}
							</Title>
						</div>

						<PrimaryButton
							title="Confirm now "
							is_loading={isLoading}
							icon={
								isLoading
									? SM_ICONS.button_loading_icon
									: ""
							}
							onClickHandler={() =>
								confirmHandler()
							}
							className=" mt-5 md:mt-8 py-3 px-5 "
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Booking;

