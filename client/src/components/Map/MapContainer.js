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

  showRopa = () => {
    if (this.state.isSearchingClothes) {
      this.setState({ ...this.state, isSearchingClothes: false });
    } else {
      this.setState({ ...this.state, isSearchingClothes: true });
    }
  };

  showOil = () => {
    if (this.state.isSearchingOil) {
      this.setState({ ...this.state, isSearchingOil: false });
    } else {
      this.setState({ ...this.state, isSearchingOil: true });
    }
  };

  showBatteries = () => {
    if (this.state.isSearchingBatteries) {
      this.setState({ ...this.state, isSearchingBatteries: false });
    } else {
      this.setState({ ...this.state, isSearchingBatteries: true });
    }
  };

  showPharmacy = () => {
    if (this.state.isSearchingPharmacy) {
      this.setState({ ...this.state, isSearchingPharmacy: false });
    } else {
      this.setState({ ...this.state, isSearchingPharmacy: true });
    }
  };

  showCleanPointMov = () => {
    if (this.state.isSearchingCleanPointMov) {
      this.setState({ ...this.state, isSearchingCleanPointMov: false });
    } else {
      this.setState({ ...this.state, isSearchingCleanPointMov: true });
    }
  };

  showCleanPoint = () => {
    if (this.state.isSearchingCleanPoint) {
      this.setState({ ...this.state, isSearchingCleanPoint: false });
    } else {
      this.setState({ ...this.state, isSearchingCleanPoint: true });
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
      height: "90%"
    };
    const coords = { lat: -21.805149, lng: -49.0921657 };
    let utm = new utmObj("ETRS89");
    utm.setEllipsoid("ETRS89");
    console.log(utm.convertUtmToLatLng(440001, 4475899, 30, "N"));
    console.log(utm.convertLatLngToUtm(40.4315754, -3.7073549, 2));
    return (
      <div>
        <div>
          <div id="ck-button">
            <label>
              <input type="checkbox" onChange={this.showRopa} />{" "}
              <span>Ropa</span>{" "}
            </label>
          </div>

          <input type="checkbox" onChange={this.showOil} />
          <h4>Aceite vegetal</h4>

          <input type="checkbox" onChange={this.showBatteries} />
          <h4>Pilas</h4>

          {/* 
            <input type="checkbox" onChange={this.showPharmacy} />
            <h4>Punto sigre</h4> */}

          <input type="checkbox" onChange={this.showCleanPointMov} />
          <h4>Punto limpio móvil</h4>

          <input type="checkbox" onChange={this.showCleanPoint} />
          <h4>Punto limpio</h4>
        </div>

        <Map
          class="Map"
          google={this.props.google}
          style={style}
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

              return <Marker position={pos} />;
            })}

          {this.state.isSearchingOil &&
            this.state.oilData.map(oil => {
              const pos = {
                lat: oil.LATITUD,
                lng: oil.LONGITUD
              };

              return <Marker position={pos} />;
            })}

          {this.state.isSearchingBatteries &&
            this.state.batteriesData.map(batteries => {
              const pos = {
                lat: batteries.Latitud,
                lng: batteries.Longitud
              };

              return <Marker position={pos} />;
            })}

          {this.state.isSearchingPharmacy &&
            this.state.pharmacyData.map(pharmacy => {
              const pos = {
                lat: pharmacy.Latitud,
                lng: pharmacy.Longitud
              };

              return <Marker position={pos} />;
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

              return <Marker position={pos} />;
            })}
          <Circle
            radius={1200}
            center={coords}
            onMouseover={() => console.log("mouseover")}
            onClick={() => console.log("click")}
            onMouseout={() => console.log("mouseout")}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#FF0000"
            fillOpacity={0.2}
          />

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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDpK3H8uHIj99teUQ5u0J6z7uDH9_DgEko",
  libraries: ["geometry"],
  language: "en"
})(MapContainer);
