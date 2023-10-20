/* eslint-disable react/no-unescaped-entities */
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import React from "react";

const AuthChecking = () => {
	return (
		<div className=" h-screen w-full flex items-center justify-center bg-bg_color_home ">
			<div className=" max-w-md p-6  flex flex-col gap-4">
				<Heading1 styles=" text-[40px] md:text-[80px] leading-[40px] md:leading-[80px] ">
					Loading...
				</Heading1>
				<Title>
					We are currently verifying your credentials
					to ensure the highest level of security.
					Please be patient as we authenticate your
					account. This process may take a moment, but
					it's for your safety and data protection.
					Thank you for your understanding.
				</Title>
			</div>
		</div>
	);
};

export default AuthChecking;

