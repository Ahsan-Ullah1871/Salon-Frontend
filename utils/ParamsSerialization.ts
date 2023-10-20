export function ParamSerialization<T extends Record<string, any>>(param: T) {
	const str: string[] = [];
	for (const p in param) {
		if (Object.prototype.hasOwnProperty.call(param, p)) {
			// Check if the parameter has a non-empty value
			if (
				param[p] !== null &&
				param[p] !== undefined &&
				param[p] !== ""
			) {
				str.push(
					encodeURIComponent(p) +
						"=" +
						encodeURIComponent(param[p])
				);
			}
		}
	}
	return str.join("&");
}

