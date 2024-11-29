import { Link } from "react-router-dom";
import Hero from "../assets/Home.jpeg";
import Tyre from "../assets/tyre.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";
import Img7 from "../assets/img7.jpeg";

const Home = () => {
	const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

	const [products, setProducts] = useState<any>([]);

	const NavItems = [
		{ name: "Cars" },
		{ name: "Accessories" },
		{ name: "Spare Parts" },
		{ name: "Repair" },
	];

	const getProducts = async () => {
		try {
			const response = await axios.get(
				`https://auto-tkgk.onrender.com/api/products/products`
			);

			setProducts(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="lg:px-10 px-5">
			<div className="max-w-[1540px] pt-6 pb-10 mx-auto">
				<div className="relative ">
					<img
						className="w-full h-[300px] md:h-[500px] object-cover"
						src={Hero}
						alt=""
					/>

					<div className="absolute p-5 text-center md:text-start md:p-10 space-y-2 md:space-y-4 flex justify-center flex-col bg-black/50 text-white top-0 left-0 w-full h-full">
						<h2 className="md:text-5xl text-[18px] font-semibold">Your One-Stop Auto Solution:</h2>
					<p className="md:text-[18px] text-[14px]">
						Repairs, Parts, and Refits. Trust our expert technicians for
						reliable repairs, browse our extensive inventory of genuine spare
						parts, and discover our custom refit options to get your vehicle
						running smoothly and looking great.
					</p>
					</div>
				</div>

				<div>
					<div className="py-7 pt-10">
						<h2 className="md:text-[32px] text-[22px] font-bold uppercase">
							FEATURED PRODUCTS
						</h2>

						<div className="border-b-4 w-[7%] border-orange-500" />
					</div>

					{products.length < 1 ? (
						<div className="grid gap-3 md:grid-cols-4 grid-cols-2 lg:grid-cols-6 xl:grid-cols-7">
							{images.map((item, index) => {
								return (
									<img
										className="h-[220px] md:h-[300px] object-cover"
										key={index}
										src={item}
										alt=""
									/>
								);
							})}
						</div>
					) : (
						<div className="grid gap-3 md:grid-cols-4 grid-cols-2 lg:grid-cols-6 xl:grid-cols-7">
							{products?.map((item: any, index: any) => {
								return (
									<Link
										to={`/products/${item._id}`}
										key={index}
										className="border shadow-sm md:shadow-xl hover:scale-[1.05] duration-500 cursor-pointer h-[220px] md:h-[300px] flex flex-col justify-between p-4 w-full"
									>
										<div className="flex flex-col items-center">
											<img
												className="md:size-[100px] size-[50px]"
												src={`https://auto-tkgk.onrender.com/media/${item?.image}`}
												alt=""
											/>
											<p className="text-[14px] pt-5">{item?.productsName}</p>
										</div>
										<p className="md:text-[22px] text-[18px] mt-4 font-semibold">
											₦{item?.price}
										</p>
									</Link>
								);
							})}
						</div>
					)}
				</div>

				<div>
					<div className="py-7 pt-16">
						<h2 className="md:text-[32px] text-[22px] font-bold uppercase">
							FEATURED Categories
						</h2>

						<div className="border-b-4 w-[7%] border-orange-500" />
					</div>

					<div className="grid grid-cols-2 lg:grid-cols-4">
						{NavItems.map((item, index) => {
							return (
								<Link
									to={`/products/Category/${item.name}`}
									key={index}
									className="border  duration-500 cursor-pointer  flex flex-col justify-between p-8 w-full"
								>
									<div className="flex flex-col items-center">
										<img className="size-[100px]" src={Tyre} alt="" />
										<p className="text-[18px] font-semibold pt-2">
											{item.name}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
