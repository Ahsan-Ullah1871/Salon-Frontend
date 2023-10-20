/* eslint-disable react/display-name */
"use client";

import { ICONS } from "@/icons/AllIcons";
import { ForwardedRef, forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "../FormFileds/TextInput";
import { cn } from "@/utils/classNames";
import Title from "../Text/Paragraph/Title";
import { DatePickerType } from "@/types/FormFieldTypes";
import { SM_ICONS } from "@/icons/SmalllIcon";

const DateInputPicker = ({
	title,
	current_value,
	set_new_value,
	note,
	placeholder,
	title_styles,
	field_styles,
	component_styles,
	is_required,
	showTimeSelect = false,
}: DatePickerType) => {
	const ExampleCustomInput = forwardRef(
		(
			{ value, onClick }: any,
			ref: ForwardedRef<HTMLButtonElement> // Define the type for 'ref' as ForwardedRef with the appropriate type
		) => {
			return (
				<button
					type="button"
					className={cn(
						" w-full px-4 flex items-center justify-start gap-2 py-3 border border-[#E5EAEF] rounded-md bg-transparent  outline-none   placeholder-[#6F767E]  ",
						field_styles
					)}
					onClick={onClick}
					ref={ref}
				>
					<span className="  text-black_normal">
						{showTimeSelect
							? SM_ICONS.schedule
							: SM_ICONS.calender}
					</span>
					<Title styles=" md:text-base">
						{showTimeSelect
							? current_value.toLocaleTimeString()
							: current_value.toLocaleDateString()}
					</Title>
				</button>
			);
		}
	);
	return (
		<div
			className={cn(
				" w-full flex flex-col gap-1 ",
				component_styles
			)}
		>
			{title && (
				<p
					className={cn(
						" text-sm font-semibold text-[#172327]",
						title_styles
					)}
				>
					{title}
				</p>
			)}
			<DatePicker
				selected={current_value}
				onChange={(date) => set_new_value(date)}
				showTimeSelect={showTimeSelect}
				showTimeSelectOnly={showTimeSelect}
				timeFormat="HH:mm"
				className="!block"
				customInput={<ExampleCustomInput />}
			/>
		</div>
	);
};

export default DateInputPicker;

