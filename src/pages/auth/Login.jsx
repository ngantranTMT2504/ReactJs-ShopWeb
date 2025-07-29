import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3">
                <small>Login with </small>
              </div>
              <div class="btn-wrapper text-center">
                <Link to="#" class="btn btn-neutral btn-icon">
                  <span class="me-2">
                    <i class="bi bi-github fs-4"></i>
                  </span>
                  <span class="">Github</span>
                </Link>
                <Link to="#" class="btn btn-neutral btn-icon">
                  <span class="me-2">
                    <i class="bi bi-google fs-4"></i>
                  </span>
                  <span class="">Google</span>
                </Link>
              </div>
            </div>
            <div class="px-lg-5 pb-lg-5">
              <div class="text-center text-muted mb-1"></div>
              <form role="form">
                <label class="text-sm">Email</label>
                <div class="form-group mb-3">
                  <div class="">
                    <input
                      class="p-2 w-100"
                      placeholder="Email"
                      type="email"
                    ></input>
                  </div>
                </div>
                <label class="text-sm">Password</label>
                <div class="form-group">
                  <div class="">
                    <input
                      class="p-2 w-100"
                      placeholder="Password"
                      type="password"
                    ></input>
                  </div>
                </div>
                <div class="text-center my-3">
                  <button class="btn-custom py-2 px-4" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="d-flex justify-content-between mx-5">
              <Link to="/forgot-password" class="text-decoration-none me-5">
                Forgot password
              </Link>
              <Link to="/register" class="text-decoration-none">
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
