import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import Home from "./Pages/Home.tsx";
import Products from "./Pages/Products.tsx";
import ViewProducts from "./Pages/ViewProducts.tsx";
import { AuthProvider } from "./Context/useContext.tsx";

function AppRouter() {
	// const { isAuthenticated, userRole } = useAuth();

	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/products/Category/:title",
					element: <Products />,
				},
				{
					path: "/products/:title",
					element: <ViewProducts />,
				},
				// {
				// 	path: "/login",
				// 	element: !isAuthenticated ? <Login /> : <Navigate to="/" />,
				// },
				// {
				// 	path: "/register",
				// 	element: !isAuthenticated ? <SignUp /> : <Navigate to="/" />,
				// },
				// {
				// 	path: "/Uploads",
				// 	element: userRole == "admin" ? <Uploads /> : <Navigate to="/" />,
				// },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	</StrictMode>
);
