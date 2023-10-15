import { cn } from "@/utils/classNames";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function PopOver({
	children,
	button,
	className: PopoverClass,
}: {
	children: React.ReactNode;
	button: React.ReactNode;
	className: string;
}) {
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button
					// 			className={`
					// ${open ? "" : }
					// group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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

