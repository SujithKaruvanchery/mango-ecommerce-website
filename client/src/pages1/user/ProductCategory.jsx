import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../config/AxiosInstance";
import ProductCategoryCard from "../../components1/user/ProductCategoryCard";

function ProductCategory() {
  const { category } = useParams();
  console.log("=======category", category);

  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await AxiosInstance({
        method: "GET",
        url: `/product/products/${category}`,
      });
      console.log("=======ProductCategory", response);
      setProducts(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl">Best of {category} Collections</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {products?.map((value) => {
          return (
            <ProductCategoryCard key={value._id || value.id} product={value} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductCategory;
