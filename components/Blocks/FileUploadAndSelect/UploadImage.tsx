import { ICONS } from "@/icons/AllIcons";
import { useAddFileMutation } from "@/redux/features/file/fileApi";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import { get_error_messages } from "@/utils/error_messages";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Alert from "../Alerts/Alerts";
import { useAppSelector } from "@/hooks/Redux";
import UserRole from "@/types/UserRole";

const UploadImage = ({ user_file_length }: { user_file_length: number }) => {
	//
	const { user } = useAppSelector((state) => state.auth);
	// login mutation hook
	const [addFile, { data, isLoading, isError, error, isSuccess }] =
		useAddFileMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");
	//

	useEffect(() => {
		if (error && "data" in error) {
			setISAlertOpen(true);
			setAlertType("error");
			const error_messages = get_error_messages(
				error?.data as IGenericErrorResponse
			);
			setAlertMessage(error_messages);
		} else if (isSuccess) {
			setISAlertOpen(true);
			setAlertType("success");
			setAlertMessage("Image uploaded  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div className=" z-20 sticky -top-10 bg-white">
			{/*Alert  */}
			<Alert
				alert_type={alert_type}
				alert_message={alert_message}
				is_alert_open={is_alert_open}
				setISAlertOpen={setISAlertOpen}
				setAlertMessage={setAlertMessage}
				closeAlert={() => setISAlertOpen(false)}
			/>

			{/*  */}
			<input
				required
				id={`image_select`}
				type="file"
				className=" hidden"
				accept=".png , .jpg ,.jpeg , "
				placeholder=""
				onChange={(e) => {
					e.stopPropagation();
					const file = e?.target?.files?.[0];
					if (
						!file ||
						file.size === 0 ||
						!/image\/(png|jpg|jpeg)/gm.test(
							file.type
						)
					) {
						setISAlertOpen(true);
						setAlertMessage(
							"You cnat upload this type of file "
						);
						setAlertType("error");
					} else {
						var formdata = new FormData();
						formdata.append(
							"file",
							file,
							file.name
						);
						addFile(formdata);
					}
				}}
			/>

			{/* Button */}
			<button
				onClick={() => {
					if (!isLoading) {
						if (
							(user?.role ==
								UserRole.CUSTOMER &&
								user_file_length < 3) ||
							user?.role !==
								UserRole.CUSTOMER
						) {
							document
								?.getElementById(
									`image_select`
								)
								?.click();
						} else {
							setISAlertOpen(true);
							setAlertType("error");
							setAlertMessage(
								"You cannot upload any new images now. You have already exceeded your uploading limit.Z"
							);
						}
					}
				}}
				className={[
					"h-[150px] w-[150px] bg-transparent   border rounded-md border-d_primary  flex flex-col gap-2 text-d_primary  items-center justify-center ",
					isLoading && "cursor-wait",
				].join(" ")}
			>
				{isLoading ? ICONS.button_loading_icon : ICONS.add}
				{isLoading
					? "Image uploading...."
					: "Add New image"}
			</button>
		</div>
	);
};

export default UploadImage;

