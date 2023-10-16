import MainFooter from "@/components/Blocks/Footer/MainFooter";
import Header from "@/components/Blocks/Header/Header";
import MobileHeader from "@/components/Blocks/Header/MobileHeader";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={`  bg-bg_color min-h-screen w-full `}>
			{/* Header */}
			<div className=" hidden md:block font-main">
				<Header />
			</div>
			<div className="   md:hidden">
				<MobileHeader />
			</div>

			{/* Main Page will pass from here  */}
			<div className=" max-w-body mx-auto font-main  pt-7 md:pt-10 ">
				{children}
			</div>

			{/* Footer */}

			<div className=" font-main pt-32">
				<MainFooter />
			</div>
		</div>
	);
};

export default MainLayout;
