


function weatherReducer(state = { forecast: { currently: { summary: "" }, daily: {data: []}}, isLoading: false}, action) {
  switch(action.type) {
    case "FETCHING_WEATHER":
      return Object.assign({}, state, { isLoading: true})
    case "FETCHED_WEATHER":
      return Object.assign({}, state, { isLoading: false, forecast:action.payload})
    default:
      return state
  }
}

export default weatherReducer
