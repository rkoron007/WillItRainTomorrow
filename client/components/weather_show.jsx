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
          <h2 className="rain">Grab Your Umbrella! It'll be raining tomorrow.</h2>
          <ReactRain numDrops="200"/>
          <img className="umbrella"
            src="http://res.cloudinary.com/dkaolr6pg/image/upload/v1526917614/umbrella.png">
          </img>
        </section>
      );
    } else if (this.props.weather === false) {
      return (
        <section>
          <h2 className="rain">No rain, no worries! Everything looks dry tomorrow.</h2>
          <img src="http://res.cloudinary.com/dkaolr6pg/image/upload/v1526922882/if_weather-01_1530392.png"
            />
        </section>
      );
    } else {
      // if we don't have a "true" or "false" from props
      // that means we have an error and should display
      return (
        <div className="errors">
          {this.props.weather}
        </div>
      );
    }
  }
  render() {
    // make sure we have props before we display
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
