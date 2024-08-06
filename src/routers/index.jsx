// router = penyimpanan route yang akan diakses
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Index";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import About from "../pages/About";

import ErrorPage from "../components/ErrorPage";
import { post, singlePost } from "../apis/loader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: post,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: singlePost,
            },
            {
                path: "/about",
                element: <About />,
            }
        ]
    }
]);
