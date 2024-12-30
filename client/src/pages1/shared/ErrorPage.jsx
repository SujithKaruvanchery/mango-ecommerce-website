import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage({ role = "user" }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (role == "user") {
      navigate("/");
      return;
    }
    if (role == "admin") {
      navigate("/admin");
    }
  };
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">404</p>

          <h6 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            PAGE NOT FOUND
          </h6>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            We are sorry but this page is no longer available on our web site.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-none bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleNavigation}
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
