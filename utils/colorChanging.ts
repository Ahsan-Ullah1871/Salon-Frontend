export const setValueINRootVariable = ({
	variable_name,
	value,
}: {
	variable_name: string;
	value: string;
}) => {
	const root = document?.documentElement;
	root && root.style.setProperty(`--${variable_name}`, value);
};

