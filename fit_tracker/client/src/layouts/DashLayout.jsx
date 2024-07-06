import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import UpdateEmail from "../components/modals/UpdateEmail";
const Layout = () => {
  return (
    <>
      <UpdateEmail status="active" />
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
