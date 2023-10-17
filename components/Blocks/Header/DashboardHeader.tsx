"use client";

import Image from "next/image";
import Link from "next/link";
import { dashboard_dropdown_menus, header_menus } from "./Links";
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import PopOver from "@/components/ui/PopOver/PopOver";
import { useAppSelector } from "@/hooks/Redux";
import { ICONS } from "@/icons/AllIcons";
import UserRole from "@/types/UserRole";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/classNames";

const DashboardHeader = ({
	role = UserRole.ADMIN,
	left_side_component,
	middle_component,
}: {
	role?: UserRole;
	left_side_component?: React.ReactNode;
	middle_component?: React.ReactNode;
}) => {
	const router = useRouter();
	const pageName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className="  mb-6 flex items-center justify-between ">
			{/*  */}
			{left_side_component}

			{/* middle_component */}

			<div>{middle_component}</div>

			{/* Button */}

			<div className="flex items-center   gap-4">
				<button
					type="button"
					onClick={() => {}}
					className={cn(
						" text-d_black  bg-white shadow  rounded-lg p-3 hover:text-green hover:shadow-md duration-500 text-base     "
					)}
				>
					{ICONS.notification}
				</button>
				<PopOver
					className=" w-[200px]   right-0 mt-3 rounded-md shadow-md   "
					button={
						<button className="flex items-center gap-4 outline-none ring-0">
							{ICONS.user} {user?.name}{" "}
							<span className=" hidden md:block4">
								{ICONS.dow_arrow}
							</span>
						</button>
					}
				>
					<div className="overflow-hidden  p-5  shadow-sm bg-white rounded-lg   min-h-[100px] flex  flex-col   justify-start gap-4">
						{dashboard_dropdown_menus.map(
							(menu) => {
								return (
									<button
										type="button"
										key={
											menu.title
										}
										onClick={() => {
											if (
												menu.isLinkType
											) {
												router.push(
													`/${role}/dashboard${menu.url}`
												);
											} else {
												menu.clickHandler &&
													menu.clickHandler();
											}
										}}
										className={cn(
											" text-d_black_normal hover:text-green duration-500 text-base  flex items-center gap-4   ",
											menu.classes
										)}
									>
										<span className="  ">
											{
												menu.icon
											}
										</span>
										<span>
											{
												menu.title
											}
										</span>
									</button>
								);
							}
						)}
					</div>
				</PopOver>
			</div>
		</div>
	);
};

export default DashboardHeader;

