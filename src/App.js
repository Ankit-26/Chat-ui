import "./App.css";
import Navbar from "./components/Navbar";
import Leftsidebar from "./components/Leftsidebar";
import ToolHeader from "./components/ToolHeader";
import ChatList from "./components/ChatList";
import ChatScreen from "./components/ChatScreen";
//import chatMessage from "./components/Chat";
//import data from "./db";
import { useState } from "react";

function App() {
  const [chatID, setChatID] = useState(null);

  //console.log(chatID);
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Leftsidebar />
        <div className="body-right">
          <ToolHeader />
          <div className="body-RightBottomSection">
            <ChatList setChatID={setChatID} />
            <ChatScreen chatID={chatID} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
