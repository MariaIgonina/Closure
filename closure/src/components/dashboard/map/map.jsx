import React from 'react';
import styles from'./map.css'
import { GoogleMap, Marker } from '@react-google-maps/api'
import mapTheme from './theme';
import Context from '../../../context';
import { useContext, useEffect } from 'react';
import markers from '../../../img/marker.png'
import markerBig from '../../../img/markerbig.png'
import { height } from '@mui/system';

const containerStyle = {
  minWidth: '500px',
  height: '320px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '10px',
  display: 'flex',
  flexGrow: '0.5'
};

const mapSettings = {
  panControl: true,
  zoomControl: true,
  scaleControll: false,
  clickableIcons: false,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  KeyboardShortcuts: false,
  styles: mapTheme,
  zoomControl: false
  }


function Map () {

  const { mainLat, mainLong, filteredData } = useContext(Context)

  const mapRef = React.useRef(undefined)

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map
  }, [])


  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined
  }, [])

  return (
    <div className={styles.container}>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: mainLat, lng: mainLong}}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapSettings}
      >

        { mainLat.length === 0 ?
        <Marker 
          position={{lat: 41.395100, lng: 2.197412}} 
          className='marker'/> :
        <Marker 
          position={{lat: mainLat, lng: mainLong}} 
          className='marker'
          icon={{ url: markerBig }}
          
          /> }
        { filteredData.length !== 0 && filteredData.map((el) => {
          return (
          <Marker 
          position={{lat: Number(el.lat), lng: Number(el.long)}} 
          className='marker-analog'
          icon={{ url: markers }}
          />
        )}) } 

      </GoogleMap>

    </div>
  );
};

export default Map
