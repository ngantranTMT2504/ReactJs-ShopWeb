import React from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-form py-5 my-5">
        <div className="container">
          <div className="row mx-5">
            <div className="col-lg-5">
              <h2 className="mb-4 fw-bold">Get in touch</h2>
              <div className="d-flex gap-3">
                <div className="icons mt-1">
                  <i class="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <div>
                  <h5>Our Location</h5>
                  <p>123 street, Ninh Kieu, Can Tho, Viet Nam</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="icons mt-1">
                  <i class="bi bi-telephone-fill fs-4"></i>
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p>+ 123 456 789</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="icons mt-1">
                  <i class="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <p>bookshell@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
            <div className="mx-auto">
                <form>
                    <div className="mb-3">
                        <label for="name" className="mb-2 fw-semibold">Name </label>
                        <input type="text" placeholder="Your name" id="name" className="d-block w-75 p-2"></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="mb-2 fw-semibold">Email </label>
                        <input type="email" placeholder="Your email" id="email" className="d-block w-75 p-2"></input>
                    </div>
                    <div className="mb-3">
                        <label for="name" className="mb-2 fw-semibold">Subject </label>
                        <input type="text" placeholder="Subject" id="name" className="d-block w-75 p-2"></input>
                    </div>
                    <div className="mb-3">
                        <label for="name" className="mb-2 fw-semibold">Message </label>
                    <textarea type="text" placeholder="Message" id="name" className="d-block w-75 p-2"></textarea>
                    </div>
                    <div>
                        <button className="btn-custom px-4 py-2">Submit</button>
                    </div>
                </form>

            </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
