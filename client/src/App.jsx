import "./App.css";

import React from "react";
import Chat from "./components/Chat.jsx";
//import sidebar component
import Sidebar from "./components/Sidebar.jsx";
//import css file

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <Chat />
    </div>
  );
}
// reportWebVitals();
export default App;
