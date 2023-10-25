"use client";

import BlogsList from "@/components/Blocks/Blogs/BlogsList";
import BlogsListForAdmin from "@/components/Blocks/Blogs/BlogsListForAdmin";
import ReviewTable from "@/components/Blocks/Review/ReviewTable";
import ServicesList from "@/components/Blocks/Services/ServicesList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import { useAppSelector } from "@/hooks/Redux";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { useGetReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { setValueINRootVariable } from "@/utils/colorChanging";
import { skip } from "node:test";
import React, { useEffect, useState } from "react";

const ReviewsListForCustomer = ({ searchParam }: { searchParam: string }) => {
	// params
	const { user } = useAppSelector((state) => state.auth);

	const [skip, setSkip] = useState(true);
	// filter state and effect for update
	const [filter, setFilter] = useState({
		id: "",
		user_id: user?.id,
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
	} = useGetReviewsQuery(
		{
			id: filter.id,
			user_id: user?.id,
			rating: filter.rating,
			search: filter.search,
			page: filter?.page,
			size: filter.size,
		},
		{ skip }
	);

	//
	useEffect(() => {
		if (user?.id) {
			setSkip(false);
		}
	}, [user]);

	const reviews_list = reviews?.data;

	return (
		<div className="px-6">
			<ReviewTable
				reviews={reviews_list?.data}
				meta_data={reviews_list?.meta}
			/>
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

export default ReviewsListForCustomer;

