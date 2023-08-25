import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../components/Home/Home";
import Demo from "../components/Home/Demo";
import Demo2 from "../components/Home/Demo2";
import D3 from "../components/Home/D3";
import D4 from "../components/Home/D4";
import D5 from "../components/Home/D5";


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
        },
        {
            path: "/d3",
            element: <D3 />
        },
        {
            path: "/d4",
            element: <D4 />
        },
        {
            path: "/d5",
            element: <D5 />
        }
    ]
}]);

export default router;