import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../LayoutMain/LayoutMain";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>,
          </PrivateRoute>
        ),
      },
      {
        path: "brands/:brand",
        element: <SingleBrand></SingleBrand>,
      },
      {
        path: "/products/:brand/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/products/${params.brand}`),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:9000/cart"),
      },
    ],
  },
]);

export default router;
