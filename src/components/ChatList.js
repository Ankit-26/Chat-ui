import React, { useState } from "react";
import data from "../db";
import "../components/ChatList.css";
import Chat from "./Chat";

function ChatList() {
  const [allchats, setAllChats] = useState(data.conversations);

  const [chatCss, setChatCss] = [null];

  const chatcssHandler = (val) => {
    setChatCss(val);
  };

  return (
    <div className="chat-List">
      {allchats.map((chat) => (
        <Chat chat={chat} key={chat.id} chatcssHandler={chatcssHandler} />
      ))}
    </div>
  );
}

export default ChatList;
