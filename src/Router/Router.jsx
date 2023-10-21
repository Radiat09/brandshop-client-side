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
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    errorElement: <Error></Error>,
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
          fetch(
            `https://assignment-10-server-xi-blush.vercel.app/products/${params.brand}/${params.id}`
          ),
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
          fetch(
            `https://assignment-10-server-xi-blush.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/myCart/:email",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-xi-blush.vercel.app/cart/${params.email}`
          ),
      },
    ],
  },
]);
export default router;
