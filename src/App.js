import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import WeatherSummary from './components/WeatherSummary'
import { connect } from 'react-redux'
import { fetchWeather } from './actions/weather'
import DailyList from './components/DailyList'

class App extends Component {

  handleClick = () => {
    this.props.getWeather(37.8267,-122.4233)
    // this should send our an action that fetches our weather
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <Button onClick={this.handleClick} content="FETCH WEATHER"/>
        </div>
        <div className="App-intro">
          <WeatherSummary/>
          <DailyList />
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
   return {
     getWeather: (lat, long) => {
       dispatch(fetchWeather(lat, long))
     }
   }
}

export default connect(null, mapDispatchToProps)(App);
