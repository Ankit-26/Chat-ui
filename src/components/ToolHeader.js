import React from "react";
import Selector from "./Selector";
import "../components/Toolheader.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function ToolHeader() {
  return (
    <div className="tool-header">
      <div className="upper-sec">
        <Selector selectType="Query type" />
        <Selector selectType="Module" />
        <Selector selectType="Sub Module" />
        <Selector selectType="Chapter" />
      </div>
      <div className="lower-sec">
        <div className="cancel">CANCEL</div>
        <div className="apply-button">
          <SendRoundedIcon />

          <div className="apply-text">APPLY</div>
        </div>
      </div>
    </div>
  );
}

export default ToolHeader;
