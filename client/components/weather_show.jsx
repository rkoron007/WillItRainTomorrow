import React, { Component } from 'react';


class WeatherShow extends Component {
  render() {
    if (!this.props.weather){
      return null;
    }

    return (
      <div className="weather-show-box">
        {console.log(this.props.weather)}
      </div>
    );
  }
}

export default WeatherShow;
