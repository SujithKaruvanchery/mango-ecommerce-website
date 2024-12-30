import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="w-full bg-base-100">
        <footer className="footer footer-center p-10">
          <div>
            <nav className="grid grid-flow-col gap-4 mb-0">
              <Link to={"seller/login"}>
                <a className="link link-hover font-thin text-xs">
                  Seller Login
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">
                  My purchases
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Returns</a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Company</a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">
                  Work for Mango
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Press</a>
              </Link>
            </nav>
            <nav className="grid grid-flow-col gap-4 mt-0">
              <Link to={"admin/login"}>
                <a className="link link-hover font-thin text-xs">Admin Login</a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Site map</a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">
                  Sustainability
                </a>
              </Link>
              <Link>
                <a className="link link-hover font-thin text-xs">Stores</a>
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
                Copyright © {new Date().getFullYear()} MANGO All rights reserved
              </p>
              <p>Privacy Policy and Cookies</p>
              <p>Terms and conditions</p>
              <p>Ethics Channel</p>
            </nav>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
