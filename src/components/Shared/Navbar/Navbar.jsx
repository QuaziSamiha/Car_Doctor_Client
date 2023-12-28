import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { BsHandbag } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 my-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn lg:hidden">
              {isOpen ? (
                <RxCross2 onClick={() => setIsOpen(false)} />
              ) : (
                <FaBars onClick={() => setIsOpen(true)} />
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#444444] font-semibold text-lg"
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
          <button className="btn btn-outline font-semibold text-lg border-[#FF3811] text-[#FF3811] hover:bg-white hover:text-[#FF3811] hover:border-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
