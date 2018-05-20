import React, { Component } from 'react';
import { fetchWeather, fetchLocation } from "../util/weather_util";
class WeatherForm extends Component {
  constructor(){
    super();
    this.state = {
      location: '',
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
    let currentPlace = fetchLocation(this.state.location);
    this.setState({location: ''});
    // let currentWeather = fetchWeather();
  }

  render() {
    return (
      <div className="weather-form-box">
        <form className="weather-form" onSubmit={this.handleSubmit}>
          <h1 className="location-input-header">Going Somewhere Else?</h1>
          <h2>Let's check if it'll rain there too:</h2>
            <input className="location-input"
              onChange={this.handleUpdate("location")}
              value={this.state.location}>
            </input>

          <button className="request-button">Raining?</button>
        </form>
      </div>
    );
  }
}


export default WeatherForm;
