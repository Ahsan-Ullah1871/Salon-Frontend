import { getValueFromCookies } from "@/cookies/CookiesHelper";
import { AUTH_KEY } from "@/cookies/CookiesVariableName";
import {
	IGenericErrorResponse,
	ResponseSuccessType,
} from "@/types/DataResponseTypes";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.headers["Access-Control-Allow-Origin"] =
	"http://localhost:5001/";
instance.defaults.timeout = 100000;

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const accessToken = getValueFromCookies(AUTH_KEY);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	//@ts-ignore
	function (response) {
		const responseObject: ResponseSuccessType = {
			data: response?.data?.data,
			meta: response?.data?.meta,
		};
		return responseObject;
	},
	async function (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		if (error?.response?.status === 403) {
		} else {
			const responseObject: IGenericErrorResponse = {
				statusCode:
					error?.response?.data?.statusCode || 500,
				message:
					error?.response?.data?.message ||
					"Something went wrong",
				errorMessages: error?.response?.data?.message,
			};
			return responseObject;
		}

		return Promise.reject(error);
	}
);

export { instance };

