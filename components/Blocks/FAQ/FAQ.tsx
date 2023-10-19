import FAQCard from "@/components/ui/Cards/FAQCard";
import Carousel from "@/components/ui/Carousel/Carousel";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import { ICONS } from "@/icons/AllIcons";
import React from "react";

const FAQ = () => {
	return (
		<div className=" py-28 ">
			<Heading1 styles="max-w-[890px] px-12 mx-auto font-spacial mb-8 md:mb-[56px] text-[34px] md:text-[58px] leading-[40px] md:leading-[68px]">
				Finding answers shouldn’t be hard.  We make it easy.
			</Heading1>
			<div>
				<Carousel
					swiper_slide_style=" !h-[364px]  !w-[300px] md:!w-[350px]"
					Items={[
						<FAQCard
							key={""}
							title={`We're here to help 24 hours a day.`}
							button_title={"Call Now"}
							image={"/img/faq.png"}
							url={"/test"}
							icon={ICONS.call_icon}
						/>,
					]}
				/>
			</div>
		</div>
	);
};

export default FAQ;

