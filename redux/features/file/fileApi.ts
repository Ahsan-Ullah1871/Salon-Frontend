import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const filesAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All books
		getFiles: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/file?${query}`;
			},
			providesTags: [tagTypes.file],
		}),

		// // Add Book
		addFile: builder.mutation({
			query: (data: any) => {
				return {
					url: `/file/upload`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: [tagTypes.file],
		}),
	}),
});

export const { useGetFilesQuery, useAddFileMutation } = filesAPi;
