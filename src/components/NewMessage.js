import React from "react";
import "../components/NewMessage.css";

function NewMessage(props) {
  const { text } = props;
  console.log(text);

  const dateTime = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    var time = today.toString().split(" ").slice(4, 5).join("");
    time = time.slice(0, time.lastIndexOf(":"));
    today = dd + "/" + mm + "/" + yyyy + " " + time;
    return today;
  };

  return (
    <div className="message-container">
      <div className="message-box" style={{ marginLeft: `44vw` }}>
        <div className="text">{text}</div>
        <div className="date-time">{dateTime()}</div>
      </div>
    </div>
  );
}

export default NewMessage;
