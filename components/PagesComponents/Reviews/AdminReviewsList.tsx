"use client";

import BlogsList from "@/components/Blocks/Blogs/BlogsList";
import BlogsListForAdmin from "@/components/Blocks/Blogs/BlogsListForAdmin";
import ServicesList from "@/components/Blocks/Services/ServicesList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { useGetReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect, useState } from "react";

const AdminReviewsList = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		id: "",
		user_id: "",
		rating: "",
		search: searchParam,
		page: 1,
		size: 10,
	});

	//  searchParam  updating
	useEffect(() => {
		setFilter((prev) => ({
			...prev,
			search: searchParam,
		}));
	}, [searchParam]);

	// Get categories query
	const {
		data: reviews,
		isLoading,
		isError,
		error,
	} = useGetReviewsQuery({
		id: filter.id,
		user_id: filter.user_id,
		rating: filter.rating,
		search: filter.search,
		page: filter?.page,
		size: filter.size,
	});

	const reviews_list = reviews?.data;

	return (
		<div className="px-6">
			{/* <BlogsListForAdmin blogs={reviews_list?.data} /> */}
			{reviews_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={
							reviews_list?.meta?.page
						}
						pageCount={
							reviews_list?.meta?.totalPage
						}
						moreData={(value) =>
							setFilter((prev) => ({
								...prev,
								page: value,
							}))
						}
					/>
				</div>
			)}
		</div>
	);
};

export default AdminReviewsList;

