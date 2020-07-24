import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';

const api_key= "f39d18c2e022f9466667c4051589ac3b";
const url ="http://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component { 
    
    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }
    }

    componentWillMount() {
        const {city} = this.state; 
        const api_weather= `${url}?q=${city}&APPID=${api_key}`;

        fetch(api_weather).then(data => {
            
            console.log(data);
            return data.json();

        }).then(weather_data => {
            const data =transformWeather(weather_data);
            this.setState({data})
        })
    }
    

    render = () => {
        const { city, data }=this.state;
        return (
    <div className="weatherLocationCont">
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : 
      <CircularProgress size={40} thickness={4} />
        }
    </div>);
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string
}

export default WeatherLocation;