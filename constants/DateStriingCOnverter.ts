export const DateISOConverter = (date: Date) => {
	const just_date = date.toISOString().split("T")[0];
	return `${just_date}T00:00:00.000Z`;
};

export const TimeISOConverter = (date: Date, time: Date) => {
	const time_converted = `${date.toISOString().split("T")[0]}T${
		time.toISOString().split("T")[1]
	}`;

	return time_converted;
};

