import Title from "../Text/Paragraph/Title";
import Image from "next/image";
import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";

// Define a type for the props
interface ScheduleCardProps {
	imageSrc?: string;
	imageAlt?: string;
	imageHeight?: number;
	imageWidth?: number;
	workerName?: string;
	scheduleDate?: string;
	duration?: string;
	start_time?: string;
	end_time?: string;
	isAvailable?: boolean;
	onselectHandler?: any;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
	imageSrc,
	imageAlt,
	imageHeight,
	imageWidth,
	workerName,
	scheduleDate,
	duration,
	isAvailable,
	start_time,
	end_time,
	onselectHandler,
}) => {
	return (
		<div
			onClick={() => {
				onselectHandler && onselectHandler();
			}}
			className="bg-white p-5 cursor-pointer rounded-md shadow-md w-full flex items-center justify-start flex-wrap gap-5"
		>
			{/* <Image
				src={imageSrc}
				alt={imageAlt}
				height={imageHeight}
				width={imageWidth}
				objectFit="cover"
				className="rounded-full"
			/> */}

			{/* Worker name and Date */}
			<div className="flex flex-col gap-1">
				<Title styles="font-medium">{workerName}</Title>
				<div className="flex items-center justify-start gap-2">
					<span className="h-6 w-6 text-black_normal">
						{SM_ICONS.calender}
					</span>
					{scheduleDate && (
						<Title styles="md:text-base">
							{new Date(
								scheduleDate
							).toLocaleDateString()}
						</Title>
					)}
				</div>
			</div>

			{/* Worker name and Date */}
			<div className="flex flex-col gap-1 lg:px-10">
				<Title styles="font-medium">{duration}</Title>
				<div className="flex items-center justify-start gap-2 ">
					<span className="h-6 w-6 text-black_normal">
						{SM_ICONS.clock}
					</span>
					{start_time && end_time && (
						<Title styles="md:text-base">
							{new Date(
								start_time
							).toLocaleTimeString()}{" "}
							-{" "}
							{new Date(
								end_time
							).toLocaleTimeString()}
						</Title>
					)}
				</div>
			</div>

			{/* Is available */}
			<div className="flex items-center justify-start gap-2">
				{!isAvailable && (
					<span className="h-6 w-6 text-black_normal">
						{SM_ICONS.block}
					</span>
				)}
				<Title
					styles={`md:text-base ${
						isAvailable ? "text-green" : ""
					}`}
				>
					{isAvailable ? "Available" : "Booked"}
				</Title>
			</div>
		</div>
	);
};

export default ScheduleCard;

