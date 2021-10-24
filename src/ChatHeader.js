import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@mui/icons-material'
import React from 'react'
import "./ChatHeader.css"
function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">
            #
          </span>
          Test Channel Name
        </h3>
      </div>

      <div className="chatHeader__right">
        <Notifications />
        <EditLocation />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  )
}

export default ChatHeader
