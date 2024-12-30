import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../config/AxiosInstance";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";


function SellerRegister() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const seller = {
    register_api: "/seller/signup",
    profile_route: "/seller/profile",
    login_route: "/seller/login",
  };

  const onSubmit = async (data) => {
    try {
      const response = await AxiosInstance({
        method: "POST",
        url: seller.register_api,
        data,
      });
      console.log("=======response", response);

      toast.success("Registration successful.");
      navigate(seller.login_route);
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-lg font-normal tracking-tight">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("name")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("email")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm/6 font-medium">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  required
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("mobile")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("password")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm/6 font-medium">
                Role
              </label>
              <div className="mt-2">
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("role")}
                >
                  <option value="seller">Seller</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="storeName"
                className="block text-sm/6 font-medium"
              >
                Store Name
              </label>
              <div className="mt-2">
                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  required
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("storeName")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm/6 font-medium">
                Address
              </label>
              <div className="mt-2">
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("address")}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-none bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-2">
            <Link to={seller.login_route}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-none bg-white px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-gray-100 outline outline-1 outline-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Already have an account? Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
