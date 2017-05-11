import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  mapWithMarkers(e){
    e.preventDefault();
    console.log('markers');
    this.props.mapWithMarkers();
  }
  mapWithShapes(e){
    e.preventDefault();
    this.props.mapWithShapes();
  }
  mapNothing(e){
    e.preventDefault();
    this.props.mapNothing();
  }

  render() {
    return (
      <div className="navigation-button">
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Map Options" />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem onClick={this.mapWithMarkers.bind(this)} primaryText="Map with Markers" />
            <MenuItem onClick={this.mapWithShapes.bind(this)} primaryText="Map with Shapes" />
            <MenuItem onClick={this.mapNothing.bind(this)} primaryText="Clear Map" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
