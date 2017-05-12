import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from './components/MainAppBar';
import MarkerMap from './components/MarkerMap';
import ReactDOM from 'react-dom';
import './index.css';

//redux dependencies - I got the state to update in another app, but this time around it kept my three functions' state variables in separate parts of the global state, under each function's name.

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

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <MainAppBar />
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

App = connect(mapStateToProps,matchDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
