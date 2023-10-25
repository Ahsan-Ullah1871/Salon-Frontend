import { cn } from "@/utils/classNames";
import React from "react";
import TableSkeleton from "../Skeleton/TableSkeleton";

const DynamicTable = ({
	data,
	columns,
	table_style,
	table_header_style,
	table_body_style,
	is_table_body_hide,
}: {
	data: Array<any>;
	columns?: Array<any>;
	table_style: string;
	table_header_style: string;
	table_body_style: string;
	is_table_body_hide?: boolean;
}) => {
	return (
		<div className={cn(" w-full   min-w-full  ", table_style)}>
			{/* Header row */}
			{columns && columns?.length > 0 && (
				<div
					className={cn(
						" w-full flex items-center justify-start ",
						table_header_style
					)}
				>
					{columns.map((column, index) => (
						<div
							key={index}
							className={cn(
								" w-full  text-left text-xs font-medium text-gray-500 ",
								column.className
							)}
						>
							{column.header}
						</div>
					))}
				</div>
			)}

			{/* Table body  */}
			{!is_table_body_hide ? (
				<div
					className={cn(
						"bg-white block ",
						table_body_style
					)}
				>
					{data?.map((row, rowIndex) => (
						<div
							className={cn(
								"w-fill h-full 	 flex items-center justify-start ",
								row.className
							)}
							key={rowIndex}
						>
							{row?.columns.map(
								(
									column: any,
									index: number
								) => (
									<div
										key={
											index
										}
										className={cn(
											" w-full   ",
											column?.className
										)}
									>
										{
											column?.component
										}
									</div>
								)
							)}
						</div>
					))}
				</div>
			) : (
				<TableSkeleton />
			)}
		</div>
	);
};

export default DynamicTable;

