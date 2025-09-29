import {createBrowserRouter} from "react-router"
import App from "../App"
import Layout from "../Cpmponents/Layout";

const router = createBrowserRouter([
    {
        path : "/",
        Component : App
    }
]);

export default router