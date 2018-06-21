import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Map extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCVUchVXx0kV1pECYt5E-ZRYT_3P2ch_10' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          <AnyReactComponent
            lat={40.747331}
            lng={-73.851744}
            text={"Good Places to Read Love Poems"} />
        </GoogleMapReact>
        </div>
    );
  }
}

Map.defaultProps = {
  center: { lat: 40.744679, lng: -73.948542 },
  zoom: 11
};