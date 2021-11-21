import React from "react";
import "../components/Selector.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function Selector(props) {
  //console.log(props);
  return (
    <div className="selector">
      <div className="selector-box">
        <span>Select</span>
        <div className="query-type">Select{" " + props.selectType}</div>
        <div className="options-icon">
          <ArrowDropDownRoundedIcon />
        </div>
      </div>

      <div
        className="box-message"
        style={{ marginLeft: "1rem", paddingTop: "4px" }}
      >
        Please select your{" " + props.selectType.toLowerCase()}
      </div>
    </div>
  );
}

export default Selector;
