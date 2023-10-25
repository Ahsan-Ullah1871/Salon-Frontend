"use client";

import Title from "@/components/ui/Text/Paragraph/Title";
import { ICONS } from "@/icons/AllIcons";
import { cn } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";

export default function Alert({
	alert_type,
	alert_message,
	is_alert_open,
	closeAlert,
	setISAlertOpen,
	setAlertMessage,
	timer_sec,
}: // openModalFromOutside,
// closeModalFromOutside,
{
	alert_type: "error" | "success" | "warning" | "info";
	alert_message: string;
	is_alert_open: boolean;
	closeAlert: () => void;
	setAlertMessage: Dispatch<SetStateAction<string>>;
	setISAlertOpen: Dispatch<SetStateAction<boolean>>;
	timer_sec?: number;
}) {
	useEffect(() => {
		if (alert_message) {
			const timer = setTimeout(() => {
				is_alert_open && setISAlertOpen(false);
				is_alert_open && setAlertMessage("");
			}, timer_sec || 4000);
			return () => clearTimeout(timer);
		}
	}, [is_alert_open]);

	const decide_style = () => {
		switch (alert_type) {
			case "error":
				return "border-1 text-error text-opacity-80  bg-error bg-opacity-10 border-error  border-opacity-20";

			case "success":
				return "border-1 text-d_primary text-opacity-80  bg-d_primary bg-opacity-10 border-success  border-opacity-20";
			case "warning":
				return "border-1 text-white text-opacity-80  bg-warning bg-opacity-10 border-warning  border-opacity-20";

			default:
				break;
		}
	};

	return (
		<>
			<Transition
				appear
				show={is_alert_open}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-40"
					onClose={closeAlert}
				>
					<div
						className={cn(
							"fixed inset-0 left-0 right-0  mx-auto max-w-md top-24 min-h-10  "
						)}
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel>
								<Title
									styles={cn(
										"  px-6 py-2 rounded ",
										decide_style()
									)}
								>
									{alert_message}
								</Title>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

