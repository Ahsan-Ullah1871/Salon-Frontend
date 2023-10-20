import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { logoutAnyUser } from "@/utils/auth";

export const header_menus = [
	{
		title: "Home",
		url: "/",
		isShow: true,
	},
	{
		title: "About",
		url: "/about",
		isShow: true,
	},
	{
		title: "About",
		url: "/about",
		isShow: true,
	},
	{
		title: "About",
		url: "/about",
		isShow: true,
	},
	{
		title: "About",
		url: "/about",
		isShow: true,
	},
];

export const dashboard_dropdown_menus = [
	{
		title: "Update profile",
		isLinkType: true,
		url: "/settings",
		clickHandler: null,
		icon: SM_ICONS.pencil,
	},
	{
		title: "Log out",
		isLinkType: false,
		url: "",
		clickHandler: () => logoutAnyUser(),
		classes: "hover:text-error",
		icon: SM_ICONS.log_out,
	},
];

export const customer_dropdown_menus = [
	{
		title: "Dashboard",
		isLinkType: true,
		url: "/",
		clickHandler: null,
		icon: SM_ICONS.adjustment,
	},
	{
		title: "Update profile",
		isLinkType: true,
		url: "/settings",
		clickHandler: null,
		icon: SM_ICONS.pencil,
	},
	{
		title: "Log out",
		isLinkType: false,
		url: "",
		clickHandler: () => logoutAnyUser(),
		classes: "hover:text-error",
		icon: SM_ICONS.log_out,
	},
];

