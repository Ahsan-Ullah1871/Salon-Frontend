import PopOver from "@/components/ui/PopOver/PopOver";
import { User } from "@/types/CommonTypes";
import Image from "next/image";
import React from "react";
import { customer_dropdown_menus, dashboard_dropdown_menus } from "./Links";
import { ICONS } from "@/icons/AllIcons";
import { useRouter } from "next/navigation";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { cn } from "@/utils/classNames";
import UserRole from "@/types/UserRole";

const HeaderMenu = ({ user }: { user: User | undefined }) => {
	const router = useRouter();
	return (
		<PopOver
			className=" w-[200px]   right-0 mt-3 rounded-md shadow-md   "
			button={
				<button className="flex items-center gap-4 outline-none ring-0">
					{user?.profile_image ? (
						<Image
							src={user.profile_image}
							width={40}
							height={40}
							alt="Profile"
							objectFit="contain"
							className="rounded-full"
						/>
					) : (
						<span> {ICONS.user}</span>
					)}
					{user?.name}{" "}
					<span className=" hidden md:block">
						{SM_ICONS.dow_arrow}
					</span>
				</button>
			}
		>
			<div className="overflow-hidden  p-5  shadow-sm bg-white rounded-lg   min-h-[100px] flex  flex-col   justify-start gap-4">
				{user?.role === UserRole.CUSTOMER &&
					customer_dropdown_menus.map((menu) => {
						return (
							<button
								type="button"
								key={menu.title}
								onClick={() => {
									if (
										menu.isLinkType
									) {
										router.push(
											`/dashboard${menu.url}`
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
									{menu.icon}
								</span>
								<span>
									{menu.title}
								</span>
							</button>
						);
					})}
				{user?.role !== UserRole.CUSTOMER &&
					dashboard_dropdown_menus.map((menu) => {
						return (
							<button
								type="button"
								key={menu.title}
								onClick={() => {
									if (
										menu.isLinkType
									) {
										router.push(
											`/dashboard${menu.url}`
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
									{menu.icon}
								</span>
								<span>
									{menu.title}
								</span>
							</button>
						);
					})}
			</div>
		</PopOver>
	);
};

export default HeaderMenu;

