"Use client";
import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Title from "@/components/ui/Text/Paragraph/Title";
import {
	BLOG_PATH,
	CATEGORY_PATH,
	SERVICE_PATH,
	USER,
} from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import { useGetAppointmentsListQuery } from "@/redux/features/appointment/appointmentApi";
import {
	useGetBlogDetailsQuery,
	useGetBlogsQuery,
} from "@/redux/features/blogs/blogsApi";
import { useGetCategoriesQuery } from "@/redux/features/catgeories/categoryApi";
import { useGetServicesQuery } from "@/redux/features/service/serviceApi";
import Image from "next/image";
import React from "react";

// Get Categories
async function getCategories() {
	const res = await fetch(
		`${getBaseUrl()}${CATEGORY_PATH}?page=1&size=50`,
		{
			cache: "no-store",
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

// Get Latest service
async function getServices() {
	const res = await fetch(
		`${getBaseUrl()}${SERVICE_PATH}?page=1&size=10`,
		{
			cache: "no-store",
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

// Get Latest service
async function getBlogs() {
	const res = await fetch(`${getBaseUrl()}${BLOG_PATH}?page=1&size=10`, {
		cache: "no-store",
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

// // Get Latest service
// async function getUsers() {
// 	const res = await fetch(`${getBaseUrl()}${USER}`, {
// 		cache: "no-store",
// 		headers: {
// 			authorization:cooke
// 		}
// 	});
// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		console.log(res);

// 		throw new Error("Failed to fetch data");
// 	}
// 	return res.json();
// }

const DashboardComponents = async () => {
	const { data: categories } = await getCategories();
	const { data: latest_services } = await getServices();
	const { data: blogs } = await getBlogs();
	// const { data: users } = await getUsers();

	const category_first = categories?.data[0];
	const service_first = latest_services?.data[0];
	const blog_first = blogs?.data[0];
	// const customer_first = users?.data[0];

	return (
		<div className="px-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{/*  */}
			<div className="bg-white p-5 pb-6 rounded-lg shadow max-w-sm  min-h-[200px] flex flex-col gap-4 justify-between">
				<div className="flex items-start justify-start gap-4">
					<Image
						src={category_first?.image_url}
						width={60}
						height={60}
						alt="top"
					/>
					<div>
						<Title styles="text-semibold md:text-xl font-sub_spacial ">
							{category_first?.name}
						</Title>
						<Title styles="text-semibold md:text-sm  ">
							(Top Category)
						</Title>
					</div>
				</div>
				<div>
					<Title styles="text-semibold md:text-base font-sub_spacial ">
						{category_first?.description}
					</Title>
				</div>
				<div className="flex items-center justify-center">
					<PrimaryLink
						className=""
						title="See All categories"
						url="dashboard/categories"
					/>
				</div>
			</div>

			{/*  */}
			<div className="bg-white p-5 pb-6 rounded-lg shadow max-w-sm  min-h-[200px] flex flex-col gap-4 justify-between">
				<div className="flex items-start justify-start gap-4">
					<Image
						src={blog_first?.image_url}
						width={60}
						height={60}
						alt="top"
					/>
					<div>
						<Title styles="text-semibold md:text-xl font-sub_spacial ">
							{blog_first?.title}
						</Title>
						<Title styles="text-semibold md:text-sm  ">
							(Top Blog)
						</Title>
					</div>
				</div>
				<div>
					<Title styles="text-semibold md:text-base font-sub_spacial ">
						Author: {blog_first?.author?.name}
					</Title>
				</div>
				<div className="flex items-center justify-center">
					<PrimaryLink
						className=""
						title="See All blogs"
						url="dashboard/blogs"
					/>
				</div>
			</div>
			{/*  */}
			<div className="bg-white p-5 pb-6 rounded-lg shadow max-w-sm  min-h-[200px] flex flex-col gap-4 justify-between">
				<div className="flex items-start justify-start gap-4">
					<Image
						src={service_first?.image_url}
						width={60}
						height={60}
						alt="top"
					/>
					<div>
						<Title styles="text-semibold md:text-xl font-sub_spacial ">
							{service_first?.name}
						</Title>
						<Title styles="text-semibold md:text-sm  ">
							(Top Blog)
						</Title>
					</div>
				</div>
				<div>
					<Title styles="text-semibold md:text-base font-sub_spacial  ">
						Duration: {service_first?.duration}
					</Title>
				</div>
				<div className="flex items-center justify-center">
					<PrimaryLink
						className=""
						title="See All Services"
						url="dashboard/services"
					/>
				</div>
			</div>
			{/*  */}
			{/* <div className="bg-white p-5 pb-6 rounded-lg shadow max-w-sm  min-h-[200px] flex flex-col gap-4 justify-between">
				<div className="flex items-start justify-start gap-4">
					<Image
						src={customer_first?.image_url}
						width={60}
						height={60}
						alt="top"
					/>
					<div>
						<Title styles="text-semibold md:text-xl font-sub_spacial ">
							{customer_first?.name}
						</Title>
						<Title styles="text-semibold md:text-sm  ">
							(Top Customer)
						</Title>
					</div>
				</div>
				<div></div>
				<div className="flex items-center justify-center">
					<PrimaryLink
						className=""
						title="See All Users"
						url="dashboard/users"
					/>
				</div>
			</div> */}
		</div>
	);
};

export default DashboardComponents;

