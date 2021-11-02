import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css"
import ChatHeader from "./ChatHeader"
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import db from "./firebase"
import { firebase } from "./firebase"

function Chat() {

  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEnd = useRef();

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  // const scrollToBottomSmooth = () => {
  //   messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  // }

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView();
  }

  const sendMessage = (e) => {
    e.preventDefault()
    
    db.collection("channels").doc(channelId).collection("messages")
    .add({
      message: message,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setMessage("");
  }

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  useEffect(()=>{
    scrollToBottom();
  },[messages])

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <>
            <Message
              content={message.message}
              user={message.user}
              timestamp={message.timestamp}
            />
            <div ref={messagesEnd} ></div>
          </>
        ))}
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            className="messageInput"
            disabled={!channelId}
            placeholder={`Message ${channelName ? "#" + channelName : ""}`}
            value={message}
            onChange={handleChange}
          />
          <button
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat
