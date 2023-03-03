import './App.css';
import io from 'socket.io-client'
import { useState } from 'react';

const socket = io.connect("http://localhost:4000")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if(username!=="" && room!==""){
      
    }
  }
  return (
    <div className="App">
      <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App;
