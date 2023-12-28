import logo from "../../../assets/logo.svg";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#151515] text-white mt-48">
        <aside>
          <img src={logo} className="w-[79px] h-[64.09px]" alt="" />
          <p className="w-[283px] text-base leading-[26px] font-normal">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex">
            <div className="bg-[#2c2c2c] mr-2 w-9 h-9 rounded-full flex justify-center items-center">
              <FaGoogle className="text-[13.85px]" />
            </div>
            <div className="bg-[#2c2c2c] mr-2 w-9 h-9 rounded-full flex justify-center items-center">
              <IoLogoTwitter className="text-[13.85px]" />
            </div>
            <div className="bg-[#2c2c2c] mr-2 w-9 h-9 rounded-full flex justify-center items-center">
              <IoLogoInstagram className="text-[13.85px]" />
            </div>
            <div className="bg-[#2c2c2c] mr-2 w-9 h-9 rounded-full flex justify-center items-center">
              <FaLinkedin className="text-[13.85px]" />
            </div>
          </div>
        </aside>
        <nav>
          <header className="mb-3 font-semibold text-xl">Services</header>
          <a className="link link-hover text-base">Branding</a>
          <a className="link link-hover text-base">Design</a>
          <a className="link link-hover text-base">Marketing</a>
          <a className="link link-hover text-base">Advertisement</a>
        </nav>
        <nav>
          <header className="mb-3 font-semibold text-xl">Company</header>
          <a className="link link-hover text-base">About us</a>
          <a className="link link-hover text-base">Contact</a>
          <a className="link link-hover text-base">Jobs</a>
          <a className="link link-hover text-base">Press kit</a>
        </nav>
        <nav>
          <header className="mb-3 font-semibold text-xl">Legal</header>
          <a className="link link-hover text-base">Terms of use</a>
          <a className="link link-hover text-base">Privacy policy</a>
          <a className="link link-hover text-base">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
