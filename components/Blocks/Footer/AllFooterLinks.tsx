import Link from "next/link";
import React from "react";
import {
	company_related,
	locations_links,
	social_links,
	spacial_category_services,
	spacial_catgory,
	spacial_services,
} from "./FooterLinks";
import Title from "@/components/ui/Text/Paragraph/Title";

const AllFooterLinks = () => {
	return (
		<div className=" max-w-body mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
			{/* First column */}
			<div className=" order-last md:order-1 flex flex-col gap-4">
				<Link
					href={"mailto:ahsanullahsunsbd@gmail.com"}
					type="email"
					className=" text-white text-opacity-80  text-base md:text-lg "
				>
					Sent me a mail for contact
				</Link>
				<Link
					href={"phone:ahsanullahsunsbd@gmail.com"}
					type="email"
					className=" text-white text-opacity-60  text-base md:text-lg "
				>
					0187*9***
				</Link>

				<div className=" mt-4 flex items-center gap-7">
					{social_links.links.map((link) => {
						return (
							<Link
								className=" text-white hover:text-primary duration-300"
								href={link.link}
								key={link.link}
							>
								{link.icon}
							</Link>
						);
					})}
				</div>
			</div>

			{/* 2nd column */}

			<div className="flex flex-col gap-14">
				<div>
					<Title styles="  font-spacial text-white text-base  font-medium mb-6">
						{spacial_catgory?.title}
					</Title>
					<div className=" flex flex-col gap-6">
						{spacial_catgory?.links?.map(
							(link) => {
								return (
									<Link
										className=" text-white  text-base md:text-lg"
										href={
											link.link
										}
										key={
											link.link
										}
									>
										{
											link.title
										}
									</Link>
								);
							}
						)}
					</div>
				</div>

				{/*3rd  */}
				<div>
					<Title styles="  font-spacial text-white text-base  font-medium mb-6">
						{spacial_services?.title}
					</Title>
					<div className=" flex flex-col gap-6">
						{spacial_services?.links?.map(
							(link) => {
								return (
									<Link
										className=" text-white  text-base md:text-lg"
										href={
											link.link
										}
										key={
											link.link
										}
									>
										{
											link.title
										}
									</Link>
								);
							}
						)}
					</div>
				</div>
			</div>
			{/* 3rd column */}

			<div className="flex flex-col gap-14">
				<div>
					<Title styles="  font-spacial text-white text-base  font-medium mb-6">
						{spacial_category_services?.title}
					</Title>
					<div className=" flex flex-col gap-6">
						{spacial_category_services?.links?.map(
							(link) => {
								return (
									<Link
										className=" text-white  text-base md:text-lg"
										href={
											link.link
										}
										key={
											link.link
										}
									>
										{
											link.title
										}
									</Link>
								);
							}
						)}
					</div>
				</div>

				{/*  */}
				<div>
					<Title styles="  font-spacial text-white text-base  font-medium mb-6">
						{company_related?.title}
					</Title>
					<div className=" flex flex-col gap-6">
						{company_related?.links?.map(
							(link) => {
								return (
									<Link
										className=" text-white  text-base md:text-lg"
										href={
											link.link
										}
										key={
											link.link
										}
									>
										{
											link.title
										}
									</Link>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/* 4th column */}

			<div className="flex flex-col gap-14">
				<div>
					<Title styles="  font-spacial text-white text-base  font-medium mb-6">
						{locations_links?.title}
					</Title>
					<div className=" flex flex-col gap-6">
						{locations_links?.links?.map(
							(link) => {
								return (
									<Link
										className=" text-white  text-base md:text-lg"
										href={
											link.link
										}
										key={
											link.link
										}
									>
										{
											link.title
										}
									</Link>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllFooterLinks;
