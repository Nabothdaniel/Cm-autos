import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";
import Img7 from "../assets/img7.jpeg";
import Img8 from "../assets/img8.jpeg";

const Products = () => {
	const images = [Img1, Img5, Img6, Img7, Img8];

	const car = [Img2, Img3, Img4];

	const { title } = useParams();

	const [products, setProducts] = useState<any>([]);

	const getProducts = async () => {
		try {
			const response = await axios.get(
				`https://auto-tkgk.onrender.com/api/products/product_category/${title}`
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
		<div>
			<div className="max-w-[1540px] md:px-10 px-5 py-10 mx-auto">
				<h2 className="lg:text-[42px] md:text-[32px] text-[22px] font-semibold">
					{title}
				</h2>

				{products.length < 1 && title == "Cars" ? (
					<div className="grid pt-6 grid-cols-1 gap-x-5 gap-y-4 lg:gap-y-0 md:grid-cols-3 lg:grid-cols-4">
						{car.map((item, index) => {
							return (
								<img
									className="h-[220px] w-full md:h-[300px] object-cover"
									key={index}
									src={item}
									alt=""
								/>
							);
						})}
					</div>
				) : products.length < 1 && title !== "Cars" ? (
					<div className="grid pt-6 grid-cols-1 gap-x-5 gap-y-4  md:grid-cols-3 lg:grid-cols-4">
						{images.map((item, index) => {
							return (
								<img
									className="h-[220px] w-full md:h-[300px] object-cover"
									key={index}
									src={item}
									alt=""
								/>
							);
						})}
					</div>
				) : (
					<div className="grid pt-6 grid-cols-1 gap-y-4 lg:gap-y-0 md:grid-cols-3 lg:grid-cols-4">
						{products.map((item: any, index: any) => {
							return (
								<Link
									to={`/products/${item._id}`}
									key={index}
									className="border duration-500 cursor-pointer p-8 w-full"
								>
									<div className="flex flex-col items-center">
										<img
											className="md:size-[200px] size-[150px] object-cover"
											src={`https://auto-tkgk.onrender.com/media/${item?.image}`}
											alt=""
										/>
										<p className="text-[18px] font-semibold pt-4">
											{item?.productsName}
										</p>
										<p className="text-[18px] font-semibold pt-4"></p>
									</div>
									<p className="md:text-[28px] text-[20px] mt-4 font-semibold">
										₦{item?.price}
									</p>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
