import React, { useState } from 'react'

const Chat = ({socket, username, room}) => {
  const [currentMessage, setCurrentMessage] = useState("")

  const sendMessage = async () => {
    const messageData = {
      room:room,
      author:username,
      message: currentMessage,
      time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
    }

    await socket.emit("send_message", messageData)
  }
  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">

      </div>
      <div className="chat-footer">
        <input type="text" placeholder='Write Here . . .' onChange={(e)=>setCurrentMessage(e.target.value)}/>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat