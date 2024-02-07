import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";


const router=createBrowserRouter([
    {
        path:'/adminui',
        element:<App/>
    }
]);

export default router;
