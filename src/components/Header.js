import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <NavLink 
          exact="true" 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        > Startseite
        </NavLink>
        <NavLink 
          to="/dokumentation" 
          className={({ isActive }) => (isActive ? "active" : "")}
        > Dokumentation
        </NavLink>
        <NavLink 
          to="/impressum" 
          className={({ isActive }) => (isActive ? "active" : "")}
        > Impressum
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
