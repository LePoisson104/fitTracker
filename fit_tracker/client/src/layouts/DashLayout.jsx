import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
