import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";
import { IBook } from "@/types/Book";

export const bookApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All books
		getBooks: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/books?${query}`;
			},
			providesTags: ["books"],
		}),

		//Get latest-ten
		getLatestBooks: builder.query({
			query: () => `/books/latest-ten`,
			providesTags: ["latest_books"],
		}),

		//Get  book details
		getBookDetails: builder.query({
			query: (bookID) => {
				return `/books/${bookID}`;
			},
			providesTags: ["book"],
		}),

		//Get All Filtering Items
		getUniqueFilteringItems: builder.query({
			query: () => "/books/unique-filter-items",
			providesTags: ["filteringItems"],
		}),

		// Add Book
		addBook: builder.mutation({
			query: (data: IBook) => ({
				url: `/books`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["filteringItems", "latest_books"],
		}),

		//   delete book
		deleteBook: builder.mutation({
			query: ({ bookID }) => ({
				url: `/books/${bookID}`,
				method: "DELETE",
			}),

			invalidatesTags: ["filteringItems", "latest_books"],

			async onQueryStarted(
				{ bookID },
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: book_data } =
						await queryFulfilled;

					// const patchResult =
					if (book_data) {
						//
					}
					dispatch(
						bookApi.util.updateQueryData(
							"getBookDetails",
							bookID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										bookID
								);
							}
						)
					);
				} catch {
					//
				}
			},
		}),

		// editBook
		editBook: builder.mutation({
			query: ({ bookID, book_data }) => ({
				url: `/books/${bookID}`,
				method: "PATCH",
				body: { ...book_data },
			}),
			invalidatesTags: ["filteringItems", "books"],

			async onQueryStarted(
				{ bookID, book_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!book_data) {
					//
				}

				try {
					const { data: book_data } =
						await queryFulfilled;

					const updatedBook = book_data;

					// const patchResult =

					dispatch(
						bookApi.util.updateQueryData(
							"getBookDetails",
							bookID,
							(draft) => {
								Object.assign(
									draft,
									updatedBook
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
	useGetBooksQuery,
	useGetBookDetailsQuery,
	useAddBookMutation,
	useGetUniqueFilteringItemsQuery,
	useDeleteBookMutation,
	useEditBookMutation,
	useGetLatestBooksQuery,
} = bookApi;
