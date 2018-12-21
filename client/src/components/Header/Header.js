import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import AuthService from "../../components/auth/AuthService";

import "react-bootstrap";
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

    // const navBar = this.props.user ? (
    //   <div>
    //     <Link class="menu-item" to="/">
    //       Home
    //     </Link>{" "}
    //     {" "}
    //     <Link class="menu-item" to="/login" onClick={this.props.logout}>
    //       Logout
    //     </Link>
    //   </div>
    // ) : (

    const navBar = (
      <div>
        <Link to="/">
          <div class="menu-item" onClick={toggleSelect}>
            Mapa
          </div>
        </Link>
        <Link to="/news">
          <div class="menu-item" onClick={toggleSelect}>
            Noticias
          </div>
        </Link>{" "}
        <Link to="/about">
          <div class="menu-item" onClick={toggleSelect}>
           Buscador
          </div>
        </Link>
      </div>
    );

    const buttons = this.props.user ?(
      <div>
            <Link to="/login">
      <div className= "news-button" onClick={this.props.logout}>
        <label>
          <input
          />
          <span>Cerrar sesión</span>
        </label>
      </div>
    </Link>  
      </div>
      ) : (
      <div>
    <Link to="/login">
      <div className= "news-button">
        <label>
          <input
          />
          <span>Inicio sesión</span>
        </label>
      </div>
    </Link>
    <Link to="/signup">
      <div className= "news-button">
        <label>
          <input
          />
          <span>Registro</span>
        </label>
      </div>
    </Link>
    </div>
    )

    return (
      <div id="Header">
        <div class="brand">
          <img src="https://res.cloudinary.com/rcwebdev/image/upload/v1544785905/react/logoPuntoVerdeEdited.svg" alt="Reciqué logo"/>
          <img className="recique" src="https://res.cloudinary.com/rcwebdev/image/upload/v1545315156/Simplecode/logo.png" alt="Reciqué logo"/>
          <div className="buttons">
        {buttons}
        </div>
        </div>
        <nav class="menu">{navBar}</nav>
      </div>
    );
  }
}
