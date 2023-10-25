import { UserFile } from "./CommonTypes";

export type TextINputType = {
	title?: string;
	current_value: string;
	set_new_value?: Function;
	note?: string;
	placeholder?: string;
	type?: "text" | "number" | "email" | "password" | "tel";
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	is_disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onKeyDown?: React.MouseEventHandler<HTMLInputElement>;
};

export type SwitchType = {
	title?: string;
	current_value: boolean;
	set_new_value: Function;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
};

export type TextAreaType = {
	title?: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	is_disabled?: boolean;
	row?: number;
	col?: number;
};
export type DatePickerType = {
	title?: string;
	current_value: Date;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	showTimeSelect?: boolean;
};

export type SelectFromListType = {
	title: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	is_disabled?: boolean;
	drop_down_items: Array<{ label: string; value: string }>;
	default_option_text: string;
	options_style?: string;
};

export type ImageSelectType = {
	title: string;
	current_value: string;
	set_new_value: (value: string) => void;
	set_new_image_value: (file: UserFile) => void;
	height: number;
	width: number;
	objectFit: string;
	isfill: boolean;
	image_styles: string;
	component_styles?: string;
};

export type RatingType = {
	current_value: number;
	clickHandler?: (value: number) => void;
	className?: string;
};

