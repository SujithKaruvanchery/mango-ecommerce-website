import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../config/AxiosInstance";
import toast from "react-hot-toast";

function SellerLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const seller = {
    login_api: "/seller/login",
    profile_route: "/seller/profile",
    signup_route: "/seller/register",
  };

  const onSubmit = async (data) => {
    try {
      const response = await AxiosInstance({
        method: "POST",
        url: seller.login_api,
        data,
      });
      console.log("=======response", response);

      toast.success("Welcome! You have logged in successfully.");
      navigate(seller.profile_route);
    } catch (error) {
      toast.error("Invalid login credentials. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-lg font-normal tracking-tight">
            Sign in to your account
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full mt-2 p-2 border rounded-none"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-none bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-2">
            <Link to={seller.signup_route}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-none bg-white px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-gray-100 outline outline-1 outline-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerLogin;
