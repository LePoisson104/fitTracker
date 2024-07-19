import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import UpdateEmail from "../components/modals/UpdateEmail";
import UpdatePassword from "../components/modals/UpdatePassword";

const Layout = () => {
  return (
    <>
      {/* <UpdatePassword status="active" /> */}
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
