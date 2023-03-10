import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./component/home";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import logo from "./component/logo.webp";
import user from "./component/user.webp";
import LogoutButton from "./component/Logout";
import { RiUserSettingsLine } from "react-icons/ri";
// import { SidebarData } from "./component/Sidebar";

const App = () => {
  const [currentdate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //update current date
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <ul className="navbar-nav">
        <div className="navbar-logo">
          <img src={logo} alt="MyLogo" />
        </div>

        
          <li className="nav-item1">
            <Link className="nav-link" to="Login">
              Login
            </Link>
          </li>

        <li className="nav-item2">
          <div className="current-date">{currentdate}</div>
        </li>
        </ul>

        <ul className="nav-bar ms=auto mb-2 mb-lg-0 ">
          <li className="nav-item3">
            <button className="nav-item3" onClick={handleDropdownToggle}>
              <RiUserSettingsLine />
              Welcome User
            </button>
            {isDropdownOpen && (
              <ul className="nav-item4">
                <LogoutButton />
              </ul>
            )}
          </li>
        </ul>
        <div className="navbar-logo">
          <img src={user} alt="Logo" />
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/logoutbutton" element={<LogoutButton />} />
        </Routes>
      </div>
    </div>
    </header>
  );
};

export default App;
