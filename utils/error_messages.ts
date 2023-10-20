import {
	IGenericErrorMessage,
	IGenericErrorResponse,
} from "@/types/DataResponseTypes";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

// just for information, unknown type ignored here
export const get_error_messages = (
	error: IGenericErrorResponse | FetchBaseQueryError | undefined
): string => {
	const error_data: IGenericErrorResponse | undefined = error as
		| IGenericErrorResponse
		| undefined;
	if (error_data && "errorMessages" in error_data) {
		return error_data.errorMessages
			.map((msg: IGenericErrorMessage) => msg.message)
			.join(",");
	} else {
		return JSON.stringify(error_data);
	}
};

