import React from 'react';
import './Header.css'; // CSS for styling the header
import logo from './assets/logo.png'; // Adjust the path to your logo

function Header()  {
  return (
      <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      
    </header>
  );
}

export default Header;