import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const wishApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All book reviews
		getWishList: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/wish?${query}`;
			},
			providesTags: ["wishlist"],
		}),

		//   Add Book in wish
		addBookInWish: builder.mutation({
			query: (data) => ({
				url: `/wish`,
				method: "POST",
				body: { ...data },
			}),
			invalidatesTags: ["wishlist"],
		}),
		//   delete from wish
		deleteBookFromWish: builder.mutation({
			query: (data) => ({
				url: `/wish/${data?._id}`,
				method: "DELETE",
				body: { ...data },
			}),
			invalidatesTags: ["wishlist"],
		}),
	}),
});

export const {
	useGetWishListQuery,
	useAddBookInWishMutation,
	useDeleteBookFromWishMutation,
} = wishApi;
