import axios from "axios";


export const fetchLocation = (location) => {
  fetch(`https://www.metaweather.com/api/location/search/?query=${location}`,{
    "Access-Control-Allow-Origin" : '*'})
    .then((response) => {
      console.log(response);
    }).then((res) => console.log(res));
};
