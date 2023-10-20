"use client"; // Error components must be Client Components

import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className=" h-screen w-full flex items-center justify-center bg-bg_color_home ">
			<div className=" max-w-md p-6  flex flex-col gap-4">
				<Heading1 styles=" text-[40px] md:text-[80px] leading-[40px] md:leading-[80px] ">
					404
				</Heading1>
				<Title>
					Sorry, the page you’re looking for doesn’t
					exist. If you think something is broken,
					report a porblem to our feedback form
				</Title>
				<PrimaryLink
					title="Go to home"
					url="/"
					className=""
				/>
			</div>
		</div>
	);
}

