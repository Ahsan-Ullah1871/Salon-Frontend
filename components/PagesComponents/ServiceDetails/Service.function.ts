export const tabBgChange = (current_index: number, tab_index: number) => {
	if (current_index === tab_index) {
		return "bg-green border-r border-primary ";
	} else if (tab_index < current_index) {
		return "bg-green  border-r border-primary   text-white";
	} else {
		return "bg-transparent  border-r border-primary  ";
	}
};

