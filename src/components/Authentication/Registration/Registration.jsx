import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

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
        <div className="hero-content flex-col lg:justify-between lg:flex-row">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 border rounded-none">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    {/* Forgot password? */}
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-[#ff3811] text-white text-lg"
                />
              </div>
            </form>
            <p className="text-center text-sm mb-3">
              All ready have an account?{" "}
              <Link to="/auth/login" className="text-[#ff3811]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
