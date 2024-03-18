import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//react router dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./conponents/Home.jsx";
import Blogs from "./conponents/Blogs.jsx";
import Contact from "./conponents/Contact.jsx";
import Services from "./conponents/Services.jsx";
import AboutUs from "./conponents/AboutUs.jsx";
import Smartfonlar from "./conponents/Smartfonlar.jsx";
import Noutbuklar from "./conponents/Noutbuklar.jsx";
import Suniy_intellekt from "./conponents/Suniy_intellekt.jsx";
import P_computer from "./conponents/P_computer.jsx";
import Games from "./conponents/Games.jsx";
import Sm_1 from "./conponents/AllSmartfonPages/Sm_1.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/services",
                element: <Services />,
            },

            {
                path: "/us",
                element: <AboutUs />,
            },

            {
                path: "/smartfonlar",
                element: <Smartfonlar />,
            },

            {
                path: "/noutbuklar",
                element: <Noutbuklar />,
            },

            {
                path: "/suniy_intellekt",
                element: <Suniy_intellekt />,
            },

            {
                path: "/p_computer",
                element: <P_computer />,
            },

            {
                path: "/games",
                element: <Games />,
            },

            {
                path: "/sm_1",
                element: <Sm_1 />,
            },

        
        ],
    },
]);

//<RouterProvider router={router} /> pastda  <React.StrictMode>ni ichida turgan shu router tepada  o'zgaruvchiga olinib pathga asosiy sahifa elementga umumiy app childernni ichiga esa elementlrga yangi ochilgan componentlar qo'yiladi shunda hammasi routerga o'ralgan hissoblanadi

//

//childernni ichiga qo'yilgan componentlarni brawser ochadi bo'masa yoq chunki bu oddiy reactdagi app ni ichida turganday gap yani App ni o'zigaham chaqirib qo'yish kerak yani bu app.jsx ni ichiga childernlarini router qilish

//childernni ichiga yangi component elemnga yozilganda yoqoroga import qilinishi kerak odatda aftamatik tarzda import bo'ladi

//react router dom

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
//aslida bu joyda app.jsx bo'lishi kerak edi lekin React router domda shunday qilinarkan dacumentatsiyasida shunday berilgan
