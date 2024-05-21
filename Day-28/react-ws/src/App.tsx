import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage,setLatestMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('Connected')
       setSocket(socket);
    }

    socket.onmessage = (message) => {
      console.log('Received Message', message.data)
      setLatestMessage(message.data);
    }
  },[])

  if(!socket){
    return <div>
     Connecting to Socket Server
    </div>
  }

  return (
    <>
    <input></input>
    <button onClick={() => {
      socket.send("Hello World")
    }}>Send</button>
     {latestMessage} 
    </>
  )
}

export default App
