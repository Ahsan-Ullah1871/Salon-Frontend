"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceDatePicker = ({
	current_date,
	setDate,
}: {
	current_date: Date;
	setDate: Function;
}) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<DatePicker
			selected={current_date}
			onChange={(date: Date) => setDate(date)}
			inline
			className="!w-screen"
		/>
	);
};

export default ServiceDatePicker;

