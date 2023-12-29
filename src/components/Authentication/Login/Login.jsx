import loginImg from "../../../assets/images/login/login.svg";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
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
                <input type="submit" value="login" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
