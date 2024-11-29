import { useState } from "react";
import Upload from "../assets/upload.webp";
import Input from "../Components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Uploads = () => {
	const Navigate = useNavigate();

	const NavItems = [
		{ name: "Cars" },
		{ name: "Accessories" },
		{ name: "Spare Parts" },
		{ name: "Repair" },
	];

	const [image, setImage] = useState<File | null>(null);
	const [isLoading, setLoad] = useState<boolean>(false);

	const [productName, setProduct] = useState("");
	const [price, setPrice] = useState("");
	const [specification, setSpec] = useState("");
	const [description, setDesc] = useState("");
	const [category, setCategory] = useState("");

	const input = document.querySelector(".input") as HTMLInputElement | null;

	const handleClick = () => {
		if (input) {
			input.click();
		} else {
			return;
		}
	};

	const handleSubmit = async () => {
		const formData = new FormData();

		formData.append("productsName", productName);
		formData.append("price", price);
		formData.append("specification", specification);
		formData.append("description", description);
		formData.append("category", category);
		formData.append("image", image!);

		try {
			setLoad(true);
			await axios.post(
				`https://auto-tkgk.onrender.com/api/products/create`,
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			);

			setLoad(false);
			Navigate("/");
		} catch (err) {
			setLoad(false);
			console.log(err);
		}
	};

	return (
		<div className="md:px-10 py-16 px-5">
			<div className="max-w-[1540px] gap-5 mx-auto grid md:grid-cols-2">
				<div onClick={handleClick} className="w-[100%] cursor-pointer">
					<input
						type="file"
						name="file"
						id="file"
						className="input"
						hidden
						onChange={({ target: { files } }) => {
							if (files) {
								setImage(files[0]);
							}
						}}
					/>
					{image ? (
						<img
							className="rounded-lg w-full h-[500px] object-cover"
							src={URL.createObjectURL(image)}
						/>
					) : (
						<img className="w-[300px]  mx-auto" src={Upload} alt="" />
					)}
					<p className="text-center pt-8">Upload Images here</p>
				</div>

				<div className="space-y-5">
					<Input
						name="Product Name"
						label="Enter Product name"
						value={productName}
						onChange={(e) => setProduct(e.target.value)}
					/>

					<Input
						name="Product Price"
						label="Enter Product Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<Input
						name="Specifications"
						label="Enter Product Specification"
						value={specification}
						onChange={(e) => setSpec(e.target.value)}
						error={"Separate the Specification with Comma"}
					/>

					<Input
						name="Product Description"
						label="Enter Product Description"
						value={description}
						onChange={(e) => setDesc(e.target.value)}
					/>

					<select
						className="border border-[#aaa] w-full px-4 outline-blue-500 duration-500 rounded-[8px] text-[14px] lg:text-base lg:py-2 py-2"
						name="category"
						id=""
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">Choose Product Category</option>
						{NavItems.map((item, index) => {
							return <option key={index}>{item.name}</option>;
						})}
					</select>

					<button
						onClick={handleSubmit}
						className="uppercase mt-4 bg-black w-full font-bold text-[20px] h-14 hover:scale-[1.02] duration-500 text-white"
					>
						{isLoading ? <Spin /> : "Submit"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Uploads;
