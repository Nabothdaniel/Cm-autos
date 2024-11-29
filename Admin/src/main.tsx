import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

// PAGES

import { AuthProvider, useAuth } from "./Context/useContext.tsx";
import Login from "./Pages/Login.tsx";
import SignUp from "./Pages/SignUp.tsx";
import Uploads from "./Pages/Uploads.tsx";

function AppRouter() {
	const { isAuthenticated, userRole } = useAuth();

	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: !isAuthenticated ? <Login /> : <Navigate to="/uploads" />,
				},
				{
					path: "/register",
					element: !isAuthenticated ? <SignUp /> : <Navigate to="/" />,
				},
				{
					path: "/Uploads",
					element: userRole == "admin" ? <Uploads /> : <Navigate to="/uploads" />,
				},
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
