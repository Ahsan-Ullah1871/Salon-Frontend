import HomePage from "@/components/PagesComponents/Home/HomePage";
import { BLOG_PATH, CATEGORY_PATH, SERVICE_PATH } from "@/constants/RuterPath";
import { getBaseUrl } from "@/helpers/envConfig";
import { redirect } from "next/navigation";

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
	const res = await fetch(`${getBaseUrl()}${BLOG_PATH}?blog=1&size=10`, {
		cache: "no-store",
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function Home() {
	const { data: categories } = await getCategories();
	const { data: latest_services } = await getServices();
	const { data: blogs } = await getBlogs();

	return (
		<>
			<HomePage
				categories={categories?.data}
				blogs={blogs?.data}
				latest_services={latest_services?.data}
			/>
		</>
	);
}

