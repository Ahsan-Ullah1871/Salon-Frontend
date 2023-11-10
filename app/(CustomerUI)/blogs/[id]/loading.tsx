"use client";

import PageHeader from "@/components/ui/PageBanner/PageHeader";
import DetailsSkeleton from "@/components/ui/Skeleton/DetailsSkeleton";
import TabSkeleton from "@/components/ui/Skeleton/TabSkeleton";
import Tabs from "@/components/ui/Tab/Tabs";

const BlogLoading = () => {
	return (
		<div>
			<PageHeader
				page_title="Service Details"
				page_description="Book a service by schedule"
				bg_image=""
			/>
			<DetailsSkeleton />
		</div>
	);
};

export default BlogLoading;

