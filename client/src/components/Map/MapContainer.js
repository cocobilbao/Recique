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
      isSearchingRestos: false,

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
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
    console.log(objPos);

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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  componentDidMount() {
    this.showCurrentLocation();
  }
  render() {
    const style =
    [
      {
        featrureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visivility: "off"
          }
        ]
      },
      {
        featrureType: "poi",
        stylers: [
          {
            visivility: "off"
          }
        ]
      },
      {
        featrureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visivility: "off"
          }
        ]
      },
      {
        featrureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        width: "100%",
        height: "100%"
      }
    ]
  
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
              <span>Textil</span>{" "}
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
                onChange={() => this.show("isSearchingCleanPointMov")}
              />{" "}
              <span>Punto limpio movil</span>{" "}
            </label>
          </div>

          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingCleanPoint")}
              />{" "}
              <span>Punto limpio</span>{" "}
            </label>
          </div>
          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingPharmacy")}
              />{" "}
              <span>Punto sigre</span>{" "}
            </label>
          </div>
          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingPaper")}
              />{" "}
              <span>Isla de reciclaje</span>{" "}
            </label>
          </div>
          <div id="ck-button">
            <label>
              <input
                type="checkbox"
                onChange={() => this.show("isSearchingRestos")}
              />{" "}
              <span>Vidrio</span>{" "}
            </label>
          </div>
          {/* <div>
            <input type="checkbox" onChange={this.showGlass} />
            <h4>Vidrio</h4>
          </div> */}
          {/* <div>
            <input
              type="checkbox"
              onChange={() => this.show("isSearchingRestos")}
            />
            <h4>Contenedor de vidrio con publicidad</h4>
          </div> */}

          {/* <div>
            <input type="checkbox" onChange={this.showOrganic} />
            <h4>Orgánico</h4>
          </div>
          <div>
            <input type="checkbox" onChange={this.showPlastic} />
            <h4>Envases</h4>
          </div> */}
        </div>

        <Map
          className="Map"
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

              if (this.nearMe(pos))
                return (
                  <Marker
                    title={"Textil"}
                    position={pos}
                    icon="http://www.googlemapsmarkers.com/v1/T/f3610c/"
                  />
                );
            })}

          {this.state.isSearchingOil &&
            this.state.oilData.map(oil => {
              const pos = {
                lat: oil.latitud,
                lng: oil.longitud
              };

              if (this.nearMe(pos))
                return (
                  <Marker
                    position={pos}
                    title={"Aceite vegetal"}
                    icon="http://www.googlemapsmarkers.com/v1/A/d5c53a/"
                  />
                );
            })}

          {this.state.isSearchingBatteries &&
            this.state.batteriesData.map(batteries => {
              const pos = {
                lat: batteries.Latitud,
                lng: batteries.Longitud
              };

              if (this.nearMe(pos))
                return (
                  <Marker
                    position={pos}
                    title={"Pilas"}
                    icon="http://www.googlemapsmarkers.com/v1/P/792b93/"
                  />
                );
            })}

          {this.state.isSearchingPharmacy &&
            this.state.pharmacyData.map(pharmacy => {
              const pos = utm.convertUtmToLatLng(
                pharmacy.latitud,
                pharmacy.longitud,
                30,
                "N"
              );

              if (this.nearMe(pos))
                return (
                  <Marker
                    position={pos}
                    title={"Punto sigre"}
                    icon="http://www.googlemapsmarkers.com/v1/S/0ee70f/"
                  />
                );
            })}

          {this.state.isSearchingCleanPointMov &&
            this.state.cleanPointMovData.map(cleanPointMov => {
              const pos = {
                lat: cleanPointMov.latitud,
                lng: cleanPointMov.longitud
              };

              if (this.nearMe(pos))
                return (
                  <Marker
                  onClick={this.onMarkerClick}
                  name={'Current location'}
                    position={pos}
                    title={"Punto limpio móvil"}
                    icon="http://www.googlemapsmarkers.com/v1/M/ea64a6/"
                  />,
                  <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>{cleanPointMov.TURNO}</h1>
                    </div>
                </InfoWindow>
                );
            })}

          {this.state.isSearchingCleanPoint &&
            this.state.cleanPointData.map(cleanPoint => {
              const pos = {
                lat: cleanPoint.location.latitud,
                lng: cleanPoint.location.longitud
              };

              // if (this.nearMe(pos))
              return (
                <Marker
                  position={pos}
                  title={cleanPoint.title}
                  icon="http://www.googlemapsmarkers.com/v1/P/f60404/"
                />
              );
            })}

          {this.state.isSearchingPlastic &&
            this.state.plasticData.map(plastic => {
              const pos = utm.convertUtmToLatLng(
                plastic.latitud,
                plastic.longitud,
                30,
                "N"
              );

              return (
                <Marker
                  position={pos}
                  title={"Isla de reciclaje"}
                  icon="http://www.googlemapsmarkers.com/v1/R/3636e8/"
                />
              );
            })}

          {this.state.isSearchingGlass &&
            this.state.glassData.map(glass => {
              const pos = utm.convertUtmToLatLng(
                glass.latitud,
                glass.longitud,
                30,
                "N"
              );
              console.log(glass.latitud);
              //console.log(utm.convertUtmToLatLng(+glass.latitud, +glass.longitud, 30, "N"))

              return (
                <Marker
                  position={pos}
                  title={"Isla de reciclaje"}
                  icon="http://www.googlemapsmarkers.com/v1/R/3636e8/"
                />
              );
            })}

          {this.state.isSearchingPaper &&
            this.state.paperData.map(paper => {
              const pos = utm.convertUtmToLatLng(
                paper.latitud,
                paper.longitud,
                30,
                "N"
              );

              if (this.nearMe(pos))
                return (
                  <Marker
                    position={pos}
                    title={"Isla de reciclaje"}
                    icon="http://www.googlemapsmarkers.com/v1/R/3636e8/"
                  />
                );
            })}

          {this.state.isSearchingOrganic &&
            this.state.organicData.map(organic => {
              const pos = utm.convertUtmToLatLng(
                organic.latitud,
                organic.longitud,
                30,
                "N"
              );

              return <Marker position={pos} />;
            })}

          {this.state.isSearchingRestos &&
            this.state.restosData.map(restos => {
              const pos = {
                lat: restos.latitud,
                lng: restos.longitud
              };

              if (this.nearMe(pos))
                return (
                  <Marker
                    position={pos}
                    title={"Vidrio"}
                    icon="http://www.googlemapsmarkers.com/v1/V/3dbaa4/"
                  />
                );
            })}

          <Marker
            name={"Your position"}
            title={"Aquí alguien quiere reciclar"}
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
