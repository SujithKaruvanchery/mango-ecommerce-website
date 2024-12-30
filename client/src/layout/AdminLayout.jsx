import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { AxiosInstance } from "../config/AxiosInstance";
import { clearAdmin, saveAdmin } from "../redux/features/adminSlice";
import AdminHeader from "../components1/admin/AdminHeader";
import Header from "../components1/admin/Header";
import AdminFooter from "../components1/admin/AdminFooter";

const AdminLayout = () => {
  const location = useLocation();
  const { isAdminAuth } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const checkAdmin = async () => {
    try {
      const response = await AxiosInstance({
        method: "GET",
        url: "/admin/check-admin",
      });
      console.log("Admin check response:", response);
      if (response.data.isAuthenticated) {
        dispatch(saveAdmin(response.data));
      } else {
        dispatch(clearAdmin());
      }
    } catch (error) {
      console.log("Admin check error:", error);
      dispatch(clearAdmin());
    }
  };

  useEffect(() => {
    checkAdmin();
  }, [location.pathname]);

  return (
    <div>
      {isAdminAuth ? <AdminHeader /> : <Header />}
      <div>
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
