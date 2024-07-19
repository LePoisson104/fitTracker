import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("selected") || "Dashboard";
  });

  const handleHamburger = (status) => {
    setOpen(status);
  };

  const handleSelected = (type) => {
    setSelected(type);
    localStorage.setItem("selected", type);
  };

  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);

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
          to="exercise"
          className={`sidebar-btn ${selected === "Exercise" ? "selected" : ""}`}
          onClick={() => handleSelected("Exercise")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
              />
            </svg>
            <span className="nav-item">Exercise</span>
            <span className="tooltip">Exercise</span>
          </div>
        </Link>
        <Link
          to="weight"
          className={`sidebar-btn ${selected === "Weight" ? "selected" : ""}`}
          onClick={() => handleSelected("Weight")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z"
              />
            </svg>
            <span className="nav-item">Weight</span>
            <span className="tooltip">Weight</span>
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
          to="settings"
          className={`sidebar-btn ${selected === "Settings" ? "selected" : ""}`}
          onClick={() => handleSelected("Settings")}
        >
          <div className="sidebar-btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16px"
            >
              <path
                fill="currentColor"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
            <span className="nav-item">Settings</span>
            <span className="tooltip">Settings</span>
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
