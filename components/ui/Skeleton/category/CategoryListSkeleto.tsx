export default function ListTypeCtSkeleton() {
	return (
		<div className=" flex flex-col   bg-white p-5 rounded-md shadow mb-5">
			<div className="animate-pulse bg-gray flex  gap-4">
				<div className=" bg-slate-700 rounded h-10 w-full " />
				<div className=" bg-slate-700 rounded   h-10 w-full" />
				<div className=" bg-slate-700 rounded   h-10 w-full" />
				<div className=" bg-slate-700 rounded   h-10 w-full" />
			</div>
		</div>
	);
}

