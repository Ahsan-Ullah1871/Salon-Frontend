export default function TabSkeleton({}: {}) {
	return (
		<div>
			<div className="animate-pulse bg-gray     bg-white p-5 rounded-md shadow   grid grid-cols-4 gap-4">
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-10" />
			</div>

			<div className="animate-pulse bg-gray     bg-white p-5  mt-4  rounded-md">
				{" "}
				<div className="w-full  py-2.5 bg-slate-700 rounded  h-80" />
			</div>
		</div>
	);
}

