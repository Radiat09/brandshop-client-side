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
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

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
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:brand/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:9000/products/${params.brand}/${params.id}`),
      },
      {
        path: "brands/:brand",
        element: (
          <PrivateRoute>
            <SingleBrand></SingleBrand>,
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brand/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:9000/products/${params.brand}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:9000/cart"),
      },
    ],
  },
]);

export default router;
