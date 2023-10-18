import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, Schedule, Service, Worker } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const scheduleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All service
		getSchedules: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/schedule?${query}`;
			},
			providesTags: [tagTypes.schedule],
		}),

		//Get  service details
		getScheduleDetails: builder.query({
			query: (scheduleID) => {
				return `/schedule/${scheduleID}`;
			},
			providesTags: [tagTypes.schedule_details],
		}),

		// Add service
		addSchedule: builder.mutation({
			query: (data) => ({
				url: `/schedule/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.schedule],
		}),

		//   delete service
		deleteSchedule: builder.mutation({
			query: (scheduleID) => ({
				url: `/schedule/${scheduleID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.schedule],

			async onQueryStarted(
				scheduleID,
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
						scheduleApi.util.updateQueryData(
							"getSchedules",
							scheduleID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										scheduleID
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
		editSchedule: builder.mutation({
			query: ({ scheduleID, schedule_data }) => ({
				url: `/schedule/${scheduleID}`,
				method: "PATCH",
				body: schedule_data,
			}),
			invalidatesTags: [
				tagTypes.schedule,
				tagTypes.schedule_details,
			],

			async onQueryStarted(
				{ scheduleID, schedule_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!scheduleID) {
					//
				}

				try {
					const { data: schedule_data } =
						await queryFulfilled;

					const udatedSchedule = schedule_data;

					// const patchResult =

					dispatch(
						scheduleApi.util.updateQueryData(
							"getScheduleDetails",
							scheduleID,
							(draft) => {
								Object.assign(
									draft,
									udatedSchedule
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
	useGetSchedulesQuery,
	useGetScheduleDetailsQuery,
	useAddScheduleMutation,
	useEditScheduleMutation,
	useDeleteScheduleMutation,
} = scheduleApi;
