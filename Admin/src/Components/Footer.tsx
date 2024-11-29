import { Link } from "react-router-dom";

const Footer = () => {
	const NavItems = [
		{ name: "About", path: "/" },
		{ name: "Our Guarantees", path: "/" },
		{ name: "Terms And Conditions", path: "/" },
		{ name: "Privacy Policy", path: "/" },
		{ name: "Return Policy", path: "/" },
	];

	return (
		<div className="bg-neutral-900">
			{/* <div className="max-w-[1540px] gap-y-5 md:px-10 px-5 lg:flex-row flex-col flex items-center justify-between py-6 mx-auto ">
				<p className="font-semibold text-white">
					Sign up to our newsletter for updates and deals
				</p>

				<div className="flex w-full md:w-auto items-center">
					<input
						className="bg-white w-[400px] px-3 outline-none py-2.5"
						type="email"
						placeholder="Enter your email"
					/>
					<button className="py-2.5 w-[150px] bg-orange-600 font-semibold text-white px-4">
						SUBMIT
					</button>
				</div>
			</div> */}

			<div className="border border-slate-300 mb-6" />

			<div className="text-white max-w-[1540px] md:px-10 px-5 py-6 mx-auto">
				<div className="space-y-4">
					<h2 className="uppercase font-semibold text-[20px]">Know Us</h2>

					<div className="flex flex-col gap-y-2">
						{NavItems.map((item, index) => {
							return (
								<Link key={index} to={item.path}>
									{item.name}
								</Link>
							);
						})}
					</div>
				</div>

				<div className="border-[0.2px] border-neutral-800 my-8" />

				<p className="text-[14px]">© AutofactorNG. 2024. All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
