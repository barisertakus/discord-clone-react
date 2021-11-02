import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css";

function Message({ user, content, timestamp }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">{timestamp ? new Date(timestamp?.toDate()).toUTCString() : "Loading"}</span>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Message;
