import { useEffect, useState } from "react";

import { userLoggedIn } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "./Redux";
import { getValueFromCookies } from "@/cookies/CookiesHelper";
import {
	AUTH_KEY,
	LOGGED_IN,
	REFRESH_KEY,
	USER_DETAILS,
} from "@/cookies/CookiesVariableName";

export default function useAuthCheck() {
	const dispatch = useAppDispatch();
	const [authChecked, setAuthChecked] = useState(false);
	const get_auth_key = getValueFromCookies(AUTH_KEY);
	const get_user_details = getValueFromCookies(USER_DETAILS);
	const get_refresh_key = getValueFromCookies(REFRESH_KEY);
	const is_logged_in = getValueFromCookies(LOGGED_IN);

	useEffect(() => {
		if (is_logged_in) {
			if (is_logged_in && get_user_details) {
				dispatch(
					userLoggedIn({
						isLoggedIn: true,
						user: get_user_details,
						accessToken: get_auth_key,
					})
				);
			}
			setAuthChecked(true);
		}
	}, []);
	return authChecked;
}

