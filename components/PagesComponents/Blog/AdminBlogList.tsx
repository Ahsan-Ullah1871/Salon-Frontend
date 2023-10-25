"use client";

import BlogsList from "@/components/Blocks/Blogs/BlogsList";
import BlogsListForAdmin from "@/components/Blocks/Blogs/BlogsListForAdmin";
import ServicesList from "@/components/Blocks/Services/ServicesList";
import PaginationFunction from "@/components/ui/Pagination/Pagination";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect, useState } from "react";

const AdminBlogs = ({ searchParam }: { searchParam: string }) => {
	// params

	// filter state and effect for update
	const [filter, setFilter] = useState({
		title: "",
		author_id: "",
		published: "",
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
		data: blogs,
		isLoading,
		isError,
		error,
	} = useGetBlogsQuery({
		title: filter.title,
		author_id: filter.author_id,
		published: filter.published,
		search: filter.search,
		page: filter?.page,
		size: filter.size,
	});

	const blogs_list = blogs?.data;

	return (
		<div className="px-6">
			<BlogsListForAdmin blogs={blogs_list?.data} />
			{blogs_list?.meta?.totalPage > 1 && (
				<div className=" flex items-center justify-center bg-d_gray bg-opacity-60 p-6 shadow sticky bottom-4">
					<PaginationFunction
						current_page={blogs_list?.meta?.page}
						pageCount={
							blogs_list?.meta?.totalPage
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

export default AdminBlogs;

