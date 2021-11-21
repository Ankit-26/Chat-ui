import "./App.css";
import Navbar from "./components/Navbar";
import Leftsidebar from "./components/Leftsidebar";
import ToolHeader from "./components/ToolHeader";
import ChatList from "./components/ChatList";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Leftsidebar />
        <div className="body-right">
          <ToolHeader />
          <div className="body-RightBottomSection">
            <ChatList />
            <ChatScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
