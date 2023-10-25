"use client";
import DesktopHeader from "@/components/Blocks/Header/Header";
import AdminMobileBottomNavigation from "@/components/Blocks/Sidebar/AdminMobileBottomNavigation";
import Sidebar from "@/components/Blocks/Sidebar/Sidebar";
import AuthChecking from "@/components/Blocks/Validation/AuthChecking";
import { decodedToken } from "@/helpers/jwtHelper";
import useAuthCheck from "@/hooks/useAuthCheck";
import store from "@/redux/Store";
import UserRole from "@/types/UserRole";
import { checkUserAuthenticationFromCLientSide } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function AuthUI({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const authChecked = useAuthCheck();
	const auth_check = checkUserAuthenticationFromCLientSide();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if (
			!auth_check?.is_logged_in ||
			auth_check?.user_details?.role == UserRole.CUSTOMER
		) {
			router.push("/admin/signin");
		} else {
			setIsLoading(false);
		}
	}, [authChecked, router, isLoading]);

	if (isLoading && auth_check?.is_logged_in !== true) {
		return <AuthChecking />;
	}

	return (
		<div className=" font-main  bg-d_body  w-full p-4 md:p-8">
			<div>
				<Sidebar />
				<AdminMobileBottomNavigation />
				<div className="  md:pl-[100px] pb-40 ">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}

