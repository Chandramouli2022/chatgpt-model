import React, { useState } from "react";
import "./Style.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = { text: "Hello! How can I help you?", sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);
  };

  return (
    <div className='chat-container'>
      <div className='chat-box-container'>
        <div className='title-bar'>
          <div className='top-title'>ChatGPT</div>
          <div className='top-temp'>
            <span className='chat-type'>Temporary</span>
            <span className='chat-type user'>P</span>
          </div>
        </div>
        <div className='chat-box'>
          <div className=''>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className='input-box'>
          <textarea
            className='input-message'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto"; // Reset height
              e.target.style.height = Math.min(e.target.scrollHeight,200) + "px"; // Adjust height dynamically
            }}
            placeholder='Ask anything...'
            rows='1'
            style={{ resize: "none" }} // Prevent manual resizing
          ></textarea>

          <div className='input-buttons'>
            <button className='button model'>model</button>
            <button className='button send' onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
