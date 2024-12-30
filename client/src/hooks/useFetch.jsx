import React, { useEffect } from "react";
import { AxiosInstance } from "../config/AxiosInstance";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const fetchData = async () => {
    try {
      const response = await AxiosInstance({
        method: "GET",
        url: url,
      });
      console.log("=======product", response);
      setData(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [data, isLoading, error];
}

export default useFetch;
