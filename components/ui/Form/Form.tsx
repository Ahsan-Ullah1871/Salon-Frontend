import React from "react";
import TextInput from "../FormFileds/TextInput";
import { SelectFromList, TextINputType } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";
import PrimaryButton from "../Buttons/PrimaryButton";

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
			properties: SelectFromList;
	  };

type FormProps = {
	fields_list: Field[];
	form_style: string;
	formSubmitHandler: Function;
	button_title: string;
	button_stye: string;
	is_loading: boolean;
};

export const Form: React.FC<FormProps> = ({
	fields_list,
	form_style,
	formSubmitHandler,
	button_title,
	button_stye,
	is_loading,
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
			case "select-box":
				return (
					<TextInput
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
			/>
		</form>
	);
};
