import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Games from "../pages/Games/Games";
import Register from "../pages/Register/Register";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/games',
        element: <Games/>
    },
    {
        path:'/register',
        element: <Register/>
    }
])
export default router;