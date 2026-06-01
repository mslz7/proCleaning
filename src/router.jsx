import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>    
            },
        ],
    },
]);