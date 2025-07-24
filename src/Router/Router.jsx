import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";


export const router = createBrowserRouter([
    {
        path:"/",
        Component : MainLayout,
        children : [
            {
                path:"/",
                Component : Home
            }
            ,{
                path:"/login",
                Component : Login
            },
            {
                path:"/signup",
                Component : SignUp
            }
        ]
    }
])