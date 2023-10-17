"use client";
import Header from "@/components/Blocks/Header/Header";
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
	const auth_check = checkUserAuthenticationFromCLientSide();

	useEffect(() => {
		if (
			!auth_check?.is_logged_in ||
			auth_check?.user_details?.role !== UserRole.ADMIN
		) {
			router.push("/admin/signin");
		}
	}, [authChecked, router]);

	return (
		<div className=" font-main  bg-d_body w-screen p-8">
			<div>
				<Sidebar />
				<div className=" pl-[100px] ">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}

