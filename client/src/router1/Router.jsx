import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages1/user/Home";
import About from "../pages1/user/About";
import Product from "../pages1/user/Product";
import ProductDetails from "../pages1/user/ProductDetails";
import Signup from "../pages1/shared/Signup";
import Login from "../pages1/shared/Login";
import ErrorPage from "../pages1/shared/ErrorPage";
import Contact from "../pages1/user/Contact";
import ProductList from "../pages1/user/ProductCategory";
import NewArrivals from "../pages1/user/NewArrivals";
import Profile from "../pages1/user/Profile";
import SellerLayout from "../layout/SellerLayout";
import SellerLogin from "../pages1/seller/SellerLogin";
import SellerRegister from "../pages1/seller/SellerRegister";
import SellerProfile from "../pages1/seller/SellerProfile";
import AdminLayout from "../layout/AdminLayout";
import AdminLogin from "../pages1/admin/AdminLogin";
import AdminProfile from "../pages1/admin/AdminProfile";
import AdminRegister from "../pages1/admin/AdminRegister";
import SellerDemo from "../pages1/seller/SellerDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "new-arrivals",
        element: <NewArrivals />,
      },
      {
        path: "products/:category",
        element: <ProductList />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/seller",
    element: <SellerLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <SellerLogin />,
      },
      {
        path: "register",
        element: <SellerRegister />,
      },
      {
        path: "profile",
        element: <SellerProfile />,
      },
      {
        path: "demo",
        element: <SellerDemo />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "register",
        element: <AdminRegister />,
      },
    ],
  },
]);
