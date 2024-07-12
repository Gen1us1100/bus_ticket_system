import { createBrowserRouter } from "react-router-dom";
import Login from "../Home/SignIn";
import Register from "../Home/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    
])