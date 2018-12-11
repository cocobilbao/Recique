import React, { Component } from "react";
import ropaData from "../../ropa.json";

export default class Clothes extends Component {
  constructor() {
    super();

    this.state = {
      ropa: []
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, ropa: ropaData });
  }

  render() {
    return (
      <div>
       
  
      </div>
    );
  }
}
