import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from './components/MainAppBar';
import MarkerMap from './components/MarkerMap';
import ReactDOM from 'react-dom';
import './index.css';

//redux

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { leafletApp } from './actions/index';

const logger = createLogger();
const store = createStore(
  combineReducers({
    allReducers
  }),
  applyMiddleware(logger)
);

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

    // let props = {
    //   shapes,polygon,rectangle,position2,center,center2,lat,lng,zoom,blue,red,purple,green,radius,radius2
    // }
    return(
      <MuiThemeProvider>
        <div>
          <MainAppBar mapNothing={this.mapNothing.bind(this)} mapWithShapes={this.mapWithShapes.bind(this)} mapWithMarkers={this.mapWithMarkers.bind(this)}/>
          <MarkerMap  />
        </div>
      </MuiThemeProvider>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state:state
  }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({leafletApp:leafletApp}, dispatch);
}

App  = connect(mapStateToProps,matchDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
