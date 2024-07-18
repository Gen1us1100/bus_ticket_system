import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/SignIn";
import Register from "../Login/Register";
import Navbar from "../Navbar/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/nav",
    element: <Navbar />,
  },
]);
