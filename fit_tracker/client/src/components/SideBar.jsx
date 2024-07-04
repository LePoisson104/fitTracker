import { useState } from "react";
import Hamburger from "./Hamburger";
import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const handleHamburger = (status) => {
    setOpen(status);
  };

  const handleSelected = (type) => {
    setSelected(type);
  };

  return (
    <div className={`sidebar ${open ? "active" : null}`}>
      <div className="top">
        <div className="logo">
          <h1 className="black-style">
            Fit<span className="green-style">Tracker</span>
          </h1>
        </div>
        <Hamburger onClick={() => handleHamburger(!open)} />
      </div>
      <div className="sidebar-content">
        <Link
          to="/"
          className={`sidebar-btn ${
            selected === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleSelected("Dashboard")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="15px"
            >
              <path
                fill="currentColor"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            <span className="nav-item">Dashboard</span>
            <span className="tooltip">Dashboard</span>
          </div>
        </Link>
        <Link
          to="diary"
          className={`sidebar-btn ${selected === "Diary" ? "selected" : ""}`}
          onClick={() => handleSelected("Diary")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
            <span className="nav-item">Diary</span>
            <span className="tooltip">Diary</span>
          </div>
        </Link>
        <Link
          to="foods"
          className={`sidebar-btn ${selected === "Foods" ? "selected" : ""}`}
          onClick={() => handleSelected("Foods")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"
              />
            </svg>
            <span className="nav-item">Foods</span>
            <span className="tooltip">Foods</span>
          </div>
        </Link>
        <Link
          to="trends"
          className={`sidebar-btn ${selected === "Trends" ? "selected" : ""}`}
          onClick={() => handleSelected("Trends")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
              />
            </svg>
            <span className="nav-item">Trends</span>
            <span className="tooltip">Trends</span>
          </div>
        </Link>
        <Link
          to="calculator"
          className={`sidebar-btn ${
            selected === "Calculator" ? "selected" : ""
          }`}
          onClick={() => handleSelected("Calculator")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
              />
            </svg>
            <span className="nav-item">Calculator</span>
            <span className="tooltip">Calculator</span>
          </div>
        </Link>
        <Link
          to="profile"
          className={`sidebar-btn ${selected === "Profile" ? "selected" : ""}`}
          onClick={() => handleSelected("Profile")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <span className="nav-item">Profile</span>
            <span className="tooltip">Profile</span>
          </div>
        </Link>
        <button type="button" className="sidebar-btn">
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            <span className="nav-item">Logout</span>
            <span className="tooltip">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
