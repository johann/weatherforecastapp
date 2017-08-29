import React from 'react'
import { connect } from 'react-redux'


class WeatherSummary extends React.Component {
  render() {
  return (  <div>
      <p>{this.props.summary}</p>
    </div>)
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    summary: state.forecast.currently.summary
  }

}

export default connect(mapStateToProps)(WeatherSummary)
