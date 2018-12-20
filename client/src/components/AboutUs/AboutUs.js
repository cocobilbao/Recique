import Chart from "../Chart/Chart";
import React, { Component } from "react";
import "./AboutUs.scss";
import data from "./Materiales.json";


export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      materia: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="chartContainer">
          <Chart title="Desperdicios vs Reciclado (tons)" />
          <p>
            Los municipios españoles siguen generando muchos residuos. Así lo
            manifiesta la Comisión Europea en su última revisión de la
            aplicación de las Normas de gestión de residuos y reciclado en
            Europa. Uno de los objetivos que establece este paquete de normas es
            que los municipios de los Estados miembros reciclen el 50% de sus
            residuos antes de 2020, el 55% antes de 2025, el 60% antes de 2030 y
            el 65% antes de 2035.
          </p>
          <p>
            Reciclar es una de las cosas más solidarias y útiles que podemos
            hacer como ciudadanos y vecinos para cuidar el medioambiente. La
            ciudad de Madrid cuenta con un muy buen sistema de recolección para
            reciclado, que permite de una forma bastante accesible y cómoda
            poder tener el hábito del reciclaje.
          </p>
        </div>

        <div className="searchContainer">
          <div className="busqueda">
            <h3>Buscador de contenedor:</h3>
            <input
              className="formInput"
              type="text"
              name="materia"
              placeholder="¿Qué quieres reciclar?"
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <label className="formLabel">¿Qué quieres reciclar?</label>
          </div>
          <div className="resultado">
          <hr></hr>
            <h3>Pertenece a:</h3>
            {this.state.data.map(item => {
              let aux = Object.values(item)[0].map(item2 => {
                return item2.includes(this.state.materia);
              });
              if (aux.includes(true)) {
                return <p>{Object.keys(item)}</p>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
