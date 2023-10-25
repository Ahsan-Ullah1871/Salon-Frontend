/* eslint-disable react/no-unescaped-entities */
import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import {
	Appointment,
	BlogPost,
	Category,
	Service,
	UserFile,
} from "@/types/CommonTypes";
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
import { useAddReviewMutation } from "@/redux/features/reviews/reviewApi";

const CreateReviewForm = ({
	appointment_details,
}: {
	appointment_details: Appointment;
}) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [addReview, { data, isLoading, isError, error, isSuccess }] =
		useAddReviewMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [reviewForm, serReviewForm] = useState({
		comment: "",
		user_id: user?.id,
		service_id: appointment_details.service_id,
		appointment_id: appointment_details.id,
		rating: 4,
	});

	// useEffect
	useEffect(() => {
		serReviewForm({
			comment: "",
			user_id: user?.id,
			service_id: appointment_details.service_id,
			appointment_id: appointment_details.id,
			rating: 4,
		});
	}, [appointment_details, user]);

	// const current value
	const current_value = (key_name: "comment") => {
		return reviewForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		serReviewForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		addReview(reviewForm);
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
			setAlertMessage("review created  successfully");

			router.push(`/dashboard/reviews`);
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
				Submit review for "
				{appointment_details.service.name}"
			</Heading5>

			{/*  */}
			<div className=" w-full mt-5">
				<Form
					button_title="Submit"
					is_loading={isLoading}
					button_icon={
						isLoading
							? ICONS.button_loading_icon
							: ""
					}
					button_stye="w-full mt-4 bg-d_primary text-white col-span-2 "
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" max-w-lg mx-auto p-6 bg-white shadow rounded-lg  grid grid-cols-1 grid-cols-2"
					fields_list={[
						{
							data_filed_key: "rating",
							key: "rating",
							properties: {
								className: "w-full",
								current_value:
									reviewForm.rating,
								clickHandler: (
									value: number
								) =>
									serReviewForm(
										(
											prev
										) => ({
											...prev,
											rating: value,
										})
									),
							},
						},

						{
							data_filed_key: "comment",
							key: "text-area",
							properties: {
								title: "Review details",
								placeholder:
									"Enter your full review here",
								is_required: true,
								row: 10,
								current_value:
									current_value(
										"comment"
									),

								set_new_value: (
									value: string
								) =>
									update_value(
										"comment",
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

export default CreateReviewForm;

