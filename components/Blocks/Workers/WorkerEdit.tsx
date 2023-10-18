import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { Category, User, UserFile, Worker } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import Alert from "../Alerts/Alerts";
import { ICONS } from "@/icons/AllIcons";
import { get_error_messages } from "@/utils/error_messages";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import { useRouter } from "next/navigation";
import {
	useAddCategoryMutation,
	useEditCategoryMutation,
} from "@/redux/features/catgeories/categoryApi";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import { useAppSelector } from "@/hooks/Redux";
import { useAddServiceMutation } from "@/redux/features/service/serviceApi";
import {
	useAddWorkerMutation,
	useDeleteWorkerMutation,
	useEditWorkerMutation,
} from "@/redux/features/workers/workerApi";

const WorkerEdit = ({
	users_list,
	worker_details,
}: {
	users_list: User[];
	worker_details: Worker;
}) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [editWorker, { data, isLoading, isError, error, isSuccess }] =
		useEditWorkerMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [workerForm, setWorkerForm] = useState({
		name: "",
		mother_name: "",
		father_name: "",
		email: "",
		phone_number: "",
		user_id: "",
		permanent_address: "",
		current_address: "",
		birth_date: new Date(),
		national_id: "",
		is_authorized: true,
		is_married: false,
	});

	//
	// useEffect
	useEffect(() => {
		setWorkerForm({
			name: worker_details.name,
			mother_name: worker_details.mother_name,
			father_name: worker_details.father_name,
			email: worker_details.email,
			phone_number: worker_details.phone_number,
			user_id: worker_details.user_id,
			permanent_address: worker_details.permanent_address,
			current_address: worker_details.current_address,
			birth_date: new Date(worker_details.birth_date),
			national_id: worker_details.national_id,
			is_authorized: worker_details.is_authorized,
			is_married: worker_details.is_married,
		});
	}, [worker_details]);

	// const current value
	const current_value = (
		key_name:
			| "name"
			| "mother_name"
			| "father_name"
			| "email"
			| "phone_number"
			| "user_id"
			| "permanent_address"
			| "current_address"
			| "national_id"
	) => {
		return workerForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setWorkerForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		editWorker({
			workerID: worker_details.id,
			worker_data: {
				...workerForm,
				birth_date: workerForm.birth_date.toISOString(),
			},
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
			setAlertMessage("Edited  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div>
			{/*Alert  */}
			<Alert
				alert_type={alert_type}
				alert_message={alert_message}
				is_alert_open={is_alert_open}
				setISAlertOpen={setISAlertOpen}
				setAlertMessage={setAlertMessage}
				closeAlert={() => setISAlertOpen(false)}
			/>

			{/*  */}
			<Heading5 styles="text-center font-spacial">
				New worker
			</Heading5>

			{/*  */}
			<div className=" w-full mt-5">
				<Form
					button_title="Save updated info"
					is_loading={isLoading}
					button_icon={
						isLoading
							? ICONS.button_loading_icon
							: ""
					}
					button_stye="w-full mt-4 bg-d_primary text-white col-span-2 "
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" max-w-5xl mx-auto p-6 bg-white shadow rounded-lg  grid grid-cols-1 grid-cols-2"
					fields_list={[
						{
							data_filed_key: "is_available",
							key: "switch",
							properties: {
								title: "Authorized/Unauthorized",
								current_value:
									workerForm.is_authorized,
								set_new_value: (
									value: boolean
								) => {
									setWorkerForm(
										(
											prev
										) => ({
											...prev,
											is_authorized:
												value,
										})
									);
								},

								component_styles:
									"w-full col-span-2 max-w-full",
							},
						},

						{
							data_filed_key: "name",
							key: "input-text",
							properties: {
								title: "Worker Name",
								placeholder:
									"Enter worker name",
								type: "text",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"name"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"name",
										value
									),
							},
						},
						{
							data_filed_key: "email",
							key: "input-text",
							properties: {
								title: "Email",
								placeholder:
									"Enter mail id",
								type: "email",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"email"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"email",
										value
									),
							},
						},
						{
							data_filed_key: "phone_number",
							key: "input-text",
							properties: {
								title: "Phone Number",
								placeholder:
									"Enter your phone number",
								type: "tel",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"phone_number"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"phone_number",
										value
									),
							},
						},
						{
							data_filed_key: "national_id",
							key: "input-text",
							properties: {
								title: "NID",
								placeholder:
									"Enter NID number",
								type: "number",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"national_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"national_id",
										value
									),
							},
						},
						{
							data_filed_key: "father_name",
							key: "input-text",
							properties: {
								title: "Father Name",
								placeholder:
									"Enter worker father name",
								type: "text",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"father_name"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"father_name",
										value
									),
							},
						},
						{
							data_filed_key: "mother_name",
							key: "input-text",
							properties: {
								title: "Mother Name",
								placeholder:
									"Enter worker mother name",
								type: "text",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"mother_name"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"mother_name",
										value
									),
							},
						},

						{
							data_filed_key: "user_id",
							key: "select-box",
							properties: {
								title: "User",
								default_option_text:
									"Select user",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									users_list?.map(
										(
											user
										) => ({
											label: user.name,
											value: user.id,
										})
									),

								current_value:
									current_value(
										"user_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"user_id",
										value
									),
							},
						},
						{
							data_filed_key: "birth_date",
							key: "date-picker",
							properties: {
								title: "Birth date",
								placeholder: "",
								component_styles:
									"col-span-2 md:col-span-1",

								current_value:
									workerForm?.birth_date,
								set_new_value: (
									value: Date
								) => {
									setWorkerForm(
										(
											prev
										) => ({
											...prev,
											birth_date:
												value,
										})
									);
								},
							},
						},

						{
							data_filed_key:
								"current_address",
							key: "text-area",
							properties: {
								title: "Current Address",
								placeholder:
									"Enter current address",
								is_required: true,
								current_value:
									current_value(
										"current_address"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"current_address",
										value
									),
								component_styles:
									"col-span-2",
							},
						},
						{
							data_filed_key:
								"permanent_address",
							key: "text-area",
							properties: {
								title: "Permanent Address",
								placeholder:
									"Enter permanent address",
								is_required: true,
								current_value:
									current_value(
										"permanent_address"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"permanent_address",
										value
									),
								component_styles:
									"col-span-2",
							},
						},
					]}
				/>
			</div>
		</div>
	);
};

export default WorkerEdit;

