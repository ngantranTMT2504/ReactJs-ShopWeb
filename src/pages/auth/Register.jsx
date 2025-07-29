import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="bg-transparent pb-3">
              <div class="text-muted text-center mt-2 mb-3">
                <small>Register</small>
              </div>
            </div>
            <div class="px-lg-5 pb-lg-5">
              <div class="text-center text-muted mb-1"></div>
              <form role="form">
              <div className="mb-3">
                  <label class="text-sm">FullName</label>
                  <input
                    class="p-2 w-100"
                    placeholder="Fullname"
                    type="text"
                  ></input>
                </div>
                <div className="mb-3">
                  <label class="text-sm">Email</label>
                  <input
                    class="p-2 w-100"
                    placeholder="Email"
                    type="email"
                  ></input>
                </div>
                <div className="mb-3">
                  <label class="text-sm">Password</label>

                  <input
                    class="p-2 w-100"
                    placeholder="Password"
                    type="password"
                  ></input>
                </div>

                <div class="text-center my-3">
                  <button class="btn-custom py-2 px-4" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div class="d-flex justify-content-between mx-5">
              <Link to="/forgot-password" class="text-decoration-none me-5">
                
              </Link>
              <Link to="/login" class="text-decoration-none">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
