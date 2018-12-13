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
import plasticData from "../../plastic.json";
import glassData from "../../glass.json";
import paperData from "../../paper.json";
import organicData from "../../organic.json";
import restosData from "../../restos.json";
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
      plasticData,
      glassData,
      paperData,
      organicData,
      restosData,
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
      isSearchingCleanPoint: false,
      isSearchingPlastic: false,
      isSearchingGlass: false,
      isSearchingPaper: false,
      isSearchingOrganic: false,
      isSearchingRestos: false
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

  showRopa = e => {
    e.preventDefault();
    if (this.state.isSearchingClothes) {
      this.setState({ ...this.state, isSearchingClothes: false }, () =>
        e.preventDefault()
      );
    } else {
      this.setState({ ...this.state, isSearchingClothes: true }, () =>
        e.preventDefault()
      );
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

  showPlastic = () => {
    if (this.state.isSearchingPlastic) {
      this.setState({ ...this.state, isSearchingPlastic: false });
    } else {
      this.setState({ ...this.state, isSearchingPlastic: true });
    }
  };

  showGlass = () => {
    if (this.state.isSearchingGlass) {
      this.setState({ ...this.state, isSearchingGlass: false });
    } else {
      this.setState({ ...this.state, isSearchingGlass: true });
    }
  };

  showPaper = () => {
    if (this.state.isSearchingPaper) {
      this.setState({ ...this.state, isSearchingPaper: false });
    } else {
      this.setState({ ...this.state, isSearchingPaper: true });
    }
  };

  showOrganic = () => {
    if (this.state.isSearchingOrganic) {
      this.setState({ ...this.state, isSearchingOrganic: false });
    } else {
      this.setState({ ...this.state, isSearchingOrganic: true });
    }
  };

  showRestos = () => {
    if (this.state.isSearchingRestos) {
      this.setState({ ...this.state, isSearchingRestos: false });
    } else {
      this.setState({ ...this.state, isSearchingRestos: true });
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
    return (
      <div>
        <div>
          <div id="ck-button">
            <label>
              <input type="checkbox" onChange={this.showRopa} />{" "}
              <span>Ropa</span>{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" onChange={this.showOil} />
            <h4>Aceite vegetal</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showBatteries} />
            <h4>Pilas</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showPharmacy} />
            <h4>Punto sigre</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showCleanPointMov} />
            <h4>Punto limpio móvil</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showCleanPoint} />
            <h4>Punto limpio</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showPlastic} />
            <h4>Envases</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showGlass} />
            <h4>Vidrio</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showPaper} />
            <h4>Papel y cartón</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showOrganic} />
            <h4>Orgánico</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showRestos} />
            <h4>Restos</h4>
          </div>
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
                lat: ropa.latitud,
                lng: ropa.longitud
              };

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/T/f3610c/"/>;
            })}

          {this.state.isSearchingOil &&
            this.state.oilData.map(oil => {
              const pos = {
                lat: oil.latitud,
                lng: oil.longitud
              };

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/A/d5c53a/"/>;
            })}

          {this.state.isSearchingBatteries &&
            this.state.batteriesData.map(batteries => {
              const pos = {
                lat: batteries.Latitud,
                lng: batteries.Longitud
              };

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/P/bc20ef/" />;
            })}

          {this.state.isSearchingPharmacy &&
            this.state.pharmacyData.map(pharmacy => {
              const pos = utm.convertUtmToLatLng(
                pharmacy.latitud,
                pharmacy.longitud,
                30,
                "N"
              );

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/F/127e12/"/>;
            })}

          {this.state.isSearchingCleanPointMov &&
            this.state.cleanPointMovData.map(cleanPointMov => {
              const pos = {
                lat: cleanPointMov.latitud,
                lng: cleanPointMov.longitud
              };

              if (this.nearMe(pos)) return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/M/f60404/"/>;
            })}

          {this.state.isSearchingCleanPoint &&
            this.state.cleanPointData.map(cleanPoint => {
              const pos = {
                lat: cleanPoint.location.latitud,
                lng: cleanPoint.location.longitud
              };

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/P/f60404/"/>;
            })}

          {this.state.isSearchingPlastic &&
            this.state.plasticData.map(plastic => {
              const pos = utm.convertUtmToLatLng(
                plastic.latitud,
                plastic.longitud,
                30,
                "N"
              );

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/R/3636e8/"/>;
            })}

          {this.state.isSearchingGlass &&
            this.state.glassData.map(glass => {
              const pos = utm.convertUtmToLatLng(
                +glass.latitud,
                +glass.longitud,
                30,
                "N"
              );
              console.log(glass.latitud);
              //console.log(utm.convertUtmToLatLng(+glass.latitud, +glass.longitud, 30, "N"))

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/R/3636e8/"/>;
            })}

          {this.state.isSearchingPaper &&
            this.state.paperData.map(paper => {
              const pos = utm.convertUtmToLatLng(
                paper.latitud,
                paper.longitud,
                30,
                "N"
              );

              return <Marker position={pos} icon= "http://www.googlemapsmarkers.com/v1/R/3636e8/"/>;
            })}

          {this.state.isSearchingOrganic &&
            this.state.organicData.map(organic => {
              const pos = utm.convertUtmToLatLng(
                organic.latitud,
                organic.longitud,
                30,
                "N"
              );

              return <Marker position={pos}  />;
            })}

          {this.state.isSearchingRestos &&
            this.state.restosData.map(restos => {
              const pos = utm.convertUtmToLatLng(
                restos.latitud,
                restos.longitud,
                30,
                "N"
              );

              return <Marker position={pos} />;
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDpK3H8uHIj99teUQ5u0J6z7uDH9_DgEko",
  libraries: ["geometry"],
  language: "en"
})(MapContainer);
