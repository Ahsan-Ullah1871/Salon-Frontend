import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const categoryAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All books
		getCategories: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/category?${query}`;
			},
			providesTags: [tagTypes.category],
		}),

		//Get  book details
		getCategoryDetails: builder.query({
			query: (categoryID) => {
				return `/category/${categoryID}`;
			},
			providesTags: [tagTypes.categoryDetails],
		}),

		// // Add Book
		// addBook: builder.mutation({
		// 	query: (data: IBook) => ({
		// 		url: `/books`,
		// 		method: "POST",
		// 		body: data,
		// 	}),
		// 	invalidatesTags: ["filteringItems", "latest_books"],
		// }),

		// //   delete book
		// deleteBook: builder.mutation({
		// 	query: ({ bookID }) => ({
		// 		url: `/books/${bookID}`,
		// 		method: "DELETE",
		// 	}),

		// 	invalidatesTags: ["filteringItems", "latest_books"],

		// 	async onQueryStarted(
		// 		{ bookID },
		// 		{ dispatch, queryFulfilled }
		// 	) {
		// 		try {
		// 			const { data: book_data } =
		// 				await queryFulfilled;

		// 			// const patchResult =
		// 			if (book_data) {
		// 				//
		// 			}
		// 			dispatch(
		// 				bookApi.util.updateQueryData(
		// 					"getBookDetails",
		// 					bookID,
		// 					(draft) => {
		// 						return draft.filter(
		// 							(item: {
		// 								data: {
		// 									_id: string;
		// 								};
		// 							}) =>
		// 								item.data
		// 									?._id !=
		// 								bookID
		// 						);
		// 					}
		// 				)
		// 			);
		// 		} catch {
		// 			//
		// 		}
		// 	},
		// }),

		// editCategory
		editCategory: builder.mutation({
			query: ({ categoryID, category_data }) => ({
				url: `/category/${categoryID}`,
				method: "PATCH",
				body: { ...category_data },
			}),
			invalidatesTags: [
				tagTypes.category,
				tagTypes.categoryDetails,
			],

			async onQueryStarted(
				{ categoryID, category_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!categoryID) {
					//
				}

				try {
					const { data: category_data } =
						await queryFulfilled;

					const updatedCategory = category_data;

					// const patchResult =

					dispatch(
						categoryAPi.util.updateQueryData(
							"getCategoryDetails",
							categoryID,
							(draft) => {
								Object.assign(
									draft,
									updatedCategory
								);
							}
						)
					);
				} catch {
					//
				}
			},
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
	useEditCategoryMutation,
} = categoryAPi;
