import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

//
export const setValueInCookies = (key: string, value: string): any => {
	if (!key || typeof window === "undefined") {
		return "";
	}
	return setCookie("key", "value");
};

//
export const getValueFromCookies = (key: string) => {
	if (!key || typeof window === "undefined") {
		return "";
	}
	return getCookie(key);
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
	return deleteCookie(key);
};

