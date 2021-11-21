import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SupportIcon from "@mui/icons-material/Support";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "../components/Leftsidebar.css";

function Leftsidebar() {
  return (
    <div className="side-bar">
      <div className="icon icon1">
        <DashboardIcon />
      </div>
      <div className="icon con2">
        <GroupWorkIcon />
      </div>
      <div className="icon icon3">
        <SupervisedUserCircleRoundedIcon />
      </div>
      <div className="icon icon4">
        <MailRoundedIcon />
      </div>
      <div className="icon icon5">
        <AccountBoxRoundedIcon />
      </div>
      <div className="icon icon6">
        <SupportIcon />
      </div>
      <div className="icon icon7">
        <SmsFailedIcon />
      </div>
      <div className="icon icon8">
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default Leftsidebar;
