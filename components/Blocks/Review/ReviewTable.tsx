import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import {
	Category,
	Review,
	Schedule,
	Service,
	Worker,
} from "@/types/CommonTypes";
import { IGenericErrorResponse, IMeta } from "@/types/DataResponseTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ActionButtons from "../Action/ActionButtons";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/Redux";
import { useDeleteCategoryMutation } from "@/redux/features/catgeories/categoryApi";
import { get_error_messages } from "@/utils/error_messages";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useDeleteServiceMutation } from "@/redux/features/service/serviceApi";
import { ICONS } from "@/icons/AllIcons";
import { useDeleteWorkerMutation } from "@/redux/features/workers/workerApi";
import { useDeleteScheduleMutation } from "@/redux/features/schedule/scheduleApi";
import Rating from "@/components/ui/Rating/Rating";

const ReviewTable = ({
	reviews,
	meta_data,
}: {
	reviews: Review[];
	meta_data: IMeta;
}) => {
	const router = useRouter();
	const pathName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className=" ">
			<DynamicTable
				data={reviews?.map((review) => ({
					id: review.id,
					className: " bg-white p-5 rounded-md shadow mb-5 items-center ",
					columns: [
						{
							className: "hidden md:block ",
							component: (
								<Title styles=" text-sm font-medium text-d_black_normal w-full   overflow-clip   px-4 ">
									{
										review
											?.service
											?.name
									}
								</Title>
							),
						},
						{
							className: "hidden md:flex items-center justify-center",
							component: (
								<Image
									width={60}
									height={60}
									src={
										review
											?.service
											?.image_url
									}
									alt={
										review
											?.service
											.name
									}
									objectFit="cover"
									className="rounded-md"
								/>
							),
						},
						{
							className: "flex items-center justify-center",
							component: (
								<Title
									styles={`text-sm font-medium `}
								>
									<Rating
										current_value={
											review.rating
										}
									/>
								</Title>
							),
						},
						{
							className: " flex items-center justify-center",
							component: (
								<Title
									styles={`text-sm font-medium max-w-[100px]   max-h-[20px] truncate `}
								>
									{review.comment}
								</Title>
							),
						},
					],
				}))}
				columns={[
					{
						header: "Service",
						className: " hidden md:block  text-lg font-medium text-d_black",
					},
					{
						header: "Image",
						className: "  text-lg font-medium  text-center text-d_black",
					},
					{
						header: "Rating",
						className: " hidden md:block text-center text-lg font-medium text-d_black",
					},
					{
						header: "Comment",
						className: "  text-center text-lg font-medium text-d_black",
					},
				]}
				table_style="  "
				table_header_style="   bg-transparent shadow p-5  border-t border-b border-d_gray "
				table_body_style=" mt-4  bg-transparent gap-5"
			/>
		</div>
	);
};

export default ReviewTable;

