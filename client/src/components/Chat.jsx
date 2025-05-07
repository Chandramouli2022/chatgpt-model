import React, { useState, useRef, useEffect } from "react";
import "../styles/Style.css";
import SidebarIcon from "../assets/sidebar.png";
import { useSidebar } from "../context/SidebarContext";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "What is the MERN stack?" },
    {
      sender: "ai",
      text: "MERN stands for MongoDB, Express.js, React.js, and Node.js. It's a popular stack for building full-stack web applications using JavaScript.",
    },
    { sender: "user", text: "Why is it so commonly used?" },
    {
      sender: "ai",
      text: "Because it's JavaScript end-to-end—from client to server to database. This simplifies development and allows reuse of code between frontend and backend.",
    },
    {
      sender: "user",
      text: "How does the frontend communicate with the backend?",
    },
    {
      sender: "ai",
      text: "React (frontend) communicates with Express (backend) using HTTP requests—usually via REST APIs or GraphQL.",
    },
    { sender: "user", text: "And what role does MongoDB play?" },
    {
      sender: "ai",
      text: "MongoDB is the database. It stores your application's data in flexible, JSON-like documents, which pairs well with the JavaScript-centric stack.",
    },
    { sender: "user", text: "How can I deploy a MERN app?" },
    {
      sender: "ai",
      text: "You can use platforms like Render, Vercel, or Heroku. Typically, you'll host the backend and frontend separately or as a combined build, and use MongoDB Atlas for your database.",
    },
  ]);

  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const chatEndRef = useRef(null);
  const { collapsed, toggleSidebar } = useSidebar();

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
    <div className={`chat-container ${collapsed ? "collapsed" : ""}`}>
      <div className='chat-box-container'>
        <div className='title-bar'>
          <div className='top-title'>
            <button
              className={`icon-button ${collapsed ? "visible" : "invisible"}`}
              onClick={toggleSidebar}
            >
              <img src={SidebarIcon} alt='Sidebar' className='icon' />
            </button>
            ChatGPT
          </div>
          <div className='top-temp'>
            <span className='button-like'>Temporary</span>
            <span className='button-like user'>P</span>
          </div>
        </div>
        <div className={`chat-box ${collapsed ? "collapsed" : ""}`}>
          <div className={`chat-messages ${collapsed ? "collapsed" : ""}`}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
        <div className={`input-box ${collapsed ? "collapsed" : ""}`}>
          <div className={`input-box-aligning ${collapsed ? "collapsed" : ""}`}>
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
              <button className='button-like model'>model</button>
              <button className='button send' onClick={handleSend}>
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
