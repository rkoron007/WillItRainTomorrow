import React, { Component } from 'react';
import ReactRain from 'react-rain-animation';
// import "../stylesheets/react-rain-animation.css";
import "react-rain-animation/lib/style.css";

class WeatherShow extends Component {

  handleRain(){
    // this method will determine if we need to add the rain or sun effect
    // depending on what was fetched by our api call.
    if (this.props.weather === true) {
      return (
        <section>
          <h2>Grab Your Umbrella! It'll be raining tomorrow.</h2>
          <ReactRain numDrops="200"/>
        </section>
      );
    } else if (this.props.weather === false) {
      return (
        <section>
          <h2>No rain, no worries! Everything looks dry tomorrow.</h2>
        </section>
      );
    } else {
      return (
        <div>
          {this.props.weather}
        </div>
      );
    }
  }
  render() {
    if (this.props.weather === ''){
      return null;
    }

    return (
      <div className="weather-show-box">
        {this.handleRain()}
      </div>
    );
  }
}

export default WeatherShow;
