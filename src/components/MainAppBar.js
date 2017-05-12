import React, {Component} from 'react';
import Popover from './Popover';
import AppBar from 'material-ui/AppBar';

class MainAppBar extends Component{

  render(){
    return(
      <AppBar
        title="My Leaflet App (w Redux)"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<div></div>}>
        <Popover />
      </AppBar>
    );
  }
}

export default MainAppBar;
