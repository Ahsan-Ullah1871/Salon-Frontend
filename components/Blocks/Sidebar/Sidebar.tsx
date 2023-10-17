import UserRole from "@/types/UserRole";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebar_menus } from "./SidebarMenus";
import { ICONS } from "@/icons/AllIcons";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ role = UserRole.ADMIN }) => {
	const router = useRouter();
	const pathname = usePathname();

	const current_route_check = (menu_path: string) => {
		return pathname === menu_path;
	};

	return (
		<div className="  hidden  md:flex  flex-col items-center py-5 bg-d_primary rounded-3xl w-[90px] h-[95VH] my-auto fixed left-8 overflow-x-auto  scroll-smooth    ">
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
				{sidebar_menus.map((item) => {
					return (
						<Link
							key={item.id}
							href={`/${role}/dashboard${item.url}`}
							className={[
								"w-full  border-l-4  hover:border-d_gray duration-500",
								current_route_check(
									`/${role}/dashboard${item.url}`
								)
									? "order-d_gray "
									: "border-transparent",
							].join(" ")}
						>
							<span className=" w-8 h-8 text-white mx-auto flex items-center text-lg ">
								{item.icon}
							</span>
						</Link>
					);
				})}
			</div>
			<div className=" w-full  end-0 h-full  flex-grow flex items-end justify-end mb-10">
				<Link
					href={`/${role}/dashboard/settings`}
					className="w-full  border-l-4 border-transparent hover:border-d_gray duration-500"
				>
					<span className=" w-8 h-8 text-white mx-auto flex items-center text-lg ">
						{ICONS.setting}
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;

