"use client";
import PageHeader from "@/components/ui/PageBanner/PageHeader";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect } from "react";

const BlogDetails = () => {
	// Need to change latter
	useEffect(() => {
		setValueINRootVariable({
			variable_name: "bg_color",
			value: "#F6F3EB",
		});
	}, []);

	return (
		<div>
			{/* Page Header */}
			<PageHeader
				page_title="Blog Details"
				page_description="Read our article"
				bg_image=""
			/>
		</div>
	);
};

export default BlogDetails;

