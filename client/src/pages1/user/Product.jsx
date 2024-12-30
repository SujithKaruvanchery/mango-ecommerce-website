import React from "react";
import ProductCards from "../../components1/user/ProductCards";
import useFetch from "../../hooks/useFetch";

function Product() {

  const [productList,isLoading,error] = useFetch("/product/get-all-products");

  return (
    <div>
      <h1 className="text-center text-xl">Explore Collections</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {productList?.map((value) => {
          return <ProductCards key={value._id} product={value} />;
        })}
      </div>
    </div>
  );
}

export default Product;



































  // const [productList, setProductList] = useState([]);

  // const fetchProductList = async () => {
  //   try {
  //     const response = await AxiosInstance({
  //       method: "GET",
  //       url: "/product/get-all-products",
  //     });
  //     console.log("=======product", response);
  //     setProductList(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProductList();
  // }, []);
