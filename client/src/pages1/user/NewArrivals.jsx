import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../../config/AxiosInstance";
import NewArrivalsCard from "../../components1/user/NewArrivalsCard";

function NewArrivals() {
  const [productList, setProductList] = useState([]);

  const fetchNewArrivals = async () => {
    try {
      const response = await AxiosInstance({
        method: "GET",
        url: "/product/new-arrivals",
      });
      console.log("=======product", response);
      setProductList(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl">
        New Arrivals Collection
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {productList?.map((value) => {
          return <NewArrivalsCard key={value.id} product={value} />;
        })}
      </div>
    </div>
  );
}

export default NewArrivals;
