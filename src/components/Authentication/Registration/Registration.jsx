import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { user, userRegistration } = useContext(AuthContext);
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, user);
    userRegistration(email, password)
      .then((result) => {
        // signed up
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-evenly items-center">
          <div className="w-[300px] h-[400px] mr-8">
            <img src={loginImg} alt="" />
          </div>
          <div className="ml-16 border rounded-md h-[620px] w-[400px]">
            <div className="m-4">
              <h1 className="text-4xl text-center text-[#2c2c2c] font-semibold">
                Registration
              </h1>
              <form onSubmit={handleRegistration} className="my-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-[#2c2c2c]">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered text-[#727272] text-base"
                    required
                  />
                </div>
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
                    value="Register"
                    className="btn bg-[#ff3811] text-white text-lg hover:bg-[#ff3811] hover:text-white"
                  />
                </div>
              </form>
            </div>
            <div>
              <div>
                <p className="text-center font-medium text-[#727272] mb-4">
                  Or Register with
                </p>
                <div className="flex items-center justify-center my-2 h-10">
                  <div className="flex gap-4">
                    <FaFacebookSquare className="h-8 w-8" />
                    <FaLinkedin className="h-8 w-8" />
                    <FcGoogle className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm mb-3">
                All ready have an account?{" "}
                <Link to="/auth/login" className="text-[#ff3811] font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
