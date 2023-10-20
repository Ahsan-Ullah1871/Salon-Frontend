import AppointmentStatus from "@/types/ServiceStatus";

//
export function getAdminStatusOptions(
	currentStatus: AppointmentStatus
): AppointmentStatus[] {
	switch (currentStatus) {
		case AppointmentStatus.BOOKED:
			return [
				AppointmentStatus.CONFIRMED,
				AppointmentStatus.CANCELED,
				// AppointmentStatus.RESCHEDULED,
			];

		case AppointmentStatus.CONFIRMED:
			return [
				AppointmentStatus.COMPLETED,
				AppointmentStatus.CANCELED,
			];

		// case AppointmentStatus.CANCELED:
		// 	// Options for transitioning from CANCELED
		// 	return [AppointmentStatus.BOOKED];

		case AppointmentStatus.COMPLETED:
			// Options for transitioning from COMPLETED
			return [];

		// Add cases for other status transitions and their associated options

		default:
			return [];
	}
}

//
export function getCustomerStatusOptions(
	currentStatus: AppointmentStatus
): AppointmentStatus[] {
	switch (currentStatus) {
		case AppointmentStatus.BOOKED:
			return [AppointmentStatus.CANCELED];

		case AppointmentStatus.CONFIRMED:
			return [AppointmentStatus.CANCELED];

		case AppointmentStatus.COMPLETED:
			return [];

		default:
			return [];
	}
}

export const statusColors = {
	BOOKED: "blue",
	CONFIRMED: "green",
	CANCELED: "red",
	COMPLETED: "purple",
	NO_SHOW: "orange",
	RESCHEDULED: "teal",
	PENDING: "gray",
};

export function getStatusClasses(currentStatus: AppointmentStatus) {
	switch (currentStatus) {
		case "BOOKED":
			return "bg-blue-500 text-white";
		case "CONFIRMED":
			return "bg-green-500 text-white";
		case "CANCELED":
			return "bg-red-500 text-white";
		case "COMPLETED":
			return "bg-purple-500 text-white";
		case "NO_SHOW":
			return "bg-orange-500 text-white";
		case "RESCHEDULED":
			return "bg-teal-500 text-white";
		case "PENDING":
			return "bg-gray-500 text-white";
		default:
			return "bg-gray-500 text-white"; // Default to gray with white text for unknown status
	}
}

