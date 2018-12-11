import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import ropaData from "../../ropa.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ropaData,
      currentLatLng: {
        lat: 40,
        lng: 0
      },
      isMarkerShown: false,
      isSearchingClothes: false
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
  showRopa = () =>{
    if (this.state.isSearchingClothes){
    this.setState({...this.state, isSearchingClothes:false})
    }else{
      this.setState({...this.state, isSearchingClothes:true})
    }
  }
  componentWillMount() {
    this.showCurrentLocation();
    console.log(this.state.currentLatLng.lat);
  }
  render() {
    const style = {
      width: "100%",
      height: "90%"
    };
    return (
      <div>
        <input type="checkbox" onChange={this.showRopa}/><h4>Ropa</h4>
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
  apiKey: "AIzaSyDpK3H8uHIj99teUQ5u0J6z7uDH9_DgEko"
})(MapContainer);
