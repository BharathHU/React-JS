import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">React Code Splitting</div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;