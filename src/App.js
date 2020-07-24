import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Madrid, ES',
  'Washington DC, USA',
  'Montevideo, URU',
  'Santiago, CHI'
];
function App() {
  return (
    <MuiThemeProvider> 
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
