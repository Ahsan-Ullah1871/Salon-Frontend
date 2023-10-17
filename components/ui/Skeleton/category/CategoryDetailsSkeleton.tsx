import React from "react";

const CategoryDetailsSkeleton = () => {
	return (
		<div className=" animate-pulse bg-gray max-w-md mx-auto p-6 bg-white shadow rounded-lg flex flex-col gap-4">
			<div className=" bg-slate-700 rounded h-56 w-full " />
			<div className=" bg-slate-700 rounded h-12 w-full " />
			<div className=" bg-slate-700 rounded h-12 w-full " />
		</div>
	);
};

export default CategoryDetailsSkeleton;

