import { cn } from "@/utils/classNames";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function PopOver({
	children,
	button,
	className: PopoverClass,
	popOverButtonClassName,
	is_disabled = false,
}: {
	children: React.ReactNode;
	button: React.ReactNode;
	className?: string;
	popOverButtonClassName?: string;
	is_disabled?: boolean;
}) {
	return (
		<Popover
			as="div"
			className="relative"
		>
			{({ open }) => (
				<>
					<Popover.Button
						as="div"
						className={cn(
							"outline-none ring-0",
							popOverButtonClassName
						)}
						disabled={is_disabled}
					>
						{button}
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel
							className={cn(
								PopoverClass,
								"absolute   z-20"
							)}
						>
							{children}
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}

// Example
// {
// 	/* Drop down */
// }
// <PopOver
// 	className=" w-[300px]   right-0 mt-3 rounded-md shadow-md   "
// 	button={<button> {ICONS.hand_burger}</button>}
// >
// 	<div className="overflow-hidden  bg-white rounded-lg  ring-0 ring-1 min-h-[100px]"></div>
// </PopOver>;

