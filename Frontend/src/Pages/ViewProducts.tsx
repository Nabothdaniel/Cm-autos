import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewProducts = () => {
	const { title } = useParams();

	const [products, setProducts] = useState<any>([]);

	const getProducts = async () => {
		try {
			const response = await axios.get(
				`https://auto-tkgk.onrender.com/api/products/product/${title}`
			);

			setProducts(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	console.log(products)

	return (
		<div className="">
			<div className="max-w-[1540px] md:px-10 px-5 py-16 gap-x-6 gap-y-12 mx-auto grid lg:grid-cols-2">
				<div>
					<img
						className="lg:h-[500px] h-[300px] object-cover w-full"
						src={`https://auto-tkgk.onrender.com/media/${products?.image}`}
						alt=""
					/>
				</div>
				<div className="">
					<h1 className="font-semibold text-[24px]">
						{products?.productsName}
					</h1>
					<p className="font-semibold">Genuine</p>
					<p className="text-[32px] mt-4 font-semibold">₦{products?.price}</p>
					<a
						href={`https://wa.me/+2349090210970?text=I want to buy ${products?.productsName} the price is ₦${products?.price}`}
						className="uppercase mt-4 bg-black w-full  flex justify-center items-center font-bold text-[20px] h-14 hover:scale-[1.02] duration-500 text-white"
					>
						Order now
					</a>
				</div>

				<div>
					<h2 className="font-semibold text-[24px]">PRODUCT SPECIFICATIONS</h2>

					<div className=" odd:bg-neutral-500 pt-4 text-[14px]">
						{products?.specification?.map((item: any, index: any) => {
							return (
								<div key={index} className="px-4 py-3 even:bg-neutral-300">
									{item}
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<h2 className="font-semibold text-[24px]">PRODUCT DESCRIPTION</h2>

					<div className="text-[14px] pt-4">
						<p>{products?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewProducts;
