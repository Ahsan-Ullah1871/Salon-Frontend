import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, Review } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const reviewAPI = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All review
		getReviews: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/review?${query}`;
			},
			providesTags: [tagTypes.review],
		}),

		//Get  review details
		getReviewDetails: builder.query({
			query: (reviewID) => {
				return `/review/${reviewID}`;
			},
			providesTags: [tagTypes.review_details],
		}),

		// Add review
		addReview: builder.mutation({
			query: (data: Partial<Review>) => ({
				url: `/review/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.review, tagTypes.appointment],
		}),

		// //   delete review
		// deletereview: builder.mutation({
		// 	query: (reviewID) => ({
		// 		url: `/review/${reviewID}`,
		// 		method: "DELETE",
		// 	}),

		// 	invalidatesTags: [tagTypes.review, tagTypes.review_by_service],

		// 	async onQueryStarted(
		// 		reviewID,
		// 		{ dispatch, queryFulfilled }
		// 	) {
		// 		try {
		// 			const { data: review_data } =
		// 				await queryFulfilled;

		// 			// const patchResult =
		// 			if (review_data) {
		// 				//
		// 			}
		// 			dispatch(
		// 				reviewAPI.util.updateQueryData(
		// 					"getreviews",
		// 					reviewID,
		// 					(draft) => {
		// 						return draft.filter(
		// 							(item: {
		// 								data: {
		// 									_id: string;
		// 								};
		// 							}) =>
		// 								item.data
		// 									?._id !=
		// 								reviewID
		// 						);
		// 					}
		// 				)
		// 			);
		// 		} catch {
		// 			//
		// 		}
		// 	},
		// }),

		// // editCategory
		// editreview: builder.mutation({
		// 	query: ({ reviewID, review_data }) => ({
		// 		url: `/review/${reviewID}`,
		// 		method: "PATCH",
		// 		body: { ...review_data },
		// 	}),
		// 	invalidatesTags: [
		// 		tagTypes.review,
		// 		tagTypes.review_details,
		// 		tagTypes.review_by_service,
		// 	],

		// 	async onQueryStarted(
		// 		{ reviewID, review_data },
		// 		{ dispatch, queryFulfilled }
		// 	) {
		// 		// test part
		// 		if (!reviewID) {
		// 			//
		// 		}

		// 		try {
		// 			const { data: review_data } =
		// 				await queryFulfilled;

		// 			const updatedreview = review_data;

		// 			// const patchResult =

		// 			dispatch(
		// 				reviewAPI.util.updateQueryData(
		// 					"getreviewDetails",
		// 					reviewID,
		// 					(draft) => {
		// 						Object.assign(
		// 							draft,
		// 							updatedreview
		// 						);
		// 					}
		// 				)
		// 			);
		// 		} catch {
		// 			//
		// 		}
		// 	},
		// }),
	}),
});

export const {
	useGetReviewsQuery,
	useGetReviewDetailsQuery,
	useAddReviewMutation,
} = reviewAPI;
