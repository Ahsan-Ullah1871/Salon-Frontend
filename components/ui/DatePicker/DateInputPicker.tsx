/* eslint-disable react/display-name */
"use client";

import { ICONS } from "@/icons/AllIcons";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../FormFileds/TextInput";
import { cn } from "@/utils/classNames";
import Title from "../Text/Paragraph/Title";

const DateInputPicker = ({ field_styles }) => {
	const [startDate, setStartDate] = useState(new Date());

	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<button
			className={cn(
				" mx-auto !w-full max-w-xl px-4 py-3 border border-[#E5EAEF] rounded-md bg-transparent  outline-none   placeholder-[#6F767E]  flex items-center gap-3 "
				// field_styles
			)}
			onClick={onClick}
			ref={ref}
		>
			<span className="h-6 w-6  text-black_normal">
				{ICONS.schedule}
			</span>
			<Title styles=" md:text-base">{value}</Title>
		</button>
	));
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			className=" !block"
			customInput={<ExampleCustomInput />}
		/>
	);
};

export default DateInputPicker;

