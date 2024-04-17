import { NextPage } from "next";
import React from "react";

const Page: NextPage = () => {
	return (
		<div className="grid md:grid-cols-[250px_1fr]">
			<div className="w-full h-full bg-yellow-100">testing</div>
			<div className="w-full h-full bg-yellow-200">testing</div>
		</div>
	);
};

export default Page;
