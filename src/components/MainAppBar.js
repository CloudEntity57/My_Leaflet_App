import React, {Component} from 'react';
import Popover from './Popover';
import AppBar from 'material-ui/AppBar';

class MainAppBar extends Component{
  mapWithMarkers(){
    this.props.mapWithMarkers();
  }
  mapWithShapes(){
    this.props.mapWithShapes();
  }
  mapNothing(){
    this.props.mapNothing();
  }
  render(){
    return(
      <AppBar
        title="My Leaflet App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<div></div>}>
        <Popover mapNothing={() => this.mapNothing()} mapWithShapes={() => this.mapWithShapes()} mapWithMarkers={() => this.mapWithMarkers()}/>
      </AppBar>
    );
  }
}

export default MainAppBar;
