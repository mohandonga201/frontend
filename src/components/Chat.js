import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default Chat;

