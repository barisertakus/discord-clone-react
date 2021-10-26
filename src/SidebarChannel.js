import React from "react";
import "./SidebarChannel.css"

function SidebarChannel({ id, channel }) {
  console.log(channel)
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>{channel}
      </h4>
    </div>
  );
}

export default SidebarChannel;
