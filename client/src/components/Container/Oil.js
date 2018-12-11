import React, { Component } from "react";
import oilData from "../../ropa.json";

export default class Oil extends Component {
  constructor() {
    super();

    this.state = {
      oil: []
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, oil: oilData });
  }

  render() {
    return (
      <div>
       
  
      </div>
    );
  }
}
