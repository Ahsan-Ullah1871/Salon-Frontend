"use client";
import DesktopHeader from "@/components/Blocks/Header/Header";
import CustomerSidebar from "@/components/Blocks/Sidebar/CustomerSidebar";
import CustomerBottomNavbar from "@/components/Blocks/Sidebar/CustomerSidebarMobile";
import Sidebar from "@/components/Blocks/Sidebar/Sidebar";
import { decodedToken } from "@/helpers/jwtHelper";
import useAuthCheck from "@/hooks/useAuthCheck";
import store from "@/redux/Store";
import UserRole from "@/types/UserRole";
import { checkUserAuthenticationFromCLientSide } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function AuthUI({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const authChecked = useAuthCheck();

	return (
		<div className=" min-h-screen font-main  bg-d_body  w-full  p-4 md:p-8">
			<div>
				<CustomerSidebar />
				<CustomerBottomNavbar />
				<div className="  md:pl-[100px]  pb-40">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}

