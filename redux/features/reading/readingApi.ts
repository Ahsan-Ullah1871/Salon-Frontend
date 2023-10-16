import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const readingApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All book reviews
		getReadingList: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/reading?${query}`;
			},
			providesTags: ["reading_list"],
		}),

		//   Add Book review
		addBookInReadingList: builder.mutation({
			query: (data) => ({
				url: `/reading`,
				method: "POST",
				body: { ...data },
			}),
			invalidatesTags: ["reading_list"],
		}),
		//   Add Book review
		removeBookFromReadingList: builder.mutation({
			query: (data) => ({
				url: `/reading/${data?._id}`,
				method: "DELETE",
				body: { ...data },
			}),
			invalidatesTags: ["reading_list"],
		}),
	}),
});

export const {
	useGetReadingListQuery,
	useAddBookInReadingListMutation,
	useRemoveBookFromReadingListMutation,
} = readingApi;
