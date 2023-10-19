"use client";
import AdminSignIn from "@/components/PagesComponents/Auth/SignIn/AdminSignIn";
import Signin from "@/components/PagesComponents/Auth/SignIn/Signin";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import UserRole from "@/types/UserRole";

const SignINPage = () => {
	return <AdminSignIn redirect_path="/admin/dashboard" />;
};

export default SignINPage;

