import React from "react";
import Chat from "./components/Chat";
//import sidebar component
import Sidebar from "./components/Sidebar";
//import css file
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
