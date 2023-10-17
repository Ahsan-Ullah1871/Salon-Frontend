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
};

export type TextAreaType = {
	title: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	is_disabled?: boolean;
};

export type SelectFromList = {
	title: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	type?: "text" | "number" | "email" | "password" | "tel";
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
	is_required?: boolean;
	is_disabled?: boolean;
};

