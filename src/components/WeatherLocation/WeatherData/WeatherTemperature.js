import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case "cloud":
            return "cloud";
        case "cloudy":
            return "cloudy";
        case "sun":
            return "day-sunny";
        case "rain":
            return "rain";
        case "snow":
            return "snow";
        case "windy":
            return "windy";
        case "thunder":
            return "day-thunderstorm";
        case "drizzle":
            return "day-showers";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {
        return( <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" /> );
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        
        {getWeatherIcon(weatherState)}
        <span className="temperature">{` ${temperature} `}</span>
        <span className="temperaturetype">ºC</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;