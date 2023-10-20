import { apiSlice } from "@/redux/api/apiSlice";
import { userLoggedIn } from "./authSlice";
import { setValueInCookies } from "@/cookies/CookiesHelper";
import {
	AUTH_KEY,
	LOGGED_IN,
	REFRESH_KEY,
	USER_DETAILS,
} from "@/cookies/CookiesVariableName";

export const authAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// register
		register: builder.mutation({
			query: (data) => ({
				url: "auth/signup",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;

					setValueInCookies(
						USER_DETAILS,
						JSON.stringify(result.data.data.user),
						86400
					);
					setValueInCookies(
						AUTH_KEY,
						JSON.stringify(
							result.data.data.token
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
							result.data.data.token
						),
						86400
					);
					setValueInCookies(
						REFRESH_KEY,
						JSON.stringify(
							result.data.data.refresh_token
						),
						86400
					);

					dispatch(
						userLoggedIn({
							isLoggedIn: true,
							user: result.data.data
								.user_details,
							accessToken:
								result.data.data.token,
						})
					);
				} catch (error) {
					//do nothing
				}
			},
		}),

		// log in
		login: builder.mutation({
			query: (data) => ({
				url: "/auth/signin",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;

					setValueInCookies(
						USER_DETAILS,
						JSON.stringify(result.data.data.user),
						86400
					);
					setValueInCookies(
						AUTH_KEY,
						JSON.stringify(
							result.data.data.token
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
							result.data.data.token
						),
						86400
					);
					setValueInCookies(
						REFRESH_KEY,
						JSON.stringify(
							result.data.data.refresh_token
						),
						86400
					);

					dispatch(
						userLoggedIn({
							isLoggedIn: true,
							user: result.data.data
								.user_details,
							accessToken:
								result.data.data.token,
						})
					);
				} catch (error) {
					//do nothing
				}
			},
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authAPi;
