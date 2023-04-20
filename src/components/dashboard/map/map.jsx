import React from 'react';
import styles from'./map.css'
import { GoogleMap, Marker } from '@react-google-maps/api'
import mapTheme from './theme';

const containerStyle = {
  width: '500px',
  height: '300px'
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
  // scrollwheel: false,
  styles: mapTheme
}

function Map ({center}) {

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
          center={center}
          zoom={3}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapSettings}
        >
          <Marker position={center} className='marker'/>

        </GoogleMap>

      </div>
    );
  };
  
  export default Map
  