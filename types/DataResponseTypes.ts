export type ISendResponse<T, K> = {
	status_code: number;
	message: string;
	success: boolean;
	meta?: K | null;
	data?: T | null;
	token?: string;
};

export type IMeta = {
	page: number;
	size: number;
	total: number;
	totalPage: number;
};

export type ResponseSuccessType = {
	data: any;
	meta?: IMeta;
};

export type IGenericErrorMessage = {
	path: string | number;
	message: string;
};

export type IGenericErrorResponse = {
	success: boolean;
	message: string;
	errorMessages: IGenericErrorMessage[];
};

