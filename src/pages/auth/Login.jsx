import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      const token = response.data.token;
      sessionStorage.setItem("token", token);

      navigate("/admin");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Login with </small>
              </div>
              <div className="btn-wrapper text-center">
                <Link to="#" className="btn btn-neutral btn-icon">
                  <span className="me-2">
                    <i className="bi bi-github fs-4"></i>
                  </span>
                  <span className="">Github</span>
                </Link>
                <Link to="#" className="btn btn-neutral btn-icon">
                  <span className="me-2">
                    <i className="bi bi-google fs-4"></i>
                  </span>
                  <span className="">Google</span>
                </Link>
              </div>
            </div>
            <div className="px-lg-5 pb-lg-5">
              <div className="text-center text-muted mb-1"></div>
              <form role="form" onSubmit={handleSubmit}>
                <label className="text-sm">Email</label>
                <div className="form-group mb-3">
                  <div className="">
                    <input
                      className="p-2 w-100"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <label className="text-sm">Password</label>
                <div className="form-group">
                  <div className="">
                    <input
                      className="p-2 w-100"
                      placeholder="Password"
                      type="password"
                      value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    ></input>
                  </div>
                </div>
                 {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}
                <div className="text-center my-3">
                  <button className="btn-custom py-2 px-4" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-between mx-5">
              <Link to="/forgot-password" className="text-decoration-none me-5">
                Forgot password
              </Link>
              <Link to="/auth/register" className="text-decoration-none">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
