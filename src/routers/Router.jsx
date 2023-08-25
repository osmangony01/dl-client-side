import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../components/Home/Home";
import Demo from "../components/Home/demo";
import Demo2 from "../components/Home/Demo2";


const router = createBrowserRouter([{

    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/demo",
            element: <Demo></Demo>
        },
        {
            path: "/demo2",
            element: <Demo2></Demo2>
        }
    ]
}]);

export default router;