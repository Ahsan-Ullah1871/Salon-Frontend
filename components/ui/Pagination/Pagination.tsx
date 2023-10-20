"use client";

import React from "react";
import ReactPaginate from "react-paginate";

const PaginationFunction = ({
	moreData,
	pageCount,
	current_page,
}: {
	moreData?: (value: number) => any;
	pageCount: number;
	current_page: number;
}) => {
	return (
		<div>
			<ReactPaginate
				breakLabel="..."
				nextLabel={
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				}
				onPageChange={(data) =>
					moreData &&
					moreData(Number(data.selected) + 1)
				}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel={
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				}
				renderOnZeroPageCount={null}
				containerClassName=""
				className="relative z-0 inline-flex flex-wrap justify-center rounded-button shadow-sm -space-x-px "
				pageClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center text-sm font-medium"
				pageLinkClassName="px-4 py-2 border"
				previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-button border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
				nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-button border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
				breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
				activeLinkClassName="z-10 bg-d_primary  border-d_primary text-white relative inline-flex items-center px-4 py-2 border text-md font-semibold"
				disabledLinkClassName=""
				prevPageRel="2"
				forcePage={current_page - 1}
			/>
		</div>
	);
};

export default PaginationFunction;

