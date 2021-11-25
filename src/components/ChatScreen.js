import React from "react";
import "../components/ChatScreen.css";
import { chatMessage } from "../db";
import Message from "./Message";
import { v4 as uuidv4 } from "uuid";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { useEffect } from "react";
import NewMessage from "./NewMessage";

function ChatScreen(props) {
  const [chatText, setchatText] = useState([]);
  //console.log(props.chatID);
  const [sentText, setSentText] = useState([{ id: null, textMessage: "" }]);

  useEffect(() => {
    //let chatarr = chatMessage.chats.filter(
    //(chat) => chat.conversationId === props.chatID
    //);
    //console.log(chatarr);

    setchatText(
      chatMessage.chats.filter((chat) => chat.conversationId === props.chatID)
    );
  }, [props.chatID]);

  const sendMessage = (input) => {
    setSentText([...sentText, { id: props.chatID, textMessage: input }]);
  };

  //console.log(sentText);

  //console.log(chatText);

  return (
    <div className="chat-screen">
      {props.chatID != null ? (
        <div className="all-chats">
          {chatText.map((chatline) => {
            return <Message chatline={chatline} key={uuidv4()} />;
          })}
          {sentText
            .filter((currChats) => currChats.id === props.chatID)
            .map((text) => {
              return <NewMessage text={text.textMessage} key={uuidv4()} />;
            })}
        </div>
      ) : (
        ""
      )}

      <InputBox sendMessage={sendMessage} />
    </div>
  );
}

export default ChatScreen;
