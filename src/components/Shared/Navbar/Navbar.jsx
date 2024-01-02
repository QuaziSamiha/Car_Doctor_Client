import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { BsHandbag } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);

  const handleUserLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      {/* <li>
        <Link>Services</Link>
      </li> */}
      <li>
        <Link>Blog</Link>
      </li>
      {/* <li>
        <Link>contact</Link>
      </li> */}
      {/* {user?.email ? (
        <li>
          <button onClick={handleUserLogOut}>Log Out</button>
        </li>
      ) : (
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      )} */}
      {user?.email ? (
        <div className="flex">
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button onClick={handleUserLogOut}>Log Out</button>
          </li>
        </div>
      ) : (
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 mt-2 mb-1 h-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="m-4 lg:hidden">
              {isOpen ? (
                <RxCross2 onClick={() => setIsOpen(false)} />
              ) : (
                <FaBars onClick={() => setIsOpen(true)} />
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 text-[#444444] font-semibold text-lg ${
                isOpen ? "-translate-x-2" : "-translate-x-56"
              }`}
            >
              {navItems}
            </ul>
          </div>
          <div>
            <img className="w-[107px] h-[86.78px]" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-[#444444] font-semibold text-lg">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="w-[68px] flex text-[#444444]">
            <BsHandbag className="h-6 ml-2 mr-1" />
            <RxMagnifyingGlass className="h-6 ml-1 mr-2" />
          </div>
          <Link to="/auth/login">
            <button className="btn btn-outline font-semibold text-lg border-[#FF3811] text-[#FF3811] hover:bg-white hover:text-[#FF3811] hover:border-[#FF3811]">
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
