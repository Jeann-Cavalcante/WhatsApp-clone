import React, { useState } from "react";
import EmojiPickerer from "emoji-picker-react";
import "./ChatWindow.css";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export default () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");

  const hendleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
    console.log(text);
  };

  const hendleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const hendleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatWindow--name">Jean cavalcante</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow--btn">
            <MoreVertSharpIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPickerer
          onEmojiClick={hendleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={hendleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>

          <div
            className="chatWindow--btn"
            onClick={hendleCloseEmoji}
            style={{ width: emojiOpen ? 0 : 40 }}
          >
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow--btn" onClick={hendleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
