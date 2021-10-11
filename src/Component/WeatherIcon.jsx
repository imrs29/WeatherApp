import React from "react";

//svg icons
import Cloudy from "../img/weatherIcons/cloudy.svg";
import CloudyDay from "../img/weatherIcons/cloudy-day.svg";
import CloudyNight from "../img/weatherIcons/cloudy-night.svg";
import Day from "../img/weatherIcons/day.svg";
import Night from "../img/weatherIcons/night.svg";
import Rainy from "../img/weatherIcons/rainy.svg";
import RainyHeavy from "../img/weatherIcons/rainy-heavy.svg";
import Snowy from "../img/weatherIcons/snowy.svg";
import Thunder from "../img/weatherIcons/thunder.svg";

const WeatherIcon = ({ weatherType }) => {
  switch (weatherType) {
    //clear day
    case "01d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Day}
            alt="/"
          />
        </div>
      );

    //clear night
    case "01n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Night}
            alt="/"
          />
        </div>
      );

    //cloudyDay
    case "02d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={CloudyDay}
            alt="/"
          />
        </div>
      );

    //cloudyNight
    case "02n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={CloudyNight}
            alt="/"
          />
        </div>
      );

    //cloudyOvercast
    case "03d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Cloudy}
            alt="/"
          />
        </div>
      );

    case "03n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Cloudy}
            alt="/"
          />
        </div>
      );

    case "034d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Cloudy}
            alt="/"
          />
        </div>
      );

    case "04n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Cloudy}
            alt="/"
          />
        </div>
      );

    //rainy
    case "10d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Rainy}
            alt="/"
          />
        </div>
      );

    case "10n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Rainy}
            alt="/"
          />
        </div>
      );

    //rainy-heavy
    case "09d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={RainyHeavy}
            alt="/"
          />
        </div>
      );
    case "09n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={RainyHeavy}
            alt="/"
          />
        </div>
      );

    //Thunderstorm
    case "11d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Thunder}
            alt="/"
          />
        </div>
      );
    case "11n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Thunder}
            alt="/"
          />
        </div>
      );

    //snow
    case "13d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Snowy}
            alt="/"
          />
        </div>
      );
    case "13n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src={Snowy}
            alt="/"
          />
        </div>
      );

    //mist
    case "50d":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src="https://openweathermap.org/img/wn/50d@2x.png"
            alt="/"
          />
        </div>
      );
    case "50n":
      return (
        <div>
          <img
            class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
            src="https://openweathermap.org/img/wn/50n@2x.png"
            alt="/"
          />
        </div>
      );

    default:
      return <div></div>;
  }
};

export default WeatherIcon;
