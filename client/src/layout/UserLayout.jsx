import React, { useEffect } from "react";
import Header from "../components1/user/Header";
import Footer from "../components1/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import UserHeader from "../components1/user/UserHeader";
import { AxiosInstance } from "../config/AxiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, saveUser } from "../redux/features/userSlice";

function UserLayout() {
  const location = useLocation();
  const { isUserAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const checkUser = async () => {
    try {
      const response = await AxiosInstance({
        method: "GET",
        url: "/user/check-user",
      });
      console.log("=======response", response);
      dispatch(saveUser());
    } catch (error) {
      console.log(error);
      dispatch(clearUser());
    }
  };
  console.log("=======isuserauth", isUserAuth);
  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  return (
    <div>
      {isUserAuth ? <UserHeader /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
