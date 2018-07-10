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
            lat={39.758184}
            lng={-105.006953}
                              />
        </GoogleMapReact>
        </div>
    );
  }
}

Map.defaultProps = {
  center: { lat: 40.744679, lng: -73.948542 },
  zoom: 11
};


// <Map google={this.props.google}
//   style={{ width: '100%', height: '100%', position: 'relative' }}
//   className={'map'}
//   zoom={14}>
//   <Marker
//     title={'The marker`s title will appear as a tooltip.'}
//     name={'SOMA'}
//     position={{ lat: 37.778519, lng: -122.405640 }} />
//   <Marker
//     name={'Dolores park'}
//     position={{ lat: 37.759703, lng: -122.428093 }} />
//   <Marker />
//   <Marker
//     name={'Your position'}
//     position={{ lat: 37.762391, lng: -122.439192 }}
//     icon={{
//       url: "/path/to/custom_icon.png",
//       anchor: new google.maps.Point(32, 32),
//       scaledSize: new google.maps.Size(64, 64)
//     }} />
// </Map>