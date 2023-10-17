import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

//
export const setValueInCookies = (
	key: string,
	value: string,
	maxAge?: number
): any => {
	if (!key || typeof window === "undefined") {
		return "";
	}
	return setCookie(key, value, {
		maxAge: maxAge || 604800,
	});
};

//
export const getValueFromCookies = (key: string) => {
	if (!key || typeof window === "undefined") {
		return "";
	}
	return getCookie(key) ? JSON.parse(getCookie(key)!) : undefined;
};

//
export const getAllCookiesValues = (key: string) => {
	if (!key || typeof window === "undefined") {
		return "";
	}
	return getCookies;
};

//
export const deleteValueFromCookies = (key: string) => {
	if (!key || typeof window === "undefined") {
		return "";
	}

	deleteCookie(key, { path: "/" });
};

