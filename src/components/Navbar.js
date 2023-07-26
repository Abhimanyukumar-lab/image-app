import React, { Component } from 'react'
import "./Navbar.css" 
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">
     EINSTEIN IMAGE GALLERY
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
           Gallery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Contact Us
          </a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

      </div>
    )
  }
}
