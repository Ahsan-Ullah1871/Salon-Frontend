import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";
import { getBaseUrl } from "@/helpers/envConfig";
import { tagTypesList } from "./TagTypes";
import { getValueFromCookies } from "@/cookies/CookiesHelper";
import { AUTH_KEY } from "@/cookies/CookiesVariableName";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: getBaseUrl(),
		prepareHeaders(headers, { getState }) {
			// Access the authentication token from the Redux store
			const accessToken = getValueFromCookies(AUTH_KEY);
			if (accessToken) {
				headers.set("Authorization", `${accessToken}`);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: tagTypesList,
});

