import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import AddDoctor from "../Pages/AddDoctor";
import AboutUs from "../Pages/AboutUs";
import HealthTips from "../Pages/HealthTips";
import Medicine from "../Pages/Medicine";
import FindDoctors from "../Pages/FindDoctors";
import Contact from "../Components/Contact";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRouter from "./PrivetRouter";
import Detailspage from "../Pages/Detailspage";
import MyAppointments from "../Pages/MyAppointments";
import DeshboardLayOutOptimaize from "../Layout/Deshboard/DeshboardLayOutOptimaize";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            }
            , {
                path: "/login",
                Component: Login
            },
            {
                path: "/signup",
                Component: SignUp
            }, {
                path: "/AddDoctors",
                element: <PrivetRouter>
                    <AddDoctor></AddDoctor>
                </PrivetRouter>
            }, {
                path: "/aboutUs",
                Component: AboutUs
            }, {
                path: "/healthTips",
                Component: HealthTips
            }, {
                path: "/Medicine",
                Component: Medicine
            }, {
                path: "/findDoctors",
                Component: FindDoctors
            }, {
                path: "/contactSection",
                element: <PrivetRouter>
                    <Contact></Contact>
                </PrivetRouter>
            }, {
                path: '/profile',
                Component: Profile
            }, {
                path: "/doctorDetails/:id",
                element: <PrivetRouter>
                    <Detailspage></Detailspage>
                </PrivetRouter>
            }, {
                path: "/myAppointments",
                element: <PrivetRouter>
                    <MyAppointments></MyAppointments>
                </PrivetRouter>
            }
        ]
    }, {
        path: "/*",
        Component: ErrorPage
    },
    {
        path: '/dashboard',
        element: <PrivetRouter>
            <DeshboardLayOutOptimaize></DeshboardLayOutOptimaize>
        </PrivetRouter>
    }
])