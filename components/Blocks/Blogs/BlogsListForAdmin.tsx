import BlogCard from "@/components/ui/Cards/BlogCard";
import BlogCard2 from "@/components/ui/Cards/BlogCard2";
import Carousel from "@/components/ui/Carousel/Carousel";
import { useAppSelector } from "@/hooks/Redux";
import { useDeleteBlogMutation } from "@/redux/features/blogs/blogsApi";
import { BlogPost } from "@/types/CommonTypes";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import { get_error_messages } from "@/utils/error_messages";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Alert from "../Alerts/Alerts";

const BlogsListForAdmin = ({ blogs }: { blogs: BlogPost[] }) => {
	const router = useRouter();
	const pathName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [deleteBlog, { data, isLoading, isError, error, isSuccess }] =
		useDeleteBlogMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

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
			setAlertMessage("Deleted  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div className="grid grid-cols-1  min-[480px]:grid-cols-2   min-[700px]:grid-cols-3 lg:grid-cols-4 gap-8 ">
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
			{blogs?.map((blog) => {
				return (
					<BlogCard2
						key={blog.id}
						image={blog.image_url}
						title={blog.title}
						url={`/blogs/${blog.id}`}
						tags={blog.tags.split(",")}
						author={blog?.author?.name}
						date={blog.publishedAt}
						deleteButtonCLick={() =>
							deleteBlog(blog.id)
						}
						editButtonCLick={() => {
							router.push(
								`${pathName}/${blog.id}`
							);
						}}
					/>
				);
			})}
		</div>
	);
};

export default BlogsListForAdmin;

