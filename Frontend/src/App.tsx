import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Img from "../src/assets/whatsapp.png";

function App() {
	return (
		<div className="overflow-x-hidden">
			<a
				href="https://wa.me/+2349090210970"
				className="fixed flex items-center gap-x-2 md:gap-x-4 bottom-10 right-10"
			>
				<div>
					<p className="md:text-[14px] text-[12px]">Need Help?</p>
					<p className="text-[14px] md:text-base">Chat with us</p>
				</div>

				<img className="md:size-[50px] size-[40px] object-cover" src={Img} alt="" />
			</a>

			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
