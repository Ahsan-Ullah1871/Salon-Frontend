import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { Category, Service, UserFile } from "@/types/CommonTypes";
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
import {
	useAddServiceMutation,
	useEditServiceMutation,
} from "@/redux/features/service/serviceApi";

const EditService = ({
	categories_list,
	service_details,
}: {
	categories_list: Category[];
	service_details: Service;
}) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [editService, { data, isLoading, isError, error, isSuccess }] =
		useEditServiceMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [serviceForm, setServiceForm] = useState({
		name: "",
		image_url: "",
		description: "",
		image_id: "",
		price: "",
		duration: "",
		category_id: "",
		is_available: true,
	});

	//
	// useEffect
	useEffect(() => {
		setServiceForm({
			name: service_details?.name,
			image_url: service_details?.image_url,
			description: service_details?.description,
			image_id: service_details?.image_id,
			price: service_details?.price.toString(),
			duration: service_details?.duration,
			category_id: service_details?.category_id,
			is_available: service_details?.is_available,
		});
	}, [service_details]);

	// const current value
	const current_value = (
		key_name:
			| "name"
			| "image_url"
			| "description"
			| "price"
			| "duration"
			| "category_id"
	) => {
		return serviceForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setServiceForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		editService({
			serviceID: service_details.id,
			service_data: {
				...serviceForm,
				price: Number(serviceForm.price),
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
				New Service
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
							data_filed_key: "image_url",
							key: "image-select",
							properties: {
								title: "Select Image",
								width: 380,
								height: 200,
								current_value:
									current_value(
										"image_url"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"image_url",
										value
									),
								set_new_image_value: (
									image: UserFile
								) => {
									update_value(
										"image_url",
										image.url
									);
									update_value(
										"image_id",
										image.id
									);
								},
								objectFit: "cover",
								isfill: false,
								image_styles:
									" block  mx-auto  max-w-md max-h-[300px]",
								component_styles:
									"w-full col-span-2 max-w-full",
							},
						},
						{
							data_filed_key: "is_available",
							key: "switch",
							properties: {
								title: "Available/Unavailable",
								current_value:
									serviceForm.is_available,
								set_new_value: (
									value: boolean
								) => {
									setServiceForm(
										(
											prev
										) => ({
											...prev,
											is_available:
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
								title: "Service Name",
								placeholder:
									"Enter service name",
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
							data_filed_key: "category_id",
							key: "select-box",
							properties: {
								title: "Category",
								default_option_text:
									"Select Category",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									categories_list?.map(
										(ct) => ({
											label: ct.name,
											value: ct.id,
										})
									),

								current_value:
									current_value(
										"category_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"category_id",
										value
									),
							},
						},
						{
							data_filed_key: "price",
							key: "input-text",
							properties: {
								title: "Service Price",
								placeholder:
									"Enter service price ",
								type: "number",
								is_required: true,
								current_value:
									current_value(
										"price"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"price",
										value
									),
							},
						},
						{
							data_filed_key: "duration",
							key: "input-text",
							properties: {
								title: "Service Duration",
								placeholder:
									"Enter estimate service duration example:1 hour",
								type: "text",
								is_required: true,
								current_value:
									current_value(
										"duration"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"duration",
										value
									),
							},
						},

						{
							data_filed_key: "description",
							key: "text-area",
							properties: {
								title: "Service Description",
								placeholder:
									"Enter service description",
								is_required: true,
								current_value:
									current_value(
										"description"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"description",
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

export default EditService;

