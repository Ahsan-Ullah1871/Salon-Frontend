"use client";

import FeatureCard from "@/components/ui/Fetaure/FeatureCard";
import HeroSection from "@/components/Blocks/HeroSection/HeroSection";
import FAQ from "@/components/Blocks/FAQ/FAQ";
import Blogs from "@/components/Blocks/Blogs/Blogs";
import ServicesCarousel from "@/components/Blocks/Services/ServicesCarousel";
import { setValueINRootVariable } from "@/utils/colorChanging";
import { useEffect } from "react";
import { BlogPost, Category, Service } from "@/types/CommonTypes";
import CategoriesListCarousel from "@/components/Blocks/Catgory/Category";
import DedicatedSection from "@/components/Blocks/FetauresCards/DedicatedSection";

const HomePage = ({
	categories,
	blogs,
	latest_services,
}: {
	categories: Category[];
	blogs: BlogPost[];
	latest_services: Service[];
}) => {
	return (
		<div className="">
			<HeroSection />
			{/* Categor Section  */}
			<div className=" mt-[50px] md:mt-[100px]">
				<CategoriesListCarousel categories={categories} />
			</div>
			{/* Feature1 */}
			<div className=" mt-10 md:mt-20 ">
				<FeatureCard
					right_image={"/img/feature2.jpg"}
					left_header_image={"/img/feature2_sub.png"}
					title={"Rejuvenating Facial"}
					description={`Start your day with a personalized facial treatment that caters to your unique skin needs. Our experienced estheticians will analyze your skin and choose the perfect products to restore your skin's natural glow.`}
					cta_title={"See our services"}
					ctaLink={"/services"}
				/>
			</div>
			{/* Services */}
			<div className="mt-[150px] px-6 md:px-0">
				<ServicesCarousel
					latest_services={latest_services}
				/>
			</div>
			{/* Deidicated block */}
			<div className="mt-[50px]">
				<DedicatedSection />
			</div>
			{/* FAQ */}
			{/* <div className=" px-6">
				<FAQ />
			</div> */}
			{/* Blogs */}
			<div className="my-20  px-6 md:px-0">
				<Blogs blogs={blogs} />
			</div>
		</div>
	);
};

export default HomePage;

