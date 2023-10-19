import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { Category, UserFile } from "@/types/CommonTypes";
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

const AddNewCategory = () => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [addCategory, { data, isLoading, isError, error, isSuccess }] =
		useAddCategoryMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	//
	const [categoryForm, setCategoryForm] = useState({
		name: "",
		image_url: "",
		description: "",
		image_id: "",
	});

	// const current value
	const current_value = (
		key_name: "name" | "image_url" | "description"
	) => {
		return categoryForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setCategoryForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		addCategory(categoryForm);
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
			setAlertMessage("Added  successfully");

			router.push(`/admin/dashboard/categories`);
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
				New category
			</Heading5>

			{/*  */}
			<div className=" w-full mt-5">
				<Form
					button_title="Save new categeory"
					is_loading={isLoading}
					button_icon={
						isLoading
							? ICONS.button_loading_icon
							: ""
					}
					button_stye="w-full mt-4 bg-d_primary text-white "
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" max-w-md mx-auto p-6 bg-white shadow rounded-lg flex flex-col gap-4"
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
									" block  mx-auto",
								component_styles:
									"w-full",
							},
						},
						{
							data_filed_key: "name",
							key: "input-text",
							properties: {
								title: "Category Name",
								placeholder:
									"Enter category name",
								type: "text",
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
							data_filed_key: "description",
							key: "text-area",
							properties: {
								title: "Category Description",
								placeholder:
									"Enter category description",
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
							},
						},
					]}
				/>
			</div>
		</div>
	);
};

export default AddNewCategory;

