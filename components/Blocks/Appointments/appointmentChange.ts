import { Appointment } from "@/types/CommonTypes";
import AppointmentStatus from "@/types/ServiceStatus";
import {
	getAdminStatusOptions,
	getCustomerStatusOptions,
} from "@/utils/appointmentStatusHelper";

//
export const appointment_status_drop_down = (
	appointment: Appointment,
	editAppointment: Function
) => {
	return getAdminStatusOptions(appointment?.status).map((item) => {
		return {
			title: `Change to "${item}"`,

			classes: ` `,
			onCLickHandle: () => {
				editAppointment({
					appointmentID: appointment.id,
					appointment_data: {
						status: item,
					},
				});
			},
		};
	});
};

export const customer_appointment_status_drop_down = (
	appointment: Appointment,
	editAppointment: Function
) => {
	return getCustomerStatusOptions(appointment?.status).map((item) => {
		return {
			title: `Change to "${item}"`,

			classes: ` `,
			onCLickHandle: () => {
				editAppointment({
					appointmentID: appointment.id,
					appointment_data: {
						status: item,
					},
				});
			},
		};
	});
};

