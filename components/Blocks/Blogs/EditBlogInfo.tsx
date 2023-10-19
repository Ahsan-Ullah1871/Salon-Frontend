import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { BlogPost, Category, Service, UserFile } from "@/types/CommonTypes";
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
	useAddBlogMutation,
	useEditBlogMutation,
} from "@/redux/features/blogs/blogsApi";

const EditBlogInfo = ({
	services_list,
	blog_details,
}: {
	services_list: Service[];
	blog_details: BlogPost;
}) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [editBlog, { data, isLoading, isError, error, isSuccess }] =
		useEditBlogMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [blogForm, setBlogForm] = useState({
		title: "",
		content: "",
		author_id: user?.id,
		image_url: "",
		image_id: "",
		tags: "",
		service_id: "",
		published: true,
		publishedAt: new Date(),
	});

	// useEffect
	useEffect(() => {
		setBlogForm({
			title: blog_details.title,
			content: blog_details.content,
			author_id: blog_details.author_id,
			image_url: blog_details.image_url,
			image_id: blog_details.image_id,
			tags: blog_details.tags,
			service_id: blog_details.service_id ?? "",
			published: blog_details.published,
			publishedAt: blog_details.publishedAt
				? new Date(blog_details.publishedAt)
				: new Date(),
		});
	}, [blog_details]);

	// const current value
	const current_value = (
		key_name:
			| "title"
			| "content"
			| "author_id"
			| "tags"
			| "image_url"
			| "service_id"
	) => {
		return blogForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setBlogForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		let fields_data: Partial<BlogPost> = blogForm;
		if (fields_data?.service_id === "") {
			delete fields_data?.service_id;
		}
		editBlog({ blogID: blog_details.id, blog_data: blogForm });
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
			setAlertMessage("Blog updated  successfully");
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
				Edit Blog
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
							data_filed_key: "title",
							key: "input-text",
							properties: {
								title: "Title",
								placeholder:
									"Enter blog title",
								type: "text",
								component_styles:
									"col-span-2 md:col-span-1",
								is_required: true,
								current_value:
									current_value(
										"title"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"title",
										value
									),
							},
						},
						{
							data_filed_key: "service_id",
							key: "select-box",
							properties: {
								title: "Service (optional)",
								default_option_text:
									"Select Service",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									services_list?.map(
										(ct) => ({
											label: ct.name,
											value: ct.id,
										})
									),

								current_value:
									current_value(
										"service_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"service_id",
										value
									),
							},
						},

						{
							data_filed_key: "Tags",
							key: "input-text",
							properties: {
								title: "Tags",
								placeholder:
									"Enter multiple tags by comma separator",
								type: "text",
								is_required: true,
								current_value:
									current_value(
										"tags"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"tags",
										value
									),
							},
						},
						{
							data_filed_key: "publishedAt",
							key: "date-picker",
							properties: {
								title: "Date",
								placeholder: "",
								component_styles:
									"col-span-2 md:col-span-1",

								current_value:
									blogForm?.publishedAt,
								set_new_value: (
									value: Date
								) => {
									setBlogForm(
										(
											prev
										) => ({
											...prev,
											publishedAt:
												value,
										})
									);
								},
							},
						},

						{
							data_filed_key: "content",
							key: "text-area",
							properties: {
								title: "Content",
								placeholder:
									"Enter blog content",
								is_required: true,
								row: 10,
								current_value:
									current_value(
										"content"
									),

								set_new_value: (
									value: string
								) =>
									update_value(
										"content",
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

export default EditBlogInfo;

