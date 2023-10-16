import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/envConfig";
import { tagTypesList } from "./TagTypes";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
	endpoints: () => ({}),
	tagTypes: tagTypesList,
});

