import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";
import "./Signup.scss"

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      photo: '',
      redirect: false
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password, photo} = this.state;

    this.authService.signup({username, password, photo})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', photo: '', redirect: true})
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    if(name == "photo") {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function(){
        let preview = document.getElementById('preview'),
            image = document.createElement('img');
    
        image.src = reader.result;
        
        preview.innerHTML = '';
        preview.append(image);
      };
      this.setState({...this.state, photo: e.target.files[0]})
    } else {
      this.setState({...this.state, [name]: value});
    }
  }

previsualize = (e) =>{
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
  
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
    
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      let preview = document.getElementById('preview'),
          image = document.createElement('img');
  
      image.src = reader.result;
      
      preview.innerHTML = '';
      preview.append(image);
    };
  
}
  
  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          <label>Photo</label>
          <input type="file" name="photo" onChange={e => this.handleChange(e)} />
          <div id="preview"></div>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}
