import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category } from "@/types/CommonTypes";
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

		// Add Category
		addCategory: builder.mutation({
			query: (data: Partial<Category>) => ({
				url: `/category`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.category],
		}),

		//   delete category
		deleteCategory: builder.mutation({
			query: (categoryID) => ({
				url: `/category/${categoryID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.category],

			async onQueryStarted(
				categoryID,
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: category_data } =
						await queryFulfilled;

					// const patchResult =
					if (category_data) {
						//
					}
					dispatch(
						categoryAPi.util.updateQueryData(
							"getCategories",
							categoryID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										categoryID
								);
							}
						)
					);
				} catch {
					//
				}
			},
		}),

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
	useAddCategoryMutation,
	useDeleteCategoryMutation,
} = categoryAPi;
