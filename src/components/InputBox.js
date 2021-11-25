import React, { useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import "../components/InputBox.css";
import { Button } from "@mui/material";

function InputBox(props) {
  const [input, setInput] = useState("");

  const inputHandler = (ev) => {
    setInput(ev.target.value);
  };

  //console.log(input);

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
      <div style={{ color: "#d4d0d0", paddingRight: "2px" }}>|</div>
      <Button
        type="submit"
        onClick={() => {
          props.sendMessage(input);
          setInput("");
        }}
      >
        {input ? (
          <SendIcon
            style={{ color: "rgb(25, 118, 210)" }}
            className="send-icon"
          />
        ) : (
          <SendIcon className="send-icon" />
        )}
      </Button>
    </div>
  );
}

export default InputBox;
