import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All book reviews
		getBookReviews: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/reviews?${query}`;
			},
			providesTags: ["reviews"],
		}),

		//   Add Book review
		addBookReview: builder.mutation({
			query: (data) => ({
				url: `/reviews`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["books", "reviews"],
		}),
	}),
});

export const { useGetBookReviewsQuery, useAddBookReviewMutation } = reviewApi;
