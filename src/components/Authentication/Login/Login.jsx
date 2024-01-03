import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { user, userLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-evenly items-center">
          <div className="w-[300px] h-[400px] mr-8">
            <img src={loginImg} alt="" />
          </div>
          <div className="ml-16 border rounded-md h-[520px] w-[400px]">
            <div className="m-4">
              <h1 className="text-4xl text-center text-[#2c2c2c] font-semibold">
                Login
              </h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-[#2c2c2c]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered text-[#727272] text-base"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-[#2c2c2c]">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered text-[#727272] text-base"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn text-white text-lg bg-[#ff3811] hover:bg-[#ff3811] hover:text-white"
                  />
                </div>
              </form>
              <div>
                <p className="text-center font-medium text-[#727272] mb-4">
                  Or Login with
                </p>
                <div className="flex items-center justify-center my-2 h-10">
                  <div className="flex gap-4">
                    <FaFacebookSquare className="h-8 w-8" />
                    <FaLinkedin className="h-8 w-8" />
                    <FcGoogle className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <p className="mb-3 text-sm text-center">
                New to Car Doctor?{" "}
                <Link
                  to="/auth/registration"
                  className="text-[#ff3811] font-medium"
                >
                  Registration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
