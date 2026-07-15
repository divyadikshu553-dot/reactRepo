import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg myNavbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i class="fa-solid fa-star"></i>  Your Name
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nav1 ms-auto gap-3" >
              <li className="nav-item">
                <Link className="nav-link homeText navtext" to="/">
                  Home
                </Link>
              </li>

              <Link  className="navtext" to="/Projects">Projects</Link>

              <Link  className="navtext" to="/Posts">Posts</Link>

              <Link  className="navtext" to="/About">About</Link>
            </ul>
          </div>
        </div>
        <button  className="bt">☀Day Mode</button>
       
      </nav>
    </div>
  );
};

export default Navbar;
