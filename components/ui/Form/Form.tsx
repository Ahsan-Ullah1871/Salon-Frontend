import React from "react";
import TextInput from "../FormFileds/TextInput";
import {
	DatePickerType,
	ImageSelectType,
	RatingType,
	SelectFromListType,
	SwitchType,
	TextAreaType,
	TextINputType,
} from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";
import PrimaryButton from "../Buttons/PrimaryButton";
import TextArea from "../FormFileds/TextArea";
import ImageSelect from "../FormFileds/ImageSelect";
import SelectFromList from "../FormFileds/SelectFromList";
import SwitchBox from "../FormFileds/Switch";
import DateInputPicker from "../DatePicker/DateInputPicker";
import Rating from "../Rating/Rating";

type Field =
	| {
			key: "input-text";
			data_filed_key: string;
			properties: TextINputType;
	  }
	| {
			key: "input-number";
			data_filed_key: string;
			properties: TextINputType;
	  }
	| {
			key: "select-box";
			data_filed_key: string;
			properties: SelectFromListType;
	  }
	| {
			key: "text-area";
			data_filed_key: string;
			properties: TextAreaType;
	  }
	| {
			key: "image-select";
			data_filed_key: string;
			properties: ImageSelectType;
	  }
	| {
			key: "switch";
			data_filed_key: string;
			properties: SwitchType;
	  }
	| {
			key: "rating";
			data_filed_key: string;
			properties: RatingType;
	  }
	| {
			key: "date-picker";
			data_filed_key: string;
			properties: DatePickerType;
	  };

type FormProps = {
	fields_list: Field[];
	form_style: string;
	formSubmitHandler: Function;
	button_title: string;
	button_stye: string;
	is_loading: boolean;
	button_icon?: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({
	fields_list,
	form_style,
	formSubmitHandler,
	button_title,
	button_stye,
	is_loading,
	button_icon,
}) => {
	const decide_field = (field: Field) => {
		switch (field.key) {
			case "input-text":
				return (
					<TextInput
						key={field.key}
						{...field.properties}
					/>
				);

			case "input-number":
				return (
					<TextInput
						key={field.key}
						{...field.properties}
					/>
				);
			case "text-area":
				return (
					<TextArea
						key={field.key}
						{...field.properties}
					/>
				);
			case "select-box":
				return (
					<SelectFromList
						key={field.key}
						{...field.properties}
					/>
				);
			case "image-select":
				return (
					<ImageSelect
						key={field.key}
						{...field.properties}
					/>
				);
			case "switch":
				return (
					<SwitchBox
						key={field.key}
						{...field.properties}
					/>
				);
			case "rating":
				return (
					<Rating
						key={field.key}
						{...field.properties}
					/>
				);
			case "date-picker":
				return (
					<DateInputPicker
						key={field.key}
						{...field.properties}
					/>
				);
			default:
				return <></>;
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				formSubmitHandler();
			}}
			className={cn(
				"w-full h-full bg-transparent p-6 flex items-start justify-start gap-4",
				form_style
			)}
		>
			{fields_list?.map((field) => {
				return decide_field(field);
			})}

			<PrimaryButton
				title={button_title}
				type="submit"
				className={button_stye}
				is_loading={is_loading}
				icon={button_icon}
			/>
		</form>
	);
};

