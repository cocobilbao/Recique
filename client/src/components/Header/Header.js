import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import AuthService from "../../components/auth/AuthService";

import "./Header.scss"

export default class Header extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
  }

  render() {
    const navBar = this.props.user ? (
      <div>
        <Link class="nav-item" to="/">Home</Link> -{" "}
        <Link class="nav-item" to="/login" onClick={this.props.logout}>
          Logout
        </Link>
      </div>
    ) : (
      <div>
         <Link  to="/"><div class="menu-item">Home</div></Link>
        <Link  to="/signup"><div class="menu-item">Signup</div></Link>{" "}
        <Link  to="/login"><div class="menu-item">Login</div></Link>
      </div>
    );

    return (
      <div id="Header">
        <nav class="menu">{navBar}</nav>
      </div>
    );
  }
}
