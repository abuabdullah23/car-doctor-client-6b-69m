import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import AddNewService from "../pages/AddNewService/AddNewService";
import BookingCart from "../pages/BookingCart/BookingCart";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(``)
            },
            {
                path: '/services/checkout/:id',
                element: <PrivateRoute><CheckOut/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-ashen-gamma.vercel.app/services/${params.id}`)
            },
            {
                path: '/add-new-service',
                element: <AddNewService></AddNewService>
            },
            {
                path: '/order-review',
                element: <PrivateRoute><BookingCart/></PrivateRoute>
            }
        ]
    },
]);

export default router;
