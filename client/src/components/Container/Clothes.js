import React, { Component } from "react";
import ropaData from "../../ropa.json";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export default class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ropaData,

      isMarkerShown: false,
      isSearchingClothes: false
    };
  }

  showRopa = () => {
    if (this.state.isSearchingClothes) {
      this.setState({ ...this.state, isSearchingClothes: false });
    } else {
      this.setState({ ...this.state, isSearchingClothes: true });
    }
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.showRopa} />
        {this.state.isSearchingClothes &&
          this.state.ropaData.map(ropa => {
            console.log(this.state.ropaData);
            const pos = {
              lat: ropa.LATITUD,
              lng: ropa.LONGITUD
            };

            return <Marker position={pos} />;
          })}
      </div>
    );
  }
}
