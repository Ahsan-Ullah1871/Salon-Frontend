"use client";

import Category from "@/components/Blocks/Catgory/Category";
import FeatureCard from "@/components/ui/Fetaure/FeatureCard";
import HeroSection from "@/components/Blocks/HeroSection/HeroSection";
import FAQ from "@/components/Blocks/FAQ/FAQ";
import Blogs from "@/components/Blocks/Blogs/Blogs";
import ServicesCarousel from "@/components/Blocks/Services/ServicesCarousel";
import { setValueINRootVariable } from "@/utils/colorChanging";
import { useEffect } from "react";

const HomePage = () => {
	// Need to change latter
	useEffect(() => {
		setValueINRootVariable({
			variable_name: "bg_color",
			value: "#F6F3EB",
		});
	}, []);

	return (
		<div>
			<HeroSection />

			{/* Categor Section  */}
			<div className=" mt-[50px] md:mt-[100px]">
				<Category />
			</div>

			{/* Feature1 */}
			<div className=" mt-10 md:mt-20 ">
				<FeatureCard
					right_image={"/img/feature1.png"}
					left_header_image={"/img/feature1_sub.png"}
					title={"	Luxurious Pampering"}
					description={`Indulge in the ultimate salon experience with
					our 'Luxurious Pampering' selection. Immerse
					yourself in a world of relaxation and
					rejuvenation as our skilled stylists and
					professionals pamper you from head to toe.
					Discover the epitome of self-care with our
					exclusive treatments and services. Unwind and
					revitalize in style`}
					cta_title={"See our services"}
					ctaLink={"/services"}
				/>
			</div>

			{/* FAQ */}
			<div className=" px-6">
				<FAQ />
			</div>

			{/* Blogs */}
			<div>
				<Blogs />
			</div>
			{/* Services */}
			<div className="mt-10">
				<ServicesCarousel />
			</div>
		</div>
	);
};

export default HomePage;

