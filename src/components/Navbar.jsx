import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="top-nav py-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center text-white">
            <p className="mb-0">
              <i className="bi bi-telephone-fill me-2"></i>
              +0123456789
            </p>
            <div>
                <a href="#" className="text-white me-3 fs-5">
                  <i className="bi bi-facebook"></i>
                </a>
                <a  href="#" className="text-white me-3 fs-5">
                  <i className="bi bi-github"></i>
                </a>
                <a  href="#" className="text-white me-2 fs-5">
                  <i className="bi bi-twitter"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow py-2">
        <div className="container ">
          <a
            className="navbar-brand text-uppercase logo-bookstore fw-semibold"
            href="#"
          >
            <i className="bi bi-book-half me-2"></i>
            Bookshell
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link className="nav-link active fw-semibold" to="/" activeClassName='active'>
                  Home
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/about" className="nav-link fw-semibold" activeClassName='active'>
                  About
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/books" className="nav-link fw-semibold" activeClassName='active'>
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-semibold" activeClassName='active'>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <div className="cart ">
                <a className="fs-4 text-black">
                  <i className="bi bi-cart4"></i>
                </a>
              </div>
              <button className="btn-custom py-2 px-4">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
