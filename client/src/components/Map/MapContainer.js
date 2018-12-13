import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Circle
} from "google-maps-react";
import ropaData from "../../ropa.json";
import oilData from "../../oil.json";
import batteriesData from "../../batteries.json";
import pharmacyData from "../../pharmacy.json";
import cleanPointMovData from "../../cleanPointMov.json";
import cleanPointData from "../../cleanPoint.json";
import "./MapContainer.scss";

import utmObj from "utm-latlng";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ropaData,
      oilData,
      batteriesData,
      pharmacyData,
      cleanPointMovData,
      cleanPointData,
      currentLatLng: {
        lat: 40,
        lng: 0
      },
      isMarkerShown: false,
      isSearchingClothes: false,
      isSearchingOil: false,
      isSearchingBatteries: false,
      isSearchingPharmacy: false,
      isSearchingCleanPointMov: false,
      isSearchingCleanPoint: false
    };
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          ...this.state,
          currentLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    }
  };

  show = field => {
    let newClonedState = { ...this.state };
    if (this.state[field]) {
      newClonedState[field] = false;
      this.setState(newClonedState);
    } else {
      newClonedState[field] = true;
      this.setState(newClonedState);
    }
  };
  nearMe = pos => {
    const objPos = new this.props.google.maps.LatLng(pos.lat, pos.lng);
    const myPos = new this.props.google.maps.LatLng(
      this.state.currentLatLng.lat,
      this.state.currentLatLng.lng
    );
    if (
      this.props.google.maps.geometry.spherical.computeDistanceBetween(
        objPos,
        myPos
      ) <= 1000
    ) {
      return true;
    }
    return false;
  };

  componentDidMount() {
    this.showCurrentLocation();
  }
  render() {
    const style = {
      width: "100%",
      height: "100%",
    };
    let utm = new utmObj("ETRS89");
    utm.setEllipsoid("ETRS89");
    return (
      <div id="mapAndFilters">
        <div id="filters">
          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingClothes")}
              />{" "}
              <span>Ropa</span>{" "}
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingOil")}
              />{" "}
              <span>Aceite vegetal</span>{" "}
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingBatteries")}
              />{" "}
              <span>Pilas</span>{" "}
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("showCleanPointMov")}
              />{" "}
              <span>Punto limpio movil</span>{" "}
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("showCleanPoint")}
              />{" "}
              <span>Punto limpio</span>{" "}
            </label>
          </div>
        </div>
        <div id="map">
          <Map
            className="Map"
            google={this.props.google}

            center={this.state.currentLatLng}
            zoom={15}
            onClick={this.onMapClicked}
          >
            {this.state.isSearchingClothes &&
              this.state.ropaData.map(ropa => {
                const pos = {
                  lat: ropa.LATITUD,
                  lng: ropa.LONGITUD
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            {this.state.isSearchingOil &&
              this.state.oilData.map(oil => {
                const pos = {
                  lat: oil.LATITUD,
                  lng: oil.LONGITUD
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            {this.state.isSearchingBatteries &&
              this.state.batteriesData.map(batteries => {
                const pos = {
                  lat: batteries.Latitud,
                  lng: batteries.Longitud
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            {this.state.isSearchingPharmacy &&
              this.state.pharmacyData.map(pharmacy => {
                const pos = {
                  lat: pharmacy.Latitud,
                  lng: pharmacy.Longitud
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            {this.state.isSearchingCleanPointMov &&
              this.state.cleanPointMovData.map(cleanPointMov => {
                const pos = {
                  lat: cleanPointMov.LATITUD,
                  lng: cleanPointMov.LONGITUD
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            {this.state.isSearchingCleanPoint &&
              this.state.cleanPointData.map(cleanPoint => {
                const pos = {
                  lat: cleanPoint.location.latitude,
                  lng: cleanPoint.location.longitude
                };

                if (this.nearMe(pos)) return <Marker position={pos} />;
              })}

            <Marker
              name={"Your position"}
              position={this.state.currentLatLng}
              icon={{
                url:
                  "https://lh3.googleusercontent.com/-HC9CYmcjF3E/U3N2rnp-W3I/AAAAAAAABMw/qSJAzyyGp1o/w265-h353-n/14%2B-%2B2",
                anchor: new this.props.google.maps.Point(32, 32),
                scaledSize: new this.props.google.maps.Size(52, 64)
              }}
            />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDpK3H8uHIj99teUQ5u0J6z7uDH9_DgEko",
  libraries: ["geometry"],
  language: "en"
})(MapContainer);
