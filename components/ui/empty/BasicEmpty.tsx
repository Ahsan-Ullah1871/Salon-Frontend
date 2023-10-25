import Image from "next/image";
import React from "react";
import PrimaryLink from "../Links/PrimaryLink";
import { ButtonType } from "@/types/ButtonTypes";

const BasicEmpty = ({
	message,
	primary_link,
	secondary_link,
}: {
	message: string;
	primary_link?: ButtonType;
	secondary_link?: ButtonType;
}) => {
	return (
		<div className=" bg-white rounded-lg shadow flex flex-col gap-4 items-center p-6 max-w-md w-full min-w-[200px]">
			<Image
				src="/img/empty.png"
				alt="empty"
				width={80}
				height={80}
			/>
			<p className="text-center  text-base font-sub-spacial text-black_normal">
				{message ?? "Sorry there have not any data for now"}
			</p>

			<div>
				{primary_link && <PrimaryLink {...primary_link} />}
				{secondary_link && (
					<PrimaryLink {...secondary_link} />
				)}
			</div>
		</div>
	);
};

export default BasicEmpty;

