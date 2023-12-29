import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
// import AuthNavbar from "../../components/Shared/AuthNavbar/AuthNavbar";

const Authentication = () => {
  return (
    <>
      {/* <AuthNavbar /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Authentication;
