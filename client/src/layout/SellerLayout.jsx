import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components1/seller/Header";
import { AxiosInstance } from "../config/AxiosInstance";
import { clearSeller, saveSeller } from "../redux/features/sellerSlice";
import SellerHeader from "../components1/seller/SellerHeader";
import SellerFooter from "../components1/seller/SellerFooter";


const SellerLayout = () => {
    const location = useLocation();
  const { isSellerAuth } = useSelector((state) => state.seller);
  const dispatch = useDispatch()

    const checkSeller = async () => {
      try {
        const response = await AxiosInstance({
          method: "GET",
          url: "/seller/check-seller",
        });
        console.log("=======response", response);
        dispatch(saveSeller());
        dispatch(saveSeller(response.data));
      } catch (error) {
        console.log(error);
        dispatch(clearSeller());
      }
    };
  
    console.log("=======issellerauth", isSellerAuth);
    useEffect(() => {
      checkSeller();
    }, [location.pathname]);

  return (
    <div>
      {isSellerAuth ? <SellerHeader /> : <Header />}
      <div>
        <Outlet />
      </div>
      <SellerFooter/>
    </div>
  );
};

export default SellerLayout;
