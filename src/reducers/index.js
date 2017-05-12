import { combineReducers } from 'redux';

import { SET_INITIAL_STATE, MAP_WITH_SHAPES, MAP_WITH_MARKERS, MAP_NOTHING } from '../actions/index';

const initialState = {
  shapes:false,
  markers:false,
  polygon:[[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]],
  rectangle:[
    [[51.51, -0.11], [51.51, -0.1], [51.49, -0.1],[51.49, -0.11]]
  ],
  position2:[51.512,-0.10],
  center:[51.505, -0.09],
  center2:[51.51, -0.12],
  lat:51.505,
  lng:-0.09,
  zoom:13,
  radius:200,
  radius2:20,
  blue:"blue",
  red:"red",
  purple:"purple",
  green:"green"
}

const mapWithShapes = (state) =>{
    return {
      ...state,
      shapes:true,
      markers:false
    }
}
const mapWithMarkers = (state) =>{
    return {
      ...state,
      shapes:false,
      markers:true
    }
}
const mapNothing = (state) =>{
    return {
      ...state,
      shapes:false,
      markers:false
    }
}
const map = (state=initialState,action)=>{
  switch(action.type){
    case MAP_WITH_SHAPES:
    return mapWithShapes(state);
    break;
    case MAP_WITH_MARKERS:
    return mapWithMarkers(state);
    break;
    case MAP_NOTHING:
    return mapNothing(state);
    default:
    return state;
  }
}
const allReducers = combineReducers({
    map
});

export default allReducers;
