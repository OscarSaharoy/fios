import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home, Contact, Product, About } from "./home.jsx";

const router = createBrowserRouter([
    {
        path:  "/",
        element: <Home />,
    },
    {
        path:  "/contact",
        element: <Contact />,
    },
    {
        path:  "/product",
        element: <Product />,
    },
    {
        path:  "/about",
        element: <About />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}

