import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker, Polygon } from 'react-leaflet';
import { connect } from 'react-redux';
import { leafletApp } from '../actions/index';
import { bindActionCreators } from 'redux';

class MarkerMap extends Component {
  render() {
    console.log( 'lat: ',this.props.lat);
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
      <Map center={this.props.center} zoom={zoom}>
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
  state = state.allReducers.map;
  console.log('state: ',state);
  return {
    shapes:state.shapes,
    markers:state.markers,
    polygon:state.polygon,
    rectangle:state.rectangle,
    position2:state.position2,
    center:state.center,
    center2:state.center2,
    lat:state.lat,
    lng:state.lng,
    zoom:state.zoom,
    radius:state.radius,
    radius2:state.radius2,
    blue:state.blue,
    red:state.red,
    purple:state.purple,
    green:state.green,
  }
}
const matchDispatchToProps = (dispatch) =>{
  return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps)(MarkerMap);
