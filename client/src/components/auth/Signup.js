import React, { Component } from "react";
import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";
import "./Signup.scss";

import "react-bootstrap";

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      photo: "",
      redirect: false
    };

    this.authService = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const { username, password, photo } = this.state;

    this.authService.signup({ username, password, photo }).then(user => {
      this.props.getUser(user);
      this.setState({ username: "", password: "", photo: "", redirect: true });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    if (name == "photo") {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function() {
        let preview = document.getElementById("preview"),
          image = document.createElement("img");

        image.src = reader.result;

        preview.innerHTML = "";
        preview.append(image);
      };
      this.setState({ ...this.state, photo: e.target.files[0] });
    } else {
      this.setState({ ...this.state, [name]: value });
    }
  };

  previsualize = e => {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();

    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function() {
      let preview = document.getElementById("preview"),
        image = document.createElement("img");

      image.src = reader.result;

      preview.innerHTML = "";
      preview.append(image);
    };
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup">
        <div className="signup-form">
          <h2>Registro</h2>
          <form onSubmit={this.handleFormSubmit}>
            <label>Usuario</label>
            <input
              type="text"
              name="username"
              onChange={e => this.handleChange(e)}
            />

            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <div class="upload-btn-wrapper">
              <button class="btn">Subir foto de perfil</button>

              <input
                type="file"
                name="photo"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div id="preview" />
            <input class="btn" type="submit" value="Registro" />
          </form>
        </div>
      </div>
    );
  }
}
