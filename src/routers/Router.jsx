import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../components/Home/Home";
import Demo from "../components/Home/demo";


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
       }
    ]
}]);

export default router;