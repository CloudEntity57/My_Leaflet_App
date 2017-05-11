import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from './components/MainAppBar';
import MarkerMap from './components/MarkerMap';
import ReactDOM from 'react-dom';
import './index.css';

injectTapEventPlugin();

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      shapes:false,
      markers:false
    }
  }
  mapNothing(){
    console.log('app level clear');
    this.setState({
      shapes:false,
      markers:false
    });
  }
  mapWithMarkers(){
    console.log('app level');
    this.setState({
      shapes:false,
      markers:true
    });
  }
  mapWithShapes(){
    console.log('app level');
    this.setState({
      shapes:true,
      markers:false
    });
  }
  render(){
    let shapes = (this.state.shapes) ? this.state.shapes : '';
    const polygon = [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]];
    const rectangle = [
      [[51.51, -0.11], [51.51, -0.1], [51.49, -0.1],[51.49, -0.11]]
    ];
    const position2 = [51.512,-0.10];
    const center = [51.505, -0.09];
    const center2 = [51.51, -0.12];
    const lat = 51.505;
    const lng = -0.09;
    const zoom = 13;
    const radius = 200;
    const radius2 = 20;
    const blue = "blue";
    const red = "red";
    const purple = "purple";
    const green = "green";
    let props = {
      shapes,polygon,rectangle,position2,center,center2,lat,lng,zoom,blue,red,purple,green,radius,radius2
    }
    return(
      <MuiThemeProvider>
        <div>
          <MainAppBar mapNothing={this.mapNothing.bind(this)} mapWithShapes={this.mapWithShapes.bind(this)} mapWithMarkers={this.mapWithMarkers.bind(this)}/>
          <MarkerMap {...props} markers={this.state.markers}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
