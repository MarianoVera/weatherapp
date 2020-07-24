import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities => ( //strToComponent recibe cities (se lo pasamos abajo)
    cities.map(city => (<WeatherLocation city={city} />)) /* Con map(transforma array a otr tipo), de ES, 
                                                            transformamos uno a uno ese array de strings a uno de component (de WeatherLocation)*/
);

const LocationList = ({ cities }) => ( //LocationList recibe el array cities
    <div>
        {strToComponent(cities)} {/* Usamos ese array para pasarlo a la function strToComponent */}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;