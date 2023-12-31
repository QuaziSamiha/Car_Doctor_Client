import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
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
        <div className="hero-content flex-col lg:justify-between lg:flex-row">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 border rounded-none">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn text-white text-lg bg-[#ff3811]" />
              </div>
            </form>
            <p className="mb-3 text-sm text-center">
              New to Car Doctor? <Link to="/auth/registration" className="text-[#ff3811]">Registration</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
