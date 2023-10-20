import NormalDescription from "@/components/ui/Text/Description/NormalDescription";
import Heading1 from "@/components/ui/Text/Headers/Heading1";
import Title from "@/components/ui/Text/Paragraph/Title";
import Image from "next/image";
import React from "react";

const DedicatedSection = () => {
	return (
		<div className=" g-transparent w-full max-w-body px-6 py-20 ">
			<div className="   flex flex-col gap-6 mb-[50px] text-green max-w-[700px] mx-auto ">
				<Heading1 styles="  text-bg text-center font-spacial  font-medium  text-[34px] md:text-[58px] leading-[40px] md:leading-[68px] ">
					We have dedicate on this service
				</Heading1>

				<Title styles="  text-sm text-black_normal text-center">
					Explore the essence of beauty and tranquility
					at our salon. Unmatched elegance,
					professional excellence, and a tranquil
					escape await you.
				</Title>
			</div>

			<div className="flex items-center justify-center gap-6 flex-wrap">
				{/*  */}
				<div className=" bg-white shadow rounded-md p-9 max-w-[280px] min-h-[300px] flex flex-col  justify-center items-center gap-5 ">
					<Image
						src="/img/1.png"
						height={80}
						width={80}
						alt="Icon"
					/>

					<Title styles=" text-center  md:text-[22px] font-semimedium font-spacial text-black ">
						Unmatched Elegance
					</Title>

					<NormalDescription styles=" text-center md:text-base ">
						Experience an oasis of sophistication
						and style.
					</NormalDescription>
				</div>
				{/*  */}
				<div className=" bg-white shadow rounded-md p-9 max-w-[280px] min-h-[300px] flex flex-col  justify-center items-center gap-5 ">
					<Image
						src="/img/2.png"
						height={80}
						width={80}
						alt="Icon"
					/>

					<Title styles=" text-center  md:text-[22px] font-semimedium font-spacial text-black ">
						Professional Excellence
					</Title>

					<NormalDescription styles=" text-center md:text-base ">
						Our expert team delivers top-tier
						beauty and relaxation services.
					</NormalDescription>
				</div>
				{/*  */}
				<div className=" bg-white shadow rounded-md p-9 max-w-[280px] min-h-[300px] flex flex-col  justify-center items-center gap-5 ">
					<Image
						src="/img/3.png"
						height={80}
						width={80}
						alt="Icon"
					/>

					<Title styles=" text-center  md:text-[22px] font-semimedium font-spacial text-black ">
						Your Tranquil Escape
					</Title>

					<NormalDescription styles=" text-center md:text-base ">
						Find serenity and rejuvenation at our
						peaceful haven.
					</NormalDescription>
				</div>
			</div>
		</div>
	);
};

export default DedicatedSection;

