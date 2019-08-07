import React from 'react';
import './App.css';
import Arcgismap from './components/Arcgismap';
import Arcgismapt from './components/Arcgismap2';
import Arcgismaptth from './components/Arcgismap3';
import MapShow from './components/datashow/MapShow';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Arcgismap/> */}
      {/* <Arcgismapt/> */}
      {/* <Arcgismaptth/> */}
      <MapShow />
      </div>
    </Provider>
  );
}

export default App;
