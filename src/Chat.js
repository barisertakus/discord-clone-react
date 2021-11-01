import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Chat.css"
import ChatHeader from "./ChatHeader"
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'

function Chat() {

  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input 
            className="messageInput"
            disabled={!channelId}
            placeholder={`Message #TESTCHANNEL`} 
            value={message} onChange={handleChange} 
          />
          <button className="chat__inputButton" type="submit">Send Message</button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat
