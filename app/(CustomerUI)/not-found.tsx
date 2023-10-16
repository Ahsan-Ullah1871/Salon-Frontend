import PrimaryLink from "@/components/ui/Links/PrimaryLink";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="  min-h-[500px] py-40 flex flex-col items-center justify-center gap-5">
			<h2 className=" text-9xl font-spacial text-center">404</h2>
			<PrimaryLink
				title="Go to Home"
				url="/"
				className=""
			/>
		</div>
	);
}

