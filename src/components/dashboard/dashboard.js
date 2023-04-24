import React from 'react';
import Map from './map/map'
import { useJsApiLoader } from '@react-google-maps/api'
import MainInputs from './main-inputs';

const API_KEY = 'AIzaSyCJaFi85W3kO-kNB1QUsWFCLCNhIZeJTVc'

const defaultCenter = {
  lat: 64,
  lng: 77
};

function Dashboard () {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
    })

  return (
    <div class="main-info">
      {isLoaded ? <Map center={defaultCenter}></Map> : <h2>Your map is out of order</h2>}
    <MainInputs></MainInputs>
      
    </div>
  );
};

export default Dashboard
  