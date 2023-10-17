import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";
import UserRole from "@/types/UserRole";

export const sidebar_menus = [
	{
		id: 1,
		title: "Dashboard",
		icon: ICONS.home_icon,
		url: "/",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.WORKER],
	},

	{
		id: 1,
		title: "Categeory",
		icon: ICONS.catgeory,
		url: "/categories",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Services",
		icon: ICONS.salon_services,
		url: "/services",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Schedule",
		icon: ICONS.schedule,
		url: "/schedule",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Appointments",
		icon: ICONS.calender,
		url: "/appointments",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Blogs",
		icon: ICONS.book,
		url: "/blogs",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Reviews",
		icon: ICONS.review,
		url: "/reviews",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
	{
		id: 1,
		title: "Users",
		icon: ICONS.users,
		url: "/users",
		is_active: true,
		is_visible: true,
		role: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
	},
];

