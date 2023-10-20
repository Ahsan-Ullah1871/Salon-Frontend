"use client";

import { ICONS } from "@/icons/AllIcons";
import { cn } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({
	button_title,
	button_style,
	children,
	panel_style,
	button_icon,
	isShowCloseButton,
	default_modal_value,
	panel_parent_style,
}: // openModalFromOutside,
// closeModalFromOutside,
{
	button_title?: string;
	button_style: string;
	panel_style: string;
	panel_parent_style?: string;
	button_icon?: React.ReactNode;
	children: React.ReactNode;
	isShowCloseButton?: Boolean;
	default_modal_value?: boolean;
	// openModalFromOutside:Function;
	// closeModalFromOutside:Function;
}) {
	let [isOpen, setIsOpen] = useState(default_modal_value ?? false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<button
				type="button"
				onClick={openModal}
				className={cn(button_style, " ")}
			>
				{button_title && button_title}
				{button_icon && button_icon}
			</button>

			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black_deep bg-opacity-25" />
					</Transition.Child>

					<div
						className={cn(
							"fixed inset-0 overflow-y-auto",
							panel_parent_style
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
							<Dialog.Panel
								className={cn(
									panel_style,
									"  "
								)}
							>
								{children}

								{isShowCloseButton && (
									<button
										type="button"
										className="  absolute  top-5 right-5 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-xs font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										onClick={
											closeModal
										}
									>
										CLOSE
									</button>
								)}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

