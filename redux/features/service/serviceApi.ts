import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, Service } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const serviceAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All service
		getServices: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/service?${query}`;
			},
			providesTags: [tagTypes.service],
		}),

		//Get All  service  by ct /category/:categoryID/
		// just pagination will support for this
		getServicesByCategory: builder.query({
			query: ({
				params,
				categoryID,
			}: {
				params: Record<string, unknown>;
				categoryID: string;
			}) => {
				const query = params
					? ParamSerialization(params)
					: "";
				return `/service/category/${categoryID}/?${query}`;
			},
			providesTags: [tagTypes.service_by_category],
		}),

		//Get  service details
		getServiceDetails: builder.query({
			query: (serviceID) => {
				return `/service/${serviceID}`;
			},
			providesTags: [tagTypes.service_details],
		}),

		// Add service
		addService: builder.mutation({
			query: (data: Partial<Service>) => ({
				url: `/service/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [
				tagTypes.service,
				tagTypes.service_by_category,
			],
		}),

		//   delete service
		deleteService: builder.mutation({
			query: (serviceID) => ({
				url: `/service/${serviceID}`,
				method: "DELETE",
			}),

			invalidatesTags: [
				tagTypes.service,
				tagTypes.service_by_category,
			],

			async onQueryStarted(
				serviceID,
				{ dispatch, queryFulfilled }
			) {
				try {
					const { data: service_data } =
						await queryFulfilled;

					// const patchResult =
					if (service_data) {
						//
					}
					dispatch(
						serviceAPi.util.updateQueryData(
							"getServices",
							serviceID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										serviceID
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
		editService: builder.mutation({
			query: ({ serviceID, service_data }) => ({
				url: `/service/${serviceID}`,
				method: "PATCH",
				body: { ...service_data },
			}),
			invalidatesTags: [
				tagTypes.service,
				tagTypes.service_details,
				tagTypes.service_by_category,
			],

			async onQueryStarted(
				{ serviceID, service_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!serviceID) {
					//
				}

				try {
					const { data: service_data } =
						await queryFulfilled;

					const updatedService = service_data;

					// const patchResult =

					dispatch(
						serviceAPi.util.updateQueryData(
							"getServiceDetails",
							serviceID,
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
	useGetServicesQuery,
	useGetServiceDetailsQuery,
	useAddServiceMutation,
	useEditServiceMutation,
	useDeleteServiceMutation,
	useGetServicesByCategoryQuery,
} = serviceAPi;
