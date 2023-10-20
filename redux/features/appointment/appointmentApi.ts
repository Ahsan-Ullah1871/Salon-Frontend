import { tagTypes } from "@/redux/api/TagTypes";
import { apiSlice } from "@/redux/api/apiSlice";
import { Category, Appointment, Worker } from "@/types/CommonTypes";
import { ParamSerialization } from "@/utils/ParamsSerialization";

export const appointmentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//Get All appointment
		getAppointmentsList: builder.query({
			query: (args: Record<string, unknown>) => {
				const query = args ? ParamSerialization(args) : "";
				return `/appointment?${query}`;
			},
			providesTags: [tagTypes.appointment],
		}),

		//Get  appointment details
		getAppointmentDetails: builder.query({
			query: (appointmentID) => {
				return `/appointment/${appointmentID}`;
			},
			providesTags: [tagTypes.appointment_details],
		}),

		// Add appointment
		addAppointment: builder.mutation({
			query: (data) => ({
				url: `/appointment/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: [tagTypes.appointment],
		}),

		//   delete appointment
		deleteAppointment: builder.mutation({
			query: (appointmentID) => ({
				url: `/appointment/${appointmentID}`,
				method: "DELETE",
			}),

			invalidatesTags: [tagTypes.appointment],

			async onQueryStarted(
				appointmentID,
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
						appointmentApi.util.updateQueryData(
							"getAppointmentsList",
							appointmentID,
							(draft) => {
								return draft.filter(
									(item: {
										data: {
											_id: string;
										};
									}) =>
										item.data
											?._id !=
										appointmentID
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
		editAppointment: builder.mutation({
			query: ({ appointmentID, appointment_data }) => ({
				url: `/appointment/${appointmentID}`,
				method: "PATCH",
				body: appointment_data,
			}),
			invalidatesTags: [
				tagTypes.appointment,
				tagTypes.appointment_details,
			],

			async onQueryStarted(
				{ appointmentID, appointment_data },
				{ dispatch, queryFulfilled }
			) {
				// test part
				if (!appointmentID) {
					//
				}

				try {
					const { data: appointment_data } =
						await queryFulfilled;

					const updated_appointment = appointment_data;

					// const patchResult =

					dispatch(
						appointmentApi.util.updateQueryData(
							"getAppointmentDetails",
							appointmentID,
							(draft) => {
								Object.assign(
									draft,
									updated_appointment
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
	useAddAppointmentMutation,
	useGetAppointmentDetailsQuery,
	useGetAppointmentsListQuery,
	useDeleteAppointmentMutation,
	useEditAppointmentMutation,
} = appointmentApi;
