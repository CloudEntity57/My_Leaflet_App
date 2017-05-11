//attempted to set initial state and add map option actions, but I couldn't get them to change the global state.

export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const spotifyApp = () => ({
  type:SET_INITIAL_STATE

})

export const MAP_WITH_SHAPES = "MAP_WITH_SHAPES";
export const mapWithShapes = () => ({
  type:MAP_WITH_SHAPES

})


export const MAP_WITH_MARKERS = "MAP_WITH_MARKERS";
export const mapWithMarkers = () => ({
  type:MAP_WITH_MARKERS

})
