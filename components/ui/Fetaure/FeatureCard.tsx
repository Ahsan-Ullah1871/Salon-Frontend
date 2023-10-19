import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PrimaryLink from "../Links/PrimaryLink";

const FeatureCard = ({
	right_image,
	left_header_image,
	title,
	description,
	cta_title,
	ctaLink,
}: {
	right_image: string;
	left_header_image: string;
	title: string;
	description: string;
	cta_title: string;
	ctaLink: string;
}) => {
	return (
		<div
			className=" bg-white w-full  py-[90px] md:py-[100px] px-[20px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 
         gap-10"
		>
			{/* 1st column */}
			<div className=" flex flex-col gap-4 items-start justify-center  ">
				<Image
					src={left_header_image}
					height={80}
					width={80}
					alt="feature"
				/>
				<Heading1 styles="text-start font-sub-spacial">
					{title}
				</Heading1>
				<NormalDescription styles="text-start  ">
					{description}
				</NormalDescription>

				<PrimaryLink
					title={cta_title}
					url={ctaLink}
					className=" mt-5 md:mt-8"
				/>
			</div>

			{/* Image and 2nd column */}
			<div className="flex justify-center md:justify-end relative">
				<Image
					src={right_image}
					height={560}
					width={470}
					alt="feature"
					className="rounded-lg"
				/>
			</div>
		</div>
	);
};

export default FeatureCard;

