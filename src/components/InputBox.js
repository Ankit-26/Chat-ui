import React, { useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import "../components/InputBox.css";

function InputBox() {
  const [input, setInput] = useState("");

  const inputHandler = (ev) => {
    setInput(ev.target.value);
  };

  console.log(input);

  return (
    <div className="input-box">
      <AttachmentIcon />
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          placeholder="Enter your message here"
          value={input}
          onChange={inputHandler}
        ></input>
      </div>
      <MicIcon />
      <div style={{ color: "#d4d0d0", paddingRight: "5px" }}>|</div>
      {input ? (
        <SendIcon style={{ color: "rgb(25, 118, 210)" }} />
      ) : (
        <SendIcon />
      )}
    </div>
  );
}

export default InputBox;
