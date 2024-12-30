import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../shared/DarkMode";

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 flex items-center">
          <Link to={"products/Women"}>
            <span className="btn btn-ghost text-xs font-thin">WOMEN</span>
          </Link>
          <Link to={"products/Men"}>
            <span className="btn btn-ghost text-xs font-thin">MEN</span>
          </Link>
          <Link to={"/"}>
            <span className="btn btn-ghost text-xs font-thin">TEEN</span>
          </Link>
          <Link to={"products/Kids"}>
            <span className="btn btn-ghost text-xs font-thin">KIDS</span>
          </Link>
        </div>
        <div className="flex-none">
          <Link to={"/"} className="flex justify-center items-center">
            <img
              src="https://st.mngbcn.com/static/assets/img/logo/mango.svg"
              alt="Logo"
              className="h-4"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end space-x-4">
          <DarkMode />
          <Link>
            <span className="btn btn-ghost text-xs font-thin">SEARCH</span>
          </Link>
          <Link to={"login"}>
            <span className="btn btn-ghost text-xs font-thin">LOG IN</span>
          </Link>
          <Link>
            <span className="btn btn-ghost text-xs font-thin">BAG</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
