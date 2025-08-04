import React from "react";

export const Footer = () => {
  return (
    <div className="footer py-5 bg-dark shadow">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-3">
            <a className="text-decoration-none text-uppercase fw-semibold text-white fs-2 mb-5" href="#">
              <i className="bi bi-book-half me-2"></i>
              Bookshell
            </a>
            <div className="mt-3">
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
          <div className="col-lg-3 col-6">
            <h3 className="mb-3">Quick</h3>
            <ul className="p-0">
              <li className="list-unstyled py-1">
                <a href="#" className="footer-link  text-decoration-none text-white">Home</a>
              </li>
               <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">About</a>
              </li>
              <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Book</a>
              </li>
               <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">Explore</h3>
            <ul className="p-0">
              <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">On Sale</a>
              </li>
               <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Best seller</a>
              </li>
             
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">Help</h3>
            <ul className="p-0">
              <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Order</a>
              </li>
               <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Q & A</a>
              </li>
              <li className="list-unstyled py-1">
                <a href="#" className="footer-link text-decoration-none text-white">Community</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
