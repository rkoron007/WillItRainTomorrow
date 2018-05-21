import React, { Component } from 'react';
import { fetchWeather, fetchLocation } from "../util/weather_util";
import WeatherShow from "./weather_show";


class WeatherForm extends Component {
  constructor(){
    super();
    this.state = {
      location: '',
      woeid:'',
      weather:''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(input){
    // handles all input updating with our state
    return (e) => this.setState({[input]: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    fetchLocation(this.state.location, (weather) => {
      this.setState({weather});
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="weather-form-box">
        <form className="weather-form" onSubmit={this.handleSubmit}>
          <h1 className="location-input-header">Going Somewhere?</h1>
          <h2>Let's find out if it's going to rain:</h2>
            <input className="location-input"
              onChange={this.handleUpdate("location")}
              value={this.state.location}>
            </input>

          <button className="request-button">Raining?</button>
          <WeatherShow weather={this.state.weather} />
        </form>
      </div>
    );
  }
}



export default WeatherForm;
