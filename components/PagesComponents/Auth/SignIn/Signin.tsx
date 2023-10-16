import { Form } from "@/components/ui/Form/Form";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import React, { useState } from "react";

const Signin = () => {
	const [signInFormState, setSignInForm] = useState({
		email: "",
		password: "",
	});

	// const current value
	const current_value = (key_name: string) => {
		return signInFormState?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setSignInForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = () => {
		console.log("====================================");
		console.log(signInFormState);
		console.log("====================================");
	};

	return (
		<div className="  p-4 max-w-md w-full min-h-[200px] bg-white  shadow-md  ">
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
		</div>
	);
};

export default Signin;
