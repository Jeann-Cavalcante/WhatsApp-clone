import React, { useState } from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./NewChat.css";

export default ({ user, chatList, chatShow, show, setShow }) => {
  const [list, useList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jean cavalcante",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jean cavalcante",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jean cavalcante",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jean cavalcante",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newChat" style={{ left: show ? "0" : "-415px" }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat--headtitle">Nova conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
