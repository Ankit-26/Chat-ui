import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-barLeft">
        <div className="menu-icon">
          <MenuIcon />
        </div>
        <div className="XBSL">XBSL</div>
      </div>
      <div className="nav-barRight">
        <div className="notification">
          <div className="notification-icon">
            <NotificationsIcon />
          </div>
          <div className="notfication-count">1</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
