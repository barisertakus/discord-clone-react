import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Baris's Channel</h3>
        <ExpandMoreIcon />
      </div>

      <div class="sidebar__channels">
        <div class="sidebar__channelsHeader">
          <div class="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="channels__list">
          <SidebarChannel channel="channel1" />
          <SidebarChannel channel="channel2" />
          <SidebarChannel channel="channel3" />
          <SidebarChannel channel="channel4" />
          <SidebarChannel channel="channel5" />
          <SidebarChannel channel="channel6"/>
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
