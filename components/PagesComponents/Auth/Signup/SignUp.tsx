import Alert from "@/components/Blocks/Alerts/Alerts";
import { Form } from "@/components/ui/Form/Form";
import SimpleLink from "@/components/ui/Links/SimpleLink";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import Title from "@/components/ui/Text/Paragraph/Title";
import useAuthCheck from "@/hooks/useAuthCheck";
import { ICONS } from "@/icons/AllIcons";
import {
	useLoginMutation,
	useRegisterMutation,
} from "@/redux/features/auth/authApi";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import { get_error_messages } from "@/utils/error_messages";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUP = () => {
	const router = useRouter();
	const auth_checked = useAuthCheck();
	// login mutation hook
	const [register, { data, isLoading, isError, error, isSuccess }] =
		useRegisterMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");
	//
	const [signUpFormState, setSignUpForm] = useState({
		name: "",
		email: "",
		password: "",
		address: "",
		role: "customer",
		phone_number: "",
	});

	// const current value
	const current_value = (
		key_name:
			| "email"
			| "password"
			| "address"
			| "phone_number"
			| "name"
	) => {
		return signUpFormState?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setSignUpForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		register(signUpFormState);
	};

	// redirecting effect
	useEffect(() => {
		if (data?.success || auth_checked) {
			router.push("/");
		}
	}, [data, auth_checked]);

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
			setAlertMessage("Signed up  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div className="  p-4 pb-6 max-w-md w-full min-h-[200px] bg-white  shadow-md  ">
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
				👋 Welcome to our salon shop
			</Heading5>

			<div className=" w-full mt-5">
				<Form
					button_title="Sign in"
					is_loading={isLoading}
					button_icon={
						isLoading
							? ICONS.button_loading_icon
							: ""
					}
					button_stye="w-full mt-4"
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" flex flex-col gap-4"
					fields_list={[
						{
							data_filed_key: "name",
							key: "input-text",
							properties: {
								title: "Name",
								placeholder:
									"Enter your name",
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
							data_filed_key: "email",
							key: "input-text",
							properties: {
								title: "Email",
								placeholder:
									"Enter your email address",
								type: "text",
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
							data_filed_key: "password",
							key: "input-text",
							properties: {
								title: "Password",
								placeholder:
									"Enter your password",
								type: "password",
								is_required: true,
								current_value:
									current_value(
										"password"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"password",
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
									"Enter your full address",
								is_required: true,
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
							},
						},
						{
							data_filed_key: "phone_number",
							key: "input-number",
							properties: {
								title: "Phone Number",
								placeholder:
									"Enter your phone number",
								type: "tel",
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
					]}
				/>
			</div>

			<div className="flex items-center justify-center flex-wrap gap-2 mt-4 ">
				<Title styles="text-sm">
					Already have not account?
				</Title>
				<SimpleLink
					url="/signin"
					className=" text-sm md:text-sm"
					title="Signin"
				/>
			</div>
		</div>
	);
};

export default SignUP;

