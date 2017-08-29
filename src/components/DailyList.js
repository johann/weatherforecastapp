import React from 'react'
import { connect } from 'react-redux'

class DailyList extends React.Component {

  render(){
    const dailyItems = this.props.dailyForecast.map((item) => <li>{item.summary}</li>)
    return (
      <ul>
      {dailyItems}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    dailyForecast: state.forecast.daily.data
  }
}

export default connect(mapStateToProps)(DailyList)
