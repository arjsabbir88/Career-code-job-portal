import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";




export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/auth/login',
                Component: Login
            }
        ]
    }
])