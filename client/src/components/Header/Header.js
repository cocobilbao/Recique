import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import AuthService from "../../components/auth/AuthService";

import "./Header.scss";

export default class Header extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
  }

  render() {
    const items = document.querySelectorAll(".menu-item");

    function toggleSelect(e) {
      items.forEach(item => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        }
      });
      e.target.classList.add("selected");
    }

    const navBar = this.props.user ? (
      <div>
        <Link class="menu-item" to="/">
          Home
        </Link>{" "}
        -{" "}
        <Link class="menu-item" to="/login" onClick={this.props.logout}>
          Logout
        </Link>
      </div>
    ) : (
      <div>
        <Link to="/">
          <div class="menu-item" onClick={toggleSelect}>
            Home
          </div>
        </Link>
        <Link to="/signup">
          <div class="menu-item" onClick={toggleSelect}>
            Signup
          </div>
        </Link>{" "}
        <Link to="/login">
          <div class="menu-item" onClick={toggleSelect}>
            Login
          </div>
        </Link>
      </div>
    );

    return (
      <div id="Header">
        <div class="brand">
          <img src="https://res.cloudinary.com/rcwebdev/image/upload/v1544785905/react/logoPuntoVerdeEdited.svg" alt="Recique logo"/>
          <h1>Recique</h1>
        </div>
        <nav class="menu">{navBar}</nav>
      </div>
    );
  }
}
