import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
import OrderSummary from "../pages/OrderSummary";

export const myrouter = createBrowserRouter([
    {path: '/', element:<App/>, children:[
        {index:true, element:<Shop/>},
        {path:'shop', element:<Shop/>},
        {path:'cart', element:<Cart/>},
        {path:'add', element:<AddProduct/>},
        {path:'order', element:<OrderSummary/>}
    ]},
    {path:'*', element:<h1>404 Not Found</h1>}
])
