import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker, Polygon } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MarkerMap extends Component {
  render() {
    const lat = this.props.lat;
    const lng = this.props.lng
    const position = [lat,lng];
    const zoom = this.props.zoom;
    let shapes = (this.props.shapes) ? (
      <div>
      <Circle center={this.props.center} fillColor={this.props.blue} radius={this.props.radius} />
      <CircleMarker center={this.props.center2} color={this.props.red} radius={this.props.radius2}>
        <Popup>
          <span>Popup in CircleMarker</span>
        </Popup>
      </CircleMarker>
      <Polygon color={this.props.purple} positions={this.props.polygon} />
      <Polygon color={this.props.green} positions={this.props.rectangle} />
    </div>
    ) : '';
    let markers = (this.props.markers) ? (
      <div>
      <Marker position={position}>
        <Popup>
          <span>A really great place in London.</span>
        </Popup>
      </Marker>
      <Marker position={this.props.position2}>
        <Popup>
          <span>A great spot in London.</span>
        </Popup>
      </Marker>
    </div>
    ) : '';
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {shapes}
        {markers}
      </Map>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ',state);
  return {
    markers:state.markers,
    shapes:state.shapes
  }
}


export default connect(mapStateToProps)(MarkerMap);
