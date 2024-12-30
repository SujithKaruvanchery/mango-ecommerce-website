import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function AdminFooter() {
  return (
    <div>
      <div className="w-full bg-base-100">
        <footer className="footer footer-center p-10">
          <div>
            <nav className="grid grid-flow-col gap-4 mb-0">
              <Link to={"/admin/products"}>
                <a className="link link-hover font-thin text-xs">
                  Manage Products
                </a>
              </Link>
              <Link to={"/admin/orders"}>
                <a className="link link-hover font-thin text-xs">
                  Manage Orders
                </a>
              </Link>
              <Link to={"/admin/users"}>
                <a className="link link-hover font-thin text-xs">
                  Manage Users
                </a>
              </Link>
              <Link to={"/admin/reports"}>
                <a className="link link-hover font-thin text-xs">Reports</a>
              </Link>
              <Link to={"/admin/settings"}>
                <a className="link link-hover font-thin text-xs">
                  Account Settings
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Help Center</a>
              </Link>
            </nav>
            <nav className="grid grid-flow-col gap-4 mt-0">
              <Link>
                <a className="link link-hover font-thin text-xs">
                  Admin Policies
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">
                  Admin Community
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">
                  Support Center
                </a>
              </Link>
            </nav>
          </div>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-lg"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-spotify fa-lg"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest fa-lg"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </nav>
          <aside>
            <nav className="grid grid-flow-col gap-4 text-xs">
              <p>
                Copyright © {new Date().getFullYear()} MANGO Admin Panel, All
                rights reserved.
              </p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Compliance and Ethics</p>
            </nav>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default AdminFooter;
