import React from "react";
import "../components/Message.css";

function Message(props) {
  const { message, createdAt } = props.chatline;
  console.log(props.chatline.userType + " " + message);

  let marginval = 0;
  if (props.chatline.userType === "admin") {
    marginval = 44;
  }

  const dateTime = () => {
    var today = new Date(createdAt);
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
      <div className="message-box" style={{ marginLeft: `${marginval}vw` }}>
        <div className="text">{message}</div>
        <div className="date-time">{dateTime()}</div>
      </div>
    </div>
  );
}

export default Message;
