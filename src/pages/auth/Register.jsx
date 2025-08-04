import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    active: true,
    role: "User"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Gọi API đăng ký
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", form);
      console.log(response)
      alert("Register successfully");
      navigate("/auth/login");
    } catch (error) {
      alert("Register failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="bg-transparent pb-3">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Register</small>
            </div>
          </div>
          <div className="px-lg-5 pb-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-sm">Full Name</label>
                <input
                  className="p-2 w-100"
                  placeholder="Fullname"
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="text-sm">Email</label>
                <input
                  className="p-2 w-100"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="text-sm">Password</label>
                <input
                  className="p-2 w-100"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center my-3">
                <button className="btn-custom py-2 px-4" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-between mx-5">
            <Link to="/forgot-password" className="text-decoration-none me-5">
              Forgot Password?
            </Link>
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
