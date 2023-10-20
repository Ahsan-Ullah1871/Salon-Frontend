import {
	deleteValueFromCookies,
	getValueFromCookies,
} from "@/cookies/CookiesHelper";
import {
	AUTH_KEY,
	LOGGED_IN,
	REFRESH_KEY,
	USER_DETAILS,
} from "@/cookies/CookiesVariableName";
import { decodedToken } from "@/helpers/jwtHelper";
import { User } from "@/types/CommonTypes";

export const getUserInfoFromToken = (authToken: string) => {
	if (authToken) {
		const decodedData = decodedToken(authToken);
		return decodedData;
	} else {
		return "";
	}
};

export const checkUserAuthenticationFromCLientSide = () => {
	const get_auth_key = getValueFromCookies(AUTH_KEY);
	const get_user_details: User | undefined =
		getValueFromCookies(USER_DETAILS);
	const get_refresh_key = getValueFromCookies(REFRESH_KEY);
	const is_logged_in = getValueFromCookies(LOGGED_IN);

	return {
		is_logged_in,
		user_details: get_user_details,
		access_token: get_auth_key,
		refresh_token: get_refresh_key,
	};
};

export const logoutAnyUser = () => {
	deleteValueFromCookies(AUTH_KEY);
	deleteValueFromCookies(REFRESH_KEY);
	deleteValueFromCookies(USER_DETAILS);
	deleteValueFromCookies(LOGGED_IN);
	window.location.reload();
};

