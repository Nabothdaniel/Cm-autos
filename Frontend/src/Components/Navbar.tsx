import { useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
	const [NavToggle, setNavToggle] = useState(false);

	// const { isAuthenticated, userRole } = useAuth();

	const NavItems = [
		{ name: "Cars" },
		{ name: "Accessories" },
		{ name: "Spare Parts" },
		{ name: "Repair" },
	];

	return (
		<div className="">
			<div className="flex justify-between h-[85px] lg:h-[100px] md:px-10 px-5 py-8 items-center max-w-[1540px] mx-auto">
				<Link className="overflow-y-hidden lg:h-[100px] h-[80px] " to={"/"}>
					<img
						className="lg:h-[100px] w-full h-[90px] object-cover "
						src={Logo}
						alt=""
					/>
				</Link>

				<div className="flex items-center gap-x-4">
					<a href="tel:+2349090210970" className="flex  items-center gap-x-4">
						<LuPhone className="size-8" />
						<div>
							<p className="text-neutral-600 md:text-base text-[12px] font-medium">
								Call to Order
							</p>
							<p className="font-semibold md:text-base text-[12px]">
								+2349090210970
							</p>
						</div>
					</a>
					{/* {isAuthenticated || (
						<Link
							className="bg-black text-white py-2 px-4 rounded-[10px]"
							to={"/login"}
						>
							Login
						</Link>
					)} */}
				</div>
			</div>

			<div className="lg:py-5 py-3 md:px-10 px-5 bg-neutral-200">
				<div className="flex justify-between gap-x-20 items-center max-w-[1540px] mx-auto">
					<div className="flex justify-between md:justify-normal flex-1 md:flex-none items-center gap-x-20">
						{NavToggle ? (
							<div
								onClick={() => setNavToggle(false)}
								className="flex flex-col items-center cursor-pointer"
							>
								<IoCloseOutline className="size-7" />
								<p className="text-[14px] font-semibold">Close</p>
							</div>
						) : (
							<div
								onClick={() => setNavToggle(true)}
								className="flex flex-col items-center cursor-pointer"
							>
								<CiMenuBurger className="size-7" />
								<p className="text-[14px] font-semibold">Menu</p>
							</div>
						)}

						{/* {userRole == "admin" && (
							<Link
								to={"/uploads"}
								className="flex gap-x-4 items-center cursor-pointer"
							>
								<p className="text-[14px] font-semibold cursor-pointer">
									Add Products
								</p>
								<FaChevronRight />
							</Link>
						)} */}
					</div>

					<div className="flex-1 hidden md:flex items-center px-4 gap-x-7 bg-white h-full">
						<CiSearch className="size-7" />
						<input
							className="flex-1 py-2 outline-none"
							type="text"
							placeholder="Find parts and products"
						/>
					</div>
				</div>
			</div>

			{NavToggle && (
				<div className="bg-neutral-500/50 fixed top-0 w-full h-full left-0" />
			)}

			<div
				className={`lg:w-[20vw] z-[9999] md:w-[50vw] w-[90vw] ${
					NavToggle ? "translate-x-0" : "-translate-x-[100vw]"
				} duration-500 px-4 py-5 pt-20 h-full bg-white fixed top-0 left-0`}
			>
				<div className="w-full flex justify-between items-center">
					<p className="text-[32px] font-semibold">Shop All </p>
					<IoCloseOutline
						onClick={() => setNavToggle(false)}
						className="size-10 cursor-pointer"
					/>
				</div>

				<div className="pt-7 flex flex-col gap-y-4">
					{NavItems.map((item, index) => {
						return (
							<Link
								onClick={() => setNavToggle(false)}
								key={index}
								to={`/products/Category/${item.name}`}
								className="text-[18px] "
							>
								{item.name}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
