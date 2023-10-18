import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, Service } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All service
		getUsers: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/user?${query}`;
			},
			providesTags: [tagTypes.user],
		}),

		//Get All  service  by ct /category/:categoryID/
		// just pagination will support for this
		// getServicesByCategory: builder.query({
		// 	query: ({
		// 		params,
		// 		categoryID,
		// 	}: {
		// 		params: Record<string, unknown>;
		// 		categoryID: string;
		// 	}) => {
		// 		const query = params
		// 			? ParamSerialization(params)
		// 			: "";
		// 		return `/service/category/${categoryID}/?${query}`;
		// 	},
		// 	providesTags: [tagTypes.service_by_category],
		// }),

		//Get  service details
		getWorkerDetails: builder.query({
			query: (workerID) => {
				return `/worker/${workerID}`;
			},
			providesTags: [tagTypes.worker_details],
		}),

		// Add service
		addWorker: builder.mutation({
			query: (data: Partial<Service>) => ({
				url: `/worker/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.worker],
		}),

		//   delete service
		deleteWorker: builder.mutation({
			query: (workerID) => ({
				url: `/worker/${workerID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.worker],

			async onQueryStarted(
				workerID,
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: worker_data } =
						await queryFulfilled;

					// const patchResult =
					if (worker_data) {
						//
					}
					dispatch(
						userApi.util.updateQueryData(
							"getWorkers",
							workerID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										workerID
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
		editWorker: builder.mutation({
			query: ({ workerID, worker_data }) => ({
				url: `/worker/${workerID}`,
				method: "PATCH",
				body: { ...worker_data },
			}),
			invalidatesTags: [
				tagTypes.worker,
				tagTypes.worker_details,
			],

			async onQueryStarted(
				{ workerID, worker_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!workerID) {
					//
				}

				try {
					const { data: worker_data } =
						await queryFulfilled;

					const updatedService = worker_data;

					// const patchResult =

					dispatch(
						userApi.util.updateQueryData(
							"getWorkerDetails",
							workerID,
							(draft) => {
								Object.assign(
									draft,
									updatedService
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
	useGetWorkerDetailsQuery,
	useAddWorkerMutation,
	useEditWorkerMutation,
	useDeleteWorkerMutation,
} = userApi;
