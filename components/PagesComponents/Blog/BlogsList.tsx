"use client";

import BlogsList from "@/components/Blocks/Blogs/BlogsList";
import ServicesList from "@/components/Blocks/Services/ServicesList";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect } from "react";

const Blogs = () => {
	// Need to change latter
	useEffect(() => {
		setValueINRootVariable({
			variable_name: "bg_color",
			value: "#F6F3EB",
		});
	}, []);

	return (
		<div>
			<BlogsList />
		</div>
	);
};

export default Blogs;

