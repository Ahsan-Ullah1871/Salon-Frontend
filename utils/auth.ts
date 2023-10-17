import { decodedToken } from "@/helpers/jwtHelper";

export const getUserInfoFromToken = (authToken) => {
	// console.log(authToken);
	if (authToken) {
		const decodedData = decodedToken(authToken);
		return decodedData;
	} else {
		return "";
	}
};

