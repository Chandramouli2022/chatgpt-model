import React from "react";
import "../styles/Style.css";

// Import .png icons
import SidebarIcon from "../assets/sidebar.png";
import EditIcon from "../assets/edit.png";
import SearchIcon from "../assets/search.png";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='sidebar-nav'>
        <div className='icons-left'>
          <button className='icon-button'>
            <img src={SidebarIcon} alt='Sidebar' className='icon' />
          </button>
        </div>

        <div className='icons-right'>
          <button className='icon-button'>
            <img src={EditIcon} alt='Edit' className='icon' />
          </button>
          <button className='icon-button'>
            <img src={SearchIcon} alt='Search' className='icon' />
          </button>
        </div>
      </div>
      <div className='title-bar'>
          <div className='top-title'>ChatGPT</div>
          <div className='top-temp'>
            <span className='button-like'>Temporary</span>
            <span className='button-like user'>P</span>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
