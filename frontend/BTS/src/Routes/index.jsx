import { createBrowserRouter } from "react-router-dom";
import Login from "../Home/SignIn";
import Register from "../Home/Register";
import Navbar from "../Navbar/navbar";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/navbar",
        element:<Navbar />
    },
])