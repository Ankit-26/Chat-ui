import React from "react";
import "../components/ChatScreen.css";
import { chatMessage } from "../db";
import Message from "./Message";
import { v4 as uuidv4 } from "uuid";
import InputBox from "../components/InputBox";

function ChatScreen() {
  const chatText = chatMessage.chats;
  console.log(chatText);

  return (
    <div className="chat-screen">
      {chatText.map((chatline) => {
        return <Message chatline={chatline} key={uuidv4()} />;
      })}
      <InputBox />
    </div>
  );
}

export default ChatScreen;
