import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, blog } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const blogAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All blog
		getBlogs: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/blog?${query}`;
			},
			providesTags: [tagTypes.blog],
		}),

		//Get All  blog  by ct /category/:categoryID/
		// just pagination will support for this
		getBlogsByService: builder.query({
			query: ({
				params,
				serviceID,
			}: {
				params: Record<string, unknown>;
				serviceID: string;
			}) => {
				const query = params
					? ParamSerialization(params)
					: "";
				return `/blog/service/${serviceID}/?${query}`;
			},
			providesTags: [tagTypes.blog_by_service],
		}),

		//Get  blog details
		getBlogDetails: builder.query({
			query: (blogID) => {
				return `/blog/${blogID}`;
			},
			providesTags: [tagTypes.blog_details],
		}),

		// Add blog
		addBlog: builder.mutation({
			query: (data: Partial<blog>) => ({
				url: `/blog/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.blog, tagTypes.blog_by_service],
		}),

		//   delete blog
		deleteBlog: builder.mutation({
			query: (blogID) => ({
				url: `/blog/${blogID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.blog, tagTypes.blog_by_service],

			async onQueryStarted(
				blogID,
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: blog_data } =
						await queryFulfilled;

					// const patchResult =
					if (blog_data) {
						//
					}
					dispatch(
						blogAPi.util.updateQueryData(
							"getBlogs",
							blogID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										blogID
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
		editBlog: builder.mutation({
			query: ({ blogID, blog_data }) => ({
				url: `/blog/${blogID}`,
				method: "PATCH",
				body: { ...blog_data },
			}),
			invalidatesTags: [
				tagTypes.blog,
				tagTypes.blog_details,
				tagTypes.blog_by_service,
			],

			async onQueryStarted(
				{ blogID, blog_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!blogID) {
					//
				}

				try {
					const { data: blog_data } =
						await queryFulfilled;

					const updatedblog = blog_data;

					// const patchResult =

					dispatch(
						blogAPi.util.updateQueryData(
							"getBlogDetails",
							blogID,
							(draft) => {
								Object.assign(
									draft,
									updatedblog
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
	useGetBlogsQuery,
	useGetBlogDetailsQuery,
	useAddBlogMutation,
	useEditBlogMutation,
	useDeleteBlogMutation,
} = blogAPi;
