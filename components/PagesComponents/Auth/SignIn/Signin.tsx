import { Form } from "@/components/ui/Form/Form";
import SimpleLink from "@/components/ui/Links/SimpleLink";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import Title from "@/components/ui/Text/Paragraph/Title";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import React, { useState } from "react";

const Signin = () => {
	// login mutation hook
	const [login, { isLoading, isError, error, isSuccess }] =
		useLoginMutation();

	//
	const [signInFormState, setSignInForm] = useState({
		email: "",
		password: "",
		role: "customer",
	});

	// const current value
	const current_value = (key_name: "email" | "password") => {
		return signInFormState?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setSignInForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		try {
			const res = await login({
				data: signInFormState,
			}).unwrap();
			console.log("====================================");
			console.log(res);
			console.log("====================================");
		} catch (err: any) {
			console.error(err.message);
		}
	};

	return (
		<div className="  p-4 pb-6 max-w-md w-full min-h-[200px] bg-white  shadow-md  ">
			<Heading5 styles="text-center font-spacial">
				👋 Welcome Back
			</Heading5>

			<div className=" w-full mt-5">
				<Form
					button_title="Sign in"
					is_loading={false}
					button_stye="w-full mt-4"
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" flex flex-col gap-4"
					fields_list={[
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
					]}
				/>
			</div>

			<div className="flex items-center justify-center flex-wrap gap-2 mt-4 ">
				<Title styles="text-sm">
					You have not account?
				</Title>
				<SimpleLink
					url="/signup"
					className=" text-sm md:text-sm"
					title="Signup"
				/>
			</div>
		</div>
	);
};

export default Signin;

