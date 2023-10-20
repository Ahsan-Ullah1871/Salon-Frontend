import UserRole from "@/types/UserRole";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { admin_mobile_sidebar_menus, sidebar_menus } from "./SidebarMenus";
import { ICONS } from "@/icons/AllIcons";
import { usePathname, useRouter } from "next/navigation";

const AdminMobileBottomNavigation = ({ role = UserRole.ADMIN }) => {
	const router = useRouter();
	const pathname = usePathname();

	const current_route_check = (menu_path: string) => {
		return pathname === menu_path;
	};

	return (
		<div className="  z-20   md:hidden   flex  items-center justify-between   bg-d_primary rounded-3xl w-[95VW] h-[60px] px-6 fixed bottom-2 left-0  right-0 mx-auto  scroll-smooth  overflow-x-auto   ">
			{/* logo */}
			<Link
				href={"/"}
				className=" p-3  rounded-lg"
			>
				<Image
					src={"/img/Logo_small.png"}
					height={40}
					width={40}
					alt="Logo"
				/>
			</Link>

			{/* Links */}
			<div className="w-full h-full  flex  items-center justify-center gap-2">
				{admin_mobile_sidebar_menus.map((item) => {
					return (
						<Link
							key={item.id}
							href={`/admin/dashboard${item.url}`}
							className={[
								" min-w-[40px] w-full h-full flex items-center  border-b-4  hover:border-d_gray duration-50 tooltip",
								current_route_check(
									`/admin/dashboard${item.url}`
								)
									? "border-d_gray "
									: "border-transparent",
							].join(" ")}
						>
							<span className=" w-8 h-8 text-white mx-auto flex items-center text-lg ">
								{item.icon}
							</span>
							<span className="top_default whitespace-nowrap  !bg-gray-600 !text-gray-50">
								{item.title}
							</span>
						</Link>
					);
				})}
			</div>

			<Link
				href={`/admin/dashboard/settings`}
				className={[
					"w-auto h-full flex items-center  border-b-4   hover:border-d_gray duration-500",
					current_route_check(
						`/admin/dashboard/settings`
					)
						? "border-d_gray "
						: "border-transparent",
				].join(" ")}
			>
				<span className=" w-8 h-8 text-white mx-auto flex items-center text-lg ">
					{ICONS.setting}
				</span>
			</Link>
		</div>
	);
};

export default AdminMobileBottomNavigation;

