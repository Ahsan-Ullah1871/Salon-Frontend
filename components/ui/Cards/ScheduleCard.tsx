import Title from "../Text/Paragraph/Title";
import Image from "next/image";
import { ICONS } from "@/icons/AllIcons";

// Define a type for the props
interface ScheduleCardProps {
	imageSrc: string;
	imageAlt: string;
	imageHeight: number;
	imageWidth: number;
	workerName: string;
	scheduleDate: string;
	duration: string;
	start_time?: string;
	end_time?: string;
	isBooked: boolean;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
	imageSrc,
	imageAlt,
	imageHeight,
	imageWidth,
	workerName,
	scheduleDate,
	duration,
	isBooked,
	start_time,
	end_time,
}) => {
	return (
		<div className="bg-white p-5 rounded-md shadow-md w-full flex items-center justify-start flex-wrap gap-5">
			<Image
				src={imageSrc}
				alt={imageAlt}
				height={imageHeight}
				width={imageWidth}
				objectFit="cover"
				className="rounded-full"
			/>

			{/* Worker name and Date */}
			<div className="flex flex-col gap-1">
				<Title styles="font-medium">{workerName}</Title>
				<div className="flex items-center justify-start gap-2">
					<span className="h-6 w-6 text-black_normal">
						{ICONS.schedule}
					</span>
					<Title styles="md:text-base">
						{scheduleDate}
					</Title>
				</div>
			</div>

			{/* Worker name and Date */}
			<div className="flex flex-col gap-1 lg:px-10">
				<Title styles="font-medium">{duration}</Title>
				<div className="flex items-center justify-start gap-2">
					<span className="h-6 w-6 text-black_normal">
						{ICONS.clock}
					</span>
					<Title styles="md:text-base">
						12:00 AM - 12:59 AM
					</Title>
				</div>
			</div>

			{/* Is available */}
			<div className="flex items-center justify-start gap-2">
				<span className="h-6 w-6 text-black_normal">
					{ICONS.block}
				</span>
				<Title
					styles={`md:text-base ${
						isBooked ? "text-green" : ""
					}`}
				>
					{isBooked ? "Booked" : "Available"}
				</Title>
			</div>
		</div>
	);
};

export default ScheduleCard;

