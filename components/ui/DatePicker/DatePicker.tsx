"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceDatePicker = () => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			inline
			className="!w-screen"
		/>
	);
};

export default ServiceDatePicker;

