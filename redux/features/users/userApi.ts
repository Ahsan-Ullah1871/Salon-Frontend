import { setValueInCookies } from "@/cookies/CookiesHelper";
import {
	AUTH_KEY,
	LOGGED_IN,
	REFRESH_KEY,
	USER_DETAILS,
} from "@/cookies/CookiesVariableName";
import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, User } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";
import { userLoggedIn } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All user
		getUsers: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/user?${query}`;
			},
			providesTags: [tagTypes.user],
		}),

		//Get  user details
		getUserDetails: builder.query({
			query: (userID) => {
				return `/user/${userID}`;
			},
			providesTags: [tagTypes.user_details],
		}),
		//Get  user details
		getUserProfile: builder.query({
			query: () => {
				return `/user/profile`;
			},
			providesTags: [tagTypes.user_profile],
		}),

		// Add user
		addUser: builder.mutation({
			query: (data: Partial<User>) => ({
				url: `/user/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.user],
		}),

		//   delete user
		deleteUser: builder.mutation({
			query: (userID) => ({
				url: `/user/${userID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.user, tagTypes.user_profile],

			async onQueryStarted(
				userID,
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: user_data } =
						await queryFulfilled;

					// const patchResult =
					if (user_data) {
						//
					}
					dispatch(
						userApi.util.updateQueryData(
							"getUsers",
							userID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										userID
								);
							}
						)
					);
				} catch {
					//
				}
			},
		}),

		// edit user
		editUser: builder.mutation({
			query: ({ userID, user_data }) => ({
				url: `/user/${userID}`,
				method: "PATCH",
				body: { ...user_data },
			}),
			invalidatesTags: [
				tagTypes.user,
				tagTypes.user_details,
				tagTypes.user_profile,
			],

			async onQueryStarted(
				{ userID, user_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!userID) {
					//
				}

				try {
					const { data: user_data } =
						await queryFulfilled;

					const updateduser = user_data;

					// const patchResult =

					dispatch(
						userApi.util.updateQueryData(
							"getUserDetails",
							userID,
							(draft) => {
								Object.assign(
									draft,
									updateduser
								);
							}
						)
					);
				} catch {
					//
				}
			},
		}),

		// edit user
		editProfile: builder.mutation({
			query: ({ userID, user_data }) => ({
				url: `/user/edit_profile/${userID}`,
				method: "PATCH",
				body: { ...user_data },
			}),
			invalidatesTags: [
				tagTypes.user,
				tagTypes.user_details,
				tagTypes.user_profile,
			],

			async onQueryStarted(
				{ userID, user_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!userID) {
					//
				}

				try {
					const { data: user_data } =
						await queryFulfilled;

					const updateduser = user_data;

					// const patchResult =
					setValueInCookies(
						USER_DETAILS,
						JSON.stringify(updateduser.data.user),
						86400
					);
					setValueInCookies(
						AUTH_KEY,
						JSON.stringify(
							updateduser.data.token
						),
						86400
					);
					setValueInCookies(
						LOGGED_IN,
						JSON.stringify(true),
						86400
					);
					setValueInCookies(
						AUTH_KEY,
						JSON.stringify(
							updateduser.data.token
						),
						86400
					);
					setValueInCookies(
						REFRESH_KEY,
						JSON.stringify(
							updateduser.data.refresh_token
						),
						86400
					);

					dispatch(
						userLoggedIn({
							isLoggedIn: true,
							user: updateduser.data.user,
							accessToken:
								updateduser.data.token,
						})
					);

					dispatch(
						userApi.util.updateQueryData(
							"getUserDetails",
							userID,
							(draft) => {
								Object.assign(
									draft,
									updateduser
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
	useGetUsersQuery,
	useGetUserDetailsQuery,
	useAddUserMutation,
	useEditUserMutation,
	useDeleteUserMutation,
	useGetUserProfileQuery,
	useEditProfileMutation,
} = userApi;
