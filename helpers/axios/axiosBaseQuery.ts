import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";
import { IMeta } from "@/types/DataResponseTypes";

export const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = { baseUrl: "" }
	): BaseQueryFn<
		{
			url: string;
			method: AxiosRequestConfig["method"];
			data?: AxiosRequestConfig["data"];
			params?: AxiosRequestConfig["params"];
			meta?: IMeta;
			contentType?: string;
		},
		unknown,
		unknown
	> =>
	async ({ url, method, data, params, contentType }) => {
		try {
			const result = await axiosInstance({
				url: baseUrl + url,
				method,
				data,
				params,
				headers: {
					// "Content-Type": "application/json",
					"Access-Control-Allow-Origin":
						"http://localhost:5001/",
					"Cache-Control": "no-cache",
					"Content-Type":
						"application/x-www-form-urlencoded",
				},
				withCredentials: true,
			});

			return result;
		} catch (axiosError) {
			let err = axiosError as AxiosError;
			console.log("====================================");
			console.log(axiosError);
			console.log("====================================");
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};

