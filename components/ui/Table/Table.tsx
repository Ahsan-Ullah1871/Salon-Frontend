import { cn } from "@/utils/classNames";
import React from "react";

const DynamicTable = ({
	data,
	columns,
	header_style,
	column_style,
	table_style,
	table_header_style,
	table_body_style,
}: {
	data: Array<any>;
	columns?: Array<any>;
	header_style: string;
	column_style: string;
	table_style: string;
	table_header_style: string;
	table_body_style: string;
}) => {
	return (
		<table
			className={cn(
				"min-w-full divide-y divide-gray-200",
				table_style
			)}
		>
			{columns && columns?.length > 0 && (
				<thead className={table_header_style}>
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								className={cn(
									"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
									header_style
								)}
							>
								{column.header}
							</th>
						))}
					</tr>
				</thead>
			)}
			<tbody
				className={cn(
					"bg-white divide-y divide-gray-200",
					table_body_style
				)}
			>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}></tr>
				))}
			</tbody>
		</table>
	);
};

export default DynamicTable;

