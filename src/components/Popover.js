import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mapWithMarkers, mapWithShapes, mapNothing } from '../actions/index';

class PopoverExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

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
            <MenuItem onClick={this.props.mapWithMarkers} primaryText="Map with Markers" />
            <MenuItem onClick={this.props.mapWithShapes} primaryText="Map with Shapes" />
            <MenuItem onClick={this.props.mapNothing} primaryText="Clear Map" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    markers:state.markers,
    shapes:state.shapes
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({mapNothing:mapNothing,mapWithMarkers:mapWithMarkers,mapWithShapes:mapWithShapes}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(PopoverExample);
