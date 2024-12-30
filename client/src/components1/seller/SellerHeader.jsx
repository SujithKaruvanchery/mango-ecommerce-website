import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../shared/DarkMode";

function SellerHeader() {
  return (
    <div>
      <h1>Authorized Header</h1>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"products/Women"}>
            <a className="btn btn-ghost text-xs font-thin">WOMEN</a>
          </Link>
          <Link to={"products/Men"}>
            <a className="btn btn-ghost text-xs font-thin">MEN</a>
          </Link>
          <Link to={"demo"}>
            <a className="btn btn-ghost text-xs font-thin">DEMO</a>
          </Link>
          <Link to={"products/Kids"}>
            <a className="btn btn-ghost text-xs font-thin">KIDS</a>
          </Link>
        </div>
        <div className="flex-none mx-auto">
          <Link to={"/"}>
            <img
              src="https://st.mngbcn.com/static/assets/img/logo/mango.svg"
              alt="Logo"
              className="h-4"
            />
          </Link>
        </div>
        <div>
          <DarkMode />
          <Link>
            <a className="btn btn-ghost text-xs font-thin">SEARCH</a>
          </Link>
          <Link to={"user/profile"}>
            <a className="btn btn-ghost text-xs font-thin">MY ACCOUNT</a>
          </Link>
          <Link>
            <a className="btn btn-ghost text-xs font-thin">WISHLIST</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SellerHeader;
