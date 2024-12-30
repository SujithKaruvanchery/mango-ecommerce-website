import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams();
  console.log("=======id", id);

  const [productDetails, isLoading, error] = useFetch(
    `/product/get-product/${id}`
  );
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex items-center justify-center">
          <img
            src={productDetails?.data?.image}
            alt="Product"
            className="w-full max-w-md h-auto lg:max-w-lg lg:h-90 object-cover"
          />
        </figure>
        <div className="card-body">
          <p>{productDetails?.data?.title}</p>
          <p>{productDetails?.data?.description}</p>
          <p>{productDetails?.data?.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to shopping bag</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
