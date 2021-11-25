import React, { useState } from "react";
import data from "../db";
import "../components/ChatList.css";
import Chat from "./Chat";
import { useEffect } from "react";

function ChatList(props) {
  const allchats = data.conversations;
  const [shadowval, setShadowVal] = useState(null);

  useEffect(() => {
    if (shadowval != null) {
      props.setChatID(shadowval);
    }
  }, [shadowval]);

  return (
    <div className="chat-List">
      {allchats.map((chat) => {
        if (chat.id === shadowval) {
          //console.log(chat.id);
          const val = 5;
          return (
            <Chat
              chat={chat}
              key={chat.id}
              setShadowVal={setShadowVal}
              val={val}
            />
          );
        } else {
          const val = 0;
          return (
            <Chat
              chat={chat}
              key={chat.id}
              setShadowVal={setShadowVal}
              val={val}
            />
          );
        }
      })}
    </div>
  );
}

export default ChatList;
