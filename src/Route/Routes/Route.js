import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main.js";
import AboutUs from "../../Pages/AboutUs/Aboutus/AboutUs.js";
import Appointment from "../../Pages/Appointment/Appointment.js";
import Home from "../../Pages/Home/Home/Home";
import Doctors from "../../Pages/OurDoctor/Doctors.js";
import Reviews from "../../Pages/Reviews/Reviews.js";

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
                    path: 'home',
                    element: <Home></Home>
               },

               {
                    path: 'about',
                    element: <AboutUs></AboutUs>
               },
               {
                    path: 'doctors',
                    element: <Doctors></Doctors>
               },
               {
                    path: 'appointment',
                    element: <Appointment></Appointment>
               },
               {
                    path: 'reviews',
                    element: <Reviews></Reviews>
               },
          ]
     },
]);
export default router;
