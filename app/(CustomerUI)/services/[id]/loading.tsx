"use client";

import PageHeader from "@/components/ui/PageBanner/PageHeader";
import TabSkeleton from "@/components/ui/Skeleton/TabSkeleton";
import Tabs from "@/components/ui/Tab/Tabs";

const ServiceLoading = () => {
	return (
		<div>
			<PageHeader
				page_title="Service Details"
				page_description="Book a service by schedule"
				bg_image=""
			/>
			<TabSkeleton />
		</div>
	);
};

export default ServiceLoading;

