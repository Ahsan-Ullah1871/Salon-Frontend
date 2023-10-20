"use client";
import useAuthCheck from "@/hooks/useAuthCheck";
import store from "@/redux/Store";
import { checkUserAuthenticationFromCLientSide } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function AuthUI({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <Provider store={store}>{children}</Provider>;
}

