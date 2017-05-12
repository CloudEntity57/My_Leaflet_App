//attempted to set initial state and add map option actions, but I couldn't get them to change the global state.

export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const leafletApp = state => ({
  type:SET_INITIAL_STATE,
  state
})

export const MAP_WITH_SHAPES = "MAP_WITH_SHAPES";
export const mapWithShapes = state => ({
  type:MAP_WITH_SHAPES,
  state
})

export const MAP_WITH_MARKERS = "MAP_WITH_MARKERS";
export const mapWithMarkers = state => ({
  type:MAP_WITH_MARKERS,
  state
})

export const MAP_NOTHING = "MAP_NOTHING";
export const mapNothing = state => ({
  type:MAP_NOTHING,
  state
})
