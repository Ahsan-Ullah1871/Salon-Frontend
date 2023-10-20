import UserRole from "@/types/UserRole";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { customer_sidebar_menus, sidebar_menus } from "./SidebarMenus";
import { ICONS } from "@/icons/AllIcons";
import { usePathname, useRouter } from "next/navigation";

const CustomerSidebar = ({}) => {
	const router = useRouter();
	const pathname = usePathname();

	const current_route_check = (menu_path: string) => {
		return pathname === menu_path;
	};

	return (
		<div className="  hidden  md:flex  flex-col items-center py-5 bg-d_primary rounded-3xl w-[90px] h-[95VH] my-auto fixed left-8   scroll-smooth  overflow-x-auto   ">
			{/* logo */}
			<Link
				href={"/"}
				className=" p-3 bg-white rounded-lg"
			>
				<Image
					src={"/img/Logo_small.png"}
					height={24}
					width={24}
					alt="Logo"
				/>
			</Link>

			{/* Links */}
			<div className="w-full flex flex-col items-center justify-center gap-8 mt-40">
				{customer_sidebar_menus.map((item) => {
					return (
						<Link
							key={item.id}
							href={`/dashboard${item.url}`}
							className={[
								"w-full  border-l-4  hover:border-d_gray duration-50 tooltip",
								current_route_check(
									`/dashboard${item.url}`
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
			<div className=" w-full  end-0 h-full  flex-grow flex items-end justify-end mt-6 mb-10">
				<Link
					href={`/dashboard/settings`}
					className={[
						"w-full  border-l-4   hover:border-d_gray duration-500",
						current_route_check(
							`/dashboard/settings`
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
		</div>
	);
};

export default CustomerSidebar;

