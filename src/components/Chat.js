//import React, { useState } from "react";
import "../components/Chat.css";

function Chat(props) {
  const { firstName, profilePic } = props.chat.user;
  const { message } = props.chat.chats[0];
  const { updatedAt, id } = props.chat;

  //console.log(props.chat.id);

  const dateTime = () => {
    var today = new Date(updatedAt);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    var time = today.toString().split(" ").slice(4, 5).join("");
    time = time.slice(0, time.lastIndexOf(":"));
    today = dd + "/" + mm + "/" + yyyy + " " + time;
    return today;
  };

  //console.log(dateTime());

  return (
    <div
      className="chat"
      style={{ boxShadow: `0px 2px 4px ${props.val}px rgb(46 46 46)` }}
      onClick={() => props.setShadowVal(id)}
    >
      <img src={profilePic} className="profile-pic" alt="user" />
      <div className="chat-data">
        <div className="data" style={{ fontSize: "0.85em" }}>
          {firstName}
        </div>
        <div className="data">{message}</div>
        <div className="data" style={{ fontSize: "0.7em" }}>
          {dateTime()}
        </div>
      </div>
    </div>
  );
}

export default Chat;
