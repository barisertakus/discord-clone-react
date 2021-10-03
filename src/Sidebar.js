import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
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
      </div>
    </div>
  )
}

export default Sidebar
