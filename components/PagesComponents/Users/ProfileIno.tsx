import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import {
	BlogPost,
	Category,
	Service,
	User,
	UserFile,
} from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
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
	useAddBlogMutation,
	useEditBlogMutation,
} from "@/redux/features/blogs/blogsApi";
import Alert from "@/components/Blocks/Alerts/Alerts";
import UserRole from "@/types/UserRole";
import { UserRoleArray } from "@/constants/UserRoleConsttant";
import {
	useEditProfileMutation,
	useEditUserMutation,
} from "@/redux/features/users/userApi";

const ProfileIno = ({ profile_details }: { profile_details: User }) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [editProfile, { data, isLoading, isError, error, isSuccess }] =
		useEditProfileMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [profileForm, setProfileFOrm] = useState({
		email: "",
		name: "",
		phone_number: user?.id,
		address: "",
		profile_image: "",
		role: "",
	});

	// useEffect
	useEffect(() => {
		setProfileFOrm({
			email: profile_details?.email,
			name: profile_details?.name,
			phone_number: profile_details?.phone_number,
			address: profile_details?.address,
			profile_image: profile_details?.profile_image ?? "",
			role: profile_details?.role,
		});
	}, [profile_details]);

	// const current value
	const current_value = (
		key_name:
			| "email"
			| "name"
			| "phone_number"
			| "address"
			| "profile_image"
			| "role"
	) => {
		return profileForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setProfileFOrm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		editProfile({
			userID: profile_details?.id,
			user_data: profileForm,
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
			setAlertMessage("Profile updated  successfully");
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
				Profile
			</Heading5>

			{/*  */}
			<div className=" w-full mt-5">
				<Form
					button_title="Save updated  info"
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
							data_filed_key:
								"profile_image",
							key: "image-select",
							properties: {
								title: "Profile Image",
								width: 380,
								height: 200,
								current_value:
									current_value(
										"profile_image"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"profile_image",
										value
									),
								set_new_image_value: (
									image: UserFile
								) => {
									update_value(
										"profile_image",
										image.url
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
							data_filed_key: "name",
							key: "input-text",
							properties: {
								title: "Name",
								placeholder: "name",
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
								placeholder: "email",
								type: "text",
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
							data_filed_key: "role",
							key: "select-box",
							properties: {
								title: "Role (not changeable)",
								default_option_text:
									"Role",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									UserRoleArray?.map(
										(
											role
										) => ({
											label: role,
											value: role,
										})
									),
								is_disabled: true,
								current_value:
									current_value(
										"role"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"role",
										value
									),
							},
						},

						{
							data_filed_key: "address",
							key: "text-area",
							properties: {
								title: "Address",
								placeholder:
									"Enter address",
								is_required: true,
								row: 5,
								current_value:
									current_value(
										"address"
									),

								set_new_value: (
									value: string
								) =>
									update_value(
										"address",
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

export default ProfileIno;

