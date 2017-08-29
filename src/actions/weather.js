
export function fetchWeather(lat, long) {
  return function (dispatch) {
    dispatch(fetchingWeather())
    fetch(`https://api.darksky.net/forecast/71f1892a6d625cc526c7ff7fec9d6973/${lat},${long}`)
    .then((res) => res.json())
    .then(json => {
      dispatch(fetchedWeather(json))
    })
  }
}



export function fetchingWeather() {
  return {type: "FETCHING_WEATHER"}
}


export function fetchedWeather(json) {
  return { type:"FETCHED_WEATHER", payload: json}
}
