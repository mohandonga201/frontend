import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import MessageInput from './components/MessageInput';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages from the backend
  useEffect(() => {
    fetch('http://localhost:3001/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  const sendMessage = (message) => {
    fetch('http://localhost:3001/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
      .then(() => setMessages([...messages, { message }]))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Chat messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default App;

