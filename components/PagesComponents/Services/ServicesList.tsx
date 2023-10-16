"use client";

import ServicesList from "@/components/Blocks/Services/ServicesList";
import { setValueINRootVariable } from "@/utils/colorChanging";
import React, { useEffect } from "react";

const Services = () => {
	// Need to change latter
	useEffect(() => {
		setValueINRootVariable({
			variable_name: "bg_color",
			value: "#F6F3EB",
		});
	}, []);

	return (
		<div>
			<ServicesList />
		</div>
	);
};

export default Services;

