import React, { useState, useRef, useEffect } from "react";
import "../styles/Style.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

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
    adjustTextareaHeight();
  };

  useEffect(() => {
    if (input === "" && textareaRef.current) {
      textareaRef.current.style.height = "24px"; // Reset to single line
    } else adjustTextareaHeight();
  }, [input]);

  const adjustTextareaHeight = () => {
    console.log("hi");
    const textarea = textareaRef.current;
    if (!textarea) return;

    const lineHeight = 24; // Approximate height per line
    const minLines = 1; // Minimum 1 line
    const maxLines = 10; // Maximum 10 lines

    textarea.style.height = "auto"; // Reset height before calculation
    const currentLines = Math.floor(textarea.scrollHeight / lineHeight);

    console.log(`Lines: ${currentLines}`);

    if (currentLines < minLines) return; // Avoid small unnecessary expansion

    if (currentLines <= maxLines) {
      textarea.style.height = `${currentLines * lineHeight}px`;
    } else {
      textarea.style.height = `${maxLines * lineHeight}px`;
      textarea.style.overflowY = "auto"; // Enables scrolling after maxLines
    }
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
            ref={textareaRef}
            className='input-message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask me anything...'
            rows={1}
            style={{
              overflow: "hidden",
              resize: "none",
              lineHeight: "24px",
            }}
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
